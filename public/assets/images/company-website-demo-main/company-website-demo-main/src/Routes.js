import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";


// Lazy load components
const Hire = lazy(() => import("./components/Hire/Hire"));
const Home = lazy (() => import("./components/Home/Home"));

const RoutesConfig = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </Suspense>
  );
};

export default RoutesConfig;
