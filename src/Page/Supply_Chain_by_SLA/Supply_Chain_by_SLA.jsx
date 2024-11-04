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
import { Success_Formula, Supply_Chain_by_SLA, Supply_Chain_by_SLA2, Supply_Chain_by_SLA3, CategoryStrategy_img, TenderingandOutsourcing, PostAwardContract } from "../../components/Img/ImportedImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About_us = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        focusOnSelect: true,
        dots: true,
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


  return (
    <>
      <CommanBanner children={Supply_Chain_by_SLA} />
      <CommanBanner children={Supply_Chain_by_SLA2} />

        <div className="px-4 md:px-20">
            <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10'>The Advantage of Supply Chain by Service Level Agreement</h2>
        </div>

        <div className="px-4 md:px-20 flex justify-center">
            <img src={Supply_Chain_by_SLA3} alt="" />
        </div>

        <div className="px-4 md:px-20 my-10 lg:my-20 lg:flex">
            <div className="w-full lg:w-1/2">
                <h3 className="text-3xl">Outsource Supply Chain and <br /> Procurement to powerabode</h3>
                <p className="my-2">Supply Chain by SLA is the home for category management, contracting & procurement and supply chain challenges.</p>
                <p className="my-2">Operations, Maintenance and Production. Supply Chain by SLA offers 6 key areas with dozens of services. The Service Level Agreement ensures the client to get expert services, when they need it. It is cost efficient, but also allows for expertise that is not always available in-house.</p>
                <p className="my-2">Cutting edge systems and processes, all built around our Cost Intelligence Philosophy take delivery to the next level.</p>
            </div>

            <div className="w-full lg:w-1/2 py-5 px-10 lg:py-16 ">
                <div>
                    <h1 className="text-2xl lg:text-4xl font-bold">“Every Supply Chain has <br /> Waste</h1>
                </div>
                <div className="flex justify-end mt-10 lg:mt-20">
                    <h1 className="text-2xl lg:text-4xl font-bold">We Fix It!”</h1>
                </div>
            </div>
        </div>

        <div className="px-4 md:px-20">
            <h2 className='text-center text-3xl font-bold text-[#29385E]'>How do We Deliver Our Services</h2>
        </div>

        <div className="px-4 md:px-20">
            <Row>
                <div className="my-10 block lg:flex justify-center gap-5">
                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Why external expert?</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Boost the performance of your supply chain activites. Maybe you just want peak shaving to deal with a temporary increase in workload? Driven by energy & Cost leadership. Contributing to your cost effectiveness.</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Service Level Agreement Value Proposition</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">The basis is our Cost intelligence philosophy. Outsourcing to ex-ioc experts. Productised solutions allow fast delivery. Our frontline experience ensures quality and accuracy.</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Remote?</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">We can deliver from your location, but also remote! Encrypted collaboration platform ‘MyAbode’ is central in our operations. We call it remote shoulder-to-shoulder.</p>
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <div className="my-10 block lg:flex justify-center gap-5">
                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Delivery focussed</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">We deliver. Very straight forward. Assurance sits at the heart of what we do. All our services are productised, so we can hit the ground running. No time to waste!</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Fixed Scope</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">For most services we can deliver a fixed scope, at a fixed price. Simple. Our processes are mature and strong, we follow our codex for delivery</p>
                        </div>
                    </div>

                    <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-8">Contact us</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">A video call, a presentation or workshop. Interaction with your teams is appreciated. Contact us, so we can introduce you to our portfolio. Within one week we can have an online workshop with your team.</p>
                        </div>
                    </div>
                </div>
            </Row>
        </div>

        <div className="px-4 md:px-20">
            <h2 className='text-4xl font-medium text-[#29385E] font-Montserrat'>The Supply Chain by <span className="text-[#00ABB8]">SLA Services</span></h2>
        </div>

        <div className="px-4 md:px-20 my-10">
            <div className=" my-10">
                <Slider {...settings}>
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

        <div className="px-4 md:px-20">
            <h2 className='text-2xl font-medium text-[#29385E] font-Montserrat text-center mb-3'>Tendering &  <span className="text-[#00ABB8]">Outsourcing</span></h2>
            <p className="text-[#212529] text-center">Procurement is done in-house by most of our Clients.With involvement of our experts, tools and systems the results improve significantly.</p>
        </div>

      <Footer />
    </>
  );
};

export default About_us;
