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
import Card_slider from "../../components/card_slider/card_slider";
import { Drilling_Cost_Transformation_banner, Card_img } from "../../components/Img/ImportedImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About_us = () => {

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
      <CommanBanner children={Drilling_Cost_Transformation_banner} />

      <div className="px-4 md:px-20">
        <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10 mb-6'>Specialised Contract Strategy and sourcing approach can reduce your <br /> well cost by 50%</h2>
        <div>
          <h3 className="text-[#29385E] text-xl">We were asked to deliver a contract strategy and sourcing approach that <br /> would support reducing well costs by 50%</h3>
        </div>

        <div className="my-3">
          <p className="text-lg font-semibold">The Brief Services Program Academy</p>
          <p className="text-[#707070] ">With low oil price the cost of drilling and workover had become unaffordable at a major onshore field in this region. Rates in the market had fallen but they needed to drastically reduce well delivery time and ensure quality to expand production by 35% per day.</p>
        </div>

        <div className="my-3">
          <p className="text-lg font-semibold">The Solution</p>
          <p className="text-[#707070]">Through Strategic dialogue various options were looked at; extending, retendering, move to day-rate, de-bundling services and rig, and splitting out the hoist/coiled tubing spread.</p>
          <p className="text-[#707070]">Production drilling was still the bulk of the cost. Therefore it was decided to have an evaluation model that built in all the benefits of drilling time, to assess technical expertise in depth and to should-cost model the wells in detail to set an aggressive but achievable cost target.</p>
          <p className="text-[#707070]">Strategy was agreed to split up the existing scope in two separate tenders; (a) production drilling, (b) hoist/ coiled tubing. Two separate remuneration models were chosen to drive performance of these two contracts. Only a single element in both remuneration model stimulated both contractors to drive each others performance. If one succeeded, both succeeded and if one failed, both failed.</p>
          <p className="text-[#707070]">The bids came in and none of the tenderers met the aspired cost level. Therefore approval was sought to negotiate with the leading bidder with the best TCO (total cost of ownership) and TVO (total value of ownership) in an “open book” manner. Target was reduce inefficiencies in the supply chain and to reach the aspired drilling performance; rate was not important.</p>
        </div>

        <div className="my-3">
          <p className="text-lg font-semibold">Outcome Of The Negotiation</p>
          <p className="text-[#707070]">The aspired cost level was met through a combination of factors:</p>
          <ul className="list-disc pl-5">
            <li className="text-[#707070]">Eliminating waste in the supply chain – through better planning and revised areas of Company and Contractor responsibility. i.e. joint planning of rig moves, and better provision of subsurface planning data.</li>
            <li className="text-[#707070]">Building in the learning curve – through agreeing aggressive well delivery times and agreeing how operational issues would be handled, in advance, and through a joint commitment to trial and introduce new technology.</li>
            <li className="text-[#707070]">Goal alignment and joint well reviews with the ECMT ensuring that the goal of fast, safe delivery was visible and shared at the rig-site and in the support offices.</li>
            <li className="text-[#707070]">Clear Senior leadership sponsorship and reward to rig crew and engineers.</li>
          </ul>
        </div>

        <div className="my-3">
          <p className="text-lg font-semibold">The Result</p>
          <p className="text-[#707070]">The aspired cost level was met through a combination of factors:</p>
          <ul className="list-disc pl-5">
            <li className="text-[#707070]">Cost impact was in excess of 60%, with a 50% faster delivery.</li>
            <li className="text-[#707070]">Non productive time drop substantially.</li>
            <li className="text-[#707070]">Drilling time reduced significantly.</li>
            <li className="text-[#707070]">Cementing and well completion performance had a steep learning curve. Started to deliver perfect completion from the 3rd well.</li>
          </ul>
        </div>

      </div>

      <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10'>Check More Articles, Case Study, Philosophy & Thinking</h2>

      <div className="px-4 md:px-20 my-10">
        <Slider {...settings}>
          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>
          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>
          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>

          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>

          <div>
            <Card_slider
              image={Card_img}
              title="Drilling Cost Transformation"
              description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
            />
          </div>
        </Slider>
      </div>


      <Footer />
    </>
  );
};

export default About_us;
