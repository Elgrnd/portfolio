# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a personal portfolio website built with React, TypeScript, and Vite. The site showcases university projects and professional experiences for a computer science student.

## Common Development Commands

### Development
- `npm run dev` - Start the development server on localhost
- `npm run build` - Build for production (runs TypeScript checks then Vite build)
- `npm run preview` - Preview the production build locally

### Code Quality
- `npm run lint` - Run ESLint to check code quality
- No test command configured - testing framework not set up

### Deployment
- `npm run deploy` - Deploy to GitHub Pages

## Architecture and Key Patterns

### Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router (HashRouter for GitHub Pages compatibility)
- **Styling**: Tailwind CSS
- **Analytics**: Vercel Analytics

### Project Structure
- `/src/components/` - React components (Navbar, Home, Portfolio, Projects, etc.)
- `/src/data/` - Data models and project information
- `/assets/` - Static assets including images and PDFs
- Component files use `.tsx` extension
- No state management library - uses React component state

### Key Data Model
The main data structure is the `Project` interface in `/src/data/projects.ts`:
- Contains fields for project details, technologies, features, challenges, outcomes
- Includes competences and critical analysis fields specific to university requirements
- Projects are displayed through ProjectCard and ProjectDetail components

### Routing Structure
Uses HashRouter with routes for:
- Home page
- Individual project details via `/project/:id`