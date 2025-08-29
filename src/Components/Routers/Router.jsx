import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Share page/ErrorPage";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ProductDetails from "../Share page/ProductDetails";
import Blogs from "../Pages/Blogs";
import BlogDetails from "../Share page/BlogDetails";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

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
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  },
]);