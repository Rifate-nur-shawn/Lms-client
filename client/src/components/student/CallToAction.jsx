import React from "react";
import { assets } from "../../assets/assets";

function CallToAction() {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0 ">
      <h1 className="text-xl md:text-4xl text-gray-800 font-semibold">
        The Direct Daring & Empowering
      </h1>
      <p className="text-gray-500 ">
        Your brilliant ideas are tired of being trapped in your head. It's time
        to unleash them. Enroll in a Presync Academy course today and turn your 
        digital aspirations into undeniable realities.
      </p>
      <div className="flex items-center font-medium gap-6 my-4">
        <button className="px-10 py-3 rounded-md text-white bg-blue-600">
          Get started
        </button>
        <button className="flex items-center gap-2">
          Learn more <img src={assets.arrow_icon} alt="arrow_icon" />
        </button>
      </div>
    </div>
  );
}

export default CallToAction;
