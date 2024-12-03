import React from "react";
import CM from "../../../src/assets/Images/cm.png";
import { Link } from "react-router-dom";

function Cm() {
  return (
    <div>
      <Link to="/cm-for-contract">
        <img
          src={CM}
          alt={"title"}
          className={`h-[190px] w-[190px] mx-auto border-[#8F4A81] border-[15px] p-1 rounded-full transition-all duration-700  hover:border-0 object-contain`}
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

export default Cm;
