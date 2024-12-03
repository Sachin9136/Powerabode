import React, { useState } from "react";

import {
  Row,
} from "../../components/ComponentsIndex";

import Footer from "../../components/footer/footer";
import CommanBanner from "../../components/Banners/CommanBanner";
import Img_Slider from "../../components/Img_Slider/Img_Slider";
import Cards_with_bg from "../../components/Cards/Cards_with_bg";
// import Cards from "./components/Cards"; // Import the dynamic Cards component
import {
  Lion,
  Structure,
  Strategy,
  SLA_bg,
  Tower,
} from "../../components/Img/ImportedImage";
import {
  Category_Strategy_banner,
  Bell,
  Injection,
  Ship,
  Category_strategy_points,
  Sla_tag,
  Check,
} from "../../components/Img/ImportedImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About_us = () => {

  const cardsContent = [
    {
      image: Strategy,
      title: "Strategic Sourcing is not a Sourcing Strategy",
      description:
        "Digitisation is key, but good old human intelligence is still key in defining the strategy. Artificial Intelligence is quickly gaining pace, but...",
      link: "articles-business-cases/sourcing-strategy",
    },
    {
      image: Tower,
      title: "Drilling Cost Transformation",
      description:
        "Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model...",
      link: "blog-articles-business-cases/drilling-cost-transformationblog",
    },
    {
      image: Structure,
      title: "Unlocking Value to your bottom line",
      description:
        "Identifying a saving potential is a small step. The bigger thing is to bring it to your bottomline. We use the Integrated Supply Chain, the structure of our Cost Intelligence Philosophy and the people that use the contract to…",
      link: "blog-articles-business-cases/Unlocking-value-savings-bottom-line",
    },
  ];

  return (
    <>
      <CommanBanner
        children={Category_Strategy_banner}
        heading="Category Strategy & Contract Strategy"
        subheading="Reducing cost is an art. Our Experts are not classic ‘consultants’. They had long careers in Category Management and Front-line Operations at various IOCs formulating many Category and Contracting strategies. powerabode have deep understanding of strategy and the value it can bring. We know it is the fundament to sustainable performance."
      />

      <div className="px-4 md:px-20 my-10">
        <h2 className="text-3xl font-bold text-[#29385E] mt-10">
          Building and implementing Category & Contract Strategies
        </h2>
      </div>

      <div className="px-4 md:px-20">
        <Row>
          <div className="my-10 block lg:flex justify-center gap-5">
            <div className="w-full lg:2/6 rounded-lg px-8 pb-5 pt-5 mb-6 border-2 border-[#eee]">
              <div className="my-5 flex justify-center">
                <img src={Bell} alt="" />
              </div>
              <div>
                <p className="text-center text-medium font-medium">
                  Post Covid we realised that some risks are real and some risks
                  are new
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 rounded-lg px-8 pb-12 pt-5 mb-6 border-2 border-[#eee]">
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

            <div className="w-full lg:2/6 rounded-lg px-8 pb-12 pt-5 mb-6 border-2 border-[#eee]">
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
        <div
          className="bg-cover bg-center w-full rounded-none md:rounded-xl px-1 py-5 md:p-6"
          style={{ backgroundImage: `url(${Category_strategy_points})` }}
        >
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
          <h4 className="text-[#00ABB8] text-2xl font-normal text-end">
            <i>
              {" "}
              ‘If you always do what you always did, you will always get what
              you always got.’
            </i>
          </h4>
          <h4 className="text-[#00ABB8] text-3xl text-end  mt-2 font-bold">
            -Henry Ford
          </h4>
        </div>
      </div>

      <div className="px-4 md:px-20">
        <h2 className="text-3xl font-bold text-[#29385E]">Our Scope :</h2>
      </div>

      <div className="px-4 md:px-20">
        <Row>
          <div className="mt-10 block lg:flex justify-center gap-5">
            <div className="w-full lg:2/6 border border-[#eee] px-4 py-8 mb-6">
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

            <div className="w-full lg:2/6 border border-[#eee] px-4 py-8 mb-6">
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

            <div className="w-full lg:2/6 border border-[#eee] px-4 py-8 mb-6">
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
          <h4 className="text-[#00ABB8] text-2xl font-normal text-end mt-2">
            A category strategy is about creating synergy and leverage.
          </h4>
        </div>
        <Row>
          <div className="mt-5 block lg:flex justify-center gap-5">
            <div className="w-full lg:2/6 border border-[#eee] px-4 py-8 mb-6">
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

            <div className="w-full lg:2/6 border border-[#eee] px-4 py-8 mb-6">
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

            <div className="w-full lg:2/6 border border-[#eee] px-4 py-8 mb-6">
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
          <h4 className="text-[#00ABB8] text-2xl font-normal text-end mt-2">
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

      <Img_Slider />

      <div>
        {/* <h1 className="text-center text-3xl font-bold mb-6 text-[#29385E]">
          Custom Page with Dynamic Cards
        </h1> */}
        {/* Render the Cards component with dynamic content */}
        <Cards_with_bg background={SLA_bg} cardsContent={cardsContent} />
      </div>

      <Footer />
    </>
  );
};

export default About_us;
