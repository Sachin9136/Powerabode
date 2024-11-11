import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Hero_banner } from "../Img/ImportedImage";

const BannerSlider = () => {
  // Manual list of banner images and details
  const banners = [
    {
      id: 1,
      image: Hero_banner, 
      name: "Support Education",
    },
    {
      id: 2,
      image: Hero_banner, 
      name: "Healthcare Assistance",
    },
    {
      id: 3,
      image: Hero_banner, 
      name: "Empower Communities",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative">
      {banners && banners.length > 0 ? (
        <Slider {...settings} className="overflow-hidden">
          {banners.map((banner) => (
            <div key={banner.id} className="relative">
              {/* Directly display the image */}
              <img
                src={banner.image}
                alt={banner.name}
                className="w-full h-[510px] lg:h-[770px] object-cover"
              />
              {/* Optional overlay effect */}
              <div className="absolute inset-0 opacity-40"></div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="text-center">No banners available</div>
      )}
    </div>
  );
};

export default BannerSlider;
