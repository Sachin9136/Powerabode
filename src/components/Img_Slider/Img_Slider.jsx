import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  Pins, Eagle, Paper, Pipes, CategoryStrategy, Lighting
} from "../Img/ImportedImage";

// Custom Previous Arrow Component
const PrevArrow = ({ onClick }) => (
  <div className="slick-prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => (
  <div className="slick-next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const ImgSlider = ({ image, title, isCenter }) => {
  return (
    <div
      className={`relative transition-all duration-500 ease-in-out ${
        isCenter ? "scale-105 z-10 opacity-100" : "scale-95"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[300px] object-cover rounded-lg"
      />
      {!isCenter && (
        <div className="absolute bottom-0 w-full text-white p-2 text-center">
          <h3 className="text-lg font-bold bg-black bg-opacity-50">{title}</h3>
        </div>
      )}
    </div>
  );
};

const CustomSlider = () => {
  const [activeSlide, setActiveSlide] = useState(2); // Default the middle slide as active initially

  const settings = {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3, // Default to 3 slides for larger screens
    infinite: true,
    speed: 500,
    autoplay: true, // Auto-start the slider
    autoplaySpeed: 3000, // Change slide every 3 seconds (3000 ms)
    beforeChange: (current, next) => setActiveSlide(next), // Updates active slide
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 2, // Start with the second image in focus
    responsive: [
      {
        breakpoint: 1024, // Screens smaller than 1024px (tablets)
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
          centerPadding: "40px", // Add padding to center mode on smaller screens
        },
      },
      {
        breakpoint: 768, // Screens smaller than 768px (mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          centerPadding: "20px", // Add padding to center mode on mobile
        },
      },
    ],
  };

  const slidesData = [
    {
      image: Pipes,
      title: "Materials Management",
      description: "The right goods at the right place, at the right time. Today, but also in 5 years. Is Materials Management a cost, or can it make you money?",
    },
    {
      image: Eagle,
      title: "Commercial Assurance",
      description: "We identify a wide range of commercial risks and assess & control those out of your contracts. It increases transparency, enhances performance and increases overall control. We are very much an assurance company.",
    },
    {
      image: Paper,
      title: "Cost Recovery",
      description: "It always surprises us. Cost recovery is carried out by people that understand numbers, but don’t understand the field and the contracts. Or, even worse, people that understand the contract, but not the numbers. Not with us. We offer a process with high impact.",
    },
    {
      image: CategoryStrategy,
      title: "Category Strategy & Contract Strategy",
      description: "Reducing cost is an art. Our Experts are not classic ‘consultants’. They had long careers in Category Management and Front-line Operations at various IOCs formulating many Category and Contracting strategies.",
    },
    {
      image: Pins,
      title: "Tendering & Outsourcing",
      description: "Procurement is done in-house by most of our Clients.With involvement of our experts, tools and systems the results improve significantly.",
    },
    {
      image: Lighting,
      title: "Post Award Contract Management",
      description: "Underrated and little loved. But delivery is heavily impacted by Post-Award Contract Management. Being on top of it. Discipline. Also understanding the scope and the performance drivers. Working with all stakeholders.",
    },
  ];

  return (
    <div className="px-4 md:px-20 my-10">
      {/* Image Slider */}
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index}>
            <ImgSlider
              className="w-[100%] h-[500px] mx-2 rounded-xl"
              image={slide.image}
              title={slide.title}
              isCenter={activeSlide === index} // Center the slide based on its index
            />
          </div>
        ))}
      </Slider>

      {/* Display Content for the Center (Highlighted) Slide */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold text-[#1b3b64]">
          {slidesData[activeSlide].title}
        </h2>
        <p className="text-md text-gray-600">
          {slidesData[activeSlide].description}
        </p>
      </div>
    </div>
  );
};

export default CustomSlider;
