import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

function NavBar({}: Props) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[50px] bg-panel flex justify-around items-center">
      <div
        onClick={() => {
          navigate("page1");
        }}
        className=" cursor-pointer hover:text-red-800 transition-colors text-white underline"
      >
        Page 1
      </div>
      <div
        onClick={() => {
          navigate("page2");
        }}
        className=" cursor-pointer hover:text-red-800 transition-colors text-white underline"
      >
        Page 2
      </div>
      <div
        onClick={() => {
          navigate("page3");
        }}
        className=" cursor-pointer hover:text-red-800 transition-colors text-white underline"
      >
        Page 3
      </div>
      <div
        onClick={() => {
          navigate("page4");
        }}
        className=" cursor-pointer hover:text-red-800 transition-colors text-white underline"
      >
        Page 4
      </div>
    </div>
  );
}

export default NavBar;
