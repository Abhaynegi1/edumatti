# School Finder Website

A comprehensive React application for finding and comparing schools with advanced filtering and search capabilities.

## 🏗️ Project Structure

The application has been refactored into a modular, well-documented structure for better maintainability and scalability.

```
src/
├── components/           # Reusable UI components
│   ├── Header.jsx       # Navigation header component
│   ├── HeroSection.jsx  # Hero section with search functionality
│   ├── FilterSidebar.jsx # Sidebar with filter options
│   ├── SchoolCard.jsx   # Individual school display card
│   ├── SchoolList.jsx   # List of schools with pagination
│   └── Footer.jsx       # Footer component
├── data/                # Data management
│   └── schoolsData.js   # Mock school data and constants
├── utils/               # Utility functions
│   └── filterUtils.js   # Filtering and sorting utilities
├── App.jsx              # Main application component
└── main.jsx            # Application entry point
```

## 📋 Components Documentation

### Header Component (`components/Header.jsx`)
- **Purpose**: Displays the main navigation header with logo, navigation links, and authentication buttons
- **Features**: Responsive navigation, login/signup buttons
- **Props**: None (self-contained)

### HeroSection Component (`components/HeroSection.jsx`)
- **Purpose**: Main hero section with search functionality for finding schools
- **Features**: Search bar, location selector, call-to-action
- **Props**:
  - `searchQuery`: Current search query value
  - `setSearchQuery`: Function to update search query
  - `selectedLocation`: Currently selected location
  - `setSelectedLocation`: Function to update selected location

### FilterSidebar Component (`components/FilterSidebar.jsx`)
- **Purpose**: Sidebar with various filter options for refining school search results
- **Features**: Fee range, school type, gender, curriculum, and rating filters
- **Props**:
  - `filters`: Current filter state object
  - `setFilters`: Function to update filter state

### SchoolCard Component (`components/SchoolCard.jsx`)
- **Purpose**: Displays detailed information about a single school
- **Features**: School images, details, amenities, and action buttons
- **Props**:
  - `school`: School data object containing all school information

### SchoolList Component (`components/SchoolList.jsx`)
- **Purpose**: Displays the list of filtered schools with pagination controls
- **Features**: Results header, school cards list, pagination
- **Props**:
  - `schools`: Array of school objects to display
  - `selectedLocation`: Currently selected location for display

### Footer Component (`components/Footer.jsx`)
- **Purpose**: Website footer with company information, quick links, and contact details
- **Features**: Company info, navigation links, contact information, top cities
- **Props**: None (self-contained)

## 📊 Data Management

### Schools Data (`data/schoolsData.js`)
Contains all mock data for the application:
- **schools**: Array of school objects with comprehensive information
- **availableLocations**: Array of available locations for search
- **schoolTypes**: Available school types for filtering
- **genderOptions**: Available gender options for filtering
- **curriculumOptions**: Available curriculum options for filtering

### Filter Utilities (`utils/filterUtils.js`)
Utility functions for data processing:
- **filterSchools()**: Filters schools based on search criteria and filters
- **sortSchools()**: Sorts schools by specified criteria
- **getUniqueValues()**: Extracts unique values from school data
- **formatFeeRange()**: Formats fee range for display
- **validateFilters()**: Validates filter object structure

## 🚀 Key Features

### Search & Filtering
- **Text Search**: Search schools by name or location
- **Location Filter**: Filter by specific cities
- **Advanced Filters**: Fee range, school type, gender, curriculum, rating
- **Real-time Filtering**: Instant results as you type or change filters

### School Information
- **Comprehensive Details**: Name, location, rating, reviews, fees
- **Visual Content**: Multiple school images with gallery view
- **Amenities**: Visual representation of available facilities
- **Action Buttons**: Get details and enquiry options

### User Experience
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with smooth transitions
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Performance**: Optimized with React.memo and useMemo

## 🛠️ Technical Implementation

### State Management
- **Local State**: Uses React hooks for component-level state
- **Props Drilling**: Minimal and well-structured prop passing
- **Memoization**: Optimized re-renders with useMemo

### Code Quality
- **JSDoc Documentation**: Comprehensive documentation for all components and functions
- **Modular Architecture**: Separated concerns with dedicated files
- **Reusable Components**: Highly reusable and configurable components
- **Type Safety**: Proper prop validation and error handling

### Performance Optimizations
- **Component Splitting**: Lazy loading ready structure
- **Memoization**: Prevents unnecessary re-renders
- **Efficient Filtering**: Optimized filter algorithms
- **Image Optimization**: Proper image handling and alt texts

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Consistent design system
- **Hover Effects**: Interactive elements with smooth transitions
- **Color Scheme**: Professional blue-based theme

## 🔧 Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Running the Application
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

## 📝 Future Enhancements

- [ ] Add sorting functionality
- [ ] Implement pagination with real data
- [ ] Add school comparison feature
- [ ] Integrate with backend API
- [ ] Add user authentication
- [ ] Implement favorites/bookmarks
- [ ] Add school reviews and ratings
- [ ] Mobile app version

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add proper documentation
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
