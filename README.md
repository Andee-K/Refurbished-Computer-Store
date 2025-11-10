# Refurbished Computer Store

This project is a web application for a refurbished computer store. It allows users to browse products, filter them by category, and add them to a shopping cart.

## About the Project

The Refurbished Computer Store is a React-based e-commerce application that provides a simple and intuitive user interface for shopping for refurbished electronics. The project was built using Vite for a fast development experience and Zustand for state management.

## Key Features

*   **Product Listing:** Displays a list of available refurbished products.
*   **Category Filtering:** Allows users to filter products by category (Laptop, Tablet, Mobile, Accessory).
*   **Shopping Cart:** Provides a fully functional shopping cart that allows users to:
    *   Add items to the cart.
    *   Increase or decrease the quantity of items.
    *   Remove items from the cart.
    *   Clear the entire cart.
    *   View the total quantity and price of items in the cart.
*   **Dynamic Data Loading:** Fetches product data from a remote API.

## Styling and Design

The project uses CSS Modules for styling to ensure that styles are scoped locally to components and avoid conflicts. The design is clean and minimalist, focusing on a straightforward user experience. The color scheme and layout are designed to be simple and intuitive, making it easy for users to navigate and find what they are looking for.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/Andee-K/Refurbished-Computer-Store.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server
    ```sh
    npm run dev
    ```

## Available Scripts

*   `dev`: Runs the app in the development mode.
*   `build`: Builds the app for production to the `dist` folder.
*   `lint`: Lints the project files.
*   `preview`: Serves the production build locally.
*   `deploy`: Deploys the application to GitHub Pages.