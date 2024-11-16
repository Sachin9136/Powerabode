import React from "react";
import { Lion, Structure, Strategy } from "../../components/Img/ImportedImage"; // Assuming these are imported correctly

const Cards = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* First Card with Structure Image */}
        <div className="relative group w-full h-80 md:h-60 lg:h-80 rounded-lg overflow-hidden shadow-lg transition-all duration-500">
          {/* Image part */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Structure})` }}></div>

          {/* Title Overlay visible by default */}
          <div className="absolute bottom-0 w-full bg-[#35322ffe] p-4 transition-all duration-500 group-hover:opacity-0 rounded-t-xl">
            <h3 className="text-white text-2xl font-bold">Unlocking value to your bottom line</h3>
          </div>

          {/* Full Overlay appears on hover with slide-up animation */}
          <div className="absolute inset-0 bg-[#35322ffe] bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500 text-white flex flex-col justify-center items-center p-6 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
            <h3 className="text-2xl font-bold mb-2">Unlocking value to your bottom line</h3>
            <p className="text-lg font-semibold">
            Dentifying a saving potential is a small step. The bigger thing is to bring it to your bottomline. We use the Integrated Supply Chain, the structure of our Cost Intelligence Philosophy and the people that use the contract to…
            </p>
          </div>
        </div>

        {/* First Card with Structure Image */}
        <div className="relative group w-full h-80 md:h-60 lg:h-80 rounded-lg overflow-hidden shadow-lg transition-all duration-500">
          {/* Image part */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Strategy})` }}></div>

          {/* Title Overlay visible by default */}
          <div className="absolute bottom-0 w-full bg-[#35322ffe] p-4 transition-all duration-500 group-hover:opacity-0 rounded-t-xl">
            <h3 className="text-white text-2xl font-bold">Strategic Sourcing is not Sourcing Strategy</h3>
          </div>

          {/* Full Overlay appears on hover with slide-up animation */}
          <div className="absolute inset-0 bg-[#35322ffe] bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500 text-white flex flex-col justify-center items-center p-6 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
            <h3 className="text-2xl font-bold mb-2">Strategic Sourcing is not Sourcing Strategy</h3>
            <p className="text-lg font-semibold">
            Digitisation is key, but good old human intelligence is still key in defining the strategy. Artificial Intelligence is quickly gaining pace, but...
            </p>
          </div>
        </div>

                {/* First Card with Structure Image */}
        <div className="relative group w-full h-80 md:h-60 lg:h-80 rounded-lg overflow-hidden shadow-lg transition-all duration-500">
          {/* Image part */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Lion})` }}></div>

          {/* Title Overlay visible by default */}
          <div className="absolute bottom-0 w-full bg-[#35322ffe] p-4 transition-all duration-500 group-hover:opacity-0 rounded-t-xl">
            <h3 className="text-white text-2xl font-bold mb-8">Hidden in Plain Sight</h3>
          </div>

          {/* Full Overlay appears on hover with slide-up animation */}
          <div className="absolute inset-0 bg-[#35322ffe] bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500 text-white flex flex-col justify-center items-center p-6 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
            <h3 className="text-2xl font-bold mb-2">Hidden in Plain Sight</h3>
            <p className="text-lg font-semibold">
            Crazy as it may sound; there’s always an elephant in the room.. Central in our way of work are the users of the contract, the ECMT. They are underestimated as a platform. 9 Quote: Our Experts know your business
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards;
