import React from 'react';
import { Shipping, Bag, Support, Exchange } from '../../components/Img/ImportedImage';

const ProductCard = () => {
  return (
    <>
    <div className='px-2 md:px-20 mb-5 grid grid-cols-2 md:grid-cols-4'>
        <div className='mb-5'>
            <div className='flex justify-center mb-3'>
                <div className='bg-[#FFEDFA] rounded-full w-20 h-20 flex justify-center items-center'>
                    <img src={Shipping} alt="" width="40px"/>
                </div>
            </div>
            <p className='text-center text-xl'>Fast <br /> Shipping</p>
        </div>
        <div className='mb-5'>
            <div className='flex justify-center mb-3'>
                <div className='bg-[#FFEDFA] rounded-full w-20 h-20 flex justify-center items-center'>
                    <img src={Bag} alt="" width="40px"/>
                </div>
            </div>
            <p className='text-center text-xl'>Easy <br /> to Shop</p>
        </div>
        <div className='mb-5'>
            <div className='flex justify-center mb-3'>
                <div className='bg-[#FFEDFA] rounded-full w-20 h-20 flex justify-center items-center'>
                    <img src={Support} alt="" width="40px"/>
                </div>
            </div>
            <p className='text-center text-xl'>24/7 <br /> Customer Support</p>
        </div>
        <div className='mb-5'>
            <div className='flex justify-center mb-3'>
                <div className='bg-[#FFEDFA] rounded-full w-20 h-20 flex justify-center items-center'>
                    <img src={Exchange} alt="" width="40px"/>
                </div>
            </div>
            <p className='text-center text-xl'>Easy  <br /> Returns</p>
        </div>
    </div>
    </>
  );
};

export default ProductCard;
