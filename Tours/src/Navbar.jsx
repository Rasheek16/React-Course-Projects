import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img className="ellipse" alt="Ellipse" src="ellipse-1.png" />
      <div className="text-wrapper">HOME</div>
      <div className="div">EVENTS</div>
      <div className="text-wrapper-2">STUDENTS</div>
      <div className="text-wrapper-3">CLUBS</div>
      <div className="text-wrapper-4">CONTRIBUTE</div>
      <div className="text-wrapper-5">JOIN DISCORD</div>
      <img className="line" alt="Line" src="line-1.svg" />
      <img className="arrow" alt="Arrow" src="arrow-1.svg" />
    </div>
  );
};
