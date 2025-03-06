import profileImage from "../image/user_pic.png";
import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-white min-h-screen flex flex-row items-center justify-center">
        {/* Image Section */}
        <div className="w-60 md:w-100 lg:w-80 rounded-lg object-cover">
          <img src = {profileImage} alt="Profile" className=""/>
          </div>
          {/* <div className="bg-green-100 rounded-full w-72 h-72 absolute top-100 left-100 transform -translate-x-8 -translate-y-8 blur-3xl"></div> */}
        
        {/* Text Section */}
        <div className="md:ml-12 text-left md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="text-lg font-semibold text-gray-700 mt-2">Artist & Designer</p>
          <p className="text-gray-600 mt-4 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida, arcu ac luctus bibendum, ante est mattis est, hendrerit finibus nibh leo in tortor. Etiam dapibus tortor sit amet mi fermentum, at aliquet purus euismod.
          </p>
          <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded-full text-lg font-medium hover:bg-green-800">
            Read More
          </button>
        </div>
      </div>
  );
};

export default AboutMe;
