import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routes/router";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
  /* 
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
  */
);
