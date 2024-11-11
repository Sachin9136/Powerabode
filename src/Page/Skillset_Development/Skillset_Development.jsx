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
import {  Skillset_Development_banner, Skillset_Development_1, Skillset_Development_2, Skillset_Development_3, Skillset_Development_4, Card_img, one, two, three } from "../../components/Img/ImportedImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About_us = () => {

    const settings = {
        dots: true,
        arrow: false,
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
      <CommanBanner children={Skillset_Development_banner} />

        <div className="px-4 md:px-20 my-10">
            <div>
                <h2 className='text-center text-3xl font-bold text-[#29385E] mt-6 mb-3'>Local Content Development; Training is the key</h2>
            </div>

            <div className="my-10 block lg:flex justify-center gap-5">
                <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                    <div>
                        <h3 className="text-2xl font-bold text-[#29385E] mb-8">For Whom?</h3>
                    </div>
                    <div>
                        <p className="text-medium font-medium">Powerabode academy and its training programs are designed for the ECMT (extended contact management teams) and its members.
                        <br />Strong focus on Cost Efficiency and commercial results.</p>
                    </div>
                </div>

                <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                    <div>
                        <h3 className="text-2xl font-bold text-[#29385E] mb-8">Why the ECMT?</h3>
                    </div>
                    <div>
                        <p className="text-medium font-medium">The ECMT is in the heart of the integrated supply chain (ISC).They use & influence contracts everyday.Why the ECMT?</p>
                        <ul className="list-disc ml-7">
                            <li>Create sence of urgency</li>
                            <li>Create ownership of savings process</li>
                            <li>Has influence & control on commercial performance</li>
                            <li>Ideal platform to achieve cost efficiency</li>
                        </ul>
                    </div>
                </div>

                <div className="w-full lg:2/6 shadow-lg rounded-lg px-4 py-8 mb-6 bg-[#DCEEF0]">
                    <div>
                        <h3 className="text-2xl font-bold text-[#29385E] mb-8">What is ISC?</h3>
                    </div>
                    <div>
                        <p className="text-medium font-medium">Integrated Supply Chain (ISC) is all about interdependence and synergy between Client and its contracts.</p>
                        <p className="text-medium font-medium mt-3">Recognising and mastering these between multidisciplinary teams, is the key to cost efficiency and operational effectiveness.</p>
                    </div>
                </div>
                
            </div>
        
            <div className="flex justify-center">
                <img src={Skillset_Development_1} alt="" />
            </div>

            <div className="my-10 block lg:flex">
                <div className="w-full lg:w-1/2 px-0 md:px-10 lg:px-20">
                    <div className="shadow-lg rounded-lg px-4 py-8 mb-10">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-5">Benefits?</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Transforms ECMT into a strong and effective delivery team.
                            <br />Focuses on Cost Efficiency.</p>
                        </div>
                    </div>

                    <div className="shadow-lg rounded-lg px-4 py-8 mb-10">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-5">Speciality</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">Own Contract of ECMT is used to customise the training</p>
                            <p className="text-medium font-medium">Trainers and coaches are Ex-IOC Frontline experienced Direct transfer of learning in Contracts</p>
                        </div>
                    </div>

                    <div className="shadow-lg rounded-lg px-4 py-8 mb-10">
                        <div>
                            <h3 className="text-2xl font-bold text-[#29385E] mb-5">How?</h3>
                        </div>
                        <div>
                            <p className="text-medium font-medium">ISC Training:</p>
                            <ul className="list-disc ml-6">
                                <li>10 Modules</li>
                                <li>2x5 Days or 3x3 Days</li>
                            </ul>
                            <p className="text-medium font-medium mt-3">8 Skillset Trainings (1-2 Days):</p>
                            <ul className="list-disc ml-6">
                                <li>Value Stream Mapping</li>
                                <li>Should Cost Modelling</li>
                                <li>Tender Evaluation</li>
                                <li>Evaluation & Remuneration Models</li>
                                <li>Cost & Value focused thinking</li>
                                <li>Total Cost & Value of ownership</li>
                                <li>Strategic Sourcing vs Sourcing Strategy</li>
                                <li>Contract Management</li>
                                <li>Contract Interface Matrix</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="px-4 py-8 mb-6">
                        <img src={Skillset_Development_2} alt="" />
                    </div>

                    <div className="px-4 py-8 mb-6 block md:flex">
                        <img className="-mt-56" src={Skillset_Development_3} alt="" />
                        <img className="-mt-56" src={Skillset_Development_4} alt="" />
                    </div>
                </div>
            </div>

            <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10'>Top Articles & Case Studies</h2>

            <div className="my-10">
                <Slider {...settings}>
                    <div>
                    <Card_slider
                        image={one}
                        title="Drilling Cost Transformation"
                        description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
                    />
                    </div>
                    <div>
                    <Card_slider
                        image={two}
                        title="Drilling Cost Transformation"
                        description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
                    />
                    </div>
                    <div>
                    <Card_slider
                        image={three}
                        title="Drilling Cost Transformation"
                        description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
                    />
                    </div>

                    <div>
                    <Card_slider
                        image={one}
                        title="Drilling Cost Transformation"
                        description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
                    />
                    </div>

                    <div>
                    <Card_slider
                        image={two}
                        title="Drilling Cost Transformation"
                        description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
                    />
                    </div>
                </Slider>
            </div>
        </div>

      <Footer />
    </>
  );
};

export default About_us;
