import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../components/ComponentsIndex"; 
import { getallStory } from "../../ReduxToolkit/Slice/our_story";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import left from "../../../src/assets/Img/left.png";
import right from "../../../src/assets/Img/right.png";

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

const StoryApi = () => {
  // API call setup
  const dispatch = useDispatch();
  const { stories, status } = useSelector((state) => state.story);

  // Fetch stories on component load
  useEffect(() => {
    if (status === "idle") {
      dispatch(getallStory());
    }
  }, [dispatch, status]);

  // Function to capitalize the first letter of each word
  const capitalizeWords = (text) => {
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // Function to limit text to a certain number of words
  const limitWords = (text, wordLimit) => {
    return text.split(" ").slice(0, wordLimit).join(" ");
  };

  // Slick slider settings
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />, // Use custom next arrow
    prevArrow: <CustomPrevArrow />, // Use custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
      {stories?.data && stories.data.length > 0 ? ( 
        <Slider {...settings} className="w-[92%] p-0 m-0">
          {stories.data.map((story, index) => (
            <div key={index} className="">
              <div className="card-slider py-10 px-5">
                <div className="bg-[#06B13D] rounded-t-lg h-[250px] overflow-hidden">
                  <img src={story.Image} alt="Story" />
                </div>
                <div className="bg-[#06B13D] rounded-b-lg px-3 pt-3 pb-7">
                  <h3 className="text-2xl font-semibold card-slider-title">
                    {capitalizeWords(limitWords(story.Name, 2))} {/* Capitalize and limit to 2 words */}
                  </h3>
                  <p className="text-xl font-medium py-2">
                    {limitWords(story.description, 20)} {/* Limit to 20 words */}
                  </p>
                </div>
                <div className="flex justify-center -mt-7">
                  <Button
                    type="button"
                    className="rounded-lg py-2 px-5 text-md font-semibold text-black"
                    id="menu-button"
                  >
                    Read More
                  </Button>
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

export default StoryApi;
