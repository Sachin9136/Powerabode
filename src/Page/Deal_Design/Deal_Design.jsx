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
import { CM_for_Contract_2, Deal_Design_banner, Deal_Design1, Deal_Design2, Deal_Design3 } from "../../components/Img/ImportedImage";

const About_us = () => {

  return (
    <>
      <CommanBanner children={Deal_Design_banner} />

        <div className="px-4 md:px-20 my-10">
            <div>
                <h2 className='text-center text-3xl font-bold text-[#29385E] mt-6 mb-2'>Deal Design</h2>
                <h4 className='text-center text-2xl font-medium mb-3'>Bespoke. It sometimes takes an outside view, or an independent position to resolve a situation.</h4>
                <p className='text-center text-md font-medium mb-3 text-[#504F4F]'>Supply Chain Disruption & the Energy Transition bring new situations about. We have already been involved in some of the following <br /> challenges. We call this activity “Deal Design”.</p>

            </div>
            <div className="lg:flex my-10">
                <div className="w-full lg:w-1/2 px-3">
                    <div>
                        <h2 className='text-3xl font-bold mt-6 mb-3'>Sourcing Strategy</h2>
                        <p className="text-lg font-normal lg:mr-12 mb-3">Supply Chain Disruption created a new awareness after COVID. Any Supply Chain can encounter a Black Swan Event. The impact of this is one thing, the assumption that everything will go back again to ‘normal’, is another.</p>
                        <p className="text-lg font-normal lg:mr-12">We set up your Sourcing Strategy and establish alternative solutions. Risk assessed and robust.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 ">
                    <div className="lg:flex justify-center mb-10 mt-3">
                        <img  src={Deal_Design1} alt="" />
                    </div>
                </div>
            </div>

            <div className="lg:flex my-10">
                <div className="w-full lg:w-1/2 ">
                    <div className="lg:flex justify-center mb-10 mt-3">
                        <img  src={Deal_Design2} alt="" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 px-3">
                    <div>
                        <h2 className='text-3xl font-bold mt-6 mb-3'>Petroleum Product Sourcing & Finance</h2>
                        <p className="text-xl font-medium lg:mr-12 mb-3">Both on deal and process level. Deal structuring, including finance options. We have direct involvement in consortia to bring the most favourable options to our clients regrading fuel supply. Diesel, Petrol and LNG are key products where we consult clients.</p>
                       <ul className="list-disc ml-5">
                        <li className="text-lg font-normal mt-2">Yearly contracts, supported by SBLC, are subject to discount structures.</li>
                        <li className="text-lg font-normal mt-2">For governments and their NOC’s finance options are available.</li>
                       </ul>
                    </div>
                </div>
            </div>

            <div className="lg:flex my-10">
                <div className="w-full lg:w-1/2 px-3">
                    <div>
                        <h2 className='text-3xl font-bold mt-6 mb-3'>Asset & Operations Modelling</h2>
                        <ul className="list-disc ml-5">
                            <li className="mt-2 text-lg font-normal">Set up of structure for operations of energy assets for National Oil Companies (NOC’s)</li>
                            <li className="mt-2 text-lg font-normal">Finance of new assets</li>
                            <li className="mt-2 text-lg font-normal">Program to develop NOC’s towards becoming an Operator</li>
                            <li className="mt-2 text-lg font-normal">Handover-model and Handover-program for assets. For example IOC stepping out, and handing over to the National Oil Company.</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 ">
                    <div className="lg:flex justify-center mb-10 mt-3">
                        <img  src={Deal_Design3} alt="" />
                    </div>
                </div>
            </div>
        </div>


      <Footer />
    </>
  );
};

export default About_us;
