# Berkah Furnitur - Custom Furniture Catalog

A React-based web application for browsing furniture catalogs, viewing galleries of real projects, and facilitating orders via WhatsApp for "Berkah Furnitur".

## Purpose

The main purpose of this application is to serve as an online catalog and portfolio for Berkah Furnitur, a furniture business specializing in custom-made furniture and kitchen sets in the Jabodetabek area. It allows users to:
- Browse a catalog of furniture models.
- View real-life project galleries.
- Understand the ordering process and shipping rates.
- Easily contact the admin via WhatsApp for consultations and orders.

## Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router](https://reactrouter.com/)

## Setup

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Development Server

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

### Building for Production

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Previewing Production Build

To preview the production build locally:

```bash
npm run preview
```

## Usage

### Project Structure

-   **`src/components/`**: Contains reusable UI components and page sections.
    -   `layout/`: Structural components like `Navbar` and `Footer`.
    -   `sections/`: Large page sections like `Hero`, `Catalog`, `Gallery`, and `Process`.
    -   `ui/`: Small atomic components like `Button`, `Card`, and `Badge`.
-   **`src/data/`**: Contains static data files (e.g., `products.js`).
-   **`src/pages/`**: Top-level page components (`HomePage`, `CatalogPage`).
-   **`src/App.jsx`**: Main application component with routing logic.
-   **`src/main.jsx`**: Entry point.

### Customization

-   **Products**: Edit `src/data/products.js` to add, remove, or modify product listings.
-   **WhatsApp Number**: Update the `whatsappNumber` variable in `App.jsx`, `Catalog.jsx`, `Gallery.jsx`, `Hero.jsx`, and `Navbar.jsx` (consider extracting this to a constant file for easier management in the future).
-   **Shipping Rates**: Update the `shippingRates` array in `src/components/sections/Process.jsx`.

## Linting

This project uses ESLint. To run the linter:

```bash
npm run lint
```
