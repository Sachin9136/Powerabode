import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Column,
  Heading,
  Row,
  Span,
  Wraper,
  Button,
} from "../../components/ComponentsIndex";

import Footer from "../../components/footer/footer";
import CommanBanner from "../../components/Banners/CommanBanner";
import Card from "../../components/card/card";
import {
  Articles_Business_Cases_Background,
  Cycle,
  Lion,
  Snow,
  Tower,
  Find_the_gap,
  Island,
  Structure,
  Scm,
  Dna_img,
  Racks,
  Boxes,
  Strategy,
  Mountains,
  Google,
} from "../../components/Img/ImportedImage";

const About_us = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <>
      <CommanBanner
        children={Articles_Business_Cases_Background}
        heading={"Articles, Business Cases & Background"}
      />

      <h2 className="text-center text-3xl font-bold text-[#29385E] mt-10">
        Articles & Case Study
      </h2>

      <div className="px-4 md:px-20 my-10 block lg:flex justify-center gap-5">
        <Card
          image={Cycle}
          title="Conflict or Conflicting KPI’s?"
          description="Working as a team. That’s what we do. But how do we know we are all aligned? Conflicting KPI’s cause massive inefficiencies. Who needs enemies if you have friends?"
          articleText="Article"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => navigate("/conflict-or-conflicting-KPI")} // Navigate on click
        />

        <Card
          image={Lion}
          title="Hidden in Plain sight"
          description="Crazy as it may sound; there’s always an elephant in the room.. Central in our way of work are the users of the contract, the ECMT. They are underestimated as a platform."
          articleText="Philosophy"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => navigate("/hidden-in-plain-sight")} // Navigate on click
        />

        <Card
          image={Snow}
          title="Deliver as Planned"
          description="Sometimes ‘surprises’ are actually predictable. The top 5 of ‘predictable’ surprises"
          articleText="Article"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => navigate("/deliver-as-planned")} // Navigate on click
        />
      </div>

      <div className="px-4 md:px-20 my-10 block lg:flex gap-5">
        <Card
          image={Tower}
          title="Drilling Cost Transformation"
          description="Strategy and sourcing define the outcome. We advice and built your delivery model, including the tendering model"
          articleText="Case Study"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => navigate("/drilling-cost-transformation")} // Navigate on click
        />

        <Card
          image={Find_the_gap}
          title="Deliver despite budget constraints"
          description="Every supply chain has waste, we fix it. Complex analyses using our CI Philosophy, double digit improvement to your budget and opex, value optimisation"
          articleText="Case Study"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => navigate("/deliver-budget-constraints")} // Navigate on click
        />

        <Card
          image={Island}
          title="Does focus on rates make sense?"
          description="Cost Leadership will remain one of top 3 focus areas of Energy Industry for next decade. We excel in this area"
          articleText="Thinking"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => navigate("/focus-on-rates")} // Navigate on click
        />
      </div>

      <div className="px-4 md:px-20 my-10 block lg:flex gap-5">
        <Card
          image={Scm}
          title="Getting the supply chain management and procurement system right"
          description="Off the shelf we developed a Codex system to support your delivery. Front line experts will adapt it for you, with a view"
          articleText="Case Study"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => navigate("/supply-chain-management")} // Navigate on click
        />

        <Card
          image={Structure}
          title="Unlocking Value to your bottom line"
          description="Identifying a saving potential is a small step. The bigger thing is to bring it to your bottomline. We use the Integrated Supply Chain, the structure of our Cost Intelligence Philosophy and the people that use the contract to"
          articleText="Philosophy"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => navigate("/unlocking-value-bottom-line")} // Navigate on click
        />

        <Card
          image={Dna_img}
          title="How the DNA of your procurement department sets its performance"
          description="Is your function led by operations? By finance? Projects? Legal? They bring their DNA. We transform it to one driven by commercial DNA, getting cost and value efficiency"
          articleText="Article"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => navigate("/procurement-department-dna")} // Navigate on click
        />
      </div>

      <div className="px-4 md:px-20 my-10 block lg:flex gap-5">
        <Card
          image={Racks}
          title="Materials Management; a showstopper or a money maker?"
          description="As an asset gets older, how to keep performing? Increased pressure on maintenance, legacy parts"
          articleText="Article"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => navigate("/materials-management")} // Navigate on click
        />

        <Card
          image={Boxes}
          title="Misalignment with the businessplan"
          description="Not everyone knows the businessplan. This information is confidential or under evaluation. But, in the operations latest information is key for opex and capex decisions. How to deal with misalignment?"
          articleText="Case Study"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => navigate("/misalignment-business-plan")} // Navigate on click
        />

        <Card
          image={Google}
          title="The synergy of local content development"
          description="NOC’s have a close connect to the economic development of their country. Our services empower and progress the commercial control on Capex and Opex, but also weave in local content"
          articleText="Case Study"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => navigate("/local-content-development")} // Navigate on click
        />
      </div>

      <div className="px-4 md:px-20 my-10 block lg:flex gap-5">
        <Card
          image={Strategy}
          title="Strategic Sourcing is not a Sourcing Strategy"
          description="Digitisation is key, but good old human intelligence is still key in defining the strategy. Artificial Intelligence is quickly gaining pace, but"
          articleText="Case Study"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => navigate("/strategic-sourcing")} // Navigate on click
        />

        <Card
          image={Mountains}
          title="The art of the deal"
          description="Tendering and outsourcing are where a big impact is created for future performance. Call it the art of the deal. One of our SLA service"
          articleText="Article"
          readText="Read"
          onArticleClick={() => alert("Article button clicked!")}
          onReadClick={() => navigate("/art-of-the-deal")} // Navigate on click
        />
      </div>

      <Footer />
    </>
  );
};

export default About_us;
