# PawCare - Architecture Documentation

## 1. Architecture Type

PawCare uses a simple frontend architecture.

The application consists of:

- HTML for structure
- CSS for presentation
- JavaScript for interaction

## 2. Architecture

User
  |
  v
HTML Pages
  |
  +---- CSS
  |
  +---- JavaScript
  |
  +---- External Images

## 3. Page Structure

index.html
    |
    +-- Home
    +-- Navigation
    +-- Features
    +-- Statistics
    +-- Footer

about.html
    |
    +-- About
    +-- Mission

services.html
    |
    +-- Services
    +-- Service Cards

tips.html
    |
    +-- Pet Care Tips
    +-- Important Information

gallery.html
    |
    +-- Gallery
    +-- Category Filtering

contact.html
    |
    +-- Contact Information
    +-- Contact Form
    +-- Form Validation

## 4. JavaScript Responsibilities

JavaScript handles:

- Mobile navigation
- Dark/light theme
- Animated counters
- Gallery filtering
- Contact form validation
- Back-to-top button
- Scroll animations

## 5. Data Storage

No database is currently used.

The project is a frontend-only application.

## 6. External Resources

Google Fonts are used for typography.

Images are loaded from public image URLs.