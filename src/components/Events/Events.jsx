import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../components/ComponentsIndex"; 
import { getallEvent } from "../../ReduxToolkit/Slice/Events";
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

const EventApi = () => {
  // API call setup
  const dispatch = useDispatch();
  const { events, status } = useSelector((state) => state.event);

  // Fetch stories on component load
  useEffect(() => {
    if (status === "idle") {
      dispatch(getallEvent());
    }
  }, [dispatch, status]);

  // Slick slider settings
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      {events?.data && events.data.length > 0 ? ( 
        <Slider {...settings} className="w-[90%] p-0 m-0">
          {events.data.map((event, index) => (
            <div key={index} className="">
                <div className="card-slider py-10 px-3">
                    <div className="">
                        <img className="h-96 rounded-t-lg object-cover" src={(event.Image)} alt="Image 1" width="100%"/>
                    </div>
                    <div className="card-text-area rounded-b-lg px-3 pt-3 pb-7 content-center">
                        <h3 className="text-3xl font-bold text-center capitalize">{event.Name}</h3>
                        <div className='flex justify-center mt-5'>
                            <Button 
                                type="button"
                                className="rounded-lg py-2 px-5 text-md font-semibold text-black"
                                id="menu-button"
                            >
                                Join Us
                            </Button>
                        </div>
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

export default EventApi;
