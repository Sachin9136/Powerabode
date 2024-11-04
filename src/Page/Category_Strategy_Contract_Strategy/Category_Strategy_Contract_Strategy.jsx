import React from "react";

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
import { Category_Strategy_banner, Card_img, Bell, Injection, Ship } from "../../components/Img/ImportedImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About_us = () => {

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
      <CommanBanner children={Category_Strategy_banner} />

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

        <div className="px-4 md:px-20">
            <h2 className='text-center text-3xl font-bold text-[#29385E]'>Our Scope</h2>
        </div>

        <div className="px-4 md:px-20">
            <Row>
                <div className="my-10 block lg:flex justify-center gap-5">
                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Hold Strategic Dialog</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Defining key objectives, involvement from the right stakeholders, probing out the right information, as well as capturing the drivers of the contract strategy. Our Workshop program delivers!</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Co-Design Contract Strategy</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Linking business plan to field contract performance. The right KPI to drive top quartile delivery at the right cost. This is our angle to developing Contract Strategy. Let us develop your contract strategies to drive performance.</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Market Research</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">We will conduct extensive market research to develop your strategy; beyond your vendor list, we pursue innnovation.</p>
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <div className="my-10 block lg:flex justify-center gap-5">
                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Demand & Supply Assessment</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Data is at the core of your strategy development. How to use the data? How about the intepretation? Assess historic and future demand. Latest Supplier developments.</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Contract Models</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">‘Horses for Courses’. Our strength is bringing contract models to the table that safeguard delivery and cost efficiency.</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Co-Design Category Strategy</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Developing Category Management Strategy based on value chain integration. We work closely with clients’ technical department to identify target areas for extracting value. Either by formulating new or by enhancing existing category strategy.</p>
                        </div>
                    </div>
                </div>
            </Row>
        </div>

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
