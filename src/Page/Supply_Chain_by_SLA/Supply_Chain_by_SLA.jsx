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
  Supply_Chain_by_SLA,
  Supply_Chain_by_SLA2,
  Supply_Chain_by_SLA3,
  SLA1,
  SLA2,
  SLA3,
  SLA4,
  SLA5,
  SLA6,
  Comma_top,
  Comma_bottom,
} from "../../components/Img/ImportedImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About_us = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    // dots: true,
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 6, // Number of slides to show at once (desktop)
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Autoplay slides
    autoplaySpeed: 3000, // Autoplay every 3 seconds
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Screen width less than 1024px
        settings: { slidesToShow: 6 },
      },
      {
        breakpoint: 768, // Screen width less than 768px
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 640, // Screen width less than 640px
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const slidesData = [
    {
      color: "#042b3d",
      text: "Category Strategy & Contract Strategy",
      link: "category-strategy-contract-strategy",
    },
    {
      color: "#053043",
      text: "Post Award Contract Management",
      link: "post-award-contract-management",
    },
    {
      color: "#063549",
      text: "Commercial Assurance",
      link: "commercial-assurance",
    },
    { color: "#073a4e", text: "Cost Recovery", link: "cost-recovery" },
    {
      color: "#083f54",
      text: "Tendering & Outsourcing",
      link: "tendering-outsourcing",
    },
    {
      color: "#09445a",
      text: "Materials Management",
      link: "materials-management",
    },
  ];

  return (
    <>
      <CommanBanner
        children={Supply_Chain_by_SLA}
        heading="Supply Chain by SLA
"
        subheading="Always an expert in house. Set excellence for integrated supply chain in over 40 services. All by Service Level Agreement (SLA). Always delivered by experts. When you need it. Driven by energy.

"
      />

<Slider {...settings}>
  {slidesData.map((slide, index) => (
    <div key={index} className="group">
      <Link to={`/${slide.link}`}>
        <div
          style={{ backgroundColor: slide.color }}
          className="h-[222px] flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-t group-hover:from-[#042b3d] group-hover:to-[#00abb8]"
        >
          <p className="text-lg font-bold text-[#00abb8] text-center group-hover:text-white">
            {slide.text}
          </p>
        </div>
      </Link>
    </div>
  ))}
</Slider>

      <Row className="flex justify-center">
      <div className="grid md:grid-cols-2 grid-cols-1 w-10/12 mt-5">
        {/* Left Section */}
        <div className="p-4">
          <p className="text-3xl"><span className="text-[#00abb8]">30+ ex IOC</span> Experts</p>
          <p className="text-3xl"><span className="text-[#00abb8]">40+</span> Services</p>
          <p className="text-3xl"><span className="text-[#00abb8]">Delivery</span> Outsourced</p>
        </div>

        {/* Right Section */}
        <div className="p-4">
          <p className="text-3xl"><span className="text-[#00abb8]">For</span>Energy Assets</p>
          <p className="text-3xl"><span className="text-[#00abb8]">Oil Gas </span>Power Water Renewables
          </p>
          <p className="text-3xl"><span className="text-[#00abb8]">Remote</span> or on-site
          </p>
        </div>
      </div>
      </Row>
      <Row className="flex justify-center">
      <div className="grid grid-cols-1 w-10/12 mt-5">
        {/* Left Section */}
        <h2 className="text-3xl font-bold text-[#29385E]">
          The Advantage of Supply Chain by Service Level Agreement
        </h2>
      </div>
      </Row>

    
      <div className="px-4 md:px-20 flex justify-center">
        <img src={Supply_Chain_by_SLA3} alt="" />
      </div>

      <div className="px-4 md:px-20 my-10 lg:my-20 lg:flex">
        <div className="w-full lg:w-1/2">
          <h3 className="text-3xl text-[#29385E]">
            Outsource Supply Chain and <br /> Procurement to powerabode
          </h3>
          <p className="my-2">
            Supply Chain by SLA is the home for category management, contracting
            & procurement and supply chain challenges.
          </p>
          <p className="my-2">
            Operations, Maintenance and Production. Supply Chain by SLA offers 6
            key areas with dozens of services. The Service Level Agreement
            ensures the client to get expert services, when they need it. It is
            cost efficient, but also allows for expertise that is not always
            available in-house.
          </p>
          <p className="my-2">
            Cutting edge systems and processes, all built around our Cost
            Intelligence Philosophy take delivery to the next level.
          </p>
        </div>

        <div className="w-full lg:w-1/2 py-5 px-10 lg:py-16 ">
          <div>
            <img className="w-24" src={Comma_top} alt="" />
            <h1 className="text-xl lg:text-3xl font-medium italic relative -top-9 left-4">
              Every Supply Chain has Waste
            </h1>
          </div>
          <div className="flex justify-end">
            <img className="w-24 absolute" src={Comma_bottom} alt="" />
            <h1 className="text-xl lg:text-3xl font-medium italic relative pr-4">
              We Fix It!
            </h1>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-20">
        <h2 className="text-3xl font-bold text-[#29385E]">
          How do We Deliver Our Services
        </h2>
      </div>

      <div className="px-4 md:px-20">
        <Row>
          <div className="my-10 block lg:flex justify-center gap-5">
            <div className="w-full lg:2/6 border border-[#eee] rounded-md  px-4 py-8 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Why external expert?
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  Boost the performance of your supply chain activites. Maybe
                  you just want peak shaving to deal with a temporary increase
                  in workload? Driven by energy & Cost leadership. Contributing
                  to your cost effectiveness.
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 border border-[#eee] rounded-md  px-4 py-8 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Service Level Agreement Value Proposition
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  The basis is our Cost intelligence philosophy. Outsourcing to
                  ex-ioc experts. Productised solutions allow fast delivery. Our
                  frontline experience ensures quality and accuracy.
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 border border-[#eee] rounded-md  px-4 py-8 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Remote?
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  We can deliver from your location, but also remote! Encrypted
                  collaboration platform ‘MyAbode’ is central in our operations.
                  We call it remote shoulder-to-shoulder.
                </p>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="my-10 block lg:flex justify-center gap-5">
            <div className="w-full lg:2/6 border border-[#eee] rounded-md  px-4 py-8 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Delivery focussed
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  We deliver. Very straight forward. Assurance sits at the heart
                  of what we do. All our services are productised, so we can hit
                  the ground running. No time to waste!
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 border border-[#eee] rounded-md  px-4 py-8 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Fixed Scope
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  For most services we can deliver a fixed scope, at a fixed
                  price. Simple. Our processes are mature and strong, we follow
                  our codex for delivery
                </p>
              </div>
            </div>

            <div className="w-full lg:2/6 border border-[#eee] rounded-md  px-4 py-8 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#29385E] mb-8">
                  Contact us
                </h3>
              </div>
              <div>
                <p className="text-medium font-medium">
                  A video call, a presentation or workshop. Interaction with
                  your teams is appreciated. Contact us, so we can introduce you
                  to our portfolio. Within one week we can have an online
                  workshop with your team.
                </p>
              </div>
            </div>
          </div>
        </Row>
      </div>

      <div className="px-4 md:px-20">
        <h2 className="text-4xl font-medium text-[#29385E] font-Montserrat">
          The Supply Chain by{" "}
          <span className="text-[#00abb8]">SLA Services</span>
        </h2>
      </div>

      <Img_Slider />

      <Footer />
    </>
  );
};

export default About_us;
