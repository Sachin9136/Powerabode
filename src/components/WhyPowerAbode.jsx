import React from 'react'

function WhyPowerAbode() {
    const items = [
        { text: "Integrated Commercial Ecosystem" },
        { text: "Fast and Flexible Delivery" },
        { text: "Managed Services by SLA" },
        { text: "Unique Cost Program" },
        { text: "Expert Team" },
        { text: "Productized Solutions" },
        { text: "Advanced Quality, Compliance & Governance" },
        { text: "Pioneering AI Development" },
      ];
  return (
    <>
       <div className="px-4 md:px-20">
        <div>
          <h2 className="text-center text-3xl font-bold text-[#29385E] my-10">
            Why powerabode?
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-full w-44 h-44 shadow-lg 
                  ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-blue-400 to-blue-600"
                      : "bg-gradient-to-r from-purple-400 to-purple-600"
                  }`}
            >
              {/* Inner circle */}
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-inner">
                <p className="text-lg font-semibold text-gray-800 px-4 text-center">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default WhyPowerAbode