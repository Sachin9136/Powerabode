import React from 'react';
import Banner from "../../components/Banners/Banners";
import { bannerAboutUs } from "../../components/Img/ImportedImage";
import {
    Column,
    Heading,
    Row,
    Span,
    Wraper,
    Button,
  } from "../../components/ComponentsIndex";

  import { Link } from "react-router-dom";
  import ProfileSection from "../../components/ProfileCard/ProfileSection";
  import Footer from "../../components/footer/footer";
import CommanBanner from '../../components/Banners/CommanBanner';


const About_us = () => {

  return (
    <>
        <CommanBanner children={bannerAboutUs} heading={"Teams"}/>

        <Row>
            <Heading className="font-bold text-2xl md:text-4xl text-center text-[#06B13D] px-3 py-10 ">Kawach: Empowering Health, Enriching Environment - India's <br /> Independent Force for Positive Change!</Heading>
        </Row>

        <Row>
            <ProfileSection />
        </Row>

        <Footer />
    </>
  )
}

export default About_us
