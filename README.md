# AudioPhile

## Overview
A production-style eCommerce frontend built with Next.js demonstrating a hybrid architecture: product pages are statically generated for fast load times and SEO, while interactive components such as the shopping cart and filters run on the client.

This project highlights scalable component structure, responsive design, and frontend engineering patterns used in real-world web applications.

## Why this project
This project was built to demonstrate real-world frontend patterns commonly used in commercial eCommerce applications, including component-based architecture, state handling, and performance-aware UI development.
It reflects the type of work expected in a frontend engineer role working with modern React frameworks.

## Key Features
- Hybrid page rendering: Product pages use Next.js static generation (`getStaticProps`) for pre-rendered content, ensuring fast load times and SEO-friendly markup.
- Interactive components: Shopping cart, filters, and buttons are handled client-side using React state.
- Reusable component architecture: UI components are modular and maintainable, enabling easy expansion.
- Responsive layout: Fully mobile-first design ensuring consistent behaviour across devices.
- Performance optimizations: Pre-rendering and optimized assets reduce load times and improve user experience.

## Technical Decisions
- Next.js static generation (SSG): Chosen for fast, SEO-friendly page loads while keeping the site production-ready.
- React components for interactivity: Client-side state is used only where necessary (cart, filters) to balance performance and dynamic behaviour.
- Component hierarchy: Clear separation between pre-rendered pages and interactive components to maintain readability and scalability.
- Local JSON data: Used to focus on frontend logic, architecture, and component design without backend dependencies.
- Responsive and accessible UI: Designed mobile-first with attention to layout consistency and accessibility considerations.
  
## Challenges & Solutions
- Hybrid architecture complexity: Balancing static generation with client-side interactivity required careful separation of concerns. Interactive components like the cart and filters were decoupled from pre-rendered pages to ensure predictable behaviour.
- State management for UI interactions: Managing cart state without a backend meant keeping it consistent across page navigations using React component state, which taught careful handling of local state and props.
- Performance optimization: Ensuring fast page loads while supporting dynamic interactivity involved using Next.js image optimization, pre-rendering, and minimal client-side re-renders.

## Teck Stack
- Next.js
- React
- JavaScript
- Tailwind

## Improvements
Given more time, the following enhancements would be implemented:
- Integration with a backend API for dynamic product data
- Cart persistence using backend state
- Introduce accessibility enhancements, including keyboard navigation and ARIA attributes for all interactive elements.
- Creating a loading design when loading images 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
