import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Share page/ErrorPage";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  },
]);