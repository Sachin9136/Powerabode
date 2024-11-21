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
import { Structure_bannerjpg, Smart, CM, CVI_Logo, Intelligence, EMCT_circle, EMCT_bar } from "../../components/Img/ImportedImage";
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
      <CommanBanner className = "h-[700px] bg-cover bg-no-repeat" children={Structure_bannerjpg} blogheading={"blogheading"} />

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center'>The triangle of our Cost & Value Philosophy</h2>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <div className="block md:flex gap-5">
                <div className="w-full md:w-1/2">
                    <div className="flex justify-center">
                        <img className="w-72" src={Intelligence} alt="" />
                    </div>
                    <h5 className="mb-3 text-2xl text-[#1b3b64] text-center my-5">Integrated Supply Chain (ISC), Extended Contract Management team (ECMT) and Cost and Value Intelligence (CVI)</h5>
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <p className="mb-3">Our Supply Chain by SLA, the program to reduce opex/capex 'The Road to Cost Leadership’ and the training modules in powerabode academy are the direct result of the underlying philosophy of Cost and Value Intelligence. They all unlock savings and value. The philosophy itself has three cornerstones. This article explains their background.</p>
                        <p className="mb-3">Energy companies work like eco-systems. The Integrated Supply Chain (ISC) represents the interdependency and synergy between various disciplines, departments, processes, and systems within that company’s eco-system. We recognise the Integrated Supply Chain as the first cornerstone in our Philosophy of C&V Intelligence.</p>
                        <div className="flex justify-center my-5">
                            <img src={EMCT_circle} alt="" />
                        </div>
                        <p className="mb-3">Work is executed with the involvement of multidisciplinary teams. These teams and departments directly and indirectly influence all Contracts. We recognise that a selection of them form the Extended Contract Management Team (ECMT) for any specific contract. They are primary influencers of efficiency and cost; The Extended Contract Management Teams are the second cornerstone in the powerabode Philosophy of C&V Intelligence.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <p className="mb-3">Potential cost savings and value improvement in an Energy Asset fall in three categories; Efficiency (40%), Specification (30%) and Rates (20%). The final 10% is locked into organisational inefficiencies; they are deemed ‘unrecoverable’. Rates are the only element companies traditionally focus on, negotiating ‘discounts’. In an effort to achieve cost efficiency that is not sufficient. All three categories need a coordinated effort. Only then the full potential savings will be achieved together with significant value improvement as an upside. C&V Intelligence focus on these categories makes the 3rd cornerstone of our philosophy.</p>
                        <p className="mb-3">The powerabode C&V Intelligence Philosophy is deep rooted into frontline operations and projects. Therefore, our involvement through SLA services, or with our cost leadership program will directly impact performance. Training will further contribute to sustainable development of skills and ISC operations.</p>
                        <h5 className="mb-3 text-2xl text-[#1b3b64]">Why is the Philosophy of Cost and Value Intelligence unique?</h5>
                        <p className="mb-3">Simply, because traditionally companies focus on negotiating ‘rates’. This is only 20% of the total savings potential. Following the Philosophy of Cost and Value Intelligence, we map the full integrated supply chain, use the extended contract management team to get intelligence, and subsequently realise 90% of the savings potential. Instead of the maximum of 20% which is the traditional approach.</p>
                        <p className="mb-3">Cost are a science. Our program The Road to Cost Leadership brings you the full savings potential. And equips your organisation for long terms value delivery.</p>
                        <p className="mb-3">We are happy to discuss in detail and demonstrate how this is relevant in your organisation.</p>
                    </div>
                    <div className="flex justify-center mt-10">
                        <img className="" src={EMCT_bar} alt="" />
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
