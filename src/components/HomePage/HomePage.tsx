import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

type Props = {};

function HomePage({}: Props) {
  return (
    <div className="w-full h-full flex flex-col">
      <NavBar />
      <div className="flex-1 w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
