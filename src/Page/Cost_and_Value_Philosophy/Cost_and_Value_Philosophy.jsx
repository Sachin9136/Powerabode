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
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Footer from "../../components/footer/footer";
import CommanBanner from "../../components/Banners/CommanBanner";
import How_we_help_client from "../../components/How_we_help_client/How_we_help_client";
import Cards from "../../components/Cards/Cards";
import {
  Cost_and_Value_Philosophy_banner,
  Cost_and_Value_Philosophy,
  EMCT_bar,
  EMCT_circle,
  Intelligence,
} from "../../components/Img/ImportedImage";

const About_us = () => {
  return (
    <>
      <CommanBanner children={Cost_and_Value_Philosophy_banner}  heading={"Cost and Value Philosophy"} subheading="Understanding cost and value is a science. To really do this, a company must know why they do something and how they do it. Simple questions. However, its complex to get there. Most of the time, negotiating about price is what happens. In our approach that will only give 20% of the savings potential. The Powerabode founding team created the Cost and Value Philosophy.

"/>

      <Row>
        <div className="px-4 md:px-20 my-10 lg:flex justify-center items-center">
          <div className="w-full lg:w-2/5">
            <div className="bg-white py-5">
              <h2 className="text-center text-3xl font-bold text-[#29385E]">
                Cost and Value Philosophy
              </h2>
              <p className="text-center text-2xl font-medium mt-3">
                How to deliver cost efficiency and value improvement?
              </p>
              <p className="text-2xl text-[#4AC4D9] font-medium text-center">
                We help you do it.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full px-4">
                <ul className="list-disc pl-8">
                  <li className="mt-2 font-medium text-md">
                    All our products and services are built around our cost and
                    value philosophy. It will bring overall improvement
                    (OPEX/CAPEX) by double digit percentage.
                  </li>
                  <li className="mt-2 font-medium text-md">
                    Rates are only 20% of any potential saving! Specification
                    focus can deliver 30% of the Savings Potential. Efficiency
                    focus can bring 40% of the Savings Potential.
                  </li>
                  <li className="mt-2 font-medium text-md">
                    We take your organization on the road to cost leadership.
                  </li>
                  <li className="mt-2 font-medium text-md">
                    Our analyses of Rates, Specification and Efficiency will
                    bring out the maximum Savings Potential.
                  </li>
                  <li className="mt-2 font-medium text-md">
                    The Opex/Capex Program, our Supply Chain Services by SLA,
                    but also our Codex Management System and CM+ empower your
                    organisation utilising methods based on the Cost and value
                    Philosophy. Consistently and sustainably optimising cost and
                    value!
                  </li>
                </ul>
                <ul className="">
                  <li className="my-8">
                    <img src={Intelligence} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/5 flex justify-center">
            <img className="w-[80%]" src={Cost_and_Value_Philosophy} alt="" />
          </div>
        </div>
      </Row>

      <Row>
        <div className="px-4 md:px-20 my-10">
          <div className="w-full">
            <div className="bg-white py-5">
              <h2 className="text-center text-3xl font-bold text-[#29385E]">
                Why do we need to embrace the Cost and Value Philosophy?
              </h2>
              <p className="text-center font-medium text-md my-2 p-0 md:px-15 lg:px-36">
                Cost reduction targets come in regular intervals. And often they
                nothing more than that. A target. Every division, company or
                department then starts pushing. Without really ever going to the
                essence.
              </p>
              <p className="text-center font-medium text-md my-2 p-0 md:px-15 lg:px-36">
                The Cost and Value Philosophy does that. It is embedded in all
                powerabode services and products. A powerful logic sits behind a
                system, breaking down cost and value across Specification,
                Efficiency and Rates. We help getting the targets delivered.
                Analysing operations, maintenance and production activities
                according to this framework empowers delivery of cost efficiency
                and value optimisation.
              </p>
            </div>
          </div>
        </div>
      </Row>

      <Row>
        <div className="px-4 md:px-20 my-10 block lg:flex justify-center gap-5">
          <div className="w-full lg:2/6 border border-black rounded-lg px-8 pb-10 pt-10 mb-6">
            <div>
              <h3 className="text-center text-2xl font-bold mb-8">
                Lower rates
              </h3>
            </div>
            <div>
              <p className="text-center text-medium font-medium">
                Standard is to negotiate lower prices with suppliers and service
                providers. This is only 20% of the savings potential. But this
                is where it stops for most companies. The Cost and Value
                Philosophy shows where additional value improvements and cost
                efficiencies are possible.
              </p>
            </div>
          </div>

          <div className="w-full lg:2/6 border border-black rounded-lg px-8 pb-10 pt-10 mb-6">
            <div>
              <h3 className="text-center text-2xl font-bold mb-8">
                Efficiency & Specification
              </h3>
            </div>
            <div>
              <p className="text-center text-medium font-medium">
                A main potential of value and savings sit in the space of
                improved efficiency and rationalised specification. Together,
                they deliver an extra 70% of the cost saving potential. On top
                of the 20% in rate reductions. The final 10% is too expensive to
                achieve. Can you believe how inefficient the traditional
                approach of value and cost is?
              </p>
            </div>
          </div>

          <div className="w-full lg:2/6 border border-black rounded-lg px-8 pb-10 pt-10 mb-6">
            <div>
              <h3 className="text-center text-2xl font-bold mb-8">
                What else?
              </h3>
            </div>
            <div>
              <p className="text-center text-medium font-medium">
                After splitting up the savings potential, we map the
                organisation into the stakeholders for each part of the
                potential. Our products and services are all designed to deliver
                on this logic. It basically takes the contract as a base, and
                then mobilises the users of a contract in the Extended Contract
                Management Team (ECMT). This ECMT is our first stepping stone
                into rolling out the philosophy and delivering of savings.
              </p>
            </div>
          </div>
        </div>
      </Row>

      <Row>
        <div className="px-4 md:px-20 my-10">
          <div className="w-full">
            <div className="bg-white py-5">
              <h2 className="text-center text-3xl font-bold text-[#29385E]">
                The ECMT
              </h2>
              <p className="text-center font-medium text-md my-2 p-0 md:px-15 lg:px-36">
                The users of the contract!
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full md:w-1/2">
              <div className="flex justify-center mb-5">
                <img className="w-[80%]" src={EMCT_circle} alt="" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="">
                <img className="w-[80%]" src={EMCT_bar} alt="" />
                <div className="flex justify-center">
                  <img className="w-60" src={Intelligence} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="md:flex justify-center items-stretch gap-4">
              {" "}
              {/* Changed from items-center to items-stretch */}
              <div className="w-full md:w-1/2">
                <div className="w-full border border-black rounded-lg px-8 pb-10 pt-8 mb-6 h-full">
                  {" "}
                  {/* Added h-full */}
                  <div>
                    <h3 className="text-center text-2xl font-bold mb-7 text-[#59ADB7]">
                      Why the ECMT?
                    </h3>
                  </div>
                  <div>
                    <p className="text-medium font-medium mb-2 text-[#504F4F]">
                      The ECMT is in the heart of the integrated supply chain
                      (ISC). They use & influence contracts everyday. Why the
                      ECMT?
                    </p>
                  </div>
                  <div>
                    <ul className="list-disc pl-8">
                      <li className="my-1 text-[#504F4F]">
                        Create sense of urgency
                      </li>
                      <li className="my-1 text-[#504F4F]">
                        Create ownership of savings process
                      </li>
                      <li className="my-1 text-[#504F4F]">
                        Has influence & control on commercial performance
                      </li>
                      <li className="my-1 text-[#504F4F]">
                        Ideal platform to achieve cost efficiency
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-full border border-black rounded-lg px-8 pb-10 pt-8 mb-6 h-full">
                  {" "}
                  {/* Added h-full */}
                  <div>
                    <h3 className="text-center text-2xl font-bold mb-7 text-[#59ADB7]">
                      What is the Integrated Supply Chain?
                    </h3>
                  </div>
                  <div>
                    <p className="text-medium font-medium mb-2 text-[#504F4F]">
                      Integrated Supply Chain (ISC) is all about interdependence
                      and synergy between Client and its contracts. Recognising
                      and mastering these between multidisciplinary teams, is
                      the key to long-term value preservation and operational
                      effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>

      <Row>
        <div className="px-4 md:px-20 my-10">
          <div className="w-full">
            <div className="bg-white py-5">
              <h2 className="text-center text-3xl font-bold text-[#29385E] mb-1">
                How We Deliver The Cost and Value Philosophy (C&V)?
              </h2>
              <h2 className="text-center text-3xl font-bold text-[#29385E] mb-4">
                The Commercial Ecosystem
              </h2>
              <p className="font-medium text-md my-2">
                The C&V Philosophy is the basis for the powerabode Commercial
                Ecosystem. It serves energy clients that want to optimise value
                and challenge their cost. We built and deliver a resilient
                Supply Chain and Procurement function. It has solutions for
                energy assets, as well as new energy start ups that require
                mature systems overnight. The system is also applicable for NOCs
                who aspire operatorship.
              </p>
              <p className="font-medium text-md my-2">
                The strength powerabode brings is the integrated system of
                solutions, based on the C&V Philosophy. We introduce one, or
                more of the services, train the organisation, and work with you
                in the delivery.
              </p>
              <p className="font-medium text-md my-2">
                Over 30 experts, all with IOC background support the delivery.
                This makes powerabode the partner for Outsourcing.
              </p>
            </div>
          </div>
        </div>
      </Row>

      <How_we_help_client />

      <div className="hidden md:flex">
        <ImageSlider />
      </div>

      <div className="px-0 md:px-5">
        <Cards />
      </div>

      <Footer />
    </>
  );
};

export default About_us;
