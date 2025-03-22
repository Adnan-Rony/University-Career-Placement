import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import Footer from "../Components/Footer";

export const MainLayouts = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/"; // Check if it's the home page

  return (
    <div>
      <header>
        <Navbar />
      </header>

      {/* Apply max-w-screen-xl mx-auto only if NOT on the home page */}
      <main className={isHomePage ? "w-full" : "max-w-screen-xl mx-auto"}>
        <Outlet />

        
      </main>

      <Footer></Footer>
    </div>
  );
};
