import React from "react";
import AppBars from "./AppBars";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div>
      <AppBars />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
