import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Apod from "./pages/Apod.jsx";
import Neo from "./pages/Neo.jsx";
import Rover from "./pages/Rover.jsx";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Apod />,
      },
      {
        path: "Neo",
        element: <Neo />,
      },
      {
        path: "Rover",
        element: <Rover />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
