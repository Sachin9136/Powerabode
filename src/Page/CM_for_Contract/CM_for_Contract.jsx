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
  CM_for_Contract_banner,
  CM_for_Contract_1,
  CM_for_Contract_2,
  CM_for_Contract_3,
  CM_for_Contract_4,
  cmimage,
  Check,
} from "../../components/Img/ImportedImage";

const About_us = () => {
  return (
    <>
      <CommanBanner
        children={CM_for_Contract_banner}
        subheading="CM+ is Contract + Context. And focussed on the users of the contract. Enabling them to execute the contract as it was intended. The application can be best summarized as a individual users manual for a contract.

"
        heading="CM+ for Contract Management, Operational Excellence & Compliance
"
      />

      <div className="px-4 md:px-20 my-10">
        <div className="lg:flex ">
          <div className="w-full lg:w-12/12">
            <div>
              <h2 className="text-3xl font-bold text-[#29385E] mt-6 mb-3">
                Why CM+?
              </h2>
              <p className="text-lg font-normal lg:mr-12">
                We often hear; people don’t read the contract! Reason for this
                can be that the contract was not shared with them, due to
                confidentiality. Or the contract is too legalistic, not
                explanatory enough, while the user of the contract is way too
                busy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#29385E] mt-6 mb-3">
                Value driver!
              </h2>
              <p className="text-lg font-normal lg:mr-12">
                We created the solution. It brings a massive reduction in out of
                scope spend. It drives value and savings between 20 and 30%.
                And, above all, improves contract execution!
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#29385E] mt-6 mb-3">
                Individual solution per user
              </h2>
              <p className="text-lg font-normal lg:mr-12">
                For CM+ we produce 10 ‘chapters’. Every individual user of a
                contract gets his own set of relevant chapters. Some get 3,
                others get 7, etc. Always summarised, and with instructions,
                clarifications and guidance. Short and Sweet. CM+ is a key
                driver behind cost efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between my-5">
          <div className="lg:w-5/12 w-full flex justify-center items-center">
            <div className="digital-platform-logo w-full">
              <img src={CM_for_Contract_1} alt="" />
            </div>
          </div>
          <div className="lg:w-7/12 w-full text-center">
            <img src={CM_for_Contract_2} alt="" className="w-full" />
          </div>
        </div>
        {/*  */}
        <div className="lg:flex mt-20">
          <div className="w-full lg:w-7/12 p-5">
           <div className="bg-[#4d5f80] p-5 text-white rounded">
           <div className="">
              <h2 className="text-3xl font-bold">
                Why CM+?
              </h2>
              <ul className="">
                <li className="text-lg font-normal my-2 flex gap-3 text-white">
                  <img src={Check} alt="" /> People don't read the contract, but
                  they will use CM+
                </li>
                <li className="text-lg font-normal my-2 flex gap-3 text-white">
                  <img src={Check} alt="" /> Implementation supported by experts
                </li>
                <li className="text-lg font-normal my-2 flex gap-3 text-white">
                  <img src={Check} alt="" /> Enables users of the contract
                </li>
                <li className="text-lg font-normal my-2 flex gap-3 text-white">
                  <img src={Check} alt="" /> Results in cost efficiency
                </li>
                <li className="text-lg font-normal my-2 flex gap-3 text-white">
                  <img src={Check} alt="" /> Strong focus on governance &
                  compliance
                </li>
              </ul>
            </div>
            <h2 className="text-3xl font-bold mt-6 mb-3">
              Contract + Context
            </h2>
           </div>
          </div>
          <div className="w-full lg:w-5/12 ">
            <div className="items-center flex justify-center">
              <img src={cmimage} alt=""  className="w-72 h-auto"/>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
        <div>
        <img src={CM_for_Contract_3} alt="" className="w-full"/>
        <img src={CM_for_Contract_4} alt="" className="lg:-mt-28" />
        </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About_us;
