import React from "react";
import { Heading, Row } from "../ComponentsIndex";
import Img from "../Img/Img";

function CommanBanner({ children, heading, className = "", ...props }) {
  return (
    <Row className="relative">
      <Img
        children={children}
        className={`w-full h-56 object-cover ${className}`}
        {...props}
      />
      <Heading
        children={heading}
        className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold"
      />
    </Row>
  );
}

export default CommanBanner;
