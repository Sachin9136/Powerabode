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
  const location = useLocation();

  const isSuccessFormulaRoute =
    location.pathname === "/success-formula-disruptive-and-controlled";

  return (
    <Row className="relative w-full h-screen">
      {/* Background Image */}
      <Img className={`w-full h-full object-cover ${className}`} {...props} />
      <div className="md:block hidden slideInRight">
        <div>
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
      </div>

      {/* Mobile Content */}
      <div className="block md:hidden absolute inset-0 flex items-center p-5 justify-center">
        <div className=" text-white bg-[#1d345ec9] p-5 rounded">
          <Heading className="text-2xl font-bold">{heading}</Heading>
          <p className="text-lg mt-2 text-white">{subheading}</p>
          <p className="text-sm mt-2 text-white">{blogheading}</p>
        </div>

        {/* Special Content for Specific Route */}
        {isSuccessFormulaRoute && (
          <div className="absolute inset-x-0 bottom-8 p-5">
            <p className="text-3xl text-white text-center font-semibold leading-tight">
              Delivering value <br /> improvement & <br /> cost reduction of{" "}
              <br /> 20-30%
            </p>
          </div>
        )}
      </div>
    </Row>
  );
}


export default CommanBanner;
