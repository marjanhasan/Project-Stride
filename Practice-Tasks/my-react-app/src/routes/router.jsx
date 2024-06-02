import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import DashBoardLayouts from "../layouts/DashBoardLayouts";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard";
import SingleProductPage from "../pages/SingleProductPage";
import AllProducts from "../pages/AllProducts";
import AddProducts from "../pages/AddProducts";
import EditProducts from "../pages/EditProducts";
import EditProfile from "../pages/EditProfile";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/shoes"),
      },
      {
        path: "/products/:id",
        element: <SingleProductPage />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/shoes/${params.id}`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Registration />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayouts />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/edit/:id",
        element: (
          <PrivateRoutes>
            <EditProfile />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/user/get/${params.id}`),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoutes>
            <AllProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: "add-products",
        element: (
          <PrivateRoutes>
            <AddProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: "all-products/edit/:id",
        element: (
          <PrivateRoutes>
            <EditProducts />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/shoes/${params.id}`),
      },
    ],
  },
]);
