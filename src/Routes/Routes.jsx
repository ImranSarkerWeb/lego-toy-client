/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import AddToy from "../pages/Home/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/Home/MyToys/MyToys";
import UpdateMyToy from "../pages/Home/MyToys/UpdateMyToy";
import ToyDetails from "../pages/Home/ToyDetails/ToyDetails";
import { Suspense, lazy } from "react";
import Loader from "../pages/shared/Loader/Loader";
const BlogPreview = lazy(() => import("../pages/Home/Blog/Blog"));
const AllToysPreview = lazy(() => import("../pages/Home/AllToys/AllToys"));

const LoginPreview = lazy(() => import("../pages/Home/Login/Login"));
const RegisterPreview = lazy(() => import("../pages/Home/Login/Register"));
const HomePreview = lazy(() => import("../pages/Home/Home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <HomePreview />
          </Suspense>
        ),
      },
      {
        path: "/blog",
        element: (
          <Suspense fallback={<Loader />}>
            <BlogPreview />
          </Suspense>
        ),
        loader: () =>
          fetch("https://lego-store-server.vercel.app/questionanswers"),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Loader />}>
            <LoginPreview></LoginPreview>
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<Loader />}>
            <RegisterPreview></RegisterPreview>
          </Suspense>
        ),
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
        element: (
          <Suspense fallback={<Loader />}>
            <AllToysPreview />
          </Suspense>
        ),
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
