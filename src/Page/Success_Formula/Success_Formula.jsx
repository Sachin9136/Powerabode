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
import { Success_Formula, Success_Formula1, Success_Formula2, Success_Formula3, Success_Formula4, Success_Formula5, DNA } from "../../components/Img/ImportedImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About_us = () => {

  return (
    <>
      <CommanBanner children={Success_Formula} />

      <div className="">
        <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10'>Capex / Opex Program</h2>
        <h2 className='text-center text-xl font-medium text-[#29385E] mt-3 mb-6'>The Road To Cost Leadership</h2>
        <div>
          <h3 className="text-[#504F4F] text-xl text-center">Reducing Opex by double digit percentage. Optimising Capex and Opex. Involving <br /> cost experts with frontline experience to optimise value.</h3>
        </div>

        <Row>
            <div className="px-4 md:px-20 my-10 block lg:flex justify-center gap-5">
                <div className="w-full lg:2/6 border-2 bg-[#51A9B433] rounded-lg shadow-lg px-4 py-8 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-[#59ADB7] mb-8">Why a program?</h3>
                    </div>
                    <div>
                    <p className="text-medium font-medium">Standard is to negotiate lower prices with suppliers and service providers. This is only 20% of the savings potential. But this is where it stops for most companies. The Cost and Value Philosophy shows where additional value improvements and cost efficiencies are possible.</p>
                    </div>
                </div>

                <div className="w-full lg:2/6 border-2 bg-[#51A9B433] rounded-lg shadow-lg px-4 py-8 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-[#59ADB7] mb-8">3-Tier structure</h3>
                    </div>
                    <div>
                    <p className="text-medium font-medium">We deliver savings. Also, we take your teams with us on that journey. Analysis, Delivery and optimise value Training are the three pillars of our Cost Leadership Program.</p>
                    </div>
                </div>
        
                <div className="w-full lg:2/6 border-2 bg-[#51A9B433] rounded-lg shadow-lg px-4 py-8 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-[#59ADB7] mb-8">Cost and Value intelligence</h3>
                    </div>
                    <div>
                    <p className="text-medium font-medium">The basis of this philosophy is that cost is not about rates only. The majority of the savings potential sits in Specification and Efficiency. We use the Extended Contract Management Team (ECMT) to deliver the full savings potential.</p>
                    </div>
                </div>
            </div>
        </Row>

        <Row>
            <div className="px-4 md:px-20 my-10 block lg:flex justify-center gap-5">
                <div className="w-full lg:2/6 border-2 bg-[#51A9B433] rounded-lg shadow-lg px-4 py-8 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-[#59ADB7] mb-8">Bespoke</h3>
                    </div>
                    <div>
                    <p className="text-medium font-medium">We will adapt the program to your organisation. The targets, training modules, structure to make it inclusive. We will work with you to define the success.</p>
                    </div>
                </div>

                <div className="w-full lg:2/6 border-2 bg-[#51A9B433] rounded-lg shadow-lg px-4 py-8 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-[#59ADB7] mb-8">Distruptive & Controlled</h3>
                    </div>
                    <div>
                    <p className="text-medium font-medium">The impact will be deep, as the targets are not modest. We control the impact in our way of work with focus on success, not on blame, Training, Teams celebrate savings. All ingredients of the program.</p>
                    </div>
                </div>
        
                <div className="w-full lg:2/6 border-2 bg-[#51A9B433] rounded-lg shadow-lg px-4 py-8 mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-[#59ADB7] mb-8">Winners!</h3>
                    </div>
                    <div>
                    <p className="text-medium font-medium">A successful cost saving program is in the end delivered by your own people. We will equip them, involving them in our methods & providing training. Your cost Leadership will make you future proof in the turbulent energy markets</p>
                    </div>
                </div>
            </div>
        </Row>

        <div className="">
            <div className="w-[72%] lg:-mt-28">
                <img src={DNA} alt="" />
            </div>
        </div>

        <div className="px-4 lg:px-20 -mt-[100px] lg:-mt-[330px]">
            <div className="my-10 flex justify-center">
                <img className="z-50" src={Success_Formula1} alt="" />
            </div>

            <div className="my-10 flex justify-center">
                <img src={Success_Formula2} alt="" />
            </div>

            <div className="my-10 flex justify-center">
                <img src={Success_Formula3} alt="" />
            </div>

            <div className="my-10 flex justify-center">
                <img src={Success_Formula4} alt="" />
            </div>

            <div className="my-10 flex justify-center">
                <img src={Success_Formula5} alt="" />
            </div>
        </div>

      </div>

      <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10'>Check More Articles, Case Study, Philosophy & Thinking</h2>

      <Footer />
    </>
  );
};

export default About_us;
