import React from "react";

const VedioTitle = ({ title, overview }) => {
  return (
    <div className="pt-35 px-14 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-4 px-12 text-lg rounded-lg cursor-pointer">
          Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 text-lg rounded-lg mx-2 cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
