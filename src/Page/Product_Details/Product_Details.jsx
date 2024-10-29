import React, { useState } from 'react';
import Banner from "../../components/Banners/Banners";
import { Store_banner, Medicine1, Medicine2, Medicine3 } from "../../components/Img/ImportedImage";
import {
    Column,
    Heading,
    Row,
    Span,
    Wraper,
    Button,
  } from "../../components/ComponentsIndex";
  import Footer from "../../components/footer/footer";
  import ProductListing from "../../components/ProductListing/ProductListing";
  import Store_Footer from "../../components/Store_Footer/Store_Footer";
  import { Link } from "react-router-dom";
import CommanBanner from '../../components/Banners/CommanBanner';



const Product_Details = () => {

  return (
    <>
        {/* <Row>
        <CommanBanner children={Store_banner} heading={"Blogs"} />

        </Row> */}

        {/* <Heading className="text-4xl font-bold my-10 text-center">
            Product Details
        </Heading> */}

        <div className="p-4 md:p-8 lg:p-16">
      {/* Product Heading Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Product Image */}
        <div className="flex-1">
          <img src={Medicine1} alt="Ecosprin 75mg" className="w-full h-auto rounded-lg" />
          
          {/* Thumbnails */}
          <div className="flex justify-between gap-4 mt-4">
            <img src={Medicine2} alt="Thumbnail 1" className=" rounded-md" width="47%"/>
            <img src={Medicine3} alt="Thumbnail 2" className=" rounded-md" width="47%"/>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Ecosprin 75mg Strip Of 14 Tablets</h1>
          <p className="text-[#868585] text-md lg:text-3xl font-medium mt-2 md:mt-10 mb-2 md:mb-8">By USV PVT LTD</p>
          <p className="text-green-600 text-lg md:text-xl lg:text-4xl font-semibold mb-2 lg:mb-5">14 Tablet(s) in Strip</p>
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-black mt-2 md:mt-16 mb-2 md:mb-4">₹ 100.00</p>
          <p className="text-gray-500 text-sm lg:text-4xl mt-2">Inclusive of all taxes</p>

          {/* Add to Cart Button */}
          <Link to={"/cart-page"}><button className="mt-4 md:mt-14 text-[#FFED05] text-xl md:text-2xl bg-[#06B13D] hover:bg-green-600 font-bold py-2 md:py-3 lg:py-6 px-3 md:px-7 lg:px-14 rounded-xl lg:rounded-2xl">
            Add to Cart
          </button></Link>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold my-3">Description</h2>
        <p className="text-xl mt-2">
            Ecosprin 75 tablet is a medication that helps prevent heart attacks, strokes, and angina. It is also used in patients who have had angioplasty. The active ingredient is low-dose aspirin. Aspirin slows down blood clotting by preventing platelets from sticking to each other. This, in turn, reduces the formation of blood clots within the blood vessels, thus lowering the risk of angina, heart attack, and stroke.
        </p>
        <p className="text-xl mt-2">
            Take Ecosprin 75 tablets in the exact dose and duration as prescribed by your doctor. Do not take more than the recommended dose. Do not stop taking this medicine on your own. Before starting this medicine, inform your doctor if you have high blood pressure, lung disease, stomach ulcer, blood clotting problems, heavy menstrual bleeding, gout or if you recently had a stroke.
        </p>
        <span className="text-[#06B13D] underline font-semibold cursor-pointer"> Read More</span>
      </div>

      {/* Product Summary */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold">Product Summary</h2>
        <div className=" mt-4">
          <div>
            <p className="text-2xl text-[#5D5C5C] font-medium my-3"><strong className='text-black'>Offer Price:</strong> ₹4.52</p>
            <p className="text-2xl text-[#5D5C5C] font-medium my-3"><strong className='text-black'>You Save:</strong> ₹0.80 (15% on MRP)</p>
          </div>
          <div>
            <p className="text-2xl text-[#5D5C5C] font-medium my-3"><strong className='text-black'>Contains:</strong> Aspirin / Acetyl Salicylic Acid (75.0 Mg)</p>
            <p className="text-2xl text-[#5D5C5C] font-medium my-3"><strong className='text-black'>Uses:</strong> Prevention of heart attack, stroke, angina</p>
          </div>
          <div>
            <p className="text-2xl text-[#5D5C5C] font-medium my-3"><strong className='text-black'>Side Effects:</strong> Indigestion, nausea, diarrhea, vomiting</p>
          </div>
          <div>
            <p className="text-2xl text-[#5D5C5C] font-medium my-3"><strong className='text-black'>Therapy:</strong> Anti-platelet</p>
          </div>
        </div>
      </div>
    </div>

        
        <Store_Footer />
        <Footer />
    </>
  )
}

export default Product_Details
