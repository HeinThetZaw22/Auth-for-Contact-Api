import React from "react";
import PreventComponents from "../components/Prevent.components";
import { Outlet, useNavigate } from "react-router-dom";

const HomePage = () => {
  const nav = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("auth");
    nav("/");
  };
  const handleAdd = () => {
    nav("/home/add");
  }
  return (
    <PreventComponents fail={"/"} check={!localStorage.getItem("auth")}>
      <div className=" container mx-auto h-screen">
        <div className=" h-full">
        <nav className="flex items-center justify-between shadow px-4 py-2 mt-2">
          <h1>HomePage</h1>
          <div className="flex  gap-2 items-center">
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleLogOut}>Log out</button>
          </div>
        </nav>
        <Outlet />
        </div>
      </div>
    </PreventComponents>
  );
};

export default HomePage;
