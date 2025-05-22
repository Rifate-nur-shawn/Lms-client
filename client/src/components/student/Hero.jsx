import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";
function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70 to-white">
      <h1 className="text-lg md:text-xl lg:text-4xl font-extrabold max-w-3xl mx-auto leading-tight tracking-tight relative animate-fade-in-down">
        <span className="text-black">Where Your Brainpower Gets a Digital Upgrade</span>{" "}
        <span className="text-blue-600 relative inline-block after:w-full after:h-1 after:bg-blue-400 after:bottom-0 after:left-0">and Maybe a Few Side Quests</span>{" "}
        {/* <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-7 right-0 animate-bounce-slow"
        /> */}
      </h1>
      <p className="md:block hidden text-gray-700 max-w-2xl mx-auto text-lg font-medium leading-relaxed shadow-text">
        {" "}
        At Presync Academy, we don't just teach you skills; we give you the
        {/* <span className="px-1 py-0.5 bg-blue-100 rounded-md text-blue-700 font-bold mx-1">cheat codes</span>  */}
        to transform those mental masterpieces into digital realities
      </p>
      <p className="md:hidden text-gray-700 max-w-sm mx-auto font-medium italic">
        we give you the 
        cheat codes 
        to transform those mental masterpieces into digital realities
      </p>
      <SearchBar/>
    </div>
  );
}

export default Hero;
