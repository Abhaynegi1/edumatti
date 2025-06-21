import React, { useState, useMemo } from 'react';

// Import components
import { 
  Header, 
  HeroSection, 
  FilterSidebar, 
  SchoolList, 
  Footer 
} from './components';

// Import data and utilities
import { schools } from './data/schoolsData';
import { filterSchools, getDefaultFilters } from './utils/filterUtils';

/**
 * SchoolFinderWebsite Component
 * 
 * Main application component that orchestrates the school finder website.
 * This component manages the overall state and coordinates between different components.
 * 
 * @component
 * @returns {JSX.Element} The main school finder website
 */
const SchoolFinderWebsite = () => {
  // State management for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Dehradun');
  const [filters, setFilters] = useState(getDefaultFilters());

  // Filter schools based on search query, location, and filters
  const filteredSchools = useMemo(() => {
    return filterSchools(schools, searchQuery, selectedLocation, filters);
  }, [searchQuery, selectedLocation, filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component */}
      <Header />

      {/* Hero Section with Search */}
      <HeroSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <FilterSidebar 
            filters={filters}
            setFilters={setFilters}
          />

          {/* School Listings */}
          <SchoolList 
            schools={filteredSchools}
            selectedLocation={selectedLocation}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SchoolFinderWebsite;