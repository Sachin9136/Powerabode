import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Supply_chain, OPEX, Codex, CM, Academy, Cost_and_Value } from '../../components/Img/ImportedImage';

const CustomSlider = () => {
  // Custom Next Arrow
  const NextArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 right-[-15px] z-10 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
      >
        <MdChevronRight size={30} />
      </button>
    );
  };

  // Custom Prev Arrow
  const PrevArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 left-[-15px] z-10 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
      >
        <MdChevronLeft size={30} />
      </button>
    );
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Sample banner data
  const banners = [
    {
      id: 1,
      image: Supply_chain, // replace with actual image path
      title: 'Commercial Assurance',
    },
    {
      id: 2,
      image: OPEX, // replace with actual image path
      title: 'Some Other Assurance',
    },
    {
      id: 3,
      image: Codex, // replace with actual image path
      title: 'Category Strategy & Contract Strategy',
    },
    {
      id: 4,
      image: CM, // replace with actual image path
      title: 'Category Strategy',
    },
  ];

  return (
    <div className="relative mx-auto max-w-7xl px-4">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="p-4">
            <div className="relative group">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-[300px] object-cover rounded-lg shadow-md"
              />
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white rounded-b-lg">
                <h3 className="text-lg font-semibold">{banner.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
