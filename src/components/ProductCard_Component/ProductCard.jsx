import React from 'react';
import { Shoping_bag } from '../../components/Img/ImportedImage';
import { Link } from "react-router-dom";

const ProductCard = ({ image, title, price, company_name }) => {
  return (
    <div className="bg-[#B5E8C5] shadow-lg mb-10 rounded-2xl relative ">
      {/* Product Image */}
      <img className="w-full h-64 object-cover rounded-2xl" src={image} alt={title} />
      
      {/* Product Info */}
      <div className='p-4'>
        <h2 className="text-xl font-bold">{title}</h2>
        <h2 className="text-[#908F8F] text-md font-medium">{company_name}</h2>
        <p className="text-[#06B13D] font-bold text-2xl">₹ {price}</p>
      </div>

      {/* Shopping Bag Icon Button */}
      <div className="absolute -bottom-10 right-0 border-[white] border-8 rounded-full">
        <Link to={"/product-details"}><button className="w-16 h-16 bg-[#06B13D] rounded-full flex items-center justify-center shadow-lg">
          <img src={Shoping_bag} alt="Shopping Bag" className="w-8 h-8" />
        </button></Link>
      </div>
    </div>
  );
};

export default ProductCard;
