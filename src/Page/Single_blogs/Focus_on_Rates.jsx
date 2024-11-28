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
import { Island_banner, Deliverdespitebudgetconstraints, CM, CVI_Logo, Evi, DeliverdespiteTable, Intelligence } from "../../components/Img/ImportedImage";
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
      <CommanBanner className = "h-[700px] bg-cover bg-no-repeat" children={Island_banner} heading={"Does focus on rates make sense?"} />

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center'>Cost Leadership will remain one of top 3 focus areas of Energy Industry for next decade.</h2>
        </div>

        <div className="px-4 md:px-20 mt-10">
            <div className="block lg:flex gap-5 ">
                <div className="w-full lg:w-1/3 mt-5">
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <p className="mb-3">Global events, an economic crisis or technological developments are always a trigger for change.</p>
                        <p className="mb-3">Something happens, and we respond as a world. On national level, personal level, but also on business level.</p>
                        <p className="mb-3"> But change is a costly process. So, a focus on cost efficiency is necessary. All our Services (One Stop Shop) and programs, as well as the powerabode Academy, are focussed on delivery of cost efficiency. We created a Cost Intelligence Philosophy, around which we base our activities, in support of this.</p>
                        <p className="mb-3"> A typical reaction by industry during every downturn is to ask for 20% discount from contractors. No-one seems to consider if contractors made margins allowing these discounts. It lacks sophistication, self-reflection, and therefore results in a sub optimal response.</p>
                        <p className="mb-3"> Even during non-crisis periods, companies claim double digit cost reduction just by cutting rates, year on year for 3-5 years. They use classic post tender negotiation: rate discount to match a pre-set amount. Or volume discount; longer contract duration in exchange of better price; an extensive list of rate focused tactics and actions.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 mt-5">
                    <div className="flex justify-center items-center mb-5">
                        <img className="w-72" src={Intelligence} alt="" />
                    </div>
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <p className="mb-3">If you add these targets up, year over year, these should have resulted in OPEX reduction of at least 30%-40%. In retrospect, the relevant question to ask is; have these cumulative savings materialised?</p>
                        <p className="mb-3">Cost are a science. The powerabode philosophy to Cost Intelligence is defined by principles. When it comes to analysing saving potential, this is one of the principles:</p>
                        <p className="mb-3">If a savings potential is 100%, then it can be divided over 3 elements. 40% savings come from operational efficiency, 30% comes from technical specification and 20% comes from rates. Final 10% savings is unrecoverable due to various practical reasons.</p>
                        <p className="mb-3">So, a focus on rates only clearly demonstrates that significant savings, potentially up to 70% the total savings potential, is still locked up. Any energy company can calculate the size of the missed potential!</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 mt-5">
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <p className="mb-3">Yes, the number is large, very large. No energy company can afford to leave such potential unexplored.</p>
                        <p className="mb-3">As always, to recognise something is a first step of a process. For cost efficiency one needs to have experts and systems that capture and deliver cost reductions; for the full potential. In a sustainable way.</p>
                        <p className="mb-3">Our Program The Road to Cost Leadership is a joint journey we travel with the client. Collaboration, hands-on frontline experience, the transfer of knowledge. A bespoke program will prepare your teams to deliver cost efficiency, using the Cost Intelligence principles.</p>
                        <p className="mb-3">For delivery the Supply Chain by SLA services all contribute to deliver cost efficiency. It is the home for category management, contracting & procurement and supply chain challenges. For Operations, Maintenance and Projects.</p>
                        <p className="mb-3">powerabode Academy allows your own people to also further their skills in delivering cost efficiency. We train the full extended contract management team, but also project management, category management and supply chain & procurement specialists.</p>
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
