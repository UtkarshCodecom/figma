import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Frame27170 from "pages/Frame27170";
import BusinessThattrustus from "pages/BusinessThattrustus";
import FrameFortyOne from "pages/FrameFortyOne";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "frame27170",
      element: <Frame27170 />,
    },
    {
      path: "businessthattrustus",
      element: <BusinessThattrustus />,
    },
    {
      path: "framefortyone",
      element: <FrameFortyOne />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
