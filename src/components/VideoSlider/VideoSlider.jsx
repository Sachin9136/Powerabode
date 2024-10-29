import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "";

const VideoSlider = ({ videos, title }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentVideoIndex(
      currentVideoIndex === 0 ? videos.length - 1 : currentVideoIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentVideoIndex(
      currentVideoIndex === videos.length - 1 ? 0 : currentVideoIndex + 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      {/* Slider Title */}
      <h2 className="text-4xl text-center font-bold pb-16">{title}</h2>

      {/* Slider Container */}
      <div className="relative">
        {/* Current Video */}
        <div className="flex justify-center items-center">
          <video
            src={videos[currentVideoIndex].url}
            controls
            className="rounded-3xl w-full max-h-[450px] object-cover"
          />
        </div>

        {/* Left Arrow */}
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full"
        >
          {/* <FaChevronLeft size={24} /> */}
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full"
        >
          {/* <FaChevronRight size={24} /> */}
        </button>
      </div>
    </div>
  );
};

export default VideoSlider;
