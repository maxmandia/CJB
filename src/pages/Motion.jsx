import React, { useContext } from "react";
import { Context } from "../App";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../styles/motion.css";

function Motion() {
  const { showNav } = useContext(Context);
  return (
    <div className="motion-container">
      {showNav && <SideBar />}
      <Header />
    </div>
  );
}

export default Motion;
