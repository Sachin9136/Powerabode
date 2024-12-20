import React from "react";
import { Lion, Structure, Strategy } from "../../components/Img/ImportedImage"; // Assuming these are imported correctly

const Cards = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4 md:px-20 py-10">
        {/* First Card with Structure Image */}
        <a
          href="/blog-articles-business-cases/Unlocking-value-savings-bottom-line"
          rel="noopener noreferrer"
          className="relative group w-full h-80 md:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-lg transition-all duration-500"
        >
          {/* Image part */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${Structure})` }}
          ></div>

          {/* Title Overlay visible by default */}
          <div className="absolute bottom-0 w-full bg-black bg-opacity-40 backdrop-blur-md p-4 transition-all duration-500 group-hover:opacity-0 rounded-t-xl">
            <h3 className="text-white text-xl md:text-2xl font-bold">
              Unlocking value to your bottom line
            </h3>
          </div>

          {/* Full Overlay appears on hover with slide-up animation */}
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md group-hover:bg-opacity-40 transition-all duration-500 text-white flex flex-col justify-center items-center p-6 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 rounded-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">
              Unlocking value to your bottom line
            </h3>
            <p className="text-base md:text-lg font-semibold text-center text-white">
              Identifying a saving potential is a small step. The bigger thing
              is to bring it to your bottomline. We use the Integrated Supply
              Chain, the structure of our Cost Intelligence Philosophy...
            </p>
          </div>
        </a>

        {/* Second Card with Strategy Image */}
        <a
          href="/articles-business-cases/sourcing-strategy"
          rel="noopener noreferrer"
          className="relative group w-full h-80 md:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-lg transition-all duration-500"
        >
          {/* Image part */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${Strategy})` }}
          ></div>

          {/* Title Overlay visible by default */}
          <div className="absolute bottom-0 w-full bg-black bg-opacity-40 backdrop-blur-md p-4 transition-all duration-500 group-hover:opacity-0 rounded-t-xl">
            <h3 className="text-white text-xl md:text-2xl font-bold">
              Strategic Sourcing is not Sourcing Strategy
            </h3>
          </div>

          {/* Full Overlay appears on hover with slide-up animation */}
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md group-hover:bg-opacity-40 transition-all duration-500 text-white flex flex-col justify-center items-center p-6 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">
              Strategic Sourcing is not Sourcing Strategy
            </h3>
            <p className="text-base md:text-lg font-semibold text-center text-white">
              Digitisation is key, but good old human intelligence is still key
              in defining the strategy. Artificial Intelligence is quickly
              gaining pace, but...
            </p>
          </div>
        </a>

        {/* Third Card with Lion Image */}
        <a
          href="/blog-articles-business-cases/Solutions-to-influence-cost"
          rel="noopener noreferrer"
          className="relative group w-full h-80 md:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-lg transition-all duration-500"
        >
          {/* Image part */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${Lion})` }}
          ></div>

          {/* Title Overlay visible by default */}
          <div className="absolute bottom-0 w-full bg-black bg-opacity-40 p-4 transition-all duration-500 group-hover:opacity-0 rounded-t-xl">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-8">
              Hidden in Plain Sight
            </h3>
          </div>

          {/* Full Overlay appears on hover with slide-up animation */}
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md group-hover:bg-opacity-40 transition-all duration-500 text-white flex flex-col justify-center items-center p-6 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">
              Hidden in Plain Sight
            </h3>
            <p className="text-base md:text-lg font-semibold text-center text-white">
              Crazy as it may sound; there’s always an elephant in the room..
              Central in our way of work are the users of the contract, the
              ECMT...
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Cards;
