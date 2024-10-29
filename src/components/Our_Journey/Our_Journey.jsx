import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import left from "../../../src/assets/Img/left.png";
import right from "../../../src/assets/Img/right.png";
import { Journy_highlights } from "../../components/Img/ImportedImage"; 

// Custom Arrow Component
const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={right}
      alt="Next"
      className={className}
      style={{ ...style, position: "absolute", width: "90px", height: "90px" }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
    src={left} 
      alt="Previous"
      className={className}
      style={{ ...style, position: "absolute", width: "90px", height: "90px", zIndex: 99 }}
      onClick={onClick}
    />
  );
};

const OurJourey = () => {
  // API call setup
  const dispatch = useDispatch();
//   const { stories, status } = useSelector((state) => state.story);
  const stories = [
    {
      id: 1,
      img: Journy_highlights,
    },
    {
        id: 2,
        img: Journy_highlights,
      },
  ];
  // Slick slider settings
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />, // Use custom next arrow
    prevArrow: <CustomPrevArrow />, // Use custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center">
      {stories && stories.length > 0 ? ( 
        <Slider {...settings} className="w-[92%] p-0 m-0">
          {stories.map((story, index) => (
            <div key={index} className="">
              <div className="card-slider py-10 px-5">
                <div className=" rounded-t-lg">
                  <img src={story.img} alt="Story" width="100%" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div>No stories available</div>
      )}
    </div>
  );
};

export default OurJourey;
