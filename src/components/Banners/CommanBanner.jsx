import React from "react";
import { Heading, Row } from "../ComponentsIndex";
import Img from "../Img/Img";

function CommanBanner({
  heading,
  subheading,
  blogheading,
  className = "",
  ...props
}) {
  return (
    <Row className="relative w-full">
      <Img
        className={`w-full object-cover ${className}`}
        {...props}
      />
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
            <p className="text-white text-lg">
              {blogheading}
            </p>
          </div>
      </div>
      

    </Row>
  );
}

export default CommanBanner;
