import React from 'react';
import { Search, MapPin, X } from 'lucide-react';

/**
 * HeroSection Component
 * 
 * Displays the main hero section with search functionality for finding schools.
 * Contains the main search bar and location selector for the school finder.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.searchQuery - Current search query value
 * @param {Function} props.setSearchQuery - Function to update search query
 * @param {string} props.selectedLocation - Currently selected location
 * @param {Function} props.setSelectedLocation - Function to update selected location
 * @returns {JSX.Element} The hero section with search functionality
 */
const HeroSection = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedLocation, 
  setSelectedLocation 
}) => {
  /**
   * Clears the search query
   */
  const clearSearch = () => {
    setSearchQuery('');
  };

  /**
   * Handles search form submission
   * @param {Event} e - Form submission event
   */
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Search functionality is already handled by the input onChange
    // This can be extended for additional search logic
  };

  return (
    <section className="text-white py-16" style={{ backgroundColor: 'rgb(59, 130, 246)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Header Content */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Find Best School for you</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Discover top-rated schools in your area with our comprehensive search platform
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearchSubmit} className="bg-white rounded-lg p-4 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search schools..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-10 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-3 top-3 h-5 w-5 text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Location Selector */}
                <div className="flex-1">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">All Locations</option>
                      <option value="Dehradun">Dehradun</option>
                      <option value="Mussoorie">Mussoorie</option>
                      <option value="Shimla">Shimla</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="India">India</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Faridabad">Faridabad</option>
                      <option value="Nainital">Nainital</option>
                      <option value="Varanasi">Varanasi</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Udaipur">Udaipur</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Panchgani">Panchgani</option>
                      <option value="Sikar">Sikar</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Pune">Pune</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Darjeeling">Darjeeling</option>
                      <option value="Ajmer">Ajmer</option>
                    </select>
                  </div>
                </div>
                
                {/* Search Button */}
                <button 
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
                >
                  Search
                </button>
              </div>
              
              {/* Search Tips */}
              {(searchQuery || selectedLocation) && (
                <div className="mt-3 text-sm text-gray-600 text-center">
                  <p>
                    {searchQuery && `Searching for: "${searchQuery}"`}
                    {searchQuery && selectedLocation && ' in '}
                    {selectedLocation && `${selectedLocation}`}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;