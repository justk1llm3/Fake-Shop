import ErrorPage from "./pages/ErrorPage";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

const routes = [
  {
    path: "/", // Default path for HomePage
    element: <HomePage />, 
    errorElement: <ErrorPage />, // This will handle errors within this route
    ErrorBoundary:<ErrorPage />,
  },
  {
    path: "shop",
    element: <ShopPage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "*", // Catch-all for undefined routes (404 error page)
    element: <ErrorPage />,
  },
];

export default routes;
