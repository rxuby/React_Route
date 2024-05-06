import {
  Route,
  Routes,
  createBrowserRouter,
  useRoutes,
} from "react-router-dom";
// import "./App.css";
import NotFound from "@components/NotFound";
import MainPage from "@components/MainPage";
import HomePage from "@components/HomePage";
import LayoutHome from "@components/LayoutHome";
import AllNew from "@components/AllNew";
import DetailNew from "@components/DetailNew";
import Test1 from "@components/Test1";
import Test2 from "@components/Test2";
import Test3_1 from "@components/Test31";
import Test3_2 from "@components/Test32";
import Card from "@components/Card";
import Ex1 from "@components/Ex1";
import RegisterForm from "@components/Register/RegisterForm";
import RegisStep1 from "@components/Register/RegisStep1";
import RegisStep2 from "@components/Register/RegisStep2";
import RegisStep3 from "@components/Register/RegisStep3";
import FormRedux from "@components/FormRegister";
import Testapi from "@api/fetchApi";
import LandingPage from "@components/LandingPage";
import YgoHome from "@api/้homeYugioh";
import PurrelyPage from "@api/purrelyPage";
import PokemonHome from "@components/Pokemon/PokemonHome";
import PokemonDetail from "@components/Pokemon/PokemonDetail";

const route = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "test1",
    element: <Test1 />,
  },
  {
    path: "test2",
    element: <Test2 />,
  },
  {
    path: "test31",
    element: <Test3_1 />,
  },
  {
    path: "card",
    element: <Card />,
  },
  {
    path: "test32",
    element: <Test3_2 />,
  },
  {
    path: "ex1",
    element: <Ex1 />,
  },
  {
    path: "register",
    element: <RegisterForm />,
  },
  {
    path: "regis1",
    element: <RegisStep1 />,
  },
  {
    path: "regis2",
    element: <RegisStep2 />,
  },
  {
    path: "regis3",
    element: <RegisStep3 />,
  },
  {
    path: "redux",
    element: <FormRedux />,
  },
  {
    path: "testapi",
    element: <Testapi />,
  },
  {
    path: "ygohome",
    element: <YgoHome />,
  },
  {
    path: "purrely",
    element: <PurrelyPage />,
  },
  {
    path: "pokemonhome",
    element: <PokemonHome />,
  },

  {
    path: "/pokemondetail/:no",
    element: <PokemonDetail />,
  },

  {
    path: "/mainpage",
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
