// import React from "react";
import React, { useState } from "react";
import {
  Column,
  Heading,
  Row,
  Span,
  Wraper,
  Button,
} from "../../components/ComponentsIndex";

import {Hero_banner, Cost_optimization, Downstream, Hydrogen, Nuclear, Power, Renewable_wind, Upstream_offshore, Upstream_onshore, Water, Renewable,
  Supply_chain, OPEX, Codex, CM, Academy, Cost_and_Value, cost_efficiency, energy_transition, supply_chain_left, Down_arrow_menu} from "../../components/Img/ImportedImage";


import Chatbot from "../../components/Chatbot/Chatbot";
import How_we_help_client from "../../components/How_we_help_client/How_we_help_client";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Footer from "../../components/footer/footer";

import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>

    <div className="bg-gray-100">
      <div className="bg-white">
        <div className="">
          <img src={Hero_banner} alt="Icon 1" className="w-full" />
        </div>
      </div>

     {/* Icons Section */}
      <div className="bg-[#073A4E] py-6">
        <div className="container mx-auto flex flex-wrap justify-around text-white">
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img src={Upstream_onshore} alt="Upstream Onshore" className="h-10 mx-auto"/>
            <p className="mt-2">Upstream <br /> Onshore</p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img src={Upstream_offshore} alt="Upstream Offshore" className="h-10 mx-auto"/>
            <p className="mt-2">Upstream <br /> Offshore</p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img src={Downstream} alt="Downstream Refinery" className="h-10 mx-auto"/>
            <p className="mt-2">Downstream <br /> Refinery</p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img src={Power} alt="Power" className="h-10 mx-auto"/>
            <p className="mt-2">Power</p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img src={Water} alt="Water Desalination" className="h-10 mx-auto"/>
            <p className="mt-2">Water <br /> Desalination</p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img src={Nuclear} alt="Nuclear Energy" className="h-10 mx-auto"/>
            <p className="mt-2">Nuclear <br /> Energy</p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img src={Renewable} alt="Renewable Solar" className="h-10 mx-auto"/>
            <p className="mt-2">Renewable <br /> Solar</p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img src={Renewable_wind} alt="Renewable Wind" className="h-10 mx-auto"/>
            <p className="mt-2">Renewable <br /> Wind</p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img src={Hydrogen} alt="Hydrogen" className="h-10 mx-auto"/>
            <p className="mt-2">Hydrogen</p>
          </div>
          {/* Repeat similar divs for other categories */}
        </div>
      </div>


      {/* Value Section */}
      <div className="bg-white py-12 px-4 md:px-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div>
              <img src={Cost_optimization} alt="Cost Optimization" className="w-full h-auto" />
            </div>

            { /* Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-[#29385E]">
                Delivering Value Improvement and Cost Optimisation.
              </h2>
              <p className="mt-4">
                The impact of supply chain & procurement on the bottom line is grossly underestimated.
              </p>
              <p className="mt-4">
                The angle of the integrated supply chain and procurement; this underpins all products and services of powerabode.
              </p>
              <p className="mt-4">
                Owners and stakeholders of large energy assets recognise the powerabode ecosystem optimising delivery.
              </p>
              <p className="mt-4">
                Challenges like energy transition, achieving sustainable and competitive cost levels and the resilience of your supply chain. With the changing energy landscape, it takes experts to deal with these challenges. The solutions have been created to support you on this journey.        </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-semibold text-[#29385E]">
            How we help Clients?
          </h3>
          <p className="mt-4 mx-auto text-base font-normal">
          Commercial Ecosystem with Products and Services
          </p>
          <p className="mt-2 mx-auto text-[#504F4F] text-base font-medium">
            Delivering Cost Efficiency and Value Improvement <span className="text-2xl text-black">|</span> Dealing with Supply Chain Resilience <span className="text-2xl text-black">|</span> Partner in Energy Transition
          </p>
        </div>
      </div>

      <How_we_help_client />

      <div className="bg-white py-6">
        <div>
          <p className="text-center text-[#29385E] text-3xl font-bold">Select your Challenge & find your Solutions</p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between px-4 md:px-14 my-10">
          <div className="w-full md:w-1/2 lg:w-1/3 text-center mb-6 p-5">
            <img src={cost_efficiency} alt="Cost Efficiency" className="mx-auto"/>
            <a href="/the-story-of-powerabode" rel="noopener noreferrer">
              <button className="bg-[#1B3B64] text-white text-sm rounded-3xl py-3 px-14 mt-5">
                Cost Efficiency
              </button>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 text-center mb-6 p-5">
            <img src={energy_transition} alt="Energy Transition" className="mx-auto"/>
            <a href="/the-story-of-powerabode" rel="noopener noreferrer">
              <button className="bg-[#1B3B64] text-white text-sm rounded-3xl py-3 px-14 mt-5">Energy Transition</button>
            </a>
          </div>
          <div className="w-full md:w-full lg:w-1/3 text-center mb-6 p-5">
            <img src={supply_chain_left} alt="Supply Chain Resilience" className="mx-auto"/>
            <a href="/the-story-of-powerabode" rel="noopener noreferrer">
              <button className="bg-[#1B3B64] text-white text-sm rounded-3xl py-3 px-14 mt-5">Supply Chain Resilience</button>
            </a>
          </div>
        </div>
      </div>

      <div class="container px-4 md:px-20 mx-auto">
        <div className="py-10">
          <p className="text-center text-[#29385E] text-3xl font-bold pb-10">Frequently Asked Questions</p>
          <div class="">
            {/* <!-- FAQ 1 --> */}
            <details class="group py-1">
              <summary class="text-xl bg-[#EEF1FA] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
                How can the commercial ecosystem benefit energy transition?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                  <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-sm pl-4">
                For energy transition, new activities require an overnight mature management system. CODEX is a system fit for international standard and pragmatic operations. No implementation risk and focus on cost efficiency. Based on the Cost Intelligence Philosophy.
              </p>
            </details>
            <details class="group py-1">
              <summary class="text-xl bg-[#EEF1FA] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
              Our operating cost are high, how can we reduce them sustainably?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-sm pl-4">
                For energy transition, new activities require an overnight mature management system. CODEX is a system fit for international standard and pragmatic operations. No implementation risk and focus on cost efficiency. Based on the Cost Intelligence Philosophy.
              </p>
            </details>
            <details class="group py-1">
              <summary class="text-xl bg-[#EEF1FA] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
              We negotiated with suppliers, but the cost are still high. What to do?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-sm pl-4">
                For energy transition, new activities require an overnight mature management system. CODEX is a system fit for international standard and pragmatic operations. No implementation risk and focus on cost efficiency. Based on the Cost Intelligence Philosophy.
              </p>
            </details>
            <details class="group py-1">
              <summary class="text-xl bg-[#EEF1FA] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
              We lack specialist expertise for building remuneration models, how do we fix this?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-sm pl-4">
                For energy transition, new activities require an overnight mature management system. CODEX is a system fit for international standard and pragmatic operations. No implementation risk and focus on cost efficiency. Based on the Cost Intelligence Philosophy.
              </p>
            </details>
            <details class="group py-1">
              <summary class="text-xl bg-[#EEF1FA] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
              How do we get an integrated, commercially driven and pragmatic Supply Chain Management System?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-sm pl-4">
                For energy transition, new activities require an overnight mature management system. CODEX is a system fit for international standard and pragmatic operations. No implementation risk and focus on cost efficiency. Based on the Cost Intelligence Philosophy.
              </p>
            </details>
            <details class="group py-1">
              <summary class="text-xl bg-[#EEF1FA] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
              Our Materials Management system is not a reflection of reality. How do we fix this?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-sm pl-4">
                For energy transition, new activities require an overnight mature management system. CODEX is a system fit for international standard and pragmatic operations. No implementation risk and focus on cost efficiency. Based on the Cost Intelligence Philosophy.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
    <ImageSlider />
    {/* <Chatbot /> */}
      <Footer />
    </>
  );
}

export default Home;
