
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";

import { Navbar } from './../Components/Navbar/Navbar';
import Footer from './../Components/Shared/Footer';

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
