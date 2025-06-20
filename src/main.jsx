import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import myRoute from "../src/route/myRoute.jsx"
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={myRoute}>
      <App/>
    </RouterProvider>
    <Toaster position="top-center" reverseOrder={false} />
  </StrictMode>
);
