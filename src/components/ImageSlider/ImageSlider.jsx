import React, { useState } from "react";
import { slider_1, slider_2, slider_3, slider_4, slider_5 } from '../../components/Img/ImportedImage';


export default function ImageSlider() {
  // Define the state for the active index
  const [activeIndex, setActiveIndex] = useState(0); // Default active image is the third one

  // Image data for the slider
  const images = [
    {
      url: slider_1,
      title: 'Services',
      description: 'Supply Chain by SLA. Home for Category Management and Supply Chain Challenges. Delivered by our experts. Optimising cost and adding value through 6 areas of delivery.',
    },
    {
      url: slider_2,
      title: 'Program',
      description: 'Supply Chain by SLA. Home for Category Management and Supply Chain Challenges. Delivered by our experts. Optimising cost and adding value through 6 areas of delivery.',
    },
    {
      url: slider_3,
      title: 'Academy',
      description: 'Supply Chain by SLA. Home for Category Management and Supply Chain Challenges. Delivered by our experts. Optimising cost and adding value through 6 areas of delivery.',
    },
    {
      url: slider_4,
      title: 'Thinking',
      description: 'Supply Chain by SLA. Home for Category Management and Supply Chain Challenges. Delivered by our experts. Optimising cost and adding value through 6 areas of delivery.',
    },
    {
      url: slider_5,
      title: 'CODEX',
      description: 'Supply Chain by SLA. Home for Category Management and Supply Chain Challenges. Delivered by our experts. Optimising cost and adding value through 6 areas of delivery.',
    },
  ];

  // Background colors for titles
  const titleBgColors = [
    '#DCEEF0', // Tomato
    '#F38B14', // Steel Blue
    '#9DD14D', // Medium Sea Green
    '#B83389', // Gold
    '#634E42', // Orange Red
  ];

  // Function to set the active image
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container mx-auto p-4 md:px-20">
      <h3 className="text-4xl font-semibold text-[#29385E] text-center my-10">Image Sliders</h3>
      <div className="flex justify-between items-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative cursor-pointer rounded-xl transition-all duration-700 ease-in-out mx-2 ${
              activeIndex === index ? 'flex-[3]' : 'flex-[0.8]'
            } h-[75vh] bg-cover bg-center`}
            style={{ backgroundImage: `url(${image.url})` }}
            onClick={() => handleClick(index)}
          >
            {/* Show title for non-active images */}
            {activeIndex !== index && (
              <h3
                className="absolute left-10 bottom-8 text-white text-3xl font-bold opacity-100"
                style={{
                  backgroundColor: titleBgColors[index],  // Different background color for each title
                  padding: '10px 15px',
                  position: 'relative',   
                  bottom: '-200px',     
                  left: '0px',     
                  transform: 'rotate(180deg)',  
                  whiteSpace: 'nowrap',         
                  writingMode: 'vertical-rl',   
                }}
              >
                {image.title}
              </h3>
            )}

            {/* Show description for active image */}
            {activeIndex === index && (
              <div className="absolute bg-gradient-to-b from-[#181818c2] to-[#a19f9fcc] rounded-t-xl py-4 px-4">
                <p className="text-white text-xl font-medium opacity-100 transition-opacity duration-500 ease-in-out mb-2">
                    {image.title}
                </p>
                <p className="text-white text-md font-medium opacity-100 transition-opacity duration-500 ease-in-out">
                    {image.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
