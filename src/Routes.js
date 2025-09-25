import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

// Lazy load components
const Hire = lazy(() => import("./components/Hire/Hire"));
const Home = lazy(() => import("./components/Home/Home"));
const Mobile = lazy(() => import("./components/Services/Mobile/Mobile"));
const EcommerceDevelopment = lazy(() => import("./components/Services/E-commerce/EcommerceDevelopment"));
const SoftwareDevelopment = lazy(() => import("./components/Services/Software/SoftwareDevelopment"));
const WebsiteDevelopment = lazy(() => import("./components/Services/Website/WebsiteDevelopment"));
const DigitalDevelopment = lazy(() => import("./components/Services/Digital/DigitalDevelopment"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Blogs = lazy(() => import("./components/Blogs/Blogs"));
const BlogPage = lazy(() => import("./components/Blogs/BlogPage"));

const RoutesConfig = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/services/mobile-app-development" element={<Mobile />} />
        <Route path="/services/e-commerce-development" element={<EcommerceDevelopment />} />
        <Route path="/services/software-development" element={<SoftwareDevelopment />} />
        <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalDevelopment />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
         <Route path="/blog/:slug" element={<BlogPage />} />

      </Routes>
    </Suspense>
  );
};

export default RoutesConfig;
