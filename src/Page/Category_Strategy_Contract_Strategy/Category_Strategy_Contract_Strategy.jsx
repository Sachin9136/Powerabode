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
import {
  Category_Strategy_banner,
  Card_img,
  Bell,
  Injection,
  Ship,
  Category_strategy_points,
  CategoryStrategy_img,
  TenderingandOutsourcing,
  PostAwardContract,
  Sla_tag,
  Check,
} from "../../components/Img/ImportedImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About_us = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const setting = {
    centerMode: true,
    centerPadding: "0",
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
      <CommanBanner children={Category_Strategy_banner} />

      <div className="px-4 md:px-20 my-10">
        <h2 className="text-center text-3xl font-bold text-[#29385E] mt-10">
          Building and implementing Category & Contract Strategies
        </h2>
      </div>

      <div className="px-4 md:px-20">
        <Row>
          <div className="my-10 block lg:flex justify-center gap-5">
            <div className="w-full lg:2/6 rounded-lg px-8 pb-12 pt-5 mb-6 border-2 border-black">
              <div className="my-10 flex justify-center">
                <img src={Bell} alt="" />
              </div>
              <div>
                <p className="text-center text-medium font-medium">
                  Post Covid we realised that some risks are real and some risks
                  are new
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 rounded-lg px-8 pb-12 pt-5 mb-6 border-2 border-black">
              <div className="my-10 flex justify-center">
                <img src={Injection} alt="" />
              </div>
              <div>
                <p className="text-center text-medium font-medium">
                  Covid 19 impact requires us to reassess our Category
                  Strategies
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 rounded-lg px-8 pb-12 pt-5 mb-6 border-2 border-black">
              <div className="my-10 flex justify-center">
                <img src={Ship} alt="" />
              </div>
              <div>
                <p className="text-center text-medium font-medium">
                  New energies require new Strategy. Energy transition is not
                  about copying the traditional supply chain.
                </p>
              </div>
            </div>
          </div>
        </Row>
      </div>

      <div className="px-0 md:px-20 my-10">
        <div className="bg-cover bg-center w-full rounded-none md:rounded-xl px-1 py-5 md:p-6" style={{ backgroundImage: `url(${Category_strategy_points})` }}>
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
                    <li className="text-xl font-medium text-white my-3 flex gap-3">
                      <img src={Check} alt="" /> Designed strategy delivers
                      Business Plan
                    </li>
                    <li className="text-xl font-medium text-white my-3 flex gap-3">
                      <img src={Check} alt="" /> Roadmap for Near- to long term
                      sustainable cost reduction
                    </li>
                    <li className="text-xl font-medium text-white my-3 flex gap-3">
                      <img src={Check} alt="" /> Successful outsourcing by
                      detailed modelling
                    </li>
                    <li className="text-xl font-medium text-white my-3 flex gap-3">
                      <img src={Check} alt="" /> We make function & line drive
                      delivery of strategy and savings
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-end">
              <h3 className="text-2xl md:text-4xl font-semibold md:font-medium text-white mt-6 mb-3">
                Category Strategy & Contract Strategy
              </h3>
            </div>
          </div>
        </div>
        <div className="my-6 px-4 md:px-0">
          <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway]">
            ‘If you always do what you always did, you will always get what you
            always got.’
          </h4>
          <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway] mt-2">
            -Henry Ford
          </h4>
        </div>
      </div>

      <div className="px-4 md:px-20">
        <h2 className="text-center text-3xl font-bold text-[#29385E]">
          Our Scope
        </h2>
      </div>

      <div className="px-4 md:px-20">
        <Row>
          <div className="mt-10 block lg:flex justify-center gap-5">
            <div className="w-full lg:2/6 border border-black px-4 py-8 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Hold Strategic Dialog
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Defining key objectives, involvement from the right
                  stakeholders, probing out the right information, as well as
                  capturing the drivers of the contract strategy. Our Workshop
                  program delivers!
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 border border-black px-4 py-8 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Co-Design Contract Strategy
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Linking business plan to field contract performance. The right
                  KPI to drive top quartile delivery at the right cost. This is
                  our angle to developing Contract Strategy. Let us develop your
                  contract strategies to drive performance.
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 border border-black px-4 py-8 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Market Research
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  We will conduct extensive market research to develop your
                  strategy; beyond your vendor list, we pursue innnovation.
                </p>
              </div>
            </div>
          </div>
        </Row>
        <div className="">
          <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway] mt-2">
            A category strategy is about creating synergy and leverage.
          </h4>
        </div>
        <Row>
          <div className="mt-5 block lg:flex justify-center gap-5">
            <div className="w-full lg:2/6 border border-black px-4 py-8 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Demand & Supply Assessment
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Data is at the core of your strategy development. How to use
                  the data? How about the intepretation? Assess historic and
                  future demand. Latest Supplier developments.
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 border border-black px-4 py-8 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Contract Models
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  ‘Horses for Courses’. Our strength is bringing contract models
                  to the table that safeguard delivery and cost efficiency.
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 border border-black px-4 py-8 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Co-Design Category Strategy
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Developing Category Management Strategy based on value chain
                  integration. We work closely with clients’ technical
                  department to identify target areas for extracting value.
                  Either by formulating new or by enhancing existing category
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </Row>

        <div className="">
          <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway] mt-2">
            Do you know your market? Engage. A successful outcome is defined by
            its’ strategy.
          </h4>
        </div>
      </div>

      <div className="px-4 md:px-20 mt-20">
        <h2 className="text-4xl font-medium text-[#29385E] font-Montserrat">
          The Supply Chain by{" "}
          <span className="text-[#00ABB8]">SLA Services</span>
        </h2>
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

      <h3 className="text-center text-3xl font-[Raleway] my-5">
        <span className="text-[#1B3B64]">Tendering &</span>{" "}
        <span className="text-[#00ABB8]">Outsourcing</span>
      </h3>
      <p className="text-center">
        Procurement is done in-house by most of our Clients.With involvement of
        our experts, tools and systems the results improve significantly.
      </p>

      <h2 className="text-center text-3xl font-bold text-[#29385E] mt-10">
        Related Articles and Case Studies
      </h2>

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
