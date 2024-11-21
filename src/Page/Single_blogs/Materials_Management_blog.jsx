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
import { Racks_banner, Batch, Sla_tag, Supply_chain, MaterialsManagementWindow, Why_powerabode_1, Why_powerabode_2, Why_powerabode_3, Why_powerabode_4, Why_powerabode_5, Why_powerabode_6, Why_powerabode_7, Why_powerabode_8, Codex, } from "../../components/Img/ImportedImage";
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
      <CommanBanner className = "h-[700px] bg-cover bg-no-repeat" children={Racks_banner} blogheading={"blogheading"} />

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center'>Materials Management: perceived as the ugly duckling of the Supply Chain family; is it really?</h2>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <div className="block md:flex gap-5"> 
                <div className="w-full md:w-1/2 mt-3">
                    <div className="flex justify-center">
                        <img className="" src={MaterialsManagementWindow} alt="" />
                    </div>
                    <div>
                        <h5 className="my-6 text-2xl font-thin text-[#1b3b64] text-center">The right goods at the right place at the right time; today, tomorrow and 5 years from now. That is the ultimate outcome of reliable Materials Management.</h5>
                    </div>
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <p className="mb-3">Materials Management is perhaps the ugly duckling of the Supply Chain family. Why? Because it is hands on, detailed and requires precision. It takes focus, continuous update, discipline and optimisation. It demands a multi-disciplinary relationship and deep connect with the frontline. Gratitude, or appreciation does not come with a job well done. But you will know when it goes wrong.</p>
                        <h5 className="mb-3 text-xl text-[#1b3b64]">Non-performance is likely to cause:</h5>
                        <ul className="list-disc ml-5">
                            <li className="mb-2">Delayed repairs</li>
                            <li className="mb-2">Prolonged shutdown and turnarounds</li>
                            <li className="mb-2">Deferred production</li>
                            <li className="mb-2">Equipment damage</li>
                            <li className="mb-2">Frozen cash and working capital</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-3">
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <p className="mb-3">Therefore, start by getting the basics right. Ensure that the ‘Red and Blue’ schematics are up to date. The entire flow of material throughout the organisation depends on this humble starting point. Follow that with inventory analysis and planning assessment. This is the discovery point where a substantial data clean-up will be required.</p>
                        <p className="mb-3">Ensure that coding systems are clear and understood – police and check new Material Codes and ensure suppliers include the required codes on their deliveries. Periodically check compliance.</p>
                        <p className="mb-3">We have seen major IOCs with 4 -10% BOM (bill of materials) coverage and sitting with millions US$ of non-moving stock. Improvement on BOM must be an ambition on its own.</p>
                        <p className="mb-3">Over time, as assets do their mileage, legacy parts ‘disappear’, modifications happen, suppliers change and corporate memory fades. Therefore, one can only rely on an effective MM system and structure that is kept alive and prioritised. Our powerabode 7-step complete Materials Management program offers a structured approach for ensuring the basics are working and managing your Materials.</p>
                        <p className="mb-3">Poor Material Management is not just something for the warehouse, it can become a show-stopper in Business Improvement. Legacy and poorly defined stock items clog the arteries of business. Shorter turnaround, business continuity, lower operating cost result from good control on inventory and material planning. That is real impact on production and result.</p>
                        <p className="mb-3">Building a BOM catalogue, establishing guidelines, systems, processes and procedures, conducting Inventory Optimisation, rejuvenating entire Materials Management; This is what we do. And we do this for a reason</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-4 md:px-20 mt-20">
            <div className="px-4 md:px-20 mt-10">
                <h2 className='text-3xl font-medium text-[#1b3b64] font-Montserrat text-center'>This is what we do. And we do this for a reason</h2>
            </div>
            <div className="block md:flex justify-center gap-5 mt-5">
                <div>
                    <img className="h-48 w-48 mx-auto border-[#4c78b5] border-[12px] p-2 rounded-full" src={Codex} alt="" />
                </div>
                <div className="h-48 w-48 border-[#fea029] border-[12px] rounded-full">
                    <div className="flex justify-center">
                        <img className="w-28 mt-5 " src={Sla_tag} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <p className="text-lg text-center">
                        Material <br /> Management
                        </p>
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
