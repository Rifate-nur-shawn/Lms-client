# 🎓 Presync Academy - Education Platform

A modern, full-featured online education platform built with React, offering a comprehensive learning experience for both students and educators. The platform provides course management, interactive learning experiences, and user authentication with a beautiful, responsive design.

![Presync Academy](https://img.shields.io/badge/Presync-Academy-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.7-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

### For Students

- **Course Discovery**: Browse and search through available courses with filtering capabilities
- **Interactive Learning**: Watch video lectures with YouTube integration
- **Progress Tracking**: Monitor learning progress and enrollments
- **User Authentication**: Secure login/signup with Clerk authentication
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Course Reviews**: Rate and review courses
- **Search Functionality**: Advanced search with category filtering

### For Educators

- **Course Management**: Create, edit, and manage courses
- **Content Creation**: Rich text editor for course descriptions
- **Student Analytics**: Track enrolled students and their progress
- **Dashboard**: Comprehensive educator dashboard
- **Earnings Tracking**: Monitor course sales and revenue

### Platform Features

- **Modern UI/UX**: Clean, intuitive interface with TailwindCSS
- **Real-time Updates**: Dynamic content updates
- **SEO Optimized**: Proper meta tags and structure
- **Performance Optimized**: Fast loading with Vite bundler

## 🚀 Tech Stack

### Frontend Framework

- **React 19.1.0** - Modern React with latest features
- **React DOM 19.1.0** - DOM rendering for React
- **Vite 6.3.5** - Next-generation frontend tooling

### Styling & UI

- **TailwindCSS 4.1.7** - Utility-first CSS framework
- **@tailwindcss/vite 4.1.7** - Vite integration for TailwindCSS
- **Custom CSS** - Additional styling with Google Fonts (Outfit, Poppins)

### Routing & Navigation

- **React Router DOM 7.6.0** - Declarative routing for React

### Authentication

- **@clerk/clerk-react 5.31.5** - Complete authentication solution with user management

### Video & Media

- **react-youtube 10.1.0** - YouTube player component for React
- **YouTube API Integration** - For course video thumbnails and playback

### Text Editing

- **Quill 2.0.3** - Rich text editor for course content creation

### UI Components & Utilities

- **react-simple-star-rating 5.1.7** - Star rating component
- **rc-progress 4.0.0** - Progress bar components
- **humanize-duration 3.32.2** - Human-readable duration formatting
- **uniqid 5.4.0** - Unique ID generation

### Development Tools

- **ESLint 9.25.0** - Code linting and quality assurance
- **@eslint/js 9.25.0** - ESLint JavaScript configuration
- **eslint-plugin-react-hooks 5.2.0** - React Hooks ESLint rules
- **eslint-plugin-react-refresh 0.4.19** - React Refresh ESLint rules
- **@vitejs/plugin-react 4.4.1** - Vite React plugin
- **globals 16.0.0** - Global variable definitions

### TypeScript Support

- **@types/react 19.1.2** - TypeScript definitions for React
- **@types/react-dom 19.1.2** - TypeScript definitions for React DOM

## 📦 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Education-plat
   ```

2. **Install root dependencies**

   ```bash
   npm install
   ```

3. **Navigate to client directory and install client dependencies**

   ```bash
   cd client
   npm install
   ```

4. **Environment Configuration**
   Create a `.env` file in the `client` directory:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_CURRENCY=$
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
Education-plat/
├── package.json                    # Root dependencies
├── README.md                       # Project documentation
└── client/                         # Frontend application
    ├── package.json               # Client dependencies
    ├── vite.config.js             # Vite configuration
    ├── eslint.config.js           # ESLint configuration
    ├── index.html                 # HTML template
    ├── public/                    # Static assets
    │   └── favicon.svg
    └── src/                       # Source code
        ├── main.jsx               # Application entry point
        ├── App.jsx                # Main App component
        ├── index.css              # Global styles
        ├── assets/                # Static assets and dummy data
        │   ├── assets.js          # Asset exports and dummy data
        │   ├── *.svg             # Icon assets
        │   ├── *.png             # Image assets
        │   └── rich-text-css.txt # Rich text editor styles
        ├── components/            # Reusable components
        │   ├── student/           # Student-specific components
        │   │   ├── Navbar.jsx
        │   │   ├── Footer.jsx
        │   │   ├── Hero.jsx
        │   │   ├── CourseCard.jsx
        │   │   ├── CoursesSection.jsx
        │   │   ├── SearchBar.jsx
        │   │   ├── TestimonialsSection.jsx
        │   │   ├── CallToAction.jsx
        │   │   ├── Rating.jsx
        │   │   └── Loading.jsx
        │   └── educator/          # Educator-specific components
        │       ├── Navbar.jsx
        │       ├── Footer.jsx
        │       └── Sidebar.jsx
        ├── context/               # React Context
        │   └── AppContext.jsx     # Global state management
        └── pages/                 # Page components
            ├── student/           # Student pages
            │   ├── Home.jsx
            │   ├── CoursesList.jsx
            │   ├── CourseDetails.jsx
            │   ├── MyEnrollments.jsx
            │   └── Player.jsx
            └── educator/          # Educator pages
                ├── Educator.jsx
                ├── Dashboard.jsx
                ├── AddCourse.jsx
                ├── MyCourses.jsx
                └── StudentsEnrolled.jsx
```

## 🔧 Configuration

### Vite Configuration

The project uses Vite with React and TailwindCSS plugins:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### TailwindCSS Configuration

TailwindCSS is configured with the Vite plugin for optimal performance and build optimization.

### ESLint Configuration

Comprehensive ESLint setup with React-specific rules for code quality and consistency.

## 🎨 Design System

### Color Scheme

- Primary: Blue (#2563EB)
- Secondary: Gray tones
- Background: Light gray (#F9FAFB)
- Text: Dark gray (#1F2937)

### Typography

- Primary Font: Outfit
- Secondary Font: Poppins
- Font weights: 100-900

### Components

- Responsive grid layouts
- Card-based design
- Modern button styles
- Interactive hover effects

## 🚦 Available Scripts

### Client Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## 🔐 Authentication

The platform uses Clerk for authentication, providing:

- Email/password authentication
- Social login options
- User management
- Protected routes
- User session management

## 📱 Responsive Design

The platform is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 Key Features Implementation

### Course Management

- Dynamic course loading from dummy data
- Course filtering and search
- Category-based organization
- Rating and review system

### Video Integration

- YouTube video embedding
- Automatic thumbnail generation
- Video progress tracking
- Lecture organization by chapters

### User Experience

- Smooth navigation with React Router
- Loading states and error handling
- Interactive UI components
- Search functionality with real-time filtering

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the lightning-fast build tool
- TailwindCSS for the utility-first CSS framework
- Clerk for authentication services
- All contributors and supporters

## 📞 Support

For support and questions, please contact [your-email@example.com]

---

**Built with ❤️ using React, Vite, and TailwindCSS**
