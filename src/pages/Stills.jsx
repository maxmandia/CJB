import React, { useContext } from "react";
import { Context } from "../App";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import "../styles/stills.css";
function Stills() {
  const { showNav } = useContext(Context);
  return (
    <div className="stills-container">
      {showNav && <SideBar />}
      <Header isBlack={true} />
    </div>
  );
}

export default Stills;
