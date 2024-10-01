import { createRoot } from "react-dom/client";

import "./index.css";
import Testimonials from "./components/Testimonials.jsx";
import ProductCard from "./components/PicCard.jsx";
import Home from "./components/Home.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";

const list = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path=" " element={<Home />} />
      <Route path="Testimonials" element={<Testimonials />} />
      <Route path="Products" element={<ProductCard />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={list} />
  </>
);
