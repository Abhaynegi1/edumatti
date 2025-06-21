/**
 * Filter Utilities
 * 
 * This file contains utility functions for filtering and processing school data.
 * These functions help in filtering schools based on various criteria like search query,
 * location, filters, etc.
 * 
 * @module filterUtils
 */

/**
 * Filters schools based on search query, location, and various filter criteria
 * 
 * @param {Array} schools - Array of school objects to filter
 * @param {string} searchQuery - Search term to filter schools by name or location
 * @param {string} selectedLocation - Selected location to filter schools
 * @param {Object} filters - Object containing various filter criteria
 * @param {string} filters.feeRange - Fee range filter
 * @param {string} filters.schoolType - School type filter
 * @param {string} filters.gender - Gender filter
 * @param {string} filters.curriculum - Curriculum filter
 * @param {string} filters.rating - Minimum rating filter
 * @returns {Array} Filtered array of schools
 */
export const filterSchools = (schools, searchQuery, selectedLocation, filters) => {
  return schools.filter(school => {
    // Search query filter - matches school name or location
    const matchesSearch = searchQuery === '' || 
                        school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        school.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Location filter
    const matchesLocation = selectedLocation === '' || school.location === selectedLocation;
    
    // Fee range filter
    const matchesFeeRange = filters.feeRange === '' || checkFeeRange(school.feeRange, filters.feeRange);
    
    // School type filter
    const matchesType = filters.schoolType === '' || school.type === filters.schoolType;
    
    // Gender filter
    const matchesGender = filters.gender === '' || school.gender === filters.gender;
    
    // Curriculum filter
    const matchesCurriculum = filters.curriculum === '' || school.curriculum === filters.curriculum;
    
    // Rating filter
    const matchesRating = filters.rating === '' || school.rating >= parseFloat(filters.rating);

    // Return true only if all filters match
    return matchesSearch && matchesLocation && matchesFeeRange && matchesType && 
           matchesGender && matchesCurriculum && matchesRating;
  });
};

/**
 * Checks if a school's fee range matches the selected filter
 * 
 * @param {string} schoolFeeRange - School's fee range string
 * @param {string} filterFeeRange - Selected fee range filter
 * @returns {boolean} True if fee range matches
 */
const checkFeeRange = (schoolFeeRange, filterFeeRange) => {
  // Extract numeric values from fee range string (e.g., "₹6,50,000 - ₹7,00,000")
  const feeMatch = schoolFeeRange.match(/₹([\d,]+)/g);
  if (!feeMatch || feeMatch.length < 2) return false;
  
  const minFee = parseInt(feeMatch[0].replace(/[₹,]/g, ''));
  const maxFee = parseInt(feeMatch[1].replace(/[₹,]/g, ''));
  const avgFee = (minFee + maxFee) / 2;
  
  switch (filterFeeRange) {
    case 'low':
      return avgFee < 300000; // Under ₹3,00,000
    case 'medium':
      return avgFee >= 300000 && avgFee <= 500000; // ₹3,00,000 - ₹5,00,000
    case 'high':
      return avgFee > 500000; // Above ₹5,00,000
    default:
      return true;
  }
};

/**
 * Sorts schools by a specified criteria
 * 
 * @param {Array} schools - Array of school objects to sort
 * @param {string} sortBy - Criteria to sort by ('rating', 'name', 'feeRange', 'reviews')
 * @param {string} sortOrder - Sort order ('asc' or 'desc')
 * @returns {Array} Sorted array of schools
 */
export const sortSchools = (schools, sortBy = 'rating', sortOrder = 'desc') => {
  const sortedSchools = [...schools];
  
  sortedSchools.sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case 'rating':
        aValue = a.rating;
        bValue = b.rating;
        break;
      case 'name':
        aValue = a.name.toLowerCase();
        bValue = b.name.toLowerCase();
        break;
      case 'reviews':
        aValue = a.reviews;
        bValue = b.reviews;
        break;
      case 'established':
        aValue = a.established;
        bValue = b.established;
        break;
      default:
        aValue = a.rating;
        bValue = b.rating;
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });
  
  return sortedSchools;
};

/**
 * Gets unique values for a specific field from schools array
 * 
 * @param {Array} schools - Array of school objects
 * @param {string} field - Field name to extract unique values from
 * @returns {Array} Array of unique values
 */
export const getUniqueValues = (schools, field) => {
  const values = schools.map(school => school[field]);
  return [...new Set(values)].sort();
};

/**
 * Formats fee range for display
 * 
 * @param {string} feeRange - Raw fee range string
 * @returns {string} Formatted fee range
 */
export const formatFeeRange = (feeRange) => {
  // This function can be expanded to handle different fee range formats
  return feeRange;
};

/**
 * Validates filter object
 * 
 * @param {Object} filters - Filter object to validate
 * @returns {boolean} True if filters are valid
 */
export const validateFilters = (filters) => {
  const validFilterKeys = ['feeRange', 'schoolType', 'gender', 'curriculum', 'rating'];
  return validFilterKeys.every(key => key in filters);
};

/**
 * Resets all filters to their default empty state
 * 
 * @returns {Object} Default filter state
 */
export const getDefaultFilters = () => ({
  feeRange: '',
  schoolType: '',
  gender: '',
  curriculum: '',
  rating: ''
});

/**
 * Counts schools by filter criteria for analytics
 * 
 * @param {Array} schools - Array of school objects
 * @param {string} field - Field to count by
 * @returns {Object} Count of schools by field value
 */
export const getFilterCounts = (schools, field) => {
  return schools.reduce((acc, school) => {
    const value = school[field];
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
};

/**
 * Gets the average fee from a fee range string
 * 
 * @param {string} feeRange - Fee range string
 * @returns {number} Average fee amount
 */
export const getAverageFee = (feeRange) => {
  const feeMatch = feeRange.match(/₹([\d,]+)/g);
  if (!feeMatch || feeMatch.length < 2) return 0;
  
  const minFee = parseInt(feeMatch[0].replace(/[₹,]/g, ''));
  const maxFee = parseInt(feeMatch[1].replace(/[₹,]/g, ''));
  return (minFee + maxFee) / 2;
}; 