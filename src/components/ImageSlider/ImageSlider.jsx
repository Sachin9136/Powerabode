import React, { useState } from "react";
import { slider_1, slider_2, slider_3, slider_4, slider_5 } from '../../components/Img/ImportedImage';

export default function ImageSlider() {
  // Define the state for the active index
  const [activeIndex, setActiveIndex] = useState(0); // Default active image is the first one

  // Image data for the slider
  const images = [
    {
      url: slider_1,
      title: 'Services',
      description: 'Supply Chain by SLA. Home for Category Management and Supply Chain Challenges. Delivered by our experts. Optimising cost and adding value through 6 areas of delivery.',
      caseStudies: 'We carry out and deliver; for operations, maintenance, projects and production. Delivery is underpinned by our powerabode Codex, our productised services, training, and off course the experts who all had mileage with IOC’s working in the field. In everything powerabode does, the focus is on Cost Leadership for you.',
    },
    {
      url: slider_2,
      title: 'Program',
      description: 'Supply Chain by SLA. Home for Category Management and Supply Chain Challenges. Delivered by our experts. Optimising cost and adding value through 6 areas of delivery.',
      caseStudies: 'We are organised around three activities, that support and complement each other: Supply Chain by SLA; for all your Supply Chain/Procurement activities Programs; Secondly, the third party cost Program, The Road to Cost Leadership . And, lastly the support by our training section; powerabode Academy. ',
    },
    {
      url: slider_3,
      title: 'Academy',
      description: 'Supply Chain by SLA. Home for Category Management and Supply Chain Challenges. Delivered by our experts. Optimising cost and adding value through 6 areas of delivery.',
      caseStudies: 'We understand the commercials of energy supply chains better then anyone. Our philosophy of cost intelligence delivers cost efficiency. It’s not just about reducing rates, efficiency and specification will bring savings as well.',
    },
    {
      url: slider_4,
      title: 'Thinking',
      description: 'Supply Chain by SLA. Home for Category Management and Supply Chain Challenges. Delivered by our experts. Optimising cost and adding value through 6 areas of delivery.',
      caseStudies: 'Off the Shelf. Comprehensive management system. Adapted to your organisation. For better Compliance and Governance. Including procedures, forms, work instructions and cost efficiency tips. This is a great system for new energy assets and NOC’s.',
    },
    {
      url: slider_5,
      title: 'CODEX',
      description: 'Supply Chain by SLA. Home for Category Management and Supply Chain Challenges. Delivered by our experts. Optimising cost and adding value through 6 areas of delivery.',
      // caseStudies: 'Case study for CODEX: How CODEX helps streamline supply chain challenges.',
    },
  ];

  // Background colors for titles
  const titleBgColors = [
    '#DCEEF0', // Light Blue
    '#F38B14', // Orange
    '#9DD14D', // Light Green
    '#B83389', // Pink
    '#634E42', // Brown
  ];

  // Function to set the active image on hover
  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container mx-auto p-4 md:px-10 lg:px-36">
      <h3 className="text-4xl font-semibold text-[#29385E] text-center my-10">Image Sliders</h3>
      
      {/* Slider container */}
      <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative cursor-pointer rounded-xl transition-all duration-700 ease-in-out mx-3 ${
              activeIndex === index ? 'flex-[2]' : 'flex-[0.8]'
            } h-[500px] md:h-[550px] bg-cover bg-center`}
            style={{ backgroundImage: `url(${image.url})` }}
            onMouseEnter={() => handleMouseEnter(index)} // Change from onClick to onMouseEnter
          >
            {/* Show title for non-active images */}
            {activeIndex !== index && (
              <h3
                className="absolute left-4 bottom-4 md:left-10 md:bottom-8 text-white text-2xl md:text-3xl font-bold opacity-100"
                style={{
                  backgroundColor: titleBgColors[index],  // Different background color for each title
                  padding: '20px 10px',
                  position: 'relative',   
                  bottom: '-320px',     
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
                <p className="text-white text-md md:text-2xl font-medium opacity-100 transition-opacity duration-500 ease-in-out mb-2">
                    {image.title}
                </p>
                <p className="text-white text-md md:text-lg font-medium opacity-100 transition-opacity duration-500 ease-in-out tracking-tight md:tracking-widest">
                    {image.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Case Studies Section */}
      <div className=" p-6">
        <p className="text-lg text-gray-700">
          {images[activeIndex].caseStudies}
        </p>
      </div>
    </div>
  );
}
