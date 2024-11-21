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
import { Scm_banner, Batch, CM, Supply_chain, Program_img, Why_powerabode_1, Why_powerabode_2, Why_powerabode_3, Why_powerabode_4, Why_powerabode_5, Why_powerabode_6, Why_powerabode_7, Why_powerabode_8, } from "../../components/Img/ImportedImage";
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
      <CommanBanner className = "h-[700px] bg-cover bg-no-repeat" children={Scm_banner} blogheading={"blogheading"} />

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center'>Introducing a Supply Chain Management System that helps you deliver.</h2>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <div className="block md:flex gap-5"> 
                <div className="w-full md:w-1/2 mt-3">
                    <div className="flex justify-center">
                        <img className="w-28" src={Batch} alt="" />
                    </div>
                    <div>
                        <h5 className="my-6 text-2xl font-thin text-[#1b3b64] text-center">Frontline Experts use powerabode CODEX to create your bespoke Supply Chain Management System</h5>
                    </div>
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <h5 className="mb-3 text-2xl text-[#1b3b64]">The Brief</h5>
                        <p className="mb-3">The client had recently been acquired by an IOC and needed to transform its legacy procurement system into a complete end to end Supply Chain Management (SCM) System. This included a rejuvenation of Procurement Planning and Post-Award Contract Management.</p>
                        <h5 className="mb-3 text-2xl text-[#1b3b64]">Kick off</h5>
                        <p className="mb-3">Our team co-developed with the Client, a complete wireframe of Supply Chain Management and Procurement that fitted the requirement of the Client’s organization. The wireframe also identified the key areas for transformation in the Procurement Planning and Post Award Contract Management, which were additional focus areas of the Client.</p>
                    </div>
                    <div className="border-2 border-[#eee] py-8 px-5 mt-5 rounded-xl">
                        <h5 className="mb-3 text-2xl text-[#1b3b64]">The Solution</h5>
                        <p className="mb-3">The wireframe was transformed into a bespoke end to end Supply Chain Management System using powerabode CODEX. The CODEX is an ISO certified industry standard SCM Management System, that is equipped with framework, guidelines, processes, procedures, templates, work instructions, manuals and checklists.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-3">
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <p className="mb-3">Procedures were developed to cover the full procurement cycle from planning to closeout. Specific Local Content requirements for Tendering and prequalification were combined with the IOC’s Global Policies and Directives.</p>
                        <p className="mb-3">Combined with our CODEX, international best practice and first hand experience of ex-IOC frontline experts, the final product was immidiately usable in for all stakeholders in the Project, Asset, C&P, Finance, Legal, QAQC and HSSE departments.</p>
                        <p className="mb-3">Each manual was fitted clearly into the new “Procurement Framework”. A new system of Risk Categorisation for Contracts was developed and Purchase Order processing work flows were rejuvinated. All procedures were underpinned by work instructions with practical examples and guidance.</p>
                        <h5 className="mb-3 text-2xl text-[#1b3b64]">The Result</h5>
                        <p className="mb-3">The Client has now rolled out the new Supply Chain Management System. The collaborative approach in developing the procedures has ensured a high degree of ownership and understanding of changes from day one.</p>
                        <p className="mb-3">The final stage of the project was delivered remotely using point to point encrypted myAbode. It is our Remote Shoulder to Shoulder platform which is fully EC GDPR compliant and cloud based.</p>
                    </div>
                    <div className="px-4 md:px-20 mt-10">
                        <h2 className='text-3xl font-medium text-[#1b3b64] font-Montserrat text-center'>Visit these services for more detail:</h2>
                    </div>
                    <div className="block md:flex justify-center gap-5 mt-5">
                        <div>
                            <img className="h-48 w-48 mx-auto border-[#fea029] border-[12px] p-2 rounded-full" src={Supply_chain} alt="" />
                        </div>
                        <div>
                            <img className="h-48 w-48 mx-auto border-[#01BCB1] border-[12px] p-2 rounded-full" src={Program_img} alt="" />
                        </div>
                        <div>
                            <img className="h-48 w-48 mx-auto border-[#8F4A81] border-[12px] p-2 rounded-full" src={CM} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
                <h2 className='text-center text-3xl font-bold text-[#29385E] my-10'>Why powerabode?</h2>
            </div>   

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-20 px-4 md:px-20">
                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img className="w-48" src={Why_powerabode_1} alt="" />
                </div>

                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img className="w-48" src={Why_powerabode_2} alt="" />
                </div>

                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img className="w-48" src={Why_powerabode_3} alt="" />
                </div>

                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img className="w-48" src={Why_powerabode_4} alt="" />
                </div>

                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img className="w-48" src={Why_powerabode_5} alt="" />
                </div>

                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img className="w-48" src={Why_powerabode_6} alt="" />
                </div>

                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img className="w-48" src={Why_powerabode_7} alt="" />
                </div>

                <div className="flex justify-center px-14 md:px-10 lg:px-5">
                    <img className="w-48" src={Why_powerabode_8} alt="" />
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
