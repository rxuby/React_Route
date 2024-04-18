import { Route, RouterProvider, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import router from "@functions/route";

function App() {

  return(
    <RouterProvider router={router}/>
  )
}

export default App;
