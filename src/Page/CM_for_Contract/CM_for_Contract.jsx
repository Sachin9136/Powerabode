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
          <div className="w-full lg:w-1/2">
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

          <div className="w-full lg:w-1/2 ">
            <div className="lg:flex justify-center mb-10 mt-3">
              <img src={CM_for_Contract_1} alt="" />
            </div>
            <div>
              <img src={CM_for_Contract_2} alt="" />
            </div>
          </div>
        </div>

        <div className="lg:flex mt-20">
          <div className="w-full lg:w-1/2 ">
            <div className="flex justify-center mb-10">
              <img src={CM_for_Contract_3} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="mt-14">
              <h2 className="text-3xl font-bold text-[#29385E] mt-6 mb-3">
                Why CM+?
              </h2>
              <ul>
                <li className="text-lg font-normal my-2 flex gap-3">
                  <img src={Check} alt="" /> People don't read the contract, but
                  they will use CM+
                </li>
                <li className="text-lg font-normal my-2 flex gap-3">
                  <img src={Check} alt="" /> Implementation supported by experts
                </li>
                <li className="text-lg font-normal my-2 flex gap-3">
                  <img src={Check} alt="" /> Enables users of the contract
                </li>
                <li className="text-lg font-normal my-2 flex gap-3">
                  <img src={Check} alt="" /> Results in cost efficiency
                </li>
                <li className="text-lg font-normal my-2 flex gap-3">
                  <img src={Check} alt="" /> Strong focus on governance &
                  compliance
                </li>
              </ul>
            </div>
            <h2 className="text-3xl font-bold text-[#29385E] mt-6 mb-3">
              Contract + Context
            </h2>
          </div>
        </div>

        <div className="lg:-mt-28">
          <img src={CM_for_Contract_4} alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About_us;
