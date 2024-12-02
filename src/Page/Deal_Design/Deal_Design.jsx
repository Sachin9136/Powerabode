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
import {
  CM_for_Contract_2,
  serturle,
  turtleimg,
  Deal_Design1,
  ProgramLogo,
  Deal_Design3,
} from "../../components/Img/ImportedImage";

const About_us = () => {
  return (
    <>
      <CommanBanner
        children={serturle}
        className="w-full h-[600px] object-contain"
        heading="Meet Turtle,"
        subheading={"your new Ai Assistent!"}
      />

      <div className="px-4 md:px-20 my-10">
        <div>
          <h4 className="text-2xl font-medium mb-3 text-[#29385E] ">
            Ai Ecosystem: Turtle is your new Ai Assistent for cost efficiency!
          </h4>
          <p className="text-md font-medium mb-3 text-[#29385E]">
            Every job position will get its own Ai. Not today, but soon. We’re
            working on it. It captures corporate memory. <br /> An enormous
            upside and collateral gain. The Turtle system of agents brings cost
            intelligence to the frontline!
          </p>
        </div>
        <div className="lg:flex my-10">
          <div className="w-full lg:w-1/2 px-3">
            <div>
              <h2 className="text-3xl font-bold mt-6 mb-3 text-[#29385E]">Agents</h2>
              <p className="text-lg font-normal lg:mr-12 mb-3">
                With Google we built our first user cases. An integrate
                structure of agents is the next step, following the boundaries
                of what the technology allows us to create. Super smart, fully
                trained according to our analyses and philosophy.
              </p>
              <p className="text-lg font-normal lg:mr-12">
                Prompt training by frontline experts
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <div className="lg:flex justify-center mb-10 mt-3">
              <img src={turtleimg} alt="" className="rounded"/>
            </div>
          </div>
        </div>

        <div className="lg:flex my-10">
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center items-center">
              <div>
              <img src={ProgramLogo} alt="" className="mt-10"/>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <div>
              <h2 className="text-3xl font-bold mt-6 mb-3 text-[#29385E]">
                Understanding the Client: Cost Program
              </h2>
              <p className="text-xl font-medium lg:mr-12 mb-3">
                The Road to Cost Leadership, our flagship Cost Program is the
                way to fully understand the clients’ organization and
                opportunity to establish savings & value. Learnings from the
                program is the input to the Ai Ecosystem. For sustainable cost
                efficiency.
              </p>
              {/* <ul className="list-disc ml-5">
                <li className="text-lg font-normal mt-2">
                  Yearly contracts, supported by SBLC, are subject to discount
                  structures.
                </li>
                <li className="text-lg font-normal mt-2">
                  For governments and their NOC’s finance options are available.
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="lg:flex my-10">
          <div className="w-full lg:w-1/2 px-3">
            <div>
              <h2 className="text-3xl font-bold mt-6 mb-3 text-[#29385E]">
                First of its kind
              </h2>
              <p className="text-xl font-medium lg:mr-12 mb-3">
                From tendering to cost analyses. The full spectrum of
                commerciality is part of our Turtle Ai development. Fully
                automated, top level skillset, from the ‘colleague’ that never
                sleeps! Contact us for a presentation and indepth dialogue on
                yourAi ambitions.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 ">
            <div className="lg:flex justify-center mb-10 mt-3">
              <img src={Deal_Design3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About_us;
