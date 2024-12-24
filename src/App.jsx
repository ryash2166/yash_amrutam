import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Router from "./router/Router";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Router />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
