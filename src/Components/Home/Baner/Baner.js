import React from "react";
import { Link } from "react-router-dom";
import "./Baner.css";

const Baner = () => {
  return (
    <div className="w-full tt-baner">
      <video id="video" autoPlay loop muted src="bg-video.mp4"></video>
      <div className="lg:mt-14 h-2/3 lg:h-full w-full flex justify-center p-4 ">
        <div className="w-full lg:h-1/2 lg:w-1/2 lg:ml-24 sm:mt-32 lg:mt-52 tt-baner-color text-center lg:text-center">
          {/* <div className="absolute sm:w-1/2 h-1/2 my-auto lg:w-1/2 lg:ml-24 sm:mt-32 lg:mt-48 text-white text-right"> */}
          <h1 className=" text-4xl lg:text-6xl font-bold mb-6">
            Your Perfect Tour Planer
          </h1>
          <p className="sm:text-2xl lg:text-3xl mb-6">
            Dont mke your holdays dull. No need to think more. Just choose a
            plan and leave everything on us
          </p>
          <Link to={"/home#packages"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Check packages
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Baner;
