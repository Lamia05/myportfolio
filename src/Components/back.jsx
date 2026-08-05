import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "project/:slug",
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default router;