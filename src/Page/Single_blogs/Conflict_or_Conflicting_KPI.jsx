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
import { Cycle_banner, Smart, CM, CVI_Logo } from "../../components/Img/ImportedImage";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

const About_us = () => {

  const [activeSlide, setActiveSlide] = useState(0);

  const setting = {
      centerMode: true,
      centerPadding: '0',
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
      <CommanBanner className = "h-[700px] bg-cover bg-no-repeat" children={Cycle_banner} heading={"Conflict or Conflicting KPI’s?"} />

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center'>KPI’s. They drive performance. But they can also cause inefficiency.</h2>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <div className="block md:flex gap-5">
                <div className="w-full md:w-1/2">
                    <div className="flex justify-center">
                        <img className="w-72" src={Smart} alt="" />
                    </div>
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <p className="mb-3">Conflict is not a very appealing word to start an article. In this case, our point is this: sometimes in an operational environment, conflicts arise because of conflicting KPI’s. People are set up to perform on drivers that are not in sync with those of their colleagues.</p>

                        <p className="mb-3">In the energy supply chain, a contract is generally created for the supply of goods or execution </p>
                        <p className="mb-3">of specific services. In a complex environment of frontline execution, ECMT (Extended Contract </p>
                        <p className="mb-3">Management Team) stakeholders from several departments and relevant contracts need to come together as an ecosystem to deliver one specific ‘job’. The ‘job’ may have its own performance indicator, but the individual departments and related contracts also have their own KPI’s. Once this ecosystem loses its balance, cost inefficiency builds up. Given the complexity, this is likely to occur, especially in large energy companies.</p>
                        <p className="mb-3">As an example, five disciplines (electrical, maintenance, production leader, finance) each have their own performance indicators. Also, the asset has KPI’s. Some KPI’s in this case might be:</p>

                        <ul className="list-disc ml-5 mb-3">
                            <li>Maintenance: 85% availability</li>
                            <li>Electrical: 98% reliability</li>
                            <li>Budget holder: Stay within budget</li>
                            <li>Then, during the year, production targets are changed and not properly communicated.</li>
                        </ul>

                        <p className="mb-3"> For the sake of argument, we mention changed production targets, but it could be a changed asset strategy or something else. Setting up KPI’s is one thing, but they have to be in sync. And when events happen during the year, revisions and updates are necessary.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <h5 className="mb-3 text-2xl text-[#1b3b64]">Conflicting kpi’s result in conflict. And cost inefficiency.</h5>
                        <p className="mb-3">We have all been there. When changes were pending, or actually happened. And not everyone knew of them. Or only found out later. The consequence is inefficiency, tension or even conflict. Once one of the parameters was changed, all kpi’s should have been revised.</p>
                        <p className="mb-3">As specialist in the integrated supply chain, powerabode fulfils the role of facilitator in setting kpi’s. Interdependencies in the supply chain, between contracts, departments, the business plan.</p>
                        <p className="mb-3">The ECMT has to align its kpi’s. This results in greater cost efficiency. It is one of the modules of the Integrated Supply Chain training, as provided by powerabode Academy. </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex justify-center items-center gap-6">
                            <img className="w-72" src={Smart} alt="" />
                            <p className="text-xl font-medium">Is not enough</p>
                        </div>
                    </div>
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <p className="mb-3">The operations of large energy organisations are complex and refined (no pun intended). Kpi’s are a great tool for improving delivery and monitoring progress. But for true optimisation involvement of a specialist on integrated supply chain brings additional value.</p>
                        <p className="mb-3">Smart is the acronym for kpi’s. Specific, Measurable, Assignable, Realistic and Time Bound. Clearly, meeting these parameters is necessary. But how do the kpi’s of one align with those of others. When the organisation has multiple disciplines. Multiple assets. When the operations are dynamic and subject to revisions during the year.</p>
                        <p className="mb-3"> powerabode will conduct regular alignment sessions once we facilitated your program. It reduces conflict and improves your cost efficiency.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center'>Visit these services for more detail:</h2>
        </div>

        
        <div className="block md:flex justify-center gap-10 mt-10">
            <div>
                <img className="h-64 w-64 mx-auto border-[#8F4A81] border-[20px] p-5 rounded-full" src={CM} alt="" />
            </div>
            <div>
                <img className="h-64 w-64 mx-auto border-[#fea029] border-[20px] p-5 rounded-full" src={CVI_Logo} alt="" />
            </div>
        </div>


        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#29385E] font-Montserrat text-center'>More Articles & <span className="text-[#00ABB8]">Business Cases?</span></h2>
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
