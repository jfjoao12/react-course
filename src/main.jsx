import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/routes/Posts";
import "./index.css";
import NewPost, { action as newPostAction } from "./components/routes/NewPost";
import RootLayout from "./components/routes/RootLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./components/routes/Posts";
import PostDetails, {
  loader as postDetailsLoader,
} from "./components/routes/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          {
            path: "new-post",
            element: <NewPost />,
            action: newPostAction,
          },
          {
            path: ":id",
            element: <PostDetails />,
            loader: postDetailsLoader,
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
