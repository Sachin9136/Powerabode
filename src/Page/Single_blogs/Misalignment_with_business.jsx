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
import { Boxes_banner, Batch, Sla_tag, Supply_chain, MaterialsManagementWindow, Why_powerabode_1, Why_powerabode_2, Why_powerabode_3, Why_powerabode_4, Why_powerabode_5, Why_powerabode_6, Why_powerabode_7, Why_powerabode_8, Codex, Intelligence, OPEX, } from "../../components/Img/ImportedImage";
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
      <CommanBanner className = "h-[700px] bg-cover bg-no-repeat" children={Boxes_banner} blogheading={"blogheading"} />

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center'>Understanding business plan is important for business at all level.</h2>
            <p className="text-3xl font-normal font-Montserrat text-center mt-2">Even ‘business as usual’ can be impacted by the latest business plan</p>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <div className="w-full mt-3">
                <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                    <p className="mb-3">Energy companies’ corporate business plans are usually set for 3-5 years, with a detailed plan for the first year. The detailed plan is then customised to country level and on Asset Level. Each country may have multiple Assets, so it can be a complex process, not always picking up all details.</p>
                    <p className="mb-3">When it comes to the execution, it is not uncommon that disconnect appears between the frontline organisation and the Asset itself. Active involvement of an ECMT (Extended Contract Management Team) may reduce the risk of such disconnect. If not sufficient attention is given to avoid the disconnect, the consequence will be growing cost inefficiencies. The following case study summarizes a typical example of a disconnect between the business plan and the frontline organisation, and its cost impact. It also explains the remedy, and subsequent change in strategy in order to remain cost efficient.</p>
                    <p className="mb-3 text-[#1b3b64] font-semibold text-lg">Let us look at the following true case study:</p>
                </div>
            </div>
        </div>

        <div className="px-4 md:px-20">
            <div className="block md:flex gap-5"> 
                <div className="w-full md:w-1/2 mt-3">
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <h5 className="mb-3 text-xl text-[#1b3b64]">The Brief:</h5>
                        <p className="mb-3">Valve replacement for an onshore gas field underwent a Cost challenged from the Contract’s Board. The case for change was based on frequency of breakdown causing unplanned production deferment and high maintenance cost.</p>
                        <p className="mb-3">The Project Manager wanted to source a different brand of valve which had nearly ‘no maintenance’ requirement and 20% more operating life. The Contract Engineer calculated a robust OPEX projection for 5-10 years despite the initial CAPEX being more expensive compared to the incumbent brand. The Contract Strategy was endorsed by the Board subject to passing a Cost challenge.</p>
                        <h5 className="mb-3 text-xl text-[#1b3b64]">The Issue:</h5>
                        <p className="mb-3">Initial assessment of the Contract Strategy showed full compliance with the Maintenance Strategy but a misalignment with Asset’s Business Plan. The facility was situated in a field which was up for decommissioning in 3 years! This key piece of information was overlooked during the Contract Strategy development. It made the entire strategy, based on a 10 yr projection, void. The client still required a solution for only the next 3 years (not 10 years!), but tender was not an option anymore.</p>
                        <h5 className="mb-3 text-xl text-[#1b3b64]">The Solution:</h5>
                        <p className="mb-3">Stakeholder analysis was done and ECMT was identified: Project Manager, Contract Engineer, Technical Authority, Asset Commercial Lead, Asset Economics Lead, HSE, Cost Planning Engineers, Materials Management, Procurement (buyer).</p>
                        <p className="mb-3">A Strategic dialog of initiated to identify 3 years viable solution. Alternative solutions were explored for 2 days. Such dialogs put no cap on ideas no matter how ‘wild’ they were.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-3">
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <p className="mb-3 text-[#1b3b64] font-semibold text-lg">In total 11 possibilities were explored in 4 categories:</p>
                        <ul className="list-disc ml-5">
                            <li className="mb-2">Technical operating envelops</li>
                            <li className="mb-2">Commercial options</li>
                            <li className="mb-2">New technology deployment i.e. 3D printing</li>
                            <li className="mb-2">Complete out of the box solutions, creating precedence</li>
                        </ul>
                        <h5 className="mb-3 text-xl text-[#1b3b64]">The Result:</h5>
                            <p className="mb-3">After significant debate, the optimum solution was selected.</p>
                            <ul className="list-disc ml-5">
                            <li className="mb-2">As department head, the Maintenance Manager fronted a proposal to the Contracts Board to procure, install and operate a swap-set till the end of that field life.</li>
                            <li className="mb-2">Technical Authority approved the swap-set and its spare parts.</li>
                            <li className="mb-2">Contract Engineer negotiated procurement price, maintenance support for 3 years and lead time for delivery.</li>
                            <li className="mb-2">The Cost proposal of the revised Strategy was 76% lower compared to the original Project Price (CAPEX+OPEX).</li>
                        </ul>
                        <p className="mb-3"><span className="text-[#1b3b64] font-semibold text-lg">Conclusion:</span> Understanding Business Plan is important for Business at all levels. We feel strongly that the leadership of an Asset should share Asset business plans with their teams.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-4 md:px-20 mt-20">
            <div className="px-4 md:px-20 mt-10">
                <h2 className='text-3xl font-medium text-[#1b3b64] font-Montserrat text-center'>This is what we do. And we do this for a reason</h2>
            </div>
            <div className="block md:flex justify-center gap-5 mt-5">
                <div className="h-48 w-48 border-[#fea029] border-[12px] rounded-full">
                    <div className="flex justify-center">
                        <img className="w-28 mt-5 " src={Sla_tag} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <p className="text-lg text-center">
                        Contract <br /> Strategy
                        </p>
                    </div>
                </div>
                <div>
                    <img className="h-48 w-48 mx-auto border-[#fea029] border-[12px] p-2 rounded-full" src={Intelligence} alt="" />
                </div>
                <div>
                    <img className="h-48 w-48 mx-auto border-[#01bcb1] border-[12px] p-2 rounded-full" src={OPEX} alt="" />
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
