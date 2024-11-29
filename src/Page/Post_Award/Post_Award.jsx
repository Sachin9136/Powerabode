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
import {
  Post_Award_banner,
  Cycle,
  Snow,
  Lion,
  Ship,
  Category_1,
  CategoryStrategy_img,
  TenderingandOutsourcing,
  PostAwardContract,
  Post_award_points,
  SLA_tag_White,
  Check,
  SLA_bg,
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

  const cardsContent = [
    {
      image: Cycle,
      title: "Conflict or Conflicting KPI’s?",
      description:
        "Working as a team. That’s what we do. But how do we know we are all aligned? Conflicting KPI’s cause massive inefficiencies. Who needs enemies if you have friends? ",
      link: "conflict-or-conflicting-KPI",
    },
    {
      image: Snow,
      title: "Deliver as Planned",
      description:
        "Sometimes ‘surprises’ are actually predictable. The top 5 of ‘predictable’ surprises...",
      link: "deliver-as-planned",
    },
    {
      image: Lion,
      title: "Hidden in Plain Sight",
      description:
        "Crazy as it may sound; there’s always an elephant in the room.. Central in our way of work are the users of the contract, the ECMT. They are underestimated as a platform. 9 Quote: Our Experts know your business.",
      link: "hidden-in-plain-sight",
    },
  ];

  return (
    <>
      <CommanBanner
        children={Post_Award_banner}
        heading="Contract Management; high impact area for delivery
"
        subheading="Underrated and little loved. But delivery is heavily impacted by Post-Award Contract Management. Being on top of it. Discipline. Also understanding the scope and the performance drivers. Working with all stakeholders. The powerabode program for PACM brings a solid contribution toward Cost Leadership."
      />

      <div className="px-0 md:px-20 my-10">
        <div
          className="bg-cover bg-center w-full rounded-none md:rounded-xl px-1 py-5 md:p-6"
          style={{ backgroundImage: `url(${Post_award_points})` }}
        >
          <div>
            <div>
              <img src={SLA_tag_White} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full lg:w-6/12 px-3 mt-5 md:mt-5">
                <div className="p-5 bg-[#1d345ec9] rounded-xl">
                  <h2 className="text-3xl font-medium text-white mt-6 mb-3">
                    The Result
                  </h2>
                  <ul>
                    <li className="text-xl font-medium text-white my-3 flex gap-3">
                      <img src={Check} alt="" /> Highly effective ECMT with ISC
                      skillsets; delivering cost efficiency
                    </li>
                    <li className="text-xl font-medium text-white my-3 flex gap-3">
                      <img src={Check} alt="" /> Bespoke tools to drive contract
                      performance and bank savings
                    </li>
                    <li className="text-xl font-medium text-white my-3 flex gap-3">
                      <img src={Check} alt="" /> Cost Intelligence delivers
                      savings from efficiency/specification/rates
                    </li>
                    <li className="text-xl font-medium text-white my-3 flex gap-3">
                      <img src={Check} alt="" /> Interface manager guarantees
                      cost efficiency
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-end">
              <h3 className="text-2xl md:text-4xl font-semibold md:font-medium text-white mt-6 mb-3">
                Post Award Contract Management
              </h3>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h4 className="text-[#00ABB8] text-3xl font-normal text-end">
            High impact area for delivery
          </h4>
          
        </div>
      </div>

      {/* <div className="px-4 md:px-20 my-10">
        <h2 className="text-center text-3xl font-bold text-[#29385E] mt-10">
          Building and implementing Category & Contract Strategies
        </h2>
      </div>

      <div className="px-4 md:px-20 my-10">
        <div>
          <img className="w-full" src={Category_1} alt="" />
        </div>
        <div className="my-6">
          <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway]">
            High impact area for delivery
          </h4>
        </div>
      </div> */}

      <div className="px-4 md:px-20">
        <h2 className="text-3xl font-bold text-[#29385E]">
          Our Scope :
        </h2>
      </div>

      <div className="px-4 md:px-20">
        <Row>
          <div className="mt-10 block lg:flex justify-center gap-5">
            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Interface Manager
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Brings delivery in sync with planning. Teams change, but is
                  the intend still clear? What is the delivery strategy? Our
                  program aligns and connects the stakeholders. It is a key
                  enabler for contract performance.
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Output Analyses
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Did you get what you intended? We map the performance against
                  plan.
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  ISC Training
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  the Integrated Supply Chain training. The Extended Contract
                  Management Team (ECMT) will participate. They will deliver!
                </p>
              </div>
            </div>
          </div>
        </Row>
        <div className="">
          <h4 className="text-[#00ABB8] text-2xl font-normal text-end mt-2">
            Did you ever check if there are conflicting KPI's?
          </h4>
        </div>
        <Row>
          <div className="mt-5 block lg:flex justify-center gap-5">
            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Frontline experts
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Mileage. Decades of field experience in using, influencing and
                  managing contracts. In difficult environments. With top
                  companies. Our focus is on delivery, not on anything else
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Set up & improve PACM
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Translation from the tender stage to the contract delivery. We
                  set up and implement your Contract Management Plan, KPIs,
                  Cost, commitment & Budget Control, dashboards, performance
                  reviews, Assurance & Audit preparation and execution.
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  TCO/TVO program{" "}
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Complex. Valuable. Necessary. It provides you insight. Applied
                  properly during Post Award stage, significant value can be
                  developed. Perfect tools to improve delivery and commercial
                  performance during Post Award stage.
                </p>
              </div>
            </div>
          </div>
        </Row>

        <div className="">
          <h4 className="text-[#00ABB8] text-2xl font-normal text-end mt-2">
            'What gets measured, gets managed'
          </h4>
          <h4 className="text-[#00ABB8] text-3xl font-bold text-end  mt-2">
            -Peter Drucker
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
        {/* <h1 className="text-center text-3xl font-bold mb-6 text-[#293853]">
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
