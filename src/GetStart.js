import "bootstrap/dist/css/bootstrap.min.css";
import "./GetStart.css";
import React, { useState, useEffect } from "react";
import videobg from './video.mp4'
import { Link } from "react-router-dom";
import logo3 from './GetStart.jpg';
function GetStart() {
  

  return (
    // <div class="bg">
    //  <button>GetStart</button>
    // </div>
    <div className="main">
      <video src={videobg} autoPlay loop/>
      <button>GetStart</button>
    </div>
  //   <div class="position-relative">
   
  //   <img class="bg obj-fit-cover" src={logo3} alt="..."/>
  // </div>
  );
}

export default GetStart;
