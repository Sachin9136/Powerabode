import React, { useState } from "react";
import {
  CVI_Logo,
  Supply_chain,
  OPEX,
  Codex,
  CM,
  Academy,
} from "../../components/Img/ImportedImage";
import { Link } from "react-router-dom";

const Card = ({ imgSrc, title, content, borderColor, link }) => {
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
      <div>
        <Link to={link}>
          <img
            src={imgSrc}
            alt={title}
            className="h-64 w-64 p-5 mx-auto rounded-full border-[20px] object-contain"
            style={{
              transition: "all 0.7s ease",
              borderColor: borderColor,
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderWidth = "0px";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderWidth = "18px";
              e.currentTarget.style.boxShadow = "0 0 0 rgba(0, 0, 0, 0)";
            }}
          />
        </Link>
      </div>
      <p className="mt-5 text-[#1B3B64] text-3xl font-bold text-center">
        {title}
      </p>
      <p className="text-xl mt-2 px-2 md:px-5 text-justify">{content}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="py-6 px-4 md:px-14">
    <div className="container mx-auto flex flex-wrap justify-around">
        <Card
          imgSrc={CVI_Logo}
          title="Cost and Value Intelligence"
          content="Cost and Value Philosophy (C&V). A unique way of understanding cost, the potential savings and value optimisation. C&V Intelligence recognises different cost categories and links them to specific contract users. Creating synergy between these users, optimises the delivery of the savings and realising long-term value potential."
          borderColor="#fea029"
          link="/cost-and-value-philosophy" // Add the specific link here
        />
        <Card
          imgSrc={Supply_chain}
          title="Supply Chain by SLA"
          content={
            <>
              <p>
                Supply Chain by SLA. Top class experts and services to deliver
                your Supply Chain Challenges. Optimising cost and improving
                delivery.
              </p>
              <ul>
                <li>
                  <i className="bi bi-dot"></i> Category & Contract Strategy
                </li>
                <li>
                  <i className="bi bi-dot"></i> Tendering & Outsourcing
                </li>
                <li>
                  <i className="bi bi-dot"></i> Post Award Contract Management
                </li>
                <li>
                  <i className="bi bi-dot"></i> Materials Management
                </li>
                <li>
                  <i className="bi bi-dot"></i> Commercial Assurance
                </li>
                <li>
                  <i className="bi bi-dot"></i> Cost Recovery
                </li>
              </ul>
            </>
          }
          borderColor="#9ED033"
          link="/supply-chain-by-sla" // Add the specific link here
        />

        <Card
          imgSrc={OPEX}
          title="OPEX/CAPEX Program"
          content="Improving cost and value by double digits. Award winning team. This unique program delivers you double digit cost reduction. Disruptive and controlled delivery by three tier program."
          borderColor="#01BCB1"
          link="/success-formula-disruptive-and-controlled" // Add the specific link here
        />
        <Card
          imgSrc={Codex}
          title="Codex"
          content={
            <>
              <p>
                Management System, complete and off the shelf, including
                implementation and training. No development risk, adapted to
                your organisation.
              </p>
              <ul>
                <li>
                  <i className="bi bi-dot"></i> Contracting & Procurement
                </li>
                <li>
                  <i className="bi bi-dot"></i> Pre-award
                </li>
                <li>
                  <i className="bi bi-dot"></i> Post-award
                </li>
                <li>
                  <i className="bi bi-dot"></i> Materials Management
                </li>
                <li>
                  <i className="bi bi-dot"></i> Commercial Assurance
                </li>
                <li>
                  <i className="bi bi-dot"></i> Cost Recovery
                </li>
              </ul>
            </>
          }
          borderColor="#4C78B5"
          link="/codex-supply-chain" // Add the specific link here
        />

        <Card
          imgSrc={CM}
          title="CM+"
          content="Contract + Context. People don't read the contract. Still, they are expected to deliver. This solution enables all contract users to be first time right."
          borderColor="#8F4A81"
          link="/cm-for-contract" // Add the specific link here
        />
       
        <Card
          imgSrc={Academy}
          title="Academy"
          content="8 specific Coaching and trainings, focussed on developing commercial skillset. Integrated Supply Chain (ISC) training for teams of contract users."
          borderColor="#d31e47"
          link="/skillset-development" 
        />
      </div>
    </div>
  );
};

export default Services;
