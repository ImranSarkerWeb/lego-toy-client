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
import UpdateMyToy from "../pages/Home/MyToys/UpdateMyToy";
import ToyDetails from "../pages/Home/ToyDetails/ToyDetails";

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
        loader: () =>
          fetch("https://lego-store-server.vercel.app/questionanswers"),
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
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/alltoys",
        element: <AllToys />,
        loader: () => fetch("https://lego-store-server.vercel.app/toys"),
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/updatemytoy/:id",
        element: (
          <PrivateRoute>
            <UpdateMyToy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://lego-store-server.vercel.app/updatemytoy/${params.id}`
          ),
      },
      {
        path: "toys/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://lego-store-server.vercel.app/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
