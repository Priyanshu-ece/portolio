# Overview

This is a modern full-stack portfolio application built with React frontend and Express backend. The application showcases a developer's professional profile including experience, education, projects, and contact information. It features a sleek design with glassmorphism effects, gradient themes, and smooth animations.

The application includes multiple pages (Home, About, Experience, Education, Projects, Contact) with a contact form that stores messages in a database. It's designed as a personal portfolio website with modern UI components and responsive design.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system including gradient themes and glassmorphism effects
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized builds

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful API endpoints for contact form submission
- **Validation**: Zod schemas for request/response validation
- **Storage**: Pluggable storage interface with in-memory implementation (MemStorage)
- **Development**: Hot reload with Vite middleware integration

## Database Schema
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Tables**: 
  - Users table with id, username, password
  - Contact messages table with form data (firstName, lastName, email, subject, message)
- **Validation**: Drizzle-Zod integration for schema-based validation

## Design System
- **Color Themes**: Custom gradient themes (electric blue, neon green, purple)
- **Typography**: Inter font family with custom font variables
- **Components**: Comprehensive UI component library with consistent theming
- **Animations**: Hover effects, smooth transitions, and glassmorphism styling
- **Responsive**: Mobile-first responsive design approach

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: Database connection for Neon PostgreSQL
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe database ORM
- **express**: Node.js web framework
- **react**: Frontend framework
- **wouter**: Lightweight routing
- **zod**: Schema validation

## UI Dependencies
- **@radix-ui**: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **lucide-react**: Icon library

## Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **esbuild**: JavaScript bundler for production

## Database
- **PostgreSQL**: Primary database (configured for Neon)
- **Environment Variables**: DATABASE_URL required for connection

The application uses a modular architecture with clear separation between frontend and backend concerns, shared schemas for type safety, and a flexible storage interface that can be easily swapped for different database implementations.