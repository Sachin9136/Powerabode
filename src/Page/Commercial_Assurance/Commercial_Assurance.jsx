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
import Card_slider from "../../components/card_slider/card_slider";
import Img_Slider from "../../components/Img_Slider/Img_Slider";
import { Commercial_Assurance_banner, Card_img, Bell, Injection, Ship, Category_1, CategoryStrategy_img, TenderingandOutsourcing, PostAwardContract } from "../../components/Img/ImportedImage";
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

  return (
    <>
      <CommanBanner children={Commercial_Assurance_banner} />

        <div className="px-4 md:px-20 my-10">
            <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10'>Building and implementing Category & Contract Strategies</h2>
        </div>

        <div className="px-4 md:px-20">
            <Row>
                <div className="my-10 block lg:flex justify-center gap-5">
                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-8 pb-12 pt-5 mb-6 border-2 border-black">
                        <div className="my-10 flex justify-center">
                            <img src={Bell} alt="" />
                        </div>
                        <div>
                            <p className="text-center text-medium font-medium">Post Covid we realised that some risks are real and some risks are new</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-8 pb-12 pt-5 mb-6 border-2 border-black">
                        <div className="my-10 flex justify-center">
                            <img src={Injection} alt="" />
                        </div>
                        <div>
                            <p className="text-center text-medium font-medium">Covid 19 impact requires us to reassess our Category Strategies</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-8 pb-12 pt-5 mb-6 border-2 border-black">
                        <div className="my-10 flex justify-center">
                            <img src={Ship} alt="" />
                        </div>
                        <div>
                            <p className="text-center text-medium font-medium">New energies require new Strategy. Energy transition is not about copying the traditional supply chain.</p>
                        </div>
                    </div>
                </div>
            </Row>
        </div>

        <div className="px-4 md:px-20 my-10">
          <div>
            <img className="w-full" src={Category_1} alt="" />
          </div>
          <div className="my-6">
            <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway]">Compliance and Governance are key for our clients</h4>
          </div>
        </div>

        <div className="px-4 md:px-20">
            <h2 className='text-center text-3xl font-bold text-[#29385E]'>Our Scope</h2>
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
              <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway] mt-2">Governments and NOC's embrace our approach.              </h4>
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
              <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway] mt-2">Energy assets need highest compliance and governance standards!</h4>
            </div>

        </div>

          
        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#29385E] font-Montserrat'>The Supply Chain by <span className="text-[#00ABB8]">SLA Services</span></h2>
        </div>

        <div className="px-4 md:px-20 my-10">
            <div className=" my-10">
                <Slider {...setting}>
                    <div>
                        <Img_Slider
                            image={CategoryStrategy_img}
                            isCenter={activeSlide === 0}
                        />
                    </div>
                    <div>
                        <Img_Slider
                            image={TenderingandOutsourcing}
                            isCenter={activeSlide === 1}
                        />
                    </div>
                    <div>
                        <Img_Slider
                            image={PostAwardContract}
                            isCenter={activeSlide === 2}
                        />
                    </div>
                    <div>
                        <Img_Slider
                            image={CategoryStrategy_img}
                            isCenter={activeSlide === 3}
                        />
                    </div>
                    <div>
                        <Img_Slider
                            image={PostAwardContract}
                            isCenter={activeSlide === 4}
                        />
                    </div>
                </Slider>
            </div>
        </div>

        <h3 className="text-center text-3xl font-[Raleway] my-5"><span className="text-[#1B3B64]">Tendering &</span> <span className="text-[#00ABB8]">Outsourcing</span></h3>
        <p className="text-center"  >Procurement is done in-house by most of our Clients.With involvement of our experts, tools and systems the results improve significantly.</p>


      <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10'>Related Articles and Case Studies</h2>

      <div className="px-4 md:px-20 my-10">
        <Slider {...settings}>
          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>
          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>
          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>

          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>

          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>
        </Slider>
      </div>


      <Footer />
    </>
  );
};

export default About_us;
