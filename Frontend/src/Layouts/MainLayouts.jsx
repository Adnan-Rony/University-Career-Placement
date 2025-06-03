import React from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import Footer from "../Components/Footer";
import { ResponsiveNav } from "../Components/ResponsiveNav";
import { Navbar } from "../Components/Navbar/Navbar";

export const MainLayouts = () => {
  const location = useLocation();

  return (
    <div>
      <header>
        <Navbar />
        {/* <ResponsiveNav></ResponsiveNav> */}
      </header>

      {/* Apply max-w-screen-xl mx-auto only if NOT on the home page */}
      <main className="bg-[#f9f9f9]">
        <Outlet />
        <ScrollRestoration />
      </main>

      <Footer></Footer>
    </div>
  );
};
