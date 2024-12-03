import React from "react";
import { OPEX } from "../Img/ImportedImage";
import { Link } from "react-router-dom";

function Opex() {
  return (
    <div className="flex justify-center gap-5">
      <Link to="/success-formula-disruptive-and-controlled">
        <img
          src={OPEX}
          alt={"title"}
          className={`h-[190px] w-[190px] mx-auto border-[#01bcb1] border-[15px] p-1 rounded-full transition-all duration-700  hover:border-0`}
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
        />
      </Link>

     
    </div>
  );
}

export default Opex;
