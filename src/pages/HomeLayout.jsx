import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomeLayout() {
  return (
    <div style={{border:'solid red'}}>
      <h3>HomeLayout:</h3>
      <Navbar />
      <Outlet />
    </div>
  );
}
