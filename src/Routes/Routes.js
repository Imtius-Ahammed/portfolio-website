import { createBrowserRouter } from "react-router-dom";

import Main from "../layout/Main";
import AboutMe from "../Pages/Home/AboutMe/AboutMe";
import Banner from "../Pages/Home/Banner/Banner";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";
import Experience from "../Pages/Home/Experience/Experience";
import Home from "../Pages/Home/Home/Home";
import ProjectSS from "../Pages/Home/ProjectSS/ProjectSS";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://my-portfolio-server-lovat.vercel.app/projects"),
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/projects",
        element: <ProjectSS></ProjectSS>,
        loader: () =>
          fetch("https://my-portfolio-server-lovat.vercel.app/projects"),
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: ({ params }) =>
          fetch(
            `https://my-portfolio-server-lovat.vercel.app/projects/${params.id}`
          ),
      },
      {
        path: "/banner",
        element: <Banner></Banner>,
      },
      {
        path: "/skills",
        element: <Experience></Experience>,
      },

      {
        path: "/about",
        element: <AboutMe></AboutMe>,
      },
    ],
  },
]);
