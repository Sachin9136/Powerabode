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
import { Stragety_banner, Batch, Sla_tag, Supply_chain, MaterialsManagementWindow, Why_powerabode_1, Why_powerabode_2, Why_powerabode_3, Why_powerabode_4, Why_powerabode_5, Why_powerabode_6, Why_powerabode_7, Why_powerabode_8, Codex, Intelligence, OPEX, } from "../../components/Img/ImportedImage";
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
      <CommanBanner className = "h-[700px] bg-cover bg-no-repeat" children={Stragety_banner} blogheading={"blogheading"} />

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center'>The Limits of Digitisation</h2>
            <p className="text-3xl font-normal font-Montserrat text-center mt-2">Set your route before you start your journey. Set your strategy before procurement.</p>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <div className="w-full mt-3">
                <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                    <p className="mb-3">Strategic sourcing is the action of buying. Software can be of great help in this process.</p>
                    <p className="mb-3">Sourcing strategy is the thought behind the buying. Part can be heavily supported by digital means; a large part however requires expert involvement.</p>
                    <p className="mb-3">Digitisation in procurement is becoming the new normal. Various procurement tools available in the market aim at digitising the strategic sourcing part.</p>
                    <p className="mb-3">In all the focus on digitisation, less attention is given to a very decisive element that requires human (expert) input; formulating the actual Sourcing Strategy. This incorporates Business planning, asset requirements, category strategy, the functional details, output requirement, should costing, delivery parameters, asset lifetime, KPIs etc.</p>
                </div>
            </div>
        </div>

        <div className="px-4 md:px-20">
            <div className="block md:flex gap-5"> 
                <div className="w-full md:w-1/2 mt-3">
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <h5 className="mb-3 text-xl text-[#1b3b64]">True Case Study on Strategy Development:</h5>
                        <p className="mb-3">powerabode brings cutting edge Category and Contracting (Sourcing) Strategy to the Energy Industry. Business plans and delivery requires human input. Experience, and foresights defines the Strategy and how to make it work in the field. The reality of today is that Strategy development cannot (yet) be automated.</p>
                        <p className="mb-3">An Onshore Gas Asset’s business objective was to shift from one off lowest cost Capex to ‘a profitable production for next 20 years with Low and Sustainable Production Cost and Operating Cost (OPEX)’. Previous projects delivered for lowest cost CAPEX resulted in substantially high OPEX. This led to a marginalised profit for the production from that gas field.</p>
                        <h5 className="mb-3 text-xl text-[#1b3b64]">The Approach:</h5>
                        <p className="mb-3">As part of the strategic dialogue, a Contracting Strategy workshop was designed to identify key items that drove Operating Cost. 18 points were identified.</p>
                        <p className="mb-3">Costing models were simulated to conduct visual sensitivity check. All parameters were played with at multiple variances and results were used to prepare an Evaluation Model. This Evaluation Model helped to make the right procurement decision.</p>
                        <p className="mb-3">The Extended Contract Management Team (ECMT) was in the room, representing every department that influenced the Contract throughout its lifetime.</p>
                        <h5 className="mb-3 text-xl text-[#1b3b64]">Result:</h5>
                        <p className="mb-3">A Contracting Strategy designed to deliver ‘profitable production for next 20 years with Low and Sustainable Production Cost and Operating Cost (OPEX).</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-3">
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <h5 className="mb-3 text-xl text-[#1b3b64]">Strategy included the following:</h5>
                        <ul className="list-disc ml-5">
                            <li className="mb-2">A dual layered evaluation model</li>
                            <li className="mb-2">A pay for performance remuneration model</li>
                            <li className="mb-2">Contract Management Plan; to deliver savings and value as per tender forecast</li>
                        </ul>
                        <p className="mb-3">The Contract was awarded based on Lowest Total Cost and Total Value of Ownership (TCO and TVO).</p>
                        <p className="mb-3">Our Program The Road to Cost Leadership is a joint journey we travel with the client.Collaboration, hands-on frontline experience, the transfer of knowledge. A bespoke program will prepare your teams to deliver cost efficiency, using the Cost Intelligence principles.</p>
                        <p className="mb-3">For delivery our Supply Chain by SLA services all contribute to deliver cost efficiency. It is the home for category management, contracting & procurement and supply chain challenges. For Operations, Maintenance and Projects.</p>
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
