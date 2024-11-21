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
import { Google_banner, PA_logo, Supply_chain, Location, Check, CM, } from "../../components/Img/ImportedImage";
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
      <CommanBanner className = "h-[700px] bg-cover bg-no-repeat" children={Google_banner} blogheading={"blogheading"} />

        <div className="px-4 md:px-20 mt-20">
            <h2 className='text-4xl font-medium text-[#1b3b64] font-Montserrat text-center'>Using best practices to deliver a consistent improvement to local content.</h2>
        </div>

        <div className="px-4 md:px-20 mt-20">
            <div className="block md:flex gap-5"> 
                <div className="w-full md:w-1/2 mt-3">
                    <div className="flex justify-center">
                        <img className="w-36" src={Location} alt="" />
                    </div>
                    <div>
                        <h5 className="my-6 text-2xl font-thin text-[#1b3b64] text-center">Best Practice as a Starting Point.</h5>
                    </div>
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <h5 className="mb-3 text-xl text-[#1b3b64]">The Brief</h5>
                        <p className="mb-3">Local Content development directly contributes to security of supply. It is no longer ‘only a governmental requirement’, it is simply a sensible business choice.</p>
                        <p className="mb-3">Traditionally the energy industry relied on a limited number of international specialist suppliers and contractors. But as technologies commoditised, it stimulates locally available standardised products/ services. Major suppliers and contractors have been willing to invest in local development plans where business volumes justify that investment.</p>
                        <p className="mb-3">Approaches developed in the capital and technology-intensive energy industry can now be adapted and used across broader industrial sectors.</p>
                        <h5 className="mb-3 text-xl text-[#1b3b64]">The Solution</h5>
                        <p className="mb-3">To develop Local Content/ In Country Value, one must understand the marketplace and keep a long term view of supply and demand. This varies category by category – some sectors will already be well covered (labour, civil engineering, IT services, electrical) due to overlaps with non-energy sectors; what may be needed is development of the Contractors to meet the HSE and technical standards specific to the Client’s requirement.</p>
                        <p className="mb-3">It is critical to segment the demand in designated categories. Then market information to be captured and shared in a structured way. Outreach is needed to the Contracting and investment community so that potential investors have a realistic view of the business volumes. </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-3">
                    <div className="border-2 border-[#eee] py-8 px-5 rounded-xl">
                        <h5 className="mb-3 text-xl text-[#1b3b64]">Two examples and the results</h5>
                        <ul className="list-disc ml-5">
                            <li className="mt-2">Wellhead maintenance – a major supplier was willing to establish a new workshop so that more maintenance could be carried out locally and train local wellhead engineers in country based on a 5 year commitment to buy their well heads.</li>
                            <li className="mt-2">Field engineering – traditionally well tie-ins and pipelines had been outsourced to major international engineering houses, who would subcontract a local design institute to capture in- country requirements and other aspects for getting design approval. By contracting the design institute directly, it was possible to expand their scope to new design of all in field pipelines and tie- ins including obtaining design approval. This gave cost and schedule improvements and helped the local design institute develop its team of engineers to provide the service in the market long term.</li>
                        </ul>
                        <h5 className="mb-3 text-xl text-[#1b3b64]">Why powerabode?</h5>
                        <p className="mb-3">Our ICV expert involvement will look at your Local Content/ICV rules and commitments. We can set up a bespoke audit and assurance program for your suppliers. Monitoring your ICV targets.</p>
                        <p className="mb-3">We make specific business cases for each category, using industry best practices.</p>
                    </div>
                    <div>
                        <h5 className="my-6 text-2xl font-thin text-[#1b3b64] ml-5">View Through Category Lenses</h5>  
                        <ul className="ml-5">
                            <li className="mb-2 flex gap-3 items-start"><img className="w-5 mt-1" src={Check} alt="" />Licence to operate: Improved local content leads to better local job prospects.</li>
                            <li className="mb-2 flex gap-3 items-start"><img className="w-5 mt-1" src={Check} alt="" />Security of supply: Creates a more robust supply chain and minimises the impact of external shocks such as COVID/ restricted movement etc</li>
                            <li className="mb-2 flex gap-3 items-start"><img className="w-5 mt-1" src={Check} alt="" />New technology: Brings new technologies that can strengthen the industrial base cross sector</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="px-4 md:px-20 mt-20">
            <div className="px-4 md:px-20 mt-10">
                <h2 className='text-3xl font-medium text-[#1b3b64] font-Montserrat text-center'>Visit these services for more detail:</h2>
            </div>
            <div className="block md:flex justify-center gap-5 mt-5">
                <div className="h-48 w-48 border-[#cc1f40] border-[12px] rounded-full flex items-center">
                    <img className="p-2" src={PA_logo} alt="" />
                </div>
                <div>
                    <img className="h-48 w-48 mx-auto border-[#9ed033] border-[12px] p-2 rounded-full" src={Supply_chain} alt="" />
                </div>
                <div>
                    <img className="h-48 w-48 mx-auto border-[#8f4a81] border-[12px] p-2 rounded-full" src={CM} alt="" />
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
