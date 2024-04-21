import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import AllLamp from './Lamp/AllLamp'
import AllStand from "./Stand/AllStand";
import AllMacrame from "./Macrame/AllMacrame";
import AllMirrors from "./Mirrors/AllMirrors";
import AllPlant from "./Plant/AllPlant"
import AllCardPage from "./CardPage/AllCardPage";
import { CartProvider } from "react-use-cart";
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "Lamp",
    element:<AllLamp/>,
  },
  {
    path: "Stand",
    element:<AllStand/>,
  },
  {
    path: "Macrame",
    element:<AllMacrame/>,
  },
  {
    path: "Mirrors",
    element:<AllMirrors/>,
  },
  {
    path: "Plant",
    element:<AllPlant/>,
  },
  {
    path: "CardPage",
    element:<AllCardPage/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
  <RouterProvider router={router} />
  </CartProvider> 
);
