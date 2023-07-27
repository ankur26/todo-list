import React, { useContext } from "react";
import bgLight from "../assets/bg-desktop-light.jpg";
import bgDark from "../assets/bg-desktop-dark.jpg";
import { ThemeContext } from "../context";

function ImageContainer(): React.ReactNode {
    const mode = useContext(ThemeContext);
  return (
    <div className={`fixed -z-10 w-full h-full flex flex-col items-center ${mode === "light" ? "bg-white" :"bg-black"}`}>
      <img className="min-h-imageCustom" src={mode === "light" ? bgLight : bgDark} alt="" />
    </div>
  );
}

export default ImageContainer;
