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
  Materials_Management_banner,
  SLA_bg,
  CategoryStrategy_img,
  TenderingandOutsourcing,
  PostAwardContract,
  Materials_management_points,
  Sla_tag,
  Check,
  Racks,
  Mountains,
  Structure,
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
      image: Racks,
      title: "Materials Management; a showstopper or a money maker?",
      description:
        "As an asset gets older, how to keep performing? Increased pressure on maintenance, legacy parts...",
        link:"materials-management-blog"
    },
    {
      image: Mountains,
      title: "The art of the deal",
      description:
        "Tendering and outsourcing are where a big impact is created for future performance. Call it the art of the deal. One of our SLA service...",
        link:"the-art-of-deal"
    },
    {
      image: Structure,
      title: "Unlocking Value to your bottom line",
      description:
        "Identifying a saving potential is a small step. The bigger thing is to bring it to your bottomline. We use the Integrated Supply Chain, the structure of our Cost Intelligence Philosophy and the people that use the contract to...",
        link:"unlocking-value-bottom"
    },
  ];

  return (
    <>
      <CommanBanner
        children={Materials_Management_banner}
        heading="Materials Management"
        subheading="The right goods at the right place, at the right time. Today, but also in 5 years. Is Materials Management a cost, or can it make you money?

"
      />

      <div className="px-4 md:px-20 my-10">
        <div
          className="bg-cover bg-center w-full rounded-none md:rounded-xl px-1 py-5 md:p-6"
          style={{ backgroundImage: `url(${Materials_management_points})` }}
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
                    <li className="text-xl font-medium text-white my-4 flex gap-3">
                      <img src={Check} alt="" /> Unlock Cash & free up working
                      capital
                    </li>
                    <li className="text-xl font-medium text-white my-4 flex gap-3">
                      <img src={Check} alt="" /> Inventory optimisation
                    </li>
                    <li className="text-xl font-medium text-white my-4 flex gap-3">
                      <img src={Check} alt="" /> Map asset & inventory; secure
                      supply
                    </li>
                    <li className="text-xl font-medium text-white my-4 flex gap-3">
                      <img src={Check} alt="" /> Fully trained ECMT for
                      Materials & Inventory
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-end">
              <h3 className="text-2xl md:text-4xl font-semibold md:font-medium text-white mt-6 mb-3">
                Materials Management
              </h3>
            </div>
          </div>
        </div>
        {/* <h2 className="text-center text-3xl font-bold text-[#29385E] mt-10">
          Building and implementing Category & Contract Strategies
        </h2> */}
      </div>

      <div className="px-4 md:px-20 my-10">
        <div className="my-6">
          <h4 className="text-[#00ABB8] text-3xl font-normal text-end">
            Materials in the right place, at the right time{" "}
          </h4>
        </div>
      </div>

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
                  7 Step program
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  A transformational journey of your Materials Management. At
                  pre-award or at post award stage, it is equally important for
                  operational/ commercial performance. From cost to maintenance
                  execution, it can be a Show Stopper.
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Inventory Optimisation
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Unlock cash and prevent it from getting locked again! Our
                  inventory optimisation links your operational , integrated
                  activity plan, contracts in ERP, materials availability, lead
                  time, logistics plan, stocking level, inventory forecast,
                  inventory management and management of change. powerabode sets
                  up and implements your entire MM Optimisation.
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  System & assurance
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  We built you a fully functional system, best practice based.
                  How to operate materials management in the field including
                  guidelines, processes, procedures, work instructions and
                  forms.
                </p>
              </div>
            </div>
          </div>
        </Row>
        <div className="">
          <h4 className="text-[#00ABB8] text-3xl font-normal text-end mt-2">
            Focus on Supply Chain Resilience{" "}
          </h4>
        </div>
        <Row>
          <div className="mt-5 block lg:flex justify-center gap-5">
            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">Data</h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  From data clean up, to capturing, to analysis. MM is not just
                  about a warehouse. Let us open the black box. It is actually
                  very exciting!
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Expediting
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Qualified experts and processes for expediting international
                  complex projects.
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Training{" "}
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  powerabode Academy is developing a set of training modules
                  regarding MM for 2021. Sign up now to keep informed!
                </p>
              </div>
            </div>
          </div>
        </Row>

        <div className="">
          <h4 className="text-[#00ABB8] text-3xl font-normal text-end mt-2">
            What Covid learnings have you implemented?{" "}
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
        <h1 className="text-center text-3xl font-bold mb-6">
          Custom Page with Dynamic Cards
        </h1>
        {/* Render the Cards component with dynamic content */}
        <Cards_with_bg background={SLA_bg} cardsContent={cardsContent} />
      </div>

      <Footer />
    </>
  );
};

export default About_us;
