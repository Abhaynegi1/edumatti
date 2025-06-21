import React from 'react';
import { MapPin, Star, Wifi, Car, Utensils, BookOpen, Trophy, Heart } from 'lucide-react';

/**
 * SchoolCard Component
 * 
 * Displays detailed information about a single school with a modern, minimalistic design.
 * This component is used to render each school in the search results list.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.school - School data object containing all school information
 * @returns {JSX.Element} The school card component
 */
const SchoolCard = ({ school }) => {
  /**
   * Returns the appropriate icon for each amenity
   * @param {string} amenity - The amenity name
   * @returns {JSX.Element|null} The icon component or null if not found
   */
  const getAmenityIcon = (amenity) => {
    const icons = {
      'Wifi': <Wifi className="w-3.5 h-3.5" />,
      'Transport': <Car className="w-3.5 h-3.5" />,
      'Cafeteria': <Utensils className="w-3.5 h-3.5" />,
      'Library': <BookOpen className="w-3.5 h-3.5" />,
      'Sports': <Trophy className="w-3.5 h-3.5" />,
      'Medical': <Heart className="w-3.5 h-3.5" />
    };
    return icons[amenity] || null;
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300 group">
      <div className="flex flex-col lg:flex-row">
        {/* School Images Section */}
        <div className="lg:w-2/5 relative">
          <div className="relative overflow-hidden">
            {/* Main Image */}
            <img 
              src={school.images[0]} 
              alt={school.name}
              className="w-full h-48 lg:h-44 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Rating Badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1 shadow-sm">
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-gray-900">{school.rating}</span>
            </div>

            {/* Thumbnail Images Overlay */}
            <div className="absolute bottom-4 left-4 flex gap-1">
              {school.images.slice(1, 4).map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`${school.name} ${idx + 2}`}
                  className="w-12 h-12 object-cover rounded-lg border-2 border-white/80 backdrop-blur-sm"
                />
              ))}
              {school.images.length > 4 && (
                <div className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-lg border-2 border-white/80 flex items-center justify-center">
                  <span className="text-white text-xs font-medium">+{school.images.length - 4}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* School Details Section */}
        <div className="lg:w-3/5 p-4 lg:p-6">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1.5 leading-tight">{school.name}</h3>
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="w-4 h-4 mr-1.5" />
              <span>{school.location}</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full mx-3"></div>
              <span>Est. {school.established}</span>
              <div className="w-1 h-1 bg-gray-300 rounded-full mx-3"></div>
              <span className="text-gray-400">({school.reviews} reviews)</span>
            </div>
          </div>

          {/* Key Information */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="space-y-2">
              <div>
                <span className="text-xs uppercase tracking-wide text-gray-400 font-medium">Type</span>
                <p className="text-gray-900 font-medium mt-0.5">{school.type}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wide text-gray-400 font-medium">Curriculum</span>
                <p className="text-gray-900 font-medium mt-0.5">{school.curriculum}</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-xs uppercase tracking-wide text-gray-400 font-medium">Gender</span>
                <p className="text-gray-900 font-medium mt-0.5">{school.gender}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wide text-gray-400 font-medium">Fee Range</span>
                <p className="font-semibold mt-0.5" style={{ color: 'rgb(7, 204, 17)' }}>{school.feeRange}</p>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="mb-5">
            <div className="flex flex-wrap gap-1.5">
              {school.amenities.map((amenity, idx) => (
                <div 
                  key={idx} 
                  className="inline-flex items-center bg-gray-50 hover:bg-gray-100 px-2.5 py-1.5 rounded-full text-xs text-gray-700 transition-colors"
                >
                  <span className="text-gray-500 mr-1.5">
                    {getAmenityIcon(amenity)}
                  </span>
                  <span className="font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              className="flex-1 py-2.5 px-5 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: 'rgb(59, 130, 246)' }}
            >
              Get Details
            </button>
            <button 
              className="flex-1 py-2.5 px-5 rounded-xl font-semibold border-2 text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;