import React, { useState } from 'react';
import { 
  DollarSign, 
  Home, 
  Users, 
  BookOpen, 
  Star, 
  Filter,
  X,
  HelpCircle,
  MessageCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

/**
 * FilterSidebar Component with Expandable Categories
 * 
 * Displays the sidebar with various filter options for refining school search results.
 * Each category can be expanded/collapsed to show filter options.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.filters - Current filter state object
 * @param {Function} props.setFilters - Function to update filter state
 * @returns {JSX.Element} The enhanced expandable filter sidebar component
 */
const FilterSidebar = ({ filters = {
  feeRange: '',
  schoolType: '',
  gender: '',
  curriculum: '',
  rating: ''
}, setFilters = () => {} }) => {
  // State to track which categories are expanded
  const [expandedCategories, setExpandedCategories] = useState({
    feeRange: false,
    schoolType: false,
    gender: false,
    curriculum: false,
    rating: false
  });

  /**
   * Toggles the expanded state of a category
   * @param {string} category - The category to toggle
   */
  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  /**
   * Updates a specific filter value
   * @param {string} filterKey - The key of the filter to update
   * @param {string} value - The new value for the filter
   */
  const handleFilterChange = (filterKey, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterKey]: value
    }));
  };

  /**
   * Clears all filters and resets to default state
   */
  const clearAllFilters = () => {
    setFilters({
      feeRange: '',
      schoolType: '',
      gender: '',
      curriculum: '',
      rating: ''
    });
  };

  /**
   * Checks if any filters are currently active
   * @returns {boolean} True if any filter is active
   */
  const hasActiveFilters = () => {
    return Object.values(filters).some(value => value !== '');
  };

  /**
   * Gets the display text for active filter value
   */
  const getActiveFilterText = (category, value) => {
    if (!value) return '';
    
    switch (category) {
      case 'feeRange':
        return value === 'low' ? 'Under ₹3L' : 
               value === 'medium' ? '₹3L - ₹5L' : 'Above ₹5L';
      case 'rating':
        return `${value}+ Stars`;
      default:
        return value;
    }
  };

  /**
   * Visual button component for filter options
   */
  const FilterButton = ({ isActive, onClick, children, icon: Icon }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
        isActive
          ? 'bg-blue-500 text-white shadow-md transform scale-105'
          : 'bg-gray-50 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:scale-105'
      }`}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );

  /**
   * Expandable category component
   */
  const FilterCategory = ({ 
    category, 
    icon: Icon, 
    title, 
    children, 
    hasActiveFilter 
  }) => {
    const isExpanded = expandedCategories[category];
    const activeValue = filters[category];
    
    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <button
          onClick={() => toggleCategory(category)}
          className={`w-full px-4 py-3 flex items-center justify-between transition-all duration-200 ${
            hasActiveFilter 
              ? 'bg-blue-50 border-blue-200' 
              : 'bg-gray-50 hover:bg-gray-100'
          }`}
        >
          <div className="flex items-center gap-3">
            <Icon size={18} className={hasActiveFilter ? 'text-blue-600' : 'text-gray-600'} />
            <div className="text-left">
              <div className={`text-sm font-medium ${hasActiveFilter ? 'text-blue-800' : 'text-gray-800'}`}>
                {title}
              </div>
              {hasActiveFilter && (
                <div className="text-xs text-blue-600 mt-0.5">
                  {getActiveFilterText(category, activeValue)}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {hasActiveFilter && (
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            )}
            {isExpanded ? (
              <ChevronUp size={16} className="text-gray-500" />
            ) : (
              <ChevronDown size={16} className="text-gray-500" />
            )}
          </div>
        </button>
        
        {isExpanded && (
          <div className="p-4 bg-white border-t border-gray-100 animate-in slide-in-from-top-2 duration-200">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="lg:w-1/4">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-blue-500" />
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          </div>
          {hasActiveFilters() && (
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition-colors"
            >
              <X size={14} />
              Clear All
            </button>
          )}
        </div>
        
        <div className="space-y-3">
          {/* Fee Range Filter */}
          <FilterCategory
            category="feeRange"
            icon={DollarSign}
            title="Fee Range"
            hasActiveFilter={!!filters.feeRange}
          >
            <div className="grid grid-cols-1 gap-2">
              <FilterButton
                isActive={filters.feeRange === 'low'}
                onClick={() => handleFilterChange('feeRange', filters.feeRange === 'low' ? '' : 'low')}
              >
                Under ₹3L
              </FilterButton>
              <FilterButton
                isActive={filters.feeRange === 'medium'}
                onClick={() => handleFilterChange('feeRange', filters.feeRange === 'medium' ? '' : 'medium')}
              >
                ₹3L - ₹5L
              </FilterButton>
              <FilterButton
                isActive={filters.feeRange === 'high'}
                onClick={() => handleFilterChange('feeRange', filters.feeRange === 'high' ? '' : 'high')}
              >
                Above ₹5L
              </FilterButton>
            </div>
          </FilterCategory>

          {/* School Type Filter */}
          <FilterCategory
            category="schoolType"
            icon={Home}
            title="School Type"
            hasActiveFilter={!!filters.schoolType}
          >
            <div className="grid grid-cols-1 gap-2">
              <FilterButton
                isActive={filters.schoolType === 'Boarding'}
                onClick={() => handleFilterChange('schoolType', filters.schoolType === 'Boarding' ? '' : 'Boarding')}
              >
                Boarding
              </FilterButton>
              <FilterButton
                isActive={filters.schoolType === 'Day Boarding'}
                onClick={() => handleFilterChange('schoolType', filters.schoolType === 'Day Boarding' ? '' : 'Day Boarding')}
              >
                Day Boarding
              </FilterButton>
              <FilterButton
                isActive={filters.schoolType === 'Day School'}
                onClick={() => handleFilterChange('schoolType', filters.schoolType === 'Day School' ? '' : 'Day School')}
              >
                Day School
              </FilterButton>
            </div>
          </FilterCategory>

          {/* Gender Filter */}
          <FilterCategory
            category="gender"
            icon={Users}
            title="Gender"
            hasActiveFilter={!!filters.gender}
          >
            <div className="grid grid-cols-1 gap-2">
              <FilterButton
                isActive={filters.gender === 'Co-ed'}
                onClick={() => handleFilterChange('gender', filters.gender === 'Co-ed' ? '' : 'Co-ed')}
              >
                Co-ed
              </FilterButton>
              <FilterButton
                isActive={filters.gender === 'Boys'}
                onClick={() => handleFilterChange('gender', filters.gender === 'Boys' ? '' : 'Boys')}
              >
                Boys Only
              </FilterButton>
              <FilterButton
                isActive={filters.gender === 'Girls'}
                onClick={() => handleFilterChange('gender', filters.gender === 'Girls' ? '' : 'Girls')}
              >
                Girls Only
              </FilterButton>
            </div>
          </FilterCategory>

          {/* Curriculum Filter */}
          <FilterCategory
            category="curriculum"
            icon={BookOpen}
            title="Curriculum"
            hasActiveFilter={!!filters.curriculum}
          >
            <div className="grid grid-cols-2 gap-2">
              <FilterButton
                isActive={filters.curriculum === 'CBSE'}
                onClick={() => handleFilterChange('curriculum', filters.curriculum === 'CBSE' ? '' : 'CBSE')}
              >
                CBSE
              </FilterButton>
              <FilterButton
                isActive={filters.curriculum === 'IB'}
                onClick={() => handleFilterChange('curriculum', filters.curriculum === 'IB' ? '' : 'IB')}
              >
                IB
              </FilterButton>
              <FilterButton
                isActive={filters.curriculum === 'Cambridge'}
                onClick={() => handleFilterChange('curriculum', filters.curriculum === 'Cambridge' ? '' : 'Cambridge')}
              >
                Cambridge
              </FilterButton>
              <FilterButton
                isActive={filters.curriculum === 'ICSE'}
                onClick={() => handleFilterChange('curriculum', filters.curriculum === 'ICSE' ? '' : 'ICSE')}
              >
                ICSE
              </FilterButton>
            </div>
          </FilterCategory>

          {/* Rating Filter */}
          <FilterCategory
            category="rating"
            icon={Star}
            title="Minimum Rating"
            hasActiveFilter={!!filters.rating}
          >
            <div className="grid grid-cols-1 gap-2">
              <FilterButton
                isActive={filters.rating === '4'}
                onClick={() => handleFilterChange('rating', filters.rating === '4' ? '' : '4')}
                icon={Star}
              >
                4+ Stars
              </FilterButton>
              <FilterButton
                isActive={filters.rating === '3'}
                onClick={() => handleFilterChange('rating', filters.rating === '3' ? '' : '3')}
                icon={Star}
              >
                3+ Stars
              </FilterButton>
              <FilterButton
                isActive={filters.rating === '2'}
                onClick={() => handleFilterChange('rating', filters.rating === '2' ? '' : '2')}
                icon={Star}
              >
                2+ Stars
              </FilterButton>
            </div>
          </FilterCategory>
        </div>

        {/* Active Filters Summary */}
        {hasActiveFilters() && (
          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
            <h4 className="text-sm font-semibold text-blue-800 mb-3 flex items-center gap-2">
              <Filter size={14} />
              Active Filters
            </h4>
            <div className="flex flex-wrap gap-2">
              {filters.feeRange && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  <DollarSign size={12} />
                  {getActiveFilterText('feeRange', filters.feeRange)}
                </span>
              )}
              {filters.schoolType && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  <Home size={12} />
                  {filters.schoolType}
                </span>
              )}
              {filters.gender && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  <Users size={12} />
                  {filters.gender}
                </span>
              )}
              {filters.curriculum && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  <BookOpen size={12} />
                  {filters.curriculum}
                </span>
              )}
              {filters.rating && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                  <Star size={12} />
                  {getActiveFilterText('rating', filters.rating)}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-6 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle size={18} />
            <h4 className="font-semibold">Need Help?</h4>
          </div>
          <p className="text-sm text-blue-100 mb-4">
            Get personalized school recommendations from our experts
          </p>
          <button className="w-full bg-white text-blue-600 py-2.5 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200 font-medium flex items-center justify-center gap-2 transform hover:scale-105">
            <MessageCircle size={16} />
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;