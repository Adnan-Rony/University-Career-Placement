import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../Components/Navbar";

export const MainLayouts = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
{/* max-w-screen-xl  mx-auto */} 
      <main className="">
        <Outlet></Outlet>
      </main>
    </div>
  );
};
