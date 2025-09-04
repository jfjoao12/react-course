import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/routes/Posts";
import "./index.css";
import NewPost from "./components/routes/NewPost";
import RootLayout from "./components/routes/RootLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./components/routes/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        children: [
          {
            path: "new-post",
            element: <NewPost />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
