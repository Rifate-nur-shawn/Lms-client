import React from "react";
import { assets } from "../../assets/assets";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text center bg-gradient-to-b from-cyan-100/70">
      <h1 className="text-lg md:text-xl lg:text-4xl font-extrabold text-gray-600 max-w-3xl mx-auto leading-tight tracking-tight relative">
        Where Your Brainpower Gets a Digital Upgrade  {" "}
        <span className="text-blue-600">and Maybe a Few Side Quests</span>{" "}
        <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-7 right-0"
        />
      </h1>
      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        {" "}
        At Presync Academy, we don't just teach you skills; we give you the
        cheat codes to transform those mental masterpieces into digital
        realities
      </p>
      <p className="md:hidden text-gray-500 max-w-sm mx-auto">
        we give you the cheat codes to transform those mental masterpieces into
        digital realities
      </p>
    </div>
  );
}

export default Hero;
