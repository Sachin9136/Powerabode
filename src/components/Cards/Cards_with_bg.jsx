import React from "react";
import { Link } from "react-router-dom";

// Card component that will be reusable
const Cards = ({ background, cardsContent }) => {
  // Utility function to limit title to 4 words
  const truncateTitle = (title) => {
    const words = title.split(" ");
    return words.length > 4 ? words.slice(0, 4).join(" ") + "..." : title;
  };

  return (
    <div 
      className="container mt-10 mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px] w-full bg-cover bg-no-repeat mb-[900px] md:mb-[200px]" 
      style={{ backgroundImage: `url(${background})` }}
    >
        <div className="relative top-10 px-4">
            <h3 className="text-3xl text-[#1b3b64] font-medium pl-0 md:pl-20">Related Articles and Case Studies</h3>
        </div>

        <div className="relative top-10 md:top-80 px-4">
            <h3 className="text-3xl text-[#1b3b64] font-medium pl-0 md:pl-20">Top <span className="text-[#00abb8]">Articles</span> & <span className="text-[#00abb8]">Case Studies</span></h3>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4 md:px-2 lg:px-20 py-10">
        
        {/* Dynamically render cards */}
        {cardsContent.map((card, index) => (
          <Link to={`/${card.link}`}>
          <div 
            key={index}
            className="relative group w-full h-80 md:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 mt-10 md:mt-80 lg:mt-80"
          >
            {/* Image part */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>

            {/* Title Overlay visible by default */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-40 backdrop-blur-md  p-4 transition-all duration-500 group-hover:opacity-0 rounded-t-3xl">
              <h3 className="text-white text-xl md:text-xl font-medium mb-6">
                {truncateTitle(card.title)}
              </h3>
            </div>

            {/* Full Overlay appears on hover with the full title */}
            <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md group-hover:bg-opacity-40 transition-all duration-500 text-white flex flex-col justify-center items-center p-6 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold mb-2 text-start">{card.title}</h3>
              <p className="text-base md:text-md font-semibold text-start text-white">
                {card.description}
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
