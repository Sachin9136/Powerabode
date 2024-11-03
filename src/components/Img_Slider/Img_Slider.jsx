import React from "react";

const Card = ({ image, title, isCenter }) => {
  return (
    <div className={`mb-6 mx-3 ${isCenter ? "transform scale-110" : ""}`}>
      <div>
        <img
          src={image}
          alt={title}
          className={`w-full ${isCenter ? "h-[250px]" : "h-[240px]"}`}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Card;
