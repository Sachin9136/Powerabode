import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Hero_banner } from "../Img/ImportedImage";

const CustomBanner = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          width: '100%',
        }}
      >
        <ul className="flex justify-center space-x-10">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: '50px',
          height: '2.5px',
          background: '#fff',
          margin: '0',
        }}
      ></div>
    ),
  };

  // Example banner slides data
  const banners = [
    {
      id: 1,
      image: Hero_banner,
    },
    {
      id: 2,
      image: Hero_banner,
    },
    {
      id: 3,
      image: Hero_banner,
    },
    // Add more slides as needed
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="relative">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomBanner;
