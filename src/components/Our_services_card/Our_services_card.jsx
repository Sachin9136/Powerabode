import React from 'react';

const ServiceCard = ({ icon, title, points, borderColor = 'border-transparent' }) => {
  return (
    <div className={'p-5 bg-white shadow-lg rounded-xl border-2 h-auto'}>
      <div className="flex pb-3"> 
        <div className="">
          <img src={icon} alt={`${title} icon`} className="" />
        </div>
      </div>
      <h3 className="text-[#06B13D] text-3xl font-bold mb-3">{title}</h3>
      <ul className="list-disc pl-5 pb-16">
        {points.map((point, index) => (
          <li key={index} className="text-2xl font-semibold">{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
