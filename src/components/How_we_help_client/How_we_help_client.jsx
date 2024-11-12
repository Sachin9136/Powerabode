import React, { useState } from "react";
import { CVI_Logo, Supply_chain, OPEX, Codex, CM, Academy, Cost_and_Value,  } from '../../components/Img/ImportedImage';

const Card = ({ imgSrc, title, content, borderColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const getTruncatedText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  return (
    <div className="w-1/1 md:w-1/2 lg:w-1/3 p-2">
      <div className="">
        <img src={imgSrc} alt={title} className={`h-64 w-64 p-4 mx-auto border-${borderColor} border-[20px] rounded-full`} />
      </div>
      <p className="mt-5 text-[#1B3B64] text-3xl font-bold text-center">{title}</p>
      <p className="text-xl mt-2 px-2 md:px-5">
        {isExpanded ? content : getTruncatedText(content, 90)}
      </p>
      <button
        onClick={handleReadMore}
        className="text-white bg-[#1B3B64] mt-2 text-center block mx-auto border-2 border-black px-5 py-2 rounded-md"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <div className="py-6 px-4 md:px-14 bg-white">
      <div className="container mx-auto flex flex-wrap justify-around">
        <Card
          imgSrc={CVI_Logo}
          title="Cost and Value Intelligence"
          content="Cost and Value Philosophy (C&V). A unique way of understanding cost, the potential savings and value optimisation. C&V Intelligence recognises different cost categories and links them to specific contract users. Creating synergy between these users, optimises the delivery of the savings and realising long-term value potential."
          borderColor="[#FEA029]"
        />
        <Card
          imgSrc={Supply_chain}
          title="Supply chain by SLA"
          content="Supply Chain by SLA. Top class experts and services to deliver your Supply Chain Challenges. Optimising cost and improving delivery. Category & Contract Strategy Tendering & Outsourcing Post Award Contract Management Materials Management Commercial Assurance Cost Recovery"
          borderColor="[#9ED033]"
        />
        <Card
          imgSrc={OPEX}
          title="OPEX/CAPEX Program"
          content="Improving cost and value by double digits. Award winning team. This unique program delivers you double digit cost reduction. Disruptive and controlled delivery by three tier program."
          borderColor="[#01BCB1]"
        />
        <Card
          imgSrc={Codex}
          title="Codex"
          content="Management System, complete and off the shelf, including implementation and training. No development risk, adapted to your organisation. For Contracting & Procurement Pre-award Post-award Materials Management Commercial Assurance Cost Recovery"
          borderColor="[#4C78B5]"
        />
        <Card
          imgSrc={CM}
          title="CM+"
          content="Contract + Context. People don't read the contract. Still, they are expected to deliver. This solution enables all contract users to be first time right."
          borderColor="[#8F4A81]"
        />
        <Card
          imgSrc={Academy}
          title="Academy"
          content="8 specific Coaching and trainings, focussed on developing commercial skillset. Integrated Supply Chain (ISC) training for teams of contract users."
          borderColor="[#D31E47]"
        />
      </div>
    </div>
  );
};

export default Services;
