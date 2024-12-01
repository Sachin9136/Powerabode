import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation for routing
import { Heading, Row } from "../ComponentsIndex";
import Img from "../Img/Img";
import { CM_for_Contract_1 } from "../Img/ImportedImage";

function CommanBanner({
  heading,
  subheading,
  blogheading,
  className = "",
  ...props
}) {
  const location = useLocation(); // Get current route

  // Check if the current route matches the desired one
  const isSuccessFormulaRoute =
    location.pathname === "/success-formula-disruptive-and-controlled";

  return (
    <Row className="relative w-full">
      <Img className={`w-full object-cover ${className}`} {...props} />
      {/* Content div with responsive positioning */}
      <div className="md:block hidden slideInRight">
        <div className="rounded-l-md absolute p-5 bg-[#1d345ec9] w-full h-auto md:w-5/12 md:h-auto md:bottom-32 md:right-0 flex flex-col justify-center items-center md:items-start md:text-left">
          <Heading className="text-white  text-3xl  shadow-md md:shadow-none caption-top">
            {heading}
          </Heading>
          <p className="text-white text-lg mt-2 shadow-md md:shadow-none">
            {subheading}
          </p>
        </div>
        <div className="absolute p-5 w-full h-auto md:w-1/2 md:h-auto md:bottom-32 md:right-0 flex flex-col justify-center items-center">
          <p className="text-white text-lg">{blogheading}</p>
        </div>
      </div>

      {/* Conditionally render the image for a specific route */}
      {isSuccessFormulaRoute && (
        <div className="hidden md:block">
<div className=" absolute left-16 top-52 transform -translate-x-0 -translate-y-1/2 p-5 digital-platform-logoCodex">
        <p className="text-5xl text-white">
          Delivering value <br /> improvement & <br /> cost reduction of{" "}
          <br /> 20-30%
        </p>
      </div>
        </div>
        
      
      )}
    </Row>
  );
}

export default CommanBanner;
