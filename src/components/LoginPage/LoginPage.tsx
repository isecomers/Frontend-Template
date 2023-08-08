import React from "react";
import { useAppDispatch, useAppSelector } from "../../reduxStore/store";
import { assignUser } from "../../reduxStore/features/userSlice";
import { useNavigate } from "react-router-dom";

type Props = {};

function LoginPage({}: Props) {
  const navigate = useNavigate();

  // getting the dispatch method for assigning data to store
  const dispatch = useAppDispatch();

  // Html form handle function for ts
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const name = formData.get("name") as string;
    const password = formData.get("password") as string;

    console.log("Submitted Data:", { name, password });
    dispatch(assignUser({ name, password }));
    navigate("/home/page1");
  };
  return (
    <div className=" relative overflow-hidden w-full h-full flex flex-col justify-center items-center">
      <form
        className=" z-20 flex flex-col w-[300px] items-center  relative justify-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full text-center">
          <h1>LOGO</h1>
        </div>
        <label className="w-full flex justify-between items-center">
          <input
            required
            className="border w-full bg-transparent rounded-[5px] px-2 py-2 text-white focus:bg-white focus:text-black mb-4 mt-4 focus:outline-none focus:border-primary"
            type="text"
            name="name"
            placeholder="Enter Username or Email"
          />
        </label>
        <label className="w-full flex justify-between items-center">
          <input
            required
            className="border w-full bg-transparent rounded-[5px] px-2 py-2 text-white focus:bg-white focus:text-black focus:outline-none focus:border-primary"
            type="password"
            name="password"
            placeholder="Password"
          />
        </label>
        <button
          className=" mt-3 w-auto text-white px-3 bg-primary py-2 rounded-[5px]  hover:font-bold transition-colors"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="z-1 animationWrapper w-[400px] h-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="z-1  border-animationBorder w-full h-full absolute border-[2px] rounded-animationBorderRadius animate-login"></div>
        <div className="z-1  border-animationBorder w-full h-full absolute border-[2px] rounded-animationBorderRadius animate-login2 rotate-90"></div>
        <div className="z-1  border-animationBorder w-full h-full absolute border-[2px] rounded-animationBorderRadius animate-login3 rotate-180"></div>
      </div>
    </div>
  );
}

export default LoginPage;
