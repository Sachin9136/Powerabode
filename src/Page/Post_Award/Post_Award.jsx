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
import { Post_Award_banner, Card_img, Bell, Injection, Ship, Category_1, CategoryStrategy_img, TenderingandOutsourcing, PostAwardContract } from "../../components/Img/ImportedImage";
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
      <CommanBanner children={Post_Award_banner} />

        <div className="px-4 md:px-20 my-10">
            <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10'>Building and implementing Category & Contract Strategies</h2>
        </div>

        <div className="px-4 md:px-20 my-10">
          <div>
            <img className="w-full" src={Category_1} alt="" />
          </div>
          <div className="my-6">
            <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway]">High impact area for delivery</h4>
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
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Interface Manager</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Brings delivery in sync with planning. Teams change, but is the intend still clear? What is the delivery strategy? Our program aligns and connects the stakeholders. It is a key enabler for contract performance.</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Output Analyses</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Did you get what you intended? We map the performance against plan.</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">ISC Training</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">the Integrated Supply Chain training. The Extended Contract Management Team (ECMT) will participate. They will deliver!</p>
                        </div>
                    </div>
                </div>
            </Row>
            <div className="">
              <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway] mt-2">Did you ever check if there are conflicting KPI's?</h4>
            </div>
            <Row>
                <div className="mt-5 block lg:flex justify-center gap-5">
                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Frontline experts</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Mileage. Decades of field experience in using, influencing and managing contracts. In difficult environments. With top companies. Our focus is on delivery, not on anything else</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Set up & improve PACM</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Translation from the tender stage to the contract delivery. We set up and implement your Contract Management Plan, KPIs, Cost, commitment & Budget Control, dashboards, performance reviews, Assurance & Audit preparation and execution.</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">TCO/TVO program                            </h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Complex. Valuable. Necessary. It provides you insight. Applied properly during Post Award stage, significant value can be developed. Perfect tools to improve delivery and commercial performance during Post Award stage.</p>
                        </div>
                    </div>
                </div>
            </Row>

            <div className="">
              <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway] mt-2">'What gets measured, gets managed'</h4>
              <h4 className="text-[#00ABB8] text-3xl font-bold text-end font-[Raleway] mt-2">-Peter Drucker</h4>
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
