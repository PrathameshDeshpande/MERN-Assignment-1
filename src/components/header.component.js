import React from "react";
import "./header.styles.scss";
import logo from "../assests/logo.png";
import Tachyons from "tachyons";

export default function Topbar({open,setopen}) {
  return (
    <div className={"topbar " + (open && "active")}>
      <div className="wrapper">
        <div className="left">
          <img src={logo}/>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setopen(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
