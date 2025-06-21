import React, { useState, useEffect } from 'react';
import SchoolCard from './SchoolCard';
import { sortSchools } from '../utils/filterUtils';

/**
 * SchoolList Component
 * 
 * Displays the list of filtered schools with pagination controls and sorting options.
 * This component handles the rendering of all school cards and pagination.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.schools - Array of school objects to display
 * @param {string} props.selectedLocation - Currently selected location for display
 * @returns {JSX.Element} The school list component with pagination
 */
const SchoolList = ({ schools, selectedLocation }) => {
  const [sortBy, setSortBy] = useState('rating');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  
  const SCHOOLS_PER_PAGE = 12;

  // Sort schools based on current sort criteria
  const sortedSchools = sortSchools(schools, sortBy, sortOrder);
  
  // Calculate pagination values
  const totalPages = Math.ceil(sortedSchools.length / SCHOOLS_PER_PAGE);
  const startIndex = (currentPage - 1) * SCHOOLS_PER_PAGE;
  const endIndex = startIndex + SCHOOLS_PER_PAGE;
  const currentSchools = sortedSchools.slice(startIndex, endIndex);

  // Reset to first page when schools or sorting changes
  useEffect(() => {
    setCurrentPage(1);
  }, [schools, sortBy, sortOrder]);

  /**
   * Handles sorting change
   * @param {string} newSortBy - New sort criteria
   */
  const handleSortChange = (newSortBy) => {
    if (sortBy === newSortBy) {
      // Toggle sort order if same criteria
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set new sort criteria with default desc order
      setSortBy(newSortBy);
      setSortOrder('desc');
    }
  };

  /**
   * Handles page change
   * @param {number} page - Page number to navigate to
   */
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top when changing pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  /**
   * Gets the display name for sort options
   * @param {string} sortKey - Sort key
   * @returns {string} Display name
   */
  const getSortDisplayName = (sortKey) => {
    const displayNames = {
      'rating': 'Rating',
      'name': 'Name',
      'reviews': 'Reviews',
      'established': 'Established',
      'feeRange': 'Fee Range'
    };
    return displayNames[sortKey] || sortKey;
  };

  /**
   * Generates page numbers for pagination
   * @returns {Array} Array of page numbers to display
   */
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages around current page
      let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      // Adjust start if we're near the end
      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  return (
    <div className="lg:w-3/4">
      {/* Results Header */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              List of {schools.length} Best Schools in {selectedLocation}
            </h2>
            <p className="text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, sortedSchools.length)} of {sortedSchools.length} results
              {currentPage > 1 && ` (Page ${currentPage} of ${totalPages})`}
            </p>
          </div>
          
          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="rating">Rating</option>
              <option value="name">Name</option>
              <option value="reviews">Reviews</option>
              <option value="established">Established</option>
              <option value="feeRange">Fee Range</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
              title={`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
            >
              {sortOrder === 'asc' ? '↑' : '↓'}
            </button>
          </div>
        </div>
      </div>

      {/* No Results Message */}
      {sortedSchools.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-2">No schools found</div>
          <p className="text-gray-400">
            Try adjusting your search criteria or filters to find more schools.
          </p>
        </div>
      )}

      {/* School Cards List */}
      <div className="space-y-6">
        {currentSchools.map((school) => (
          <SchoolCard key={school.id} school={school} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center mt-8 space-y-4">
          {/* Page Numbers */}
          <div className="flex flex-wrap justify-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === 1
                  ? 'text-gray-400 border border-gray-300 cursor-not-allowed'
                  : 'text-blue-600 border border-blue-600 hover:bg-blue-50'
              }`}
            >
              Previous
            </button>

            {/* First page if not visible */}
            {getPageNumbers()[0] > 1 && (
              <>
                <button
                  onClick={() => handlePageChange(1)}
                  className="px-3 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
                >
                  1
                </button>
                {getPageNumbers()[0] > 2 && (
                  <span className="px-3 py-2 text-gray-500">...</span>
                )}
              </>
            )}

            {/* Page Numbers */}
            {getPageNumbers().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 rounded transition-colors ${
                  page === currentPage
                    ? 'bg-blue-600 text-white'
                    : 'text-blue-600 border border-blue-600 hover:bg-blue-50'
                }`}
              >
                {page}
              </button>
            ))}

            {/* Last page if not visible */}
            {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
              <>
                {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
                  <span className="px-3 py-2 text-gray-500">...</span>
                )}
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className="px-3 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors"
                >
                  {totalPages}
                </button>
              </>
            )}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded transition-colors ${
                currentPage === totalPages
                  ? 'text-gray-400 border border-gray-300 cursor-not-allowed'
                  : 'text-blue-600 border border-blue-600 hover:bg-blue-50'
              }`}
            >
              Next
            </button>
          </div>

          {/* Page Info */}
          <div className="text-sm text-gray-600">
            Page {currentPage} of {totalPages} ({sortedSchools.length} total results)
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolList;