# Automobiles - Car Parts Marketplace

Welcome to the Automobiles project! This is a full-stack car parts marketplace built with TypeScript, React, and Node.js. The application allows users to browse, select, and purchase car parts while providing an admin interface for managing products and orders.

## Project Structure

The project is divided into two main parts: the frontend and the backend.

### Frontend

The frontend is built using React with Vite for fast development and Tailwind CSS for styling. The main components include:

- **Home Page**: The landing page of the application.
- **All Products Page**: Displays all available car parts.
- **Brand Page**: Lists products filtered by brand.
- **Product Detail Page**: Shows detailed information about a selected product.
- **Cart Page**: Displays items added to the cart.
- **Checkout Page**: Collects shipping information and displays an invoice.
- **Order Success Page**: Shows the status of the order and payment options.
- **Admin Pages**: For adding products and managing orders.

### Backend

The backend is built with Node.js and Express, using MongoDB for data storage. Key features include:

- **Product Management**: Admins can add, update, and delete products.
- **Order Management**: Admins can confirm orders and manage tracking information.
- **Messaging System**: Clients can communicate with admins regarding their orders.
- **Reporting System**: Users can report issues or scams.

## Features

1. **Brand & Product Catalog**: Browse and filter products by brand.
2. **Admin Product Upload**: Admins can add new products with images and details.
3. **Shopping Flow**: Users can add products to their cart and proceed to checkout.
4. **Order Confirmation & Tracking**: Admins can confirm orders and provide tracking information.
5. **In-site Messaging**: Chat functionality for communication between clients and admins.
6. **Reporting Issues**: Users can report scams or issues directly through the application.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository**:
   ```
   git clone <repository-url>
   cd automobiles
   ```

2. **Install Dependencies**:
   - For the frontend:
     ```
     cd frontend
     npm install
     ```
   - For the backend:
     ```
     cd ../backend
     npm install
     ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the `backend` directory and add your environment variables (e.g., database connection string).

4. **Run the Application**:
   - Start the backend server:
     ```
     cd backend
     npm run dev
     ```
   - Start the frontend application:
     ```
     cd frontend
     npm run dev
     ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend API.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- Thanks to the contributors and the open-source community for their support and resources.