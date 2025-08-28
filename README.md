# 🚀 NASA API Project

A modern React project that consumes NASA APIs to display real-time astronomical data.

## ✨ Features

- **APOD (Astronomy Picture of the Day)**: Daily astronomical image with detailed explanation
- **NEO (Near-Earth Objects)**: Near-Earth asteroid data with velocity and size information
- **Mars Rover Photos**: Curiosity rover photos on Mars with date filters

## 🛠️ Technologies Used

- **React 19** - JavaScript library for interfaces
- **Vite** - Build tool and dev server
- **React Router DOM** - Application routing
- **Tailwind CSS** - Utility CSS framework
- **Lucide React** - Modern icons
- **NASA APIs** - Official astronomical data

## 🚀 How to Run

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd nasa-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure NASA API Key**

   - Create a `.env` file in the project root
   - Add your API key: `VITE_API_KEY=your_key_here`
   - Get your free key at: https://api.nasa.gov/

4. **Run the project**
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header/         # Header with navigation
│   ├── Footer/         # Footer with social links
│   ├── Input/          # Date input component
│   ├── SubTitle/       # Subtitle component
│   ├── LoadingSpinner/ # Loading spinner
│   ├── ErrorMessage/   # Error messages
│   └── LazyImage/      # Image with lazy loading
├── pages/              # Application pages
│   ├── Apod.jsx        # Daily image page
│   ├── Neo.jsx         # Asteroids page
│   ├── Rover.jsx       # Mars photos page
│   └── ErrorPage.jsx   # 404 error page
├── services/           # API services
│   ├── apiApod.js      # Daily image API
│   ├── apiNeo.js       # Asteroids API
│   └── apiRover.js     # Rover API
├── hooks/              # Custom hooks
│   └── useApi.js       # API state management hook
├── config/             # Configurations
│   └── api.js          # API configuration
├── utils/              # Utilities
│   └── formatters.js   # Data formatting functions
└── assets/             # Static resources
```

## 🔧 Implemented Improvements

### Performance

- ✅ Lazy loading for images
- ✅ API request timeout
- ✅ Component memoization
- ✅ Optimized re-renders

### UX/UI

- ✅ Loading states with spinners
- ✅ Error handling with retry
- ✅ Form validation
- ✅ Animations and transitions
- ✅ Responsive design

### Code

- ✅ Reusable custom hooks
- ✅ Centralized configuration
- ✅ Robust error handling
- ✅ Modular components
- ✅ Data formatting utilities

## 📱 Responsiveness

The project is fully responsive and works on:

- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktops

## 🌟 APIs Used

- **APOD API**: Daily astronomical images
- **NEO API**: Near-Earth object data
- **Mars Rover API**: Curiosity rover photos

## 📄 License

This project is open source and available under the MIT license.

## 👨‍💻 Developer

**Thiago Martins**

- GitHub: [@Thiago-Martins05](https://github.com/Thiago-Martins05)
- LinkedIn: [LinkedIn Profile](https://linkedin.com/)
- Instagram: [@your_instagram](https://instagram.com/)
