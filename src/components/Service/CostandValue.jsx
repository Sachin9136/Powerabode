import React from "react";
import { Link } from "react-router-dom";
import { CVI_Logo } from "../Img/ImportedImage";

function CostandValue() {
  return (
    <>
      <div>
        <Link to="/cost-and-value-philosophy">
          <img
            src={CVI_Logo}
            alt={"title"}
            className={`h-[190px] w-[190px] mx-auto border-[#fea029] border-[15px] p-1 rounded-full transition-all duration-700  hover:border-0`}
            style={{
              transition:
                "border-color 0.7s ease, border-width 0.7s ease, box-shadow 0.5s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 0 rgba(0, 0, 0, 0)";
            }}
          />
        </Link>
      </div>
    </>
  );
}

export default CostandValue;
