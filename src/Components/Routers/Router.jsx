import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Share page/ErrorPage";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetails from "../Share page/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/product/:id",   
        element: <ProductDetails />
      }
    ]
  },
]);