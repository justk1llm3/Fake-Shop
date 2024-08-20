import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import routes from "./routes"; // Import the routes
import { CartProvider } from './context/CartContext';
import './index.css';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </CartProvider>

);
