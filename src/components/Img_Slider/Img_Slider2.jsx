import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
    Lion, Pins, Eagle, Paper, Pipes, CategoryStrategy, Lighting,
    Cycle,
    Snow,
    Find_the_gap,
    Island,
    Tower,
    Scm,
    DNA,
    Racks,
    Boxes,
    Structure,
    Google,
    Mountains,
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
        isCenter ? "scale-100 z-10 opacity-100" : "scale-90"
      }`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[300px] object-cover rounded-lg"
      />
      {!isCenter && (
        <div className="absolute bottom-0 w-full text-white p-2 text-center bg-black bg-opacity-50 mb-5">
          <h3 className="text-lg font-bold  ">{title}</h3>
        </div>
      )}
    </div>
  );
};

const CustomSlider = () => {
  const [activeSlide, setActiveSlide] = useState(2); // Default the middle slide as active initially

  const settings = {
    centerMode: true,
    dots: true,
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
        image: Lion,
        title: "Hidden in Plain sight",
        description: "Crazy as it may sound; there’s always an elephant in the room.. Central in our way of work are the users of the contract, the ECMT. They are underestimated as a platform. 9 Quote: Our Experts know your business",
        link: "/hidden-in-plain-sight"
      },
      {
        image: Cycle,
        title: "Conflict or Conflicting KPI’s?",
        description: "Working as a team. That’s what we do. But how do we know we are all aligned? Conflicting KPI’s cause massive inefficiencies. Who needs enemies if you have friends? powerabode can...",
        link: "/conflict-or-conflicting-KPI"
      },
      {
        image: Snow,
        title: "Deliver as Planned",
        description: "Sometimes ‘surprises’ are actually predictable. The top 5 of ‘predictable’ surprises...",
        link: "/deliver-as-planned"
      },
      {
        image: Find_the_gap,
        title: "Deliver despite budget constraints",
        description: "Every supply chain has waste, we fix it. Complex analyses using our CI Philosophy, double digit improvement to your budget and opex, value optimisation...",
        link: "/deliver-despite-budget"
      },
      {
        image: Island,
        title: "Does focus on rates make sense?",
        description: "Cost Leadership will remain one of top 3 focus areas of Energy Industry for next decade. We excel in this area",
        link: "/focus-on-rates"
      },
      {
        image: Tower,
        title: "Drilling Cost Transformation",
        description: "Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model…",
        link: "/drilling-cost-transformationblog"
      },
      {
        image: Scm,
        title: "Getting the supply chain management and procurement system right",
        description: "Off the shelf we developed a Codex system to support your delivery. Front line experts will adapt it for you, with a view...",
        link: "/supply-chain-management"
      },
      {
        image: DNA,
        title: "How the DNA of your procurement department sets its performance",
        description: "Is your function led by operations? By finance? Projects? Legal? They bring their DNA. We transform it to one driven by commercial DNA, getting cost and value efficiency...",
        link: "/procurement-department"
      },
      {
        image: Racks,
        title: "Materials Management; a showstopper or a money maker?",
        description: "As an asset gets older, how to keep performing? Increased pressure on maintenance, legacy parts.",
        link: "/materials-management-blog"
      },
      {
        image: Boxes,
        title: "Misalignment with the business plan.",
        description: "Not everyone knows the businessplan. This information is confidential or under evaluation. But, in the operations latest information is key for opex and capex decisions. How to deal with misalignment?...",
        link: "/misalignment-with-business"
      },
      {
        image: Structure,
        title: "Unlocking Value to your bottom line",
        description: "Identifying a saving potential is a small step. The bigger thing is to bring it to your bottomline. We use the Integrated Supply Chain, the structure of our Cost Intelligence Philosophy and the people that use the contract to…",
        link: "/unlocking-value-bottom"
      },
      {
        image: CategoryStrategy,
        title: "Strategic Sourcing is not a Sourcing Strategy",
        description: "Reducing cost is an art. Our Experts are not classic ‘consultants’. They had long careers in Category Management and Front-line Operations at various IOCs formulating many Category and Contracting strategies.",
        link: "/strategic-sourcing"
      },
      {
        image: Google,
        title: "The synergy of local content development",
        description: "NOC’s have a close connect to the economic development of their country. Our services empower and progress the commercial control on Capex and Opex, but also weave in local content. NOC’s are supported on their journey to become independent operators. We have strong…",
        link: "/local-content-development"
      },
      {
        image: Mountains,
        title: "The art of the deal.",
        description: "Tendering and outsourcing are where a big impact is created for future performance. Call it the art of the deal. One of our SLA service…",
        link: "/the-art-of-deal"
      },
  ];

  return (
    <div className="px-4 md:px-20 my-10">
      {/* Image Slider */}
      <Slider {...settings} className="custom-dots">
        {slidesData.map((slide, index) => (
          <div key={index}>
            <a href={slide.link}>
              <ImgSlider
                className="w-[100%] h-[500px] mx-2 rounded-xl"
                image={slide.image}
                title={slide.title}
                isCenter={activeSlide === index} // Center the slide based on its index
              />
            </a>
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
