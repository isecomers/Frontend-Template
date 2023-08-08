import React from "react";
import { useAppSelector } from "../../reduxStore/store";

type Props = {};

function Page1({}: Props) {
  // Get the user data from store
  const user = useAppSelector((state) => state.user);
  return (
    <div className="w-full h-full flex justify-center items-center flex-col text-[5vw]">
      <p>This is Page 1</p>
      <p className="mt-10">Name : {user.name}</p>
      <p>Password : {user.password}</p>
    </div>
  );
}

export default Page1;
