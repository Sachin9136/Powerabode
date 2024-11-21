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
import { Tower_banner, Ecmt, CM, Sla_tag } from "../../components/Img/ImportedImage";
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
      <CommanBanner className = "h-[700px] bg-cover bg-no-repeat" children={Tower_banner} blogheading={"blogheading"} />

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center'>Specialised Contract Strategy and sourcing approach can reduce your well cost by 50%</h2>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <div className="block md:flex gap-5">
                <div className="w-full md:w-1/2">
                    <div>
                        <h5 className="mb-3 text-2xl font-thin text-[#1b3b64] text-center">We were asked to deliver a contract strategy and sourcing approach that would support reducing well costs by 50%</h5>
                    </div>
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                      <h5 className="mb-3 text-2xl text-[#1b3b64]">The Brief Services Program Academy</h5>
                        <p className="mb-3">With low oil price the cost of drilling and workover had become unaffordable at a major onshore field in this region. Rates in the market had fallen but they needed to drastically reduce well delivery time and ensure quality to expand production by 35% per day.</p>
                        <h5 className="mb-3 text-2xl text-[#1b3b64]">The Solution</h5>
                        <p className="mb-3">Through Strategic dialogue various options were looked at; extending, retendering, move to day-rate, de-bundling services and rig, and splitting out the hoist/coiled tubing spread.</p>
                        <p className="mb-3">Production drilling was still the bulk of the cost. Therefore it was decided to have an evaluation model that built in all the benefits of drilling time, to assess technical expertise in depth and to should-cost model the wells in detail to set an aggressive but achievable cost target.</p>
                        <p className="mb-3">Strategy was agreed to split up the existing scope in two separate tenders; (a) production drilling, (b) hoist/ coiled tubing. Two separate remuneration models were chosen to drive performance of these two contracts. Only a single element in both remuneration model stimulated both contractors to drive each others performance. If one succeeded, both succeeded and if one failed, both failed.</p>
                        <p className="mb-3">The bids came in and none of the tenderers met the aspired cost level. Therefore approval was sought to negotiate with the leading bidder with the best TCO (total cost of ownership) and TVO (total value of ownership) in an “open book” manner. Target was reduce inefficiencies in the supply chain and to reach the aspired drilling performance; rate was not important.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                      <h5 className="mb-3 text-2xl text-[#1b3b64]">Outcome Of The Negotiation</h5>
                      <p className="mb-3">The aspired cost level was met through a combination of factors:</p>
                      <ul className="list-disc ml-5">
                        <li className="mb-2">Eliminating waste in the supply chain – through better planning and revised areas of Company and Contractor responsibility. i.e. joint planning of rig moves, and better provision of subsurface planning data.</li>
                        <li className="mb-2">Building in the learning curve – through agreeing aggressive well delivery times and agreeing how operational issues would be handled, in advance, and through a joint commitment to trial and introduce new technology.</li>
                        <li className="mb-2">Goal alignment and joint well reviews with the ECMT ensuring that the goal of fast, safe delivery was visible and shared at the rig-site and in the support offices.</li>
                        <li className="mb-2">Clear Senior leadership sponsorship and reward to rig crew and engineers.</li>
                      </ul>

                      <h5 className="mb-3 text-2xl text-[#1b3b64] mt-3">The Result</h5>
                      <ul className="list-disc ml-5">
                        <li className="mb-2">Cost impact was in excess of 60%, with a 50% faster delivery.</li>
                        <li className="mb-2">Non productive time drop substantially.</li>
                        <li className="mb-2">Drilling time reduced significantly.</li>
                        <li className="mb-2">Cementing and well completion performance had a steep learning curve. Started to deliver perfect completion from the 3rd well.</li>
                      </ul>
                    </div>
                    <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center mt-5'>Visit these services for more detail:</h2>
                    <div className="block md:flex justify-center gap-10 mt-10">
                      <div className="h-52 w-52 border-[#fea029] border-[20px] rounded-full">
                        <div className="flex justify-center">
                          <img className="w-28 mt-5 " src={Sla_tag} alt="" />
                        </div>
                        <div className="flex justify-center items-center mt-5">
                          <p className="text-lg text-center">
                          Tendering & <br /> Outsourcing
                          </p>
                        </div>
                      </div>
                      <div className="h-52 w-52 border-[#fea029] border-[20px] rounded-full">
                        <div className="flex justify-center">
                          <img className="w-28 mt-5 " src={Sla_tag} alt="" />
                        </div>
                        <div className="flex justify-center items-center mt-5">
                          <p className="text-lg text-center">
                          Contract and <br /> Category <br /> Strategy
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
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
