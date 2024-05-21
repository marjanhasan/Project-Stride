import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayouts from "../layouts/DashboardLayouts";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    errorElement: <ErrorPage/>,
    children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <AboutUs/>
        },
        {
            path: "/login",
            element: <Login/>
        }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayouts/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "dashboard1",
        element: <Dashboard/>
      }
    ],
  }
]);