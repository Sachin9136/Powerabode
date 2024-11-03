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
import Card from "../../components/card/card";
import { Articles_Business_Cases_Background, Card_img } from "../../components/Img/ImportedImage";

const About_us = () => {

  return (
    <>
      <CommanBanner children={Articles_Business_Cases_Background} />

      <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10'>Articles & Case Study</h2>

      <div className="px-4 md:px-20 my-10 block lg:flex justify-center gap-5">
        <Card
          image={Card_img}
          title="Drilling Cost Transformation"
          description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
          articleText="Article"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => alert("Read button clicked!")}
        />

        <Card
          image={Card_img}
          title="Another Transformation"
          description="Another strategy and sourcing initiative. We help build delivery models, including optimizing operational costs."
          articleText="Article"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => alert("Read button clicked!")}
        />

        <Card
          image={Card_img}
          title="Operational Efficiency"
          description="We drive operational efficiencies through best-in-class delivery and sourcing strategies, tailored to your needs."
          articleText="Article"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => alert("Read button clicked!")}
        />
      </div>
      
      <div className="px-4 md:px-20 my-10 block lg:flex gap-5">
        <Card
          image={Card_img}
          title="Drilling Cost Transformation"
          description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
          articleText="Article"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => alert("Read button clicked!")}
        />

        <Card
          image={Card_img}
          title="Another Transformation"
          description="Another strategy and sourcing initiative. We help build delivery models, including optimizing operational costs."
          articleText="Article"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => alert("Read button clicked!")}
        />
      </div>

      <h2 className='text-center text-3xl font-bold text-[#29385E] mt-10'>Philosophy & Thinking</h2>

<div className="px-4 md:px-20 my-10 block lg:flex justify-center gap-5">
  <Card
    image={Card_img}
    title="Drilling Cost Transformation"
    description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
    articleText="Article"
    readText="Read"
    onArticleClick={() => alert("Article button clicked!")}
    onReadClick={() => alert("Read button clicked!")}
  />

  <Card
    image={Card_img}
    title="Another Transformation"
    description="Another strategy and sourcing initiative. We help build delivery models, including optimizing operational costs."
    articleText="Article"
    readText="Read"
    onArticleClick={() => alert("Article button clicked!")}
    onReadClick={() => alert("Read button clicked!")}
  />

  <Card
    image={Card_img}
    title="Operational Efficiency"
    description="We drive operational efficiencies through best-in-class delivery and sourcing strategies, tailored to your needs."
    articleText="Article"
    readText="Read"
    onArticleClick={() => alert("Article button clicked!")}
    onReadClick={() => alert("Read button clicked!")}
  />
</div>

<div className="px-4 md:px-20 my-10 block lg:flex gap-5">
  <Card
    image={Card_img}
    title="Drilling Cost Transformation"
    description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model......."
    articleText="Article"
    readText="Read"
    onArticleClick={() => alert("Article button clicked!")}
    onReadClick={() => alert("Read button clicked!")}
  />

  <Card
    image={Card_img}
    title="Another Transformation"
    description="Another strategy and sourcing initiative. We help build delivery models, including optimizing operational costs."
    articleText="Article"
    readText="Read"
    onArticleClick={() => alert("Article button clicked!")}
    onReadClick={() => alert("Read button clicked!")}
  />
</div>

      <Footer />
    </>
  );
};

export default About_us;
