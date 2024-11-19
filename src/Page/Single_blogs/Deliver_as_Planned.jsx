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
import { Snow_banner, DeliverasPlanned, CM, Supply_chain, Program_img, Sla_tag } from "../../components/Img/ImportedImage";
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
      <CommanBanner className = "h-[700px] bg-cover bg-no-repeat" children={Snow_banner} blogheading={"blogheading"} />

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center'>Some surprises are actually predictable. Proper Post Award Contract Management prevents the expected!</h2>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <div className="block md:flex gap-5">
                <div className="w-full md:w-1/2 mt-3">
                    <div className="flex justify-center">
                        <img className="w-64" src={DeliverasPlanned} alt="" />
                    </div>
                    <div>
                        <h5 className="my-6 text-2xl font-thin text-[#1b3b64] text-center">Top 5 Post Award Predictable Surprises!</h5>
                    </div>
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <p className="mb-3">Post Award Contract Management, or to deliver as planned. The definition is simple, but at the same time delivery always poses major challenges. Translating the planning stage to real life. Transforming from paper to something tangible.</p>
                        <p className="mb-3">Generally, we define top 5 areas where we see bottlenecks in the delivery. An early focus on Post Award Contract Management can prevent or at least mitigate these issues. </p>
                        <p className="mb-3">We tend to digitise everything these days. Supply Chain, Procurement. As organisations rationalise their staff during a crisis the push is for ever more digitisation and automated solutions. But to deliver projects and contracts requires real people. Preferably the kind that knows what they are doing. Hence our mission as Supply Chain Expert to establish the connect between systems and the digitised context to experts with frontline experience. They will deliver for you and with you.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-3">
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <h5 className="mb-3 text-2xl text-[#1b3b64]">The top 5 bottle necks in Post Award Contract Management:</h5>
                        <p className="mb-3"><span className="text-[#1b3b64] font-bold text-lg">1. Project to Operations handover -</span> What is the leading indicator during this phase? Often conflicting KPI’s contribute to an inefficient handover, impacting negatively on the time to get to full operation.</p>
                        <p className="mb-3"><span className="text-[#1b3b64] font-bold text-lg">2. Pre award to Post award handover -</span> Two different teams at work. For the right reasons. But to what extend do they align their objectives.</p>
                        <p className="mb-3"><span className="text-[#1b3b64] font-bold text-lg">3. Lack of alignment between business plan and the contracting strategy –</span> The contracting strategy is often based on historic information. An easy corner to cut. But, it impacts the outcome and operations in a profound way. To what extend does the contract strategy align with the business plan. Of the asset. Or the corporation. Contract strategy requires thorough piece of work that should be done with focus and diligence. It is a forward looking exercise with leading indicators.</p>
                        <p className="mb-3"><span className="text-[#1b3b64] font-bold text-lg">4. Inadequate scope of work –</span> The old scope can be recognised in the new tender. As it was copied. This is a major flaw and a loss of opportunity. First of all, scope evolves. It always requires updating. Analyse the previous spend. Interview stakeholders. Then write a new scope.</p>
                        <p className="mb-3"><span className="text-[#1b3b64] font-bold text-lg">5. PO’s linked the wrong contract, but the right contractor –</span> Innocent mistakes, with serious but unintended consequences. No administration is flawless, but structural mistakes on this level create chaos in the field that continues to repeat itself. Most likely for the duration of the contract.</p>
                        <p className="mb-3">Post Award Contract Management is one of the top 3 products of our of our Supply Chain by SLA. We typically provide an interface manager, conduct TCO/ TVO improvement programs, build and maintain Contract Management App that keeps a grip on your contract performance.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center'>Visit these services for more detail:</h2>
        </div>

        
        <div className="block md:flex justify-center gap-10 mt-10">
            <div>
                <img className="h-52 w-52 mx-auto border-[#fea029] border-[20px] p-5 rounded-full" src={Supply_chain} alt="" />
            </div>
            <div className="h-52 w-52 border-[#fea029] border-[20px] rounded-full">
                  <div className="flex justify-center">
                    <img className="w-28 mt-5 " src={Sla_tag} alt="" />
                  </div>
                  <div className="flex justify-center items-center mt-5">
                    <p className="text-lg text-center">
                        Post Award <br /> Contract <br /> Management
                    </p>
                  </div>
                </div>
            <div>
                <img className="h-52 w-52 mx-auto border-[#01BCB1] border-[20px] p-5 rounded-full" src={Program_img} alt="" />
            </div>
            <div>
                <img className="h-52 w-52 mx-auto border-[#8F4A81] border-[20px] p-5 rounded-full" src={CM} alt="" />
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
