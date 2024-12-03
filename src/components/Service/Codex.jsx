import React from "react";
import { Codex } from "../../components/Img/ImportedImage";
import { Link } from "react-router-dom";

function Codexs() {
  return (
    <>
      <Link to="/codex-supply-chain">
        <img
          src={Codex}
          alt={"title"}
          className={`h-[190px] w-[190px] mx-auto border-[#4c78b5] border-[15px] p-1 rounded-full transition-all duration-700  hover:border-0`}
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
    </>
  );
}

export default Codexs;
