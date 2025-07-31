# Cultura - Cultural AI Assistant

## Overview

Cultura is a full-stack web application that serves as a personal AI companion designed to understand and evolve with users' unique cultural tastes. The application analyzes user preferences across multiple cultural domains (movies, music, fashion, food, and travel) to create personalized recommendations and insights. The system uses a modern React frontend with a Node.js/Express backend, leveraging PostgreSQL for data persistence and integrating with external AI services like Qloo and Perplexity.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (July 31, 2025)

### Major UI/UX Redesign
- Completely redesigned color system with modern Cultura brand colors
- Enhanced landing page with friendly, approachable copy and modern animations
- Redesigned quiz interface to feel like a fun journey rather than a survey
- Added floating animations and glassmorphism effects throughout

### API Integration
- Added Perplexity API integration for AI-powered chat recommendations
- Created .env.example file for API key configuration (PERPLEXITY_API_KEY, QLOO_API_KEY)
- Implemented chat interface with real-time messaging and cultural DNA context

### Feature Enhancements
- Added shareable cultural profile cards with beautiful UI design
- Enhanced chat interface with suggested questions and typing indicators
- Improved quiz flow with better progress indicators and friendly messaging
- Added social sharing functionality for cultural profiles

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom Cultura design tokens
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: React hooks with session storage for temporary data persistence
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions
- **Development**: Hot module replacement via Vite middleware integration

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database (serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle migrations with push-based deployment
- **Session Storage**: Browser sessionStorage for temporary UI state (user quiz progress, enriched profiles)
- **Development Fallback**: In-memory storage implementation for development without database

## Key Components

### Quiz System
- Multi-step cultural preference assessment covering 5 domains
- Visual selection interface with image-based options
- Progress tracking and navigation between quiz steps
- Preference persistence across quiz sessions

### Cultural DNA Analysis
- Taste archetype generation based on user preferences
- Cross-domain insight mapping (e.g., movies to music correlations)
- Cultural trait identification and categorization
- Enriched profile generation with external AI integration

### Chat Interface
- AI-powered conversational interface for personalized recommendations
- Integration with user's cultural DNA for contextual responses
- Real-time messaging with typing indicators
- Cultural recommendation engine

### UI/UX System
- Custom Cultura design system with gradient-based theming
- Responsive design with mobile-first approach
- Glassmorphism effects and animated backgrounds
- Accessible component library via Radix UI

## Data Flow

1. **User Onboarding**: Landing page → Quiz start → Multi-step preference collection
2. **Preference Processing**: Quiz completion → Cultural DNA analysis → Profile enrichment
3. **AI Interaction**: Enriched profile → Chat interface → Personalized recommendations
4. **Data Persistence**: User preferences → PostgreSQL storage → Session management

### Quiz Flow Architecture
```
Landing Page → Quiz Start → Movies → Music → Fashion → Food → Travel → Results → Chat
```

### Data Transformation Pipeline
```
Raw Preferences → Taste Mapping → External AI Processing → Cultural DNA → Enriched Profile
```

## External Dependencies

### Database & Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migration and schema management

### AI & Recommendation Services
- **Qloo API**: Cultural taste intelligence and recommendation engine
- **Perplexity API**: AI-powered conversational responses and insights

### UI & Development
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first styling framework
- **Lucide React**: Icon library
- **Vite**: Development server and build tool
- **Wouter**: Lightweight routing library

### Development & Deployment
- **Replit**: Development environment and hosting platform
- **ESBuild**: Production bundling for server-side code
- **TypeScript**: Type safety across frontend and backend

## Deployment Strategy

### Development Environment
- Vite development server with HMR for frontend
- Express server with middleware integration
- In-memory storage fallback for database-less development
- Environment variable configuration for API keys and database URLs

### Production Deployment
- Frontend: Static assets built via Vite and served by Express
- Backend: Bundled Node.js application via ESBuild
- Database: Automated schema deployment via Drizzle push
- Environment: Production configuration with external service integration

### Build Process
1. Frontend compilation: `vite build` → static assets in `dist/public`
2. Backend bundling: `esbuild` → optimized Node.js bundle in `dist`
3. Database migration: `drizzle-kit push` → schema synchronization
4. Production startup: Single Node.js process serving both frontend and API

### Configuration Management
- Environment-based configuration via `process.env`
- Development vs production mode detection
- Conditional middleware loading (Vite integration only in development)
- Database URL validation and connection management

The application follows a monorepo structure with clear separation between client, server, and shared code, enabling efficient development and deployment while maintaining type safety across the entire stack.