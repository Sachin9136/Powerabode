import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getallProgramme } from "../../ReduxToolkit/Slice/Programme";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Slick slider CSS
import "slick-carousel/slick/slick-theme.css"; // Slick slider theme
import { Link } from "react-router-dom";

const prorammeApi = () => {
  // API call setup
  const dispatch = useDispatch();
  const { programs, status } = useSelector((state) => state.programme);

  // Fetch stories on component load
  useEffect(() => {
    if (status === "idle") {
      dispatch(getallProgramme());
    }
  }, [dispatch, status]);

  // Slick slider settings
  const settings = {
    dots: true, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 4 ,
    slidesToScroll: 1,
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
    <div className="px-4 md:px-10 lg:px-20">
      {programs?.data && programs.data.length > 0 ? (
        <Slider {...settings}>
          {programs.data.map((programme, index) => ( 
            <Link to={`/service/${programme._id}`} key={programme._id}>
              <div key={index} className="px-5 py-10 border-l-2 border-black">
                  <div className="flex">
                      <div className="card-slider">
                          <div className=" rounded-t-lg my-5 px-3">
                              <img className="bg-cover w-20" src={programme.Image} alt="Story"/>
                          </div>
                          <div className="text-3xl font-bold capitalize ">
                              {programme.Name}
                          </div>
                      </div>
                  </div>
              </div>
            </Link>
          ))}
        </Slider>
      ) : (
        <div>No stories available</div>
      )}
    </div>
  );
};

export default prorammeApi;
