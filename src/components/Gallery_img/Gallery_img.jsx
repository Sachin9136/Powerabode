import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../components/ComponentsIndex"; // Assuming Button component is imported like this
import { getAllGallery } from "../../ReduxToolkit/Slice/Gallery";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css"; // Slick slider CSS
import "slick-carousel/slick/slick-theme.css"; // Slick slider theme
import logo from "../../assets/Img/logo.svg";

const galleryApi = () => {
  // API call setup
  const dispatch = useDispatch();
  const { galleries, status } = useSelector((state) => state.gallery);

  // Fetch stories on component load
  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllGallery());
    }
  }, [dispatch, status]);

  // Slick slider settings
  const settings = {
    dots: true, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
      {galleries?.data && galleries.data.length > 0 ? (
        <Slider {...settings}>
          {galleries.data.map((gallery, index) => ( 
            <div key={index} className="px-5 py-10">
                <div className="flex">
                    <div className="card-slider w-full">
                        <div className="bg-[#06B13D] rounded-t-lg">
                            <img className="h-64 bg-cover w-full object-cover" src={gallery.Image} alt="Story" />
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

export default galleryApi;
