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

import {
  Cost_optimization,
  Downstream,
  Hydrogen,
  Nuclear,
  Power,
  Renewable_wind,
  Upstream_offshore,
  Upstream_onshore,
  Water,
  Renewable,
  Supply_Chain_Resilience,
  Cost_Efficiency,
  Codex,
  CM,
  Program_img,
  Energy_Transition,
  Sla_tag,
  OPEX,
  CVI_Logo,
  Supply_chain,
  cost_efficiency,
  energy_transition,
  supply_chain_left,
  Down_arrow_menu,
} from "../../components/Img/ImportedImage";

import Banners from "../../components/Banners/Banners";
import How_we_help_client from "../../components/How_we_help_client/How_we_help_client";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Footer from "../../components/footer/footer";

import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Banners />

      {/* Icons Section */}
      <div className="bg-[#073A4E] py-6">
        <div className="container mx-auto flex flex-wrap justify-around text-white">
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img
              src={Upstream_onshore}
              alt="Upstream Onshore"
              className="h-10 mx-auto"
            />
            <p className="mt-2 text-white">
              Upstream <br /> Onshore
            </p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img
              src={Upstream_offshore}
              alt="Upstream Offshore"
              className="h-10 mx-auto"
            />
            <p className="mt-2 text-white">
              Upstream <br /> Offshore
            </p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img
              src={Downstream}
              alt="Downstream Refinery"
              className="h-10 mx-auto"
            />
            <p className="mt-2 text-white">
              Downstream <br /> Refinery
            </p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img src={Power} alt="Power" className="h-10 mx-auto" />
            <p className="mt-2 text-white">Power</p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img
              src={Water}
              alt="Water Desalination"
              className="h-10 mx-auto"
            />
            <p className="mt-2 text-white">
              Water <br /> Desalination
            </p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img src={Nuclear} alt="Nuclear Energy" className="h-10 mx-auto" />
            <p className="mt-2 text-white">
              Nuclear <br /> Energy
            </p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img
              src={Renewable}
              alt="Renewable Solar"
              className="h-10 mx-auto"
            />
            <p className="mt-2 text-white">
              Renewable <br /> Solar
            </p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img
              src={Renewable_wind}
              alt="Renewable Wind"
              className="h-10 mx-auto"
            />
            <p className="mt-2 text-white">
              Renewable <br /> Wind
            </p>
          </div>
          <div className="w-1/2 md:w-1/6 lg:w-1/12 p-2 text-center">
            <img src={Hydrogen} alt="Hydrogen" className="h-10 mx-auto" />
            <p className="mt-2 text-white">Hydrogen</p>
          </div>
          {/* Repeat similar divs for other categories */}
        </div>
      </div>

      {/* Value Section */}
      <div className="bg-white py-12 px-4 md:px-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-[#29385E]">
                Delivering Value Improvement and Cost Optimisation.
              </h2>
              <p className="mt-4 text-[#1B3B64]">
                The impact of supply chain & procurement on the bottom line is
                grossly underestimated.
              </p>
              <p className="mt-4 text-[#1B3B64]">
                The angle of the integrated supply chain and procurement; this
                underpins all products and services of powerabode.
              </p>
              <p className="mt-4 text-[#1B3B64]">
                Owners and stakeholders of large energy assets recognise the
                powerabode ecosystem optimising delivery.
              </p>
              <p className="mt-4 text-[#1B3B64]">
                Challenges like energy transition, achieving sustainable and
                competitive cost levels and the resilience of your supply chain.
                With the changing energy landscape, it takes experts to deal
                with these challenges. The solutions have been created to
                support you on this journey.{" "}
              </p>
            </div>
            {/* Image Section */}
            <div>
              <img
                src={Cost_optimization}
                alt="Cost Optimization"
                className="w-full h-auto px-20"
              />
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
            Delivering Cost Efficiency and Value Improvement{" "}
            <span className="text-2xl text-black">|</span> Dealing with Supply
            Chain Resilience <span className="text-2xl text-black">|</span>{" "}
            Partner in Energy Transition
          </p>
        </div>
      </div>

      <How_we_help_client />

      <div className="bg-white py-6">
        <div>
          <p className="text-center text-[#29385E] text-3xl font-bold">
            Select your Challenge & find your Solutions
          </p>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between px-4 md:px-14 my-10">
          <div className="w-full md:w-1/2 lg:w-1/3 text-center mb-6 p-5">
            <img
              src={cost_efficiency}
              alt="Cost Efficiency"
              className="mx-auto"
            />
            <a href="/the-story-of-powerabode" rel="noopener noreferrer">
              <button className="bg-[#1B3B64] text-white text-sm rounded-3xl py-3 px-14 mt-5">
                Cost Efficiency
              </button>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 text-center mb-6 p-5">
            <img
              src={energy_transition}
              alt="Energy Transition"
              className="mx-auto"
            />
            <a href="/the-story-of-powerabode" rel="noopener noreferrer">
              <button className="bg-[#1B3B64] text-white text-sm rounded-3xl py-3 px-14 mt-5">
                Energy Transition
              </button>
            </a>
          </div>
          <div className="w-full md:w-full lg:w-1/3 text-center mb-6 p-5">
            <img
              src={supply_chain_left}
              alt="Supply Chain Resilience"
              className="mx-auto"
            />
            <a href="/the-story-of-powerabode" rel="noopener noreferrer">
              <button className="bg-[#1B3B64] text-white text-sm rounded-3xl py-3 px-14 mt-5">
                Supply Chain Resilience
              </button>
            </a>
          </div>
        </div>
      </div>

      <div class="container px-4 md:px-20 mx-auto">
        <div className="py-10">
          <p className="text-center text-[#29385E] text-3xl font-bold pb-10">
            Frequently Asked Questions
          </p>
          <div class="">
            {/* <!-- FAQ 1 --> */}
            <details class="group py-1">
              <summary class="text-2xl bg-[#EEF1FA] text-[#29385E] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
                How can the commercial ecosystem benefit energy transition?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                  <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-lg pl-4">
                For energy transition, new activities require an overnight
                mature management system. CODEX is a system fit for
                international standard and pragmatic operations. No
                implementation risk and focus on cost efficiency. Based on the
                Cost Intelligence Philosophy.
              </p>
              <div>
                <a href="/cost-and-value-philosophy">
                  <img
                    className="h-[200px] w-[200px] mx-auto border-[#fea029] border-[20px] p-1 rounded-full"
                    src={CVI_Logo}
                    alt=""
                  />
                </a>
              </div>
            </details>

            <details class="group py-1">
              <summary class="text-2xl bg-[#EEF1FA] text-[#29385E] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
                Our operating cost are high, how can we reduce them sustainably?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                  <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-lg pl-4">
                All our products & services will help you. Our site provides
                tips and cases in the articles section. Start with approaching
                cost in the right way; study our Cost and Value Intelligence
                (CVI) Philosophy. If we role out our cost program for you, we
                change the commercial DNA of your business, And we reduce your
                cost and dramatically increase your value! Check out below links
                to learn more.
              </p>
              <div className="flex justify-center gap-5">
                <a href="/cost-and-value-philosophy">
                  <img
                    className="h-[200px] w-[200px] border-[#fea029] border-[20px] p-1 rounded-full"
                    src={CVI_Logo}
                    alt=""
                  />
                </a>
                <a href="/success-formula-disruptive-and-controlled">
                  <img
                    className="h-[200px] w-[200px] border-[#01bcb1] border-[20px] p-1 rounded-full"
                    src={OPEX}
                    alt=""
                  />
                </a>
              </div>
            </details>

            <details class="group py-1">
              <summary class="text-2xl bg-[#EEF1FA] text-[#29385E] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
                We negotiated with suppliers, but the cost are still high. What to do?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                  <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-lg pl-4">
                Most likely you negotiated rates, as is; the price of a product
                or service. This is maximum 20% of a potential saving. We can
                get you the other 70%. The final 10% of savings potential is
                always too expensive to obtain. Check out below links to learn
                more.
              </p>
              <div className="flex justify-center gap-5">
                <a href="/cost-and-value-philosophy">
                  <img
                    className="h-[200px] w-[200px] border-[#fea029] border-[20px] p-1 rounded-full"
                    src={CVI_Logo}
                    alt=""
                  />
                </a>
                <a href="/supply-chain-by-sla">
                  <img
                    className="h-[200px] w-[200px] border-[#fea029] border-[20px] p-1 rounded-full"
                    src={Supply_chain}
                    alt=""
                  />
                </a>
                <a href="/success-formula-disruptive-and-controlled">
                  <img
                    className="h-[200px] w-[200px] border-[#01bcb1] border-[20px] p-1 rounded-full"
                    src={OPEX}
                    alt=""
                  />
                </a>
              </div>
            </details>

            <details class="group py-1">
              <summary class="text-2xl bg-[#EEF1FA] text-[#29385E] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
                We lack specialist expertise for building remuneration models, how do we fix this?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                  <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-lg pl-4">
                Remuneration is a key driver in preserving long-term value and
                near-term cost efficiency. Building the right model is a skill,
                combined with the right evaluation model. We deliver these as
                services under Supply Chain by SLA. Check out below links to
                learn more.
              </p>
              <div className="flex justify-center gap-5">
                <a href="/supply-chain-by-sla">
                  <img
                    className="h-[200px] w-[200px] border-[#fea029] border-[20px] p-1 rounded-full"
                    src={Supply_chain}
                    alt=""
                  />
                </a>
                <a href="/tendering-outsourcing">
                  <div className="h-[200px] w-[200px] border-[#fea029] border-[20px] rounded-full">
                    <div className="flex justify-center">
                      <img className="w-28 mt-5" src={Sla_tag} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-5">
                      <p className="text-lg">Tendering & <br /> Outsourcing</p>
                    </div>
                  </div>
                </a>
                <a href="/category-strategy-contract-strategy">
                  <div className="h-[200px] w-[200px] border-[#fea029] border-[20px] rounded-full">
                    <div className="flex justify-center">
                      <img className="w-28 mt-5" src={Sla_tag} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-5">
                      <p className="text-lg text-center">Post Award <br /> Contract Management</p>
                    </div>
                  </div>
                </a>
              </div>
            </details>

            <details class="group py-1">
              <summary class="text-2xl bg-[#EEF1FA] text-[#29385E] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
                How do we get an integrated, commercially driven and pragmatic Supply Chain Management System?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                  <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-lg pl-4">
                Mistake #1: Start building it from scratch yourself. Mistake #2:
                Ask an outsider to built it (with no frontline experience in
                operations of your type of asset). The solution is an integrated
                system. Inviting to users and aimed at optimisation. The Codex
                is ‘of the shelf’, reducing development risk to zero! Read more
                about the integration, how it includes instructions, tips,
                expert services, all the forms & work instructions. Check out
                below links to learn more.
              </p>
              <div>
                <a href="/codex-supply-chain">
                  <img
                    className="h-[200px] w-[200px] mx-auto border-[#4c78b5] border-[20px] p-1 rounded-full"
                    src={Codex}
                    alt=""
                  />
                </a>
              </div>
            </details>

            <details class="group py-1">
              <summary class="text-2xl bg-[#EEF1FA] text-[#29385E] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
                Our Materials Management system is not a reflection of reality. How do we fix this?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                  <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-lg pl-4">
                Obsolescence. In materials management time always catches up
                with you. And once it does, it can be costly. We can role out
                our Materials Management program for you. With full
                obsolescence mitigation model and a supporting inventory
                control model. Check out below links to learn more.
              </p>
              <div className="flex justify-center gap-5">
                <a href="/supply-chain-by-sla">
                  <img
                    className="h-[200px] w-[200px] mx-auto border-[#fea029] border-[20px] p-1 rounded-full"
                    src={Supply_chain}
                    alt=""
                  />
                </a>
                <a href="/materials-management">
                  <div className="h-[200px] w-[200px] border-[#fea029] border-[20px] rounded-full">
                    <div className="flex justify-center">
                      <img className="w-28 mt-5" src={Sla_tag} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-5">
                      <p className="text-lg text-center">Materials <br /> Management</p>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <img
                    className="h-[200px] w-[200px] mx-auto border-[#4c78b5] border-[20px] p-1 rounded-full"
                    src={Codex}
                    alt=""
                  />
                </a>
              </div>
            </details>
            <details class="group py-1">
              <summary class="text-2xl bg-[#EEF1FA] text-[#29385E] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
                Can Commercial Assurance help us with compliance and governance
                issues?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                  <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-lg pl-4">
                This is the age of governance and compliance. And it serves a
                purpose. With our commercial assurance approach, you get better
                grip on your energy JV. All partners add value this way. And all
                stakeholders get piece of mind. Check out below links to learn
                more.
              </p>
              <div className="flex justify-center gap-5">
                <a href="/commercial-assurance">
                  <div className="h-[200px] w-[200px] border-[#fea029] border-[20px] rounded-full">
                    <div className="flex justify-center">
                      <img className="w-28 mt-5 " src={Sla_tag} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-5">
                      <p className="text-lg text-center">
                        Commercial <br /> Assurance
                      </p>
                    </div>
                  </div>
                </a>
                <a href="/codex-supply-chain">
                  <div>
                    <img
                      className="h-[200px] w-[200px] border-[#4c78b5] border-[20px] p-1 rounded-full"
                      src={Codex}
                      alt=""
                    />
                  </div>
                </a>
                <a href="/supply-chain-by-sla">
                  <div>
                    <img
                      className="h-[200px] w-[200px] border-[#fea029] border-[20px] p-1 rounded-full"
                      src={Supply_chain}
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </details>
            <details class="group py-1">
              <summary class="text-2xl bg-[#EEF1FA] text-[#29385E] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
                How can we do a full cost program?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                  <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-lg pl-4">
                When you do, start with our Cost and Value (C&V) Philosophy. Or
                rather, ask us for discussing our full program. Disruptive but
                controlled. Taking your organisation to cost efficiency,
                creating winners. In-house programs without our context are
                often blunt tools, as it gives targets, but never a toolbox and
                a ‘how to’. We do it for you & with you. Check out below links
                to learn more.
              </p>
              <div className="flex justify-center gap-5">
                <a href="/success-formula-disruptive-and-controlled">
                  <img
                    className="h-[200px] w-[200px] border-[#01bcb1] border-[20px] p-1 rounded-full"
                    src={OPEX}
                    alt=""
                  />
                </a>
                <a href="/cost-and-value-philosophy">
                  <img
                    className="h-[200px] w-[200px] border-[#fea029] border-[20px] p-1 rounded-full"
                    src={CVI_Logo}
                    alt=""
                  />
                </a>
              </div>
            </details>
            <details class="group py-1">
              <summary class="text-2xl bg-[#EEF1FA] text-[#29385E] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
                Why is cost recovery always creating so many disputes? How can
                we remedy this?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                  <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-lg pl-4">
                Mostly cost recovery starts over 1 year after cost have been
                incurred. People have left, corporate memories have limits. Two
                parties enter discussions and can hardly do more than checking
                invoices. All not very constructive. Contact us for a
                conversation on the best way how to do it. Or better, let us do
                it for you. Check out below links to learn more.
              </p>
              <div className="flex justify-center gap-5">
                <a href="/cost-recovery">
                  <div className="h-[200px] w-[200px] border-[#4c5194] border-[20px] rounded-full">
                    <div className="flex justify-center">
                      <img className="w-28 mt-5 " src={Sla_tag} alt="" />
                    </div>
                    <div className="flex justify-center items-center mt-5">
                      <p className="text-lg text-center">
                        Cost Recovery
                      </p>
                    </div>
                  </div>
                </a>
                <a href="/codex-supply-chain">
                  <div>
                    <img
                      className="h-[200px] w-[200px] border-[#4c78b5] border-[20px] p-1 rounded-full"
                      src={Codex}
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </details>
            <details class="group py-1">
              <summary class="text-2xl bg-[#EEF1FA] text-[#29385E] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
                What is the Extended Contract Management Team? Why are they so
                important in cost efficiency?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                  <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-lg pl-4">
                No one reads the contract. A strong statement, but often true.
                With reason. We have tools for the users of the contract (the
                ECMT we call this group). Around 8-12 people per contract. They
                are key in our Cost and Value (C&V) philosophy. And in CM+.
                Check out below link to learn more.
              </p>
              <div className="flex justify-center gap-5">
                <a href="/cost-and-value-philosophy">
                  <img
                    className="h-[200px] w-[200px] border-[#fea029] border-[20px] p-1 rounded-full"
                    src={CVI_Logo}
                    alt=""
                  />   
                </a>
                  <a href="/codex-supply-chain">
                    <img
                      className="h-[200px] w-[200px] border-[#4c78b5] border-[20px] p-1 rounded-full"
                      src={Codex}
                      alt=""
                    />
                  </a>
                </div>
            </details>
            <details class="group py-1">
              <summary class="text-2xl bg-[#EEF1FA] text-[#29385E] py-4 px-6 border-l-8 border-black font-medium cursor-pointer flex justify-between items-center">
                How do we build up cost intelligence for our business?
                <span class="ml-2 text-gray-500 transform group-open:rotate-180 transition-transform">
                  <img src={Down_arrow_menu} alt="" />
                </span>
              </summary>
              <p class="mt-4 mb-5 text-gray-600 text-lg pl-4">
                This starts with understanding cost. Embracing the principles of
                our cost and value philosophy; that the users of the contract
                are key. And that rate (‘the price’) is only 20% of any
                potential saving. Check out below link to learn more.
              </p>
                <div className="flex justify-center gap-5">
                  <a href="/success-formula-disruptive-and-controlled">
                    <img
                      className="h-[200px] w-[200px] border-[#01bcb1] border-[20px] p-1 rounded-full"
                      src={OPEX}
                      alt=""
                    />  
                  </a>
                  
                  <a href="/cost-and-value-philosophy">
                    <img
                      className="h-[200px] w-[200px] border-[#fea029] border-[20px] p-1 rounded-full"
                      src={CVI_Logo}
                      alt=""
                    />
                  </a>
                </div>
            </details>
          </div>
        </div>
      </div>

      <div className="hidden md:flex">
        <ImageSlider />
      </div>

      {/* <Chatbot /> */}
      <Footer />
    </>
  );
}

export default Home;
