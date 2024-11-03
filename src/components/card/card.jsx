import React from "react";

const Card = ({ image, title, description, articleText, readText, onArticleClick, onReadClick }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 border-2 bg-[#51A9B433] rounded-lg shadow-lg px-4 py-5 mb-6">
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <h3 className="text-xl font-semibold my-2">{title}</h3>
      </div>
      <div>
        <p className="text-medium font-medium">{description}</p>
      </div>
      <div className="mt-3 flex justify-between">
        <button
          className="border-2 border-[#29385E] rounded-full py-2 px-8 text-md text-[#29385E]"
          onClick={onArticleClick}
        >
          {articleText}
        </button>
        <button
          className="border-2 border-[#448D96] rounded-full py-2 px-8 text-md bg-[#448D96] text-white"
          onClick={onReadClick}
        >
          {readText}
        </button>
      </div>
    </div>
  );
};

export default Card;
