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
  Lion_banner,
  Ecmt,
  CM,
  CVI_Logo,
} from "../../components/Img/ImportedImage";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Cm from "../../components/Service/Cm";
import CostandValue from "../../components/Service/CostandValue";

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
        children={Lion_banner}
        heading={"Hidden in Plain Sight"}
      />

      <div className="px-4 md:px-20 mt-20">
        <h2 className="text-4xl font-medium text-[#1b3b64] font-Montserrat text-center">
          What is the best team to manage a contract? How Does It Work?
        </h2>
      </div>

      <div className="px-4 md:px-20 mt-20">
        <div className="block md:flex gap-5">
          <div className="w-full md:w-1/2">
            <div className="flex justify-center">
              <img className="w-72" src={Ecmt} alt="" />
            </div>
            <div>
              <h5 className="mb-3 text-2xl font-thin text-[#1b3b64] text-center">
                A forgotten gem.
              </h5>
              <h4 className="text-[#00abb8] text-2xl font-bold text-center">
                The Extended Contract Management Team (ECMT)
              </h4>
              <h5 className="text-2xl font-thin text-[#1b3b64] text-center mt-2 mb-5">
                as a tool to influence cost. After all, they use the <br />{" "}
                Contract.
              </h5>
            </div>
            <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
              <p className="mb-3">
                There is always an elephant in the room. In our philosophy of
                Cost Intelligence we acknowledge that the ECMT is an ideal
                platform to obtain cost efficiency. The ECMT is the wider team
                that use the contract day in, day out. They are in direct
                contact with all major stakeholders. Let us elaborate; A
                contract is collection of work following standards and
                specification of a Client, delivered as per commercial and
                contractual Terms and Conditions.
              </p>
              <p className="mb-3">
                Typically, a small team of 2-3 people are directly responsible
                for the delivery and day to day management of a contract: (1)
                Contract Holder/ Project Manager, (2) Contract Specialist/
                Contract Engineer and (3) Contract Owner/ Budget Owner/Division
                Head. They are known as Contract Management Team (CMT). The
                composition and job title may slightly differ from Client to
                Client. But the principle is the same.{" "}
              </p>
              <p className="mb-3">
                When it comes to execution, the Contract becomes part of an Eco
                System of other Contracts, departments, and processes. As many
                as 7-10 stakeholders from various department may use and
                influence the contract on a regular basis. These 7-10
                stakeholders + the initial 3, formulates what powerabode call an
                Extended Contract Management Team (ECMT).
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
              <p className="mb-3">
                ECMT is on the top of the list when it comes to influencing
                cost. They create demand, coordinate, synchronise work and plan
                for optimised execution which drives the Contracts in many ways.
                Each stakeholder has their own performance criteria, scorecards,
                and processes. The practical challenges of frontline execution
                introduce inefficiencies. An initial estimate of a ‘work’ on
                contract will differ quite a bit after it becomes part of the
                Eco System. ECMT is the key to unlocking sustainable Cost
                Efficiency.
              </p>
              <p className="mb-3">
                Despite digitisation, a significant share of information from
                the frontline remains compartmentalised (‘out of reach’). This
                uncaptured and unmonetized information is generated by members
                of the ECMT throughout the length of Supply Chain. It starts
                from ‘identifying demand & need’ and ends with ‘commitment,
                reconcile & close out’. It is the end to end Integrated Supply
                Chain (ISC); and members of ECMT occupy various links of this
                chain.
              </p>
              <p className="mb-3">
                Our uniquely designed Integrated Supply Chain (ISC) training
                program is exemplary in this space. The target group is the ECMT
                and their role in the ISC. The Blended Learning course boosts
                awareness of how members of ECMT influence cost, why, and how to
                get Cost Efficiency. This training is designed to foster
                curiosity and commercial competence so that the members of the
                ECMT can identify savings opportunities, own them, implement,
                and sustain them throughout the Integrated Supply Chain. After
                all, it is the ECMT members who own and operate the full chain.
              </p>
            </div>
            <h2 className="text-4xl font-medium text-[#1b3b64] font-Montserrat text-center mt-5">
              Visit these services for more detail:
            </h2>
            <div className="block md:flex justify-center gap-10 mt-10">
              <Cm />
              <CostandValue />
            </div>
          </div>
        </div>
      </div>
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
