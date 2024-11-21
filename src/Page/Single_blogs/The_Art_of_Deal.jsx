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
import { Mountain_banner, Supply_chain, Star, CM, The_Art_of_the_Deal_Graph, Sla_tag } from "../../components/Img/ImportedImage";
import ImageSlider2 from "../../components/ImageSlider/ImageSlider";

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
      <CommanBanner className = "h-[700px] bg-cover bg-no-repeat" children={Mountain_banner} blogheading={"blogheading"} />

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center'>Tendering mistakes. Cut a corner today, pay for it for the lifetime of the new contract.</h2>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <div className="block md:flex gap-5"> 
                <div className="w-full md:w-1/2 mt-3">
                    <div className="flex justify-center">
                        <img className="w-36" src={Star} alt="" />
                    </div>
                    <div>
                        <h5 className="my-6 text-2xl font-thin text-[#1b3b64] text-center">Even straight contract renewal should be done with <br /> diligence. Things evolve.</h5>
                    </div>
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <p className="mb-3">Tendering and Outsourcing activities for large Energy Assets are generally done inhouse. There are arguments in favour of such decision. We have taken a closer look to understand the advantages of having inhouse Tenders. We selected top 4 criteria that drive performance: Scope of Work, KPI, Evaluation and Remuneration models. Following are our observations:</p>
                        <ul className="list-disc ml-5">
                            <li className="mb-2">30% tenders were freshly made with correct parameters</li>
                            <li className="mb-2">7% tenders were a one on one copy from the old tender</li>
                            <li className="mb-2">In 22% cases, old scope of work was used without revision</li>
                            <li className="mb-2">10% cases, old evaluation models were applied despite changing cost and value drivers</li>
                            <li className="mb-2">11% of the tenders had old KPIs which conflicted with the delivery requirements</li>
                            <li className="mb-2">And in 20% tenders, previous remuneration model was applied</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-3">
                    <div className="mb-5">
                        <img src={The_Art_of_the_Deal_Graph} alt="" />
                    </div>
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <p className="mb-3">Let’s briefly touch upon 2 of these:</p>
                        <h5 className="mb-3 text-xl text-[#1b3b64]">Evaluation Model:</h5>
                        <p className="mb-3">Evaluation model is one of the key defence barriers for any Project Manager. It helps to objectively choose the right Contractor.</p>
                        <h5 className="mb-3 text-xl text-[#1b3b64]">Remuneration Model:</h5>
                        <p className="mb-3">Remuneration is one of the key tools to drive proper Contract Execution and overall Performance. It stimulates contractor behaviour.</p>
                        <h5 className="mb-3 text-xl text-[#1b3b64]">Solution:</h5>
                        <p className="mb-3">Building Evaluation and Remuneration Model is a craft; Members of our Tender team do nothing else but develop these Models. Tendering & Outsourcing is one of the most used products of our Supply Chain by SLA Services. We write Scope of Work, design tender models, compose contract manuals, build evaluation and remuneration models. Every service line is aimed at delivering optimal Contract performance.</p>
                        <p className="mb-3">The powerabode experts would be happy to engage with you to show their solutions. Set up a Teams meeting through <span className="text-[#00abb8]">info@powerabode.com</span></p>
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
                    <img className="h-48 w-48 mx-auto border-[#fea029] border-[12px] p-2 rounded-full" src={Supply_chain} alt="" />
                </div>
                <div className="h-48 w-48 border-[#fea029] border-[12px] rounded-full">
                    <div className="flex justify-center">
                        <img className="w-28 mt-5 " src={Sla_tag} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <p className="text-lg text-center">
                        Tendering & <br /> Outsourcing
                        </p>
                    </div>
                </div>
                <div className="h-48 w-48 border-[#fea029] border-[12px] rounded-full">
                    <div className="flex justify-center">
                        <img className="w-28 mt-5 " src={Sla_tag} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <p className="text-lg text-center">
                            Strategy
                        </p>
                    </div>
                </div>
                <div>
                    <img className="h-48 w-48 mx-auto border-[#8f4a81] border-[12px] p-2 rounded-full" src={CM} alt="" />
                </div>
            </div>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#29385E] font-Montserrat text-center'>More Articles & <span className="text-[#00ABB8]">Business Cases?</span></h2>
        </div>

        <Img_Slider />
        
        <div className="hidden md:flex">
            <ImageSlider2 />
        </div>

      <Footer />
    </>
  );
};

export default About_us;
