import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Banner_slider1, Banner_slider_2, Banner_slider_3, Banner_slider_4, icons } from "../Img/ImportedImage";

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
      image: Banner_slider1,
      image2: icons,
      title: 'Driven by Energy',
      subtitle: 'Driven by Energy',
      description: 'Delivering value improvement & cost optimization.',
    },
    {
      id: 2,
      image: Banner_slider_2,
      image2: icons,
      title: 'Sustainable Solutions',
      subtitle: 'Driven by Energy',
      description: 'Innovating for a greener future.',
    },
    {
      id: 3,
      image: Banner_slider_3,
      image2: icons,
      title: 'Global Impact',
      subtitle: 'Driven by Energy',
      description: 'Expanding our reach worldwide.',
    },
    {
      id: 4,
      image: Banner_slider_4,
      image2: icons,
      title: 'Global Impact',
      subtitle: 'Driven by Energy',
      description: 'Expanding our reach worldwide.',
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="relative">
            <img className='absolute left-28 md:block' src={banner.image2} alt="" />
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full object-cover"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 flex items-center">
              <div className="text-center text-white animate-bubble ml-0 md:ml-20 px-8 py-10 lg:px-28 lg:py-48 bg-[linear-gradient(150deg,#00abb8,#1d345e)]">
              <h2 className="text-2xl lg:text-6xl mb-2" style={{ fontWeight: 300 }}>{banner.title}</h2>
                <p className="text-xl lg:text-xl font-medium">{banner.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomBanner;
