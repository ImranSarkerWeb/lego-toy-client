import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Login/Register";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import Blog from "../pages/Home/Blog/Blog";
import AddToy from "../pages/Home/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/Home/AllToys/AllToys";
import MyToys from "../pages/Home/MyToys/MyToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch("/blogQuestion.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/mytoys",
        element: <MyToys />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
