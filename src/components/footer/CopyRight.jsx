import React from "react";
import Footer from "./footer";

function Copyright() {
  return (
    <>
      <div className="px-4 py-10 md:px-20 bg-gray-100 min-h-screen ">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-2xl font-bold text-[#29385E] mb-4">Copyright</h1>
          <p className="text-gray-700 leading-relaxed">
            This website (
            <a
              href="https://www.powerabode.com"
              className="text-blue-500"
            >
              www.powerabode.com
            </a>
            ) and its content is copyright of{" "}
            <a
              href="https://www.powerabode.com"
              className="text-blue-500"
            >
              powerabode{" "}
            </a>
            DMCC, Dubai, UAE. All rights reserved.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Any redistribution or reproduction of part or all of the contents in
            any form is prohibited other than the following:
            <ul className="list-disc ml-6 mt-4">
              <li>
                You may print or download to a local hard disk extracts for your
                personal and non-commercial use only.
              </li>
              <li>
                You may copy the content to individual third parties for their
                personal use, but only if you acknowledge the website as the
                source of the material.
              </li>
            </ul>
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            You may not, except with our express written permission, distribute
            or commercially exploit the content. Nor may you transmit it or
            store it in any other website or other form of electronic retrieval
            system.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Copyright;
