import React from "react";
import { Payment_Success } from "../../components/Img/ImportedImage";
  import Footer from "../../components/footer/footer";
  import Store_Footer from "../../components/Store_Footer/Store_Footer";

const Order_Completed = () => {

  return (
    <>
    
    <h2 className="text-2xl font-bold mt-5 text-center">Order Completed</h2>
          {/* Thank You Message */}
          <div className="text-center">
            <div className="flex justify-center my-2 md:my-10">
                <img src={Payment_Success} alt="" width="100px"/>
            </div>
            <h2 className="text-3xl font-bold text-[#06B13D] mb-4 px-2">
                Thank you for your purchase!
            </h2>
        <p className="text-2xl mb-6">
          Your order has been successfully processed. Here are the details:
        </p>
      </div>
    <div className="">
      
      <div className="max-w-2xl mx-auto p-2">
      {/* Success Icon */}
      <div className="flex justify-center items-center">
        <div className="text-green-500 text-6xl mb-4">
          <i className="fas fa-check-circle"></i>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white shadow-md rounded-lg">
        <h3 className="bg-green-500 text-white font-semibold py-4 px-4 rounded-t-lg">
          Order Summary
        </h3>
        <div className="">
          <div className="flex justify-between py-2 px-4">
            <span>Order number</span>
            <span>$410.00</span>
          </div>
          <div className="flex justify-between py-2 px-4">
            <span>Date</span>
            <span>12-June-2024</span>
          </div>
          <div className="flex justify-between border-b py-2 px-4">
            <span>Items</span>
            <span>4 Items</span>
          </div>
          <div className="flex justify-between border-b font-bold py-2 px-4">
            <span>Total</span>
            <span>$430.00</span>
          </div>
        </div>
        {/* Order Details Button */}
        <div className="py-10 px-14">
          <button className="bg-[#FFED05] text-[#06B13D] w-full py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
            Order Details
          </button>
        </div>
      </div>
    </div>
    </div>
          {/* Order Status */}
    <div className="my-8 px-4 md:px-20 mb-44">
        <h4 className="text-[#06B13D] font-semibold text-3xl mb-2">
          Order Status:
        </h4>
        <p className="text-xl">
          Your order is now complete and will be processed for shipment. You
          will receive a confirmation email shortly with tracking information
          once your items have been dispatched.
        </p>
        <p className="mt-4 text-xl">
          Thank you for shopping with us! If you have any questions or concerns,
          please don't hesitate to contact our customer support team at: 
          mdaminur.oc@gmail.com or 
          Phone No: +8801405074838.
        </p>
      </div>

    <Store_Footer/>
    <Footer/>

    </>
  );
};

export default Order_Completed;
