import React, { useState } from "react";

import {
  Column,
  Heading,
  Row,
  Span,
  Wraper,
  Button,
} from "../../components/ComponentsIndex";

import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import CommanBanner from "../../components/Banners/CommanBanner";
import Img_Slider from "../../components/Img_Slider/Img_Slider";
import { Find_the_gap_banner, Deliverdespitebudgetconstraints, CM, CVI_Logo, Evi, DeliverdespiteTable } from "../../components/Img/ImportedImage";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

const About_us = () => {

  const [activeSlide, setActiveSlide] = useState(0);

  const setting = {
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 3,
      focusOnSelect: true,
      dots: true,
      arrow: false,
      infinite: true,
      speed: 500,
      
      beforeChange: (current, next) => setActiveSlide(next), // track active slide
      responsive: [
      {
          breakpoint: 768,
          settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
          },
      },
      {
          breakpoint: 1024,
          settings: {
          slidesToShow: 3, // Show 3 slides on larger screens
          },
      },
      ],
  };

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480, 
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

  return (
    <>
      <CommanBanner className = "h-[700px] bg-cover bg-no-repeat" children={Find_the_gap_banner} blogheading={"blogheading"} />

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center'>Every Supply Chain has waste. We fix it!</h2>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <div className="block md:flex gap-5">
                <div className="w-full md:w-1/2">
                    <div className="flex justify-center">
                        <img className="w-full my-5" src={Deliverdespitebudgetconstraints} alt="" />
                    </div>
                    <h3 className="text-2xl text-[#1b3b64] text-center mb-5 font-normal">Find the gap!</h3>
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <h5 className="mb-3 text-2xl text-[#1b3b64]">Enhanced Value Improvement </h5>
                        <p className="mb-3">Our method of evi is the result of business understanding, accumulated field experience, the involvement of stakeholders through the ECMT, a deep dive in data and in the end, a lot of common sense. It has delivered double digit savings every time. The full version of evi can be embedded in your organisation through the Cost Leadership Program; ‘The Road to Cost Leadership’. Our program provides context with training, assesses your full portfolio and through building savings business cases also delivers implementation through our ‘One Stop Shop’ services to your bottom line.</p>
                        <p className="mb-3">In this case study we just show the element of evi. The fundamental point is this; Every Supply Chain has Waste. We Fix It.</p>
                        <h5 className="mb-3 text-2xl text-[#1b3b64]">The Brief </h5>
                        <p className="mb-3"> Due to budget constraints, the Client wanted to assess a contract category to find savings.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <div className="flex justify-center items-center mb-5">
                            <img className="w-72" src={Evi} alt="" />
                        </div>
                        <h5 className="mb-3 text-2xl text-[#1b3b64]">The Solution</h5>
                        <ul className="list-disc ml-5">
                            <li className="mb-2">Apply our evi program</li>
                            <li className="mb-2">20 in-depth analysis submitted; each one is a step on the road to Cost Leadership.</li>
                            <li className="mb-2">Extensive mind-map method applied to assess the delivery process of the contract vs intent.</li>
                            <li className="mb-2">Advanced modelling tool shaped the gap to potential.</li>
                            <li className="mb-2">Stakeholder alignment sought through scenario selection.</li>
                            <li className="mb-2">Compounded overview of Value and Savings submitted through business case.</li>
                            <li className="mb-2">Stakeholder alignment sought through scenario selection. The Result in Savings</li>
                            <li className="mb-2">Purchase order analysis: 22%</li>
                            <li className="mb-2">Non productive time: 17%</li>
                            <li className="mb-2">Time gap analysis using technical boundary: 36% graterthen Stock, storage & transportation: 15%</li>
                            <li className="mb-2">Rates and benchmark: 10%</li>
                        </ul>
                        <div className="flex justify-center items-center mb-5">
                            <img className="w-72" src={DeliverdespiteTable} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#29385E] font-Montserrat text-center'>More Articles & <span className="text-[#00ABB8]">Business Cases?</span></h2>
        </div>

        <Img_Slider />
        
        <div className="hidden md:flex">
            <ImageSlider />
        </div>

      <Footer />
    </>
  );
};

export default About_us;
