import React, { useEffect } from "react";

import "../Styles/navbar.css";

const Nvabar = () => {
  useEffect(() => {
    let text =
      "Welcom to Fineto country search web app you can search here and get infomration";
    let index = 0;

    const rotateText = () => {
      index++;
      document.getElementById("rotating-text").textContent = text.slice(
        0,
        index
      );
      if (index === text.length) {
        index = 0;
      }
    };
    const intervalId = setInterval(rotateText, 150);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <nav className="navbar">
      <h1 id="rotating-text" className="rotating-text"></h1>
    </nav>
  );
};
export default Nvabar;
