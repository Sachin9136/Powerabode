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
import { Cost_Recovery_banner, SLA_bg, Cost_recovery_points, CategoryStrategy_img, TenderingandOutsourcing, PostAwardContract, Sla_tag, Check, Island, Find_the_gap, Boxes } from "../../components/Img/ImportedImage";
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
        image: Island,
        title: "Does focus on rates make sense?t",
        description: "Cost Leadership will remain one of top 3 focus areas of Energy Industry for next decade. We excel in this area..."
      },
      {
        image: Find_the_gap,
        title: "Deliver despite budget constraints",
        description: "Every supply chain has waste, we fix it. Complex analyses using our CI Philosophy, double digit improvement to your budget and opex, value optimisation..."
      },
      {
        image: Boxes,
        title: "Misalignment with the businessplan ",
        description: "Not everyone knows the businessplan. This information is confidential or under evaluation. But, in the operations latest information is key for opex and capex decisions. How to deal with misalignment?"
      }
    ];

  return (
    <>
      <CommanBanner children={Cost_Recovery_banner} />

        <div className="px-4 md:px-20 my-10">
          <div className="bg-cover bg-center w-full rounded-none md:rounded-xl px-1 py-5 md:p-6" style={{ backgroundImage: `url(${Cost_recovery_points})` }}>
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
                        <img src={Check} alt="" /> Experts in control – understanding the project
                      </li>
                      <li className="text-xl font-medium text-white my-4 flex gap-3">
                        <img src={Check} alt="" /> Best practices cost recovery
                      </li>
                      <li className="text-xl font-medium text-white my-4 flex gap-3">
                        <img src={Check} alt="" /> Full recovery – fair challenge – avoid claims
                      </li>
                      <li className="text-xl font-medium text-white my-4 flex gap-3">
                        <img src={Check} alt="" /> Compliant evidence for recovery
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-end">
                <h3 className="text-2xl md:text-4xl font-semibold md:font-medium text-[#1b3b64] mt-6 mb-3">
                Cost Recovery
                </h3>
              </div>
            </div>
          </div>
            <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10'>Building and implementing Category & Contract Strategies</h2>
        </div>

        <div className="px-4 md:px-20 my-10">
          <div className="my-6">
            <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway]">Understanding the Cost.            </h4>
          </div>
        </div>

        <div className="px-4 md:px-20">
            <h2 className='text-center text-3xl font-bold text-[#29385E]'>Our Scope</h2>
        </div>

        <div className="px-4 md:px-20">
            <Row>
                <div className="mt-10 block lg:flex justify-center gap-5">
                    <div className="w-full lg:3/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Expertise</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">In the field, the world looks different. The pressure of delivery often takes the eye of the ball for assurance. Name a major energy asset, and its likely our experts interacted with it.</p>
                        </div>
                    </div>

                    <div className="w-full lg:3/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Not an accounting job
                            </h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Surprisingly, people with an accounting background are sourced for this activity. We hold the key expertise that assesses compliant evidence to all your costs.</p>
                        </div>
                    </div>
                </div>
            </Row>
            <div className="">
              <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway] mt-2">The analogy of cost recovery in most cases:</h4>
              <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway] mt-2">Driving a car forward, just using the rearview mirror.              </h4>
            </div>
            <Row>
                <div className="mt-5 block lg:flex justify-center gap-5">
                    <div className="w-full lg:3/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Two sides of the same Coin                            </h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">When Energy companies prepare for Audit Defence, Governments prepare for Recovery Challenge. They are two sides of the same coin. powerabode can provide a dedicated team for Recovery Challenge or Defence.</p>
                        </div>
                    </div>

                    <div className="w-full lg:3/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Early involvement                            </h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Audit defence requires hard evidence. There is no alternative to early involvement when it comes to cost recovery. We have an experienced team ready to start</p>
                        </div>
                    </div>
                </div>
            </Row>

            <div className="">
              <h4 className="text-[#00ABB8] text-3xl font-normal text-end font-[Raleway] mt-2">Do you know your market? Engage. A successful outcome is defined by its’ strategy.</h4>
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

        <div>
          <h1 className="text-center text-3xl font-bold mb-6">Custom Page with Dynamic Cards</h1>
          {/* Render the Cards component with dynamic content */}
          <Cards_with_bg background={SLA_bg} cardsContent={cardsContent} />
        </div>

      <Footer />
    </>
  );
};

export default About_us;
