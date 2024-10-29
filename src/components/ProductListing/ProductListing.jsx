import React, { useState } from 'react';
import ProductCard from '../ProductCard_Component/ProductCard';
import ReactPaginate from 'react-paginate';
import { Product_img, ShoppingCart, Login_signup } from '../../components/Img/ImportedImage';
import { Link } from "react-router-dom";

const productData = [
  { id: 1, title: 'Ecosprin 75mg Strip Of 14 Tablets', price: 1, company_name: 'By SUV PVT LTD', image: Product_img },
  { id: 2, title: 'Ecosprin 75mg Strip Of 14 Tablets', price: 2, company_name: 'By SUV PVT LTD', image: Product_img },
  { id: 3, title: 'Ecosprin 75mg Strip Of 14 Tablets', price: 3, company_name: 'By SUV PVT LTD', image: Product_img },
  { id: 4, title: 'Ecosprin 75mg Strip Of 14 Tablets', price: 4, company_name: 'By SUV PVT LTD', image: Product_img },
  { id: 5, title: 'Ecosprin 75mg Strip Of 14 Tablets', price: 5, company_name: 'By SUV PVT LTD', image: Product_img },
  { id: 6, title: 'Ecosprin 75mg Strip Of 14 Tablets', price: 6, company_name: 'By SUV PVT LTD', image: Product_img },
  { id: 7, title: 'Ecosprin 75mg Strip Of 14 Tablets', price: 7, company_name: 'By SUV PVT LTD', image: Product_img },
  { id: 8, title: 'Ecosprin 75mg Strip Of 14 Tablets', price: 8, company_name: 'By SUV PVT LTD', image: Product_img },
  { id: 9, title: 'Ecosprin 75mg Strip Of 14 Tablets', price: 9, company_name: 'By SUV PVT LTD', image: Product_img },
  { id: 10, title: 'Ecosprin 75mg Strip Of 14 Tablets', price: 10, company_name: 'By SUV PVT LTD', image: Product_img },
  { id: 11, title: 'Ecosprin 75mg Strip Of 14 Tablets', price: 11, company_name: 'By SUV PVT LTD', image: Product_img },
];

const ITEMS_PER_PAGE = 9;

const ProductListing = () => {
  const [currentPage, setCurrentPage] = useState(0); // Current page starts from 0 in react-paginate

  // Paginate items
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const selectedProducts = productData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const totalPages = Math.ceil(productData.length / ITEMS_PER_PAGE);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected); // React-paginate returns selected page number
  };

  return (
    <>
      {/* Header Section */}
      <div className="block md:flex justify-between p-2 px-2 md:px-5 lg:px-20 mb-20 bg-white">
        <div className='flex justify-between'>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Kawach Store</h1>
          <div className='block md:hidden'>
            <Link to={"/checkout"}>
              <button className="font-bold text-md mr-5">
                <div className='flex justify-center mb-1'>
                  <img src={Login_signup} alt="Login/Signup" width="35px" />
                </div>
                <div>Login/Signup</div>
              </button>
            </Link>
            <button className=" font-bold text-md">
              <div className='flex justify-center mb-1'>
                <img src={ShoppingCart} alt="Cart" width="35px" />
              </div>
              <div>Cart</div>
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search for medicine"
          className="border border-[#06B13D] rounded-md p-2 mt-3 md:m-0 focus:outline-none w-[100%] md:w-[303px] lg:w-[433px] placeholder:text-[#5BC87E]"
        />
          <div className='hidden md:block'>
            <button className=" font-bold text-md mx-5">
              <div className='flex justify-center mb-1'>
                <img src={Login_signup} alt="Login/Signup" width="35px" />
              </div>
              <div>Login/Signup</div>
            </button>
            <button className=" font-bold text-md">
              <div className='flex justify-center mb-1'>
                <img src={ShoppingCart} alt="Cart" width="35px" />
              </div>
              <div>Cart</div>
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-4 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedProducts.map((product) => (
            <ProductCard key={product.id} title={product.title} company_name={product.company_name} price={product.price} image={product.image} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center my-20 items-center space-x-4">
          <button
            onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 0))}
            className={`bg-gray-300 px-4 py-2 rounded-md ${currentPage === 0 && 'disabled:opacity-50'}`}
            disabled={currentPage === 0}
          >
            Previous
          </button>

          {/* Show current page number */}
          <div className="flex items-center justify-center text-2xl font-bold py-1 px-2 bg-[#06B13D] text-[#FFED05] rounded-lg">
            {currentPage + 1}
          </div>

          <button
            onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1))}
            className={`bg-[#FFED05] text-xl font-bold px-4 py-2 rounded-md ${currentPage + 1 === totalPages && 'disabled:opacity-50'}`}
            disabled={currentPage + 1 === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductListing;
