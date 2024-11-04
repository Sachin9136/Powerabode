import React from "react";

const Card = ({ image, title, isCenter }) => {
  return (
    <div >
      <div>
        <img
          src={image}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Card;
