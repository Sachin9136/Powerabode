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
import {
  Dna_banner,
  Batch,
  Sla_tag,
  Supply_chain,
  Program_img,
  Why_powerabode_1,
  Why_powerabode_2,
  Why_powerabode_3,
  Why_powerabode_4,
  Why_powerabode_5,
  Why_powerabode_6,
  Why_powerabode_7,
  Why_powerabode_8,
  Codex,
} from "../../components/Img/ImportedImage";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import WhyPowerAbode from "../../components/WhyPowerAbode";
import SupplyChain from "../../components/Service/SupplyChain";
import Codexs from "../../components/Service/Codex";
import ContractCategory from "../../components/Service/ContractCategory";

const About_us = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const setting = {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    focusOnSelect: true,
    dots: true,
    arrow: false,
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

  const settings = {
    dots: true,
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
      <CommanBanner
        className="h-[700px] bg-cover bg-no-repeat"
        children={Dna_banner}
        heading={
          "How the DNA of your procurement department sets its performance"
        }
      />

      <div className="px-4 md:px-20 mt-20">
        <h2 className="text-4xl font-medium text-[#1b3b64] font-Montserrat text-center">
          Frontline Experts use powerabode CODEX to create your bespoke Supply
          Chain Management System
        </h2>
      </div>

      <div className="px-4 md:px-20 mt-20">
        <div className="block md:flex gap-5">
          <div className="w-full md:w-1/2 mt-3">
            <div className="flex justify-center">
              <img className="w-28" src={Batch} alt="" />
            </div>
            <div>
              <h5 className="my-6 text-2xl font-thin text-[#1b3b64] text-center">
                Frontline Experts use powerabode CODEX to create your bespoke
                Supply Chain Management System
              </h5>
            </div>
            <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
              <h5 className="mb-3 text-2xl text-[#1b3b64]">The Brief</h5>
              <p className="mb-3">
                Contracting & Procurement or Supply Chain can be a separate
                department or placed under Projects, Asset, Legal or Finance.
                Each will give a different culture and result in its own
                challenges and biases. Only in a few cases it is at Executive
                Board Level – even where spend is in the multi-billion US$ .
              </p>
              <p className="mb-3">
                An Asset/ Production C&P department is likely to be heavily
                focussed on Contract execution, a Finance CP department on cost
                and compliance, a Projects CP department on sourcing and
                tendering, Legal on standard Terms and conditions and claims
                handling. A standalone CP department, suitably lead, will have a
                broader understanding of Supply Chain – but senior level SCM
                professionals are hard to find. There are no easy solutions.
              </p>
              <p className="mb-3">
                CP Audits or “commercial assurance” looks at the capabilities of
                the CP/Supply Chain department around the whole procurement
                cycle from Planning, through establishing contract strategies
                and bid lists, through tendering to award, mobilisation,
                contract execution and close out. It will also look at the
                quality of the key internal relationships. No Company’s CP
                department will be strong in all areas.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-3">
            <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
              <h5 className="mb-3 text-2xl text-[#1b3b64]">
                Common failings are:
              </h5>
              <ul className="list-disc ml-5">
                <li className="mb-2">
                  A one size fits all approach increasing complexity for minor
                  spend, and not giving a tailored enough approach for major
                  projects.
                </li>
                <li className="mb-2">
                  Disconnects with finance on planning and budgets.
                </li>
                <li className="mb-2">
                  Poor market knowledge and use of that in determining contract
                  strategies and bid-lists.
                </li>
                <li className="mb-2">Lengthy Procurement times</li>
                <li className="mb-2">
                  Complex routine procurement – high numbers of low value
                  transactions, POs and poor stock control
                </li>
                <li className="mb-2">A lack of clarity on volumes and scope</li>
                <li className="mb-2">
                  Inadequate challenge and communication with technical
                  departments
                </li>
                <li className="mb-2">
                  Technical and commercial evaluation models are poorly
                  constructed
                </li>
                <li className="mb-2">
                  Document control and handling of external communication
                  resulting in disputes and claims or poor audit trail for
                  regulators.
                </li>
                <li className="mb-2">
                  Document review processes are lengthy or low quality.
                </li>
                <li className="mb-2">
                  Little or no structured post award contract management.
                </li>
                <li className="mb-2">
                  Work acceptance criteria and close out is not clearly defined.
                </li>
                <li className="mb-2">
                  Non-standard terms and conditions and insufficient expertise
                  to resolve qualifications.
                </li>
                <li className="mb-2">
                  Compliance with required standards and due diligence.
                </li>
                <li className="mb-2">
                  The need to resort to expensive external counsel in claims
                  mitigation.
                </li>
              </ul>
              <h5 className="mb-3 text-2xl text-[#1b3b64]">The Solution</h5>
              <p className="mb-3">
                The full portfolio in powerabode Supply Chain by SLA remedies
                the typical findings that come out of audits on any procurement
                department.
              </p>
              <h5 className="mb-3 text-2xl text-[#1b3b64]">Why powerabode?</h5>
              <p className="mb-3">
                Because we focus on specialism. The products are dedicated to
                achieve cost efficiency, compliance and use frontline experts
                utilising industry best practice. The productised services allow
                for quick and cost efficient application.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-20 mt-20">
        <div className="px-4 md:px-20 mt-10">
          <h2 className="text-3xl font-medium text-[#1b3b64] font-Montserrat text-center">
            Visit these services for more detail:
          </h2>
        </div>
        <div className="block md:flex justify-center gap-5 mt-5">
          <SupplyChain />
          <Codexs />
          <ContractCategory />
        </div>
      </div>

      <WhyPowerAbode />

      <div className="px-4 md:px-20 mt-20">
        <h2 className="text-4xl font-medium text-[#29385E] font-Montserrat text-center">
          More Articles &{" "}
          <span className="text-[#00ABB8]">Business Cases?</span>
        </h2>
      </div>

      <Img_Slider />

      <div className="hidden md:flex">
        <ImageSlider />
      </div>

      <Footer />
    </>
  );
};

export default About_us;
