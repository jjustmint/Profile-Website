import profileImage from "../image/user_pic.png";
import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-white min-h-screen flex sm:flex-col md:flex-row items-center justify-center p-6">
      {/* Image Section */}
      <div className="w-60 md:w-80 rounded-lg object-cover sm:mb-6 md:mr-12">
        <img src={profileImage} alt="Profile" className="m-5" />
      </div>
      
      {/* Text Section */}
      
      <div className="lg:text-left md:text-center p-15">
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
