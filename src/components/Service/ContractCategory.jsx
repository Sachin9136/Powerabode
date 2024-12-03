import React from "react";
import { Link } from "react-router-dom";
import { Sla_tag } from "../Img/ImportedImage";

function ContractCategory() {
  return (
    <>
      <Link to="/tendering-outsourcing">
        <div
          className={`h-[190px] w-[190px] mx-auto border-[#9ece36] border-[15px] p-1 rounded-full transition-all duration-700  hover:border-0`}
          style={{
            transition:
              "border-color 0.7s ease, border-width 0.7s ease, box-shadow 0.5s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 0 rgba(0, 0, 0, 0)";
          }}
        >
          <div className="flex justify-center">
            <img className="w-28 mt-5" src={Sla_tag} alt="" />
          </div>
          <div className="flex justify-center items-center mt-5 text-center">
            <p className="">
              Contract and <br /> Category <br />
              Strategy
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ContractCategory;
