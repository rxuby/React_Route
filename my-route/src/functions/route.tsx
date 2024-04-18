import {
  Route,
  Routes,
  createBrowserRouter,
  useRoutes,
} from "react-router-dom";
// import "./App.css";

import path from "path";
import NotFound from "@components/NotFound";
import MainPage from "@components/MainPage";
import HomePage from "@components/HomePage";
import LayoutHome from "@components/LayoutHome";
import AllNew from "@components/AllNew";
import DetailNew from "@components/DetailNew";

const route = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <LayoutHome />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "allnews",
        element: <AllNew />,
      },
      {
        path: "allnews/:id/",
        element: <AllNew />,
      },
      {
        path: "allnews/:id/:detailId",
        element: <DetailNew />,
      },
    ],
  },
]);

export default route;
