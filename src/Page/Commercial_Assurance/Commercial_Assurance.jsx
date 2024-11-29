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
import Cards_with_bg from "../../components/Cards/Cards_with_bg";
import Img_Slider from "../../components/Img_Slider/Img_Slider";
import { Commercial_Assurance_banner, SLA_bg, Bell, Injection, Ship, Commercial_assurance_points, CategoryStrategy_img, TenderingandOutsourcing, PostAwardContract, Sla_tag, Check, Scm, Snow, Lion } from "../../components/Img/ImportedImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    const cardsContent = [
      {
        image: Scm,
        title: "Getting the supply chain management and procurement system right",
        description: "Off the shelf we developed a Codex system to support your delivery. Front line experts will adapt it for you, with a view...",
        link:"supply-chain-management",
      },
      {
        image: Snow,
        title: "Deliver as Planned",
        description: "Sometimes ‘surprises’ are actually predictable. The top 5 of ‘predictable’ surprises...",
        link: "deliver-as-planned",
      },
      {
        image: Lion,
        title: "Hidden in Plain Sight",
        description: "Crazy as it may sound; there’s always an elephant in the room.. Central in our way of work are the users of the contract, the ECMT. They are underestimated as a platform. 9 Quote: Our Experts know your business...",
        link: "hidden-in-plain-sight",
      }
    ];

  return (
    <>
      <CommanBanner children={Commercial_Assurance_banner} heading="Commercial Assurance" subheading={"We identify a wide range of commercial risks and assess & control those out of your contracts. It increases transparency, enhances performance and increases overall control. We are very much an assurance company. powerabode can compose and improve your Supply Chain systems and procedures."}/>

        <div className="px-4 md:px-20 my-10">
          <div className="bg-cover bg-center w-full rounded-none md:rounded-xl px-1 py-5 md:p-6" style={{ backgroundImage: `url(${Commercial_assurance_points})` }}>
            <div>
              <div>
                <img src={Sla_tag} alt="" />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-full lg:w-6/12 px-3 mt-5 md:mt-5">
                  <div className="p-5 bg-[#1d345ec9] rounded-xl">
                    <h2 className="text-3xl font-medium text-white mt-6 mb-3">
                      The Result
                    </h2>
                    <ul>
                      <li className="text-xl font-medium text-white my-4 flex gap-3">
                        <img src={Check} alt="" /> Compliant systems for your end-to-end Supply Chain
                      </li>
                      <li className="text-xl font-medium text-white my-4 flex gap-3">
                        <img src={Check} alt="" /> Bespoke wireframe for your Supply chain
                      </li>
                      <li className="text-xl font-medium text-white my-4 flex gap-3">
                        <img src={Check} alt="" /> Improved compliance using Assurance process
                      </li>
                      <li className="text-xl font-medium text-white my-4 flex gap-3">
                        <img src={Check} alt="" /> powerabode Codex basis for client requirements
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-end">
                <h3 className="text-2xl md:text-4xl font-semibold md:font-medium text-[#1b3b64] mt-6 mb-3">
                Commercial Assurance
                </h3>
              </div>
            </div>
          </div>
          {/* <h2 className='text-3xl font-bold text-[#29385E] mt-10'>Building and implementing Category & Contract Strategies</h2> */}
        </div>

        {/* <div className="px-4 md:px-20">
            <Row>
                <div className="my-10 block lg:flex justify-center gap-5">
                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-8 pb-12 pt-5 mb-6 border-2 border-[#eee]">
                        <div className="my-10 flex justify-center">
                            <img src={Bell} alt="" />
                        </div>
                        <div>
                            <p className="text-center text-medium font-medium">Post Covid we realised that some risks are real and some risks are new</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-8 pb-12 pt-5 mb-6 border-2 border-[#eee]">
                        <div className="my-10 flex justify-center">
                            <img src={Injection} alt="" />
                        </div>
                        <div>
                            <p className="text-center text-medium font-medium">Covid 19 impact requires us to reassess our Category Strategies</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-8 pb-12 pt-5 mb-6 border-2 border-[#eee]">
                        <div className="my-10 flex justify-center">
                            <img src={Ship} alt="" />
                        </div>
                        <div>
                            <p className="text-center text-medium font-medium">New energies require new Strategy. Energy transition is not about copying the traditional supply chain.</p>
                        </div>
                    </div>
                </div>
            </Row>
        </div> */}

        <div className="px-4 md:px-20 my-10">
          <div className="my-6">
            <h4 className="text-[#00ABB8] text-2xl font-normal text-end ">Compliance and Governance are key for our clients</h4>
          </div>
        </div>

        <div className="px-4 md:px-20">
            <h2 className='text-3xl font-bold text-[#29385E]'>Our Scope : </h2>
        </div>

        <div className="px-4 md:px-20">
            <Row>
                <div className="mt-10 block lg:flex justify-center gap-5">
                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Commercial Compliance</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Procurement of goods and services, running operations and projects are sensitive commercial processes. We bring Compliant Delivery.</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Reporting & Monitoring                            </h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Setting up various reporting and monitoring tools, creating commercial transparency and up to date information.</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">ICV Assurance                            </h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">In-Country-Value is key for NOC’s. How to assure your ICV program works? We provide auditing and assurance of your existing systems and implementation plans. Our input & mitigation plus corrective actions make your ICV work!</p>
                        </div>
                    </div>
                </div>
            </Row>
            <div className="">
              <h4 className="text-[#00ABB8] text-2xl font-normal text-end  mt-2">Governments and NOC's embrace our approach.              </h4>
            </div>
            <Row>
                <div className="mt-5 block lg:flex justify-center gap-5">
                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Complete System Set up & Transformation                            </h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">powerabode created a ‘best practice’ wireframe for Category Management, Contracting & Procurement, Logistics and Materials Management. Unique; people with field experience leading the way to an efficient supply chain.</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Claims Prevention                            </h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">A team of Claims experts for international complex projects is available to work with you and key stakeholders.</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Codex                            </h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">powerabode Category Management, Contracting & Procurement and Materials Management procedure for Pre- and Post-Award. The supply chain mapped in industry standard processes with best practice. It is available for you.</p>
                        </div>
                    </div>
                </div>
            </Row>

            <div className="">
              <h4 className="text-[#00ABB8] text-2xl font-normal text-end mt-2">Energy assets need highest compliance and governance standards!</h4>
            </div>

        </div>
          
        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#29385E] font-Montserrat'>The Supply Chain by <span className="text-[#00ABB8]">SLA Services</span></h2>
        </div>
        <Img_Slider />
        <div>
          {/* <h1 className="text-center text-3xl font-bold mb-6">Custom Page with Dynamic Cards</h1> */}
          {/* Render the Cards component with dynamic content */}
          <Cards_with_bg background={SLA_bg} cardsContent={cardsContent} />
        </div>


      <Footer />
    </>
  );
};

export default About_us;
