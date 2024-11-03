import React from "react";

const Card = ({ image, title, description, }) => {
  return (
    <div className="border-2 bg-[#51A9B433] rounded-lg shadow-lg px-4 py-5 mb-6 mx-3">
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h3 className="text-xl font-semibold my-2">{title}</h3>
      </div>
      <div>
        <p className="text-medium font-medium">{description}</p>
      </div>
    </div>
  );
};

export default Card;
