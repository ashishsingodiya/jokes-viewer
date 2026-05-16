# Jokes Viewer

A minimalist and beautifully designed jokes gallery application built with React, Vite, and Tailwind CSS. The app fetches and displays jokes using the FreeAPI Random Jokes endpoints.

## Live Demo

**[projects.ashish.pro/jokes](https://projects.ashish.pro/jokes)**

## Features

- **Joke Gallery:** Browse through an extensive collection of jokes presented in clean, readable cards.
- **Categories & Tags:** Displays relevant joke categories visually as stylish pill tags.
- **Pagination:** Easy-to-use pagination controls to navigate gracefully between pages of jokes.
- **Responsive Design:** A fluid layout built with Tailwind CSS that looks perfect on both desktop and mobile devices.
- **Clean Aesthetic:** Modern and uncluttered interface using sharp borders, accessible typography, and smooth micro-interactions.
- **Robust Feedback:** Comprehensive loading states and fallback UI ensures a seamless data fetching experience.

## Tech Stack

- **Framework:** React 19 (via Vite)
- **Styling:** Tailwind CSS (v4)
- **Icons:** Lucide React
- **API:** [FreeAPI](https://freeapi.app/)
- **Package Manager:** pnpm

## Component Structure

The app's UI utilizes cleanly structured modular components (`src/components/`):

- `JokeCard.jsx`: The layout unit displaying individual joke content and their related category tags.
- `Pagination.jsx`: Controls for navigating back and forth through the jokes gallery pages.

## License

This project is licensed under the MIT License.
