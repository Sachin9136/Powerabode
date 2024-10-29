import React, { useState } from "react";
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
import CommanBanner from "../../components/Banners/CommanBanner";

const BillingForm = () => {
  // State for form inputs
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    country: '',
    city: '',
    pincode: '',
    paymentMethod: 'credit-card',
    cardDetails: {
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
    },
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({
      ...billingInfo,
      [name]: value,
    });
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({
      ...billingInfo,
      cardDetails: {
        ...billingInfo.cardDetails,
        [name]: value,
      },
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation and processing here
    console.log('Form submitted', billingInfo);
  };

  return (
    <>
    <Row>
    <CommanBanner children={Store_banner} heading={"Checkout"} />

    </Row>
    <div className="p-6">
      
      {/* Cart Table */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mb-20 px-4 md:px-20">
        <div className="md:col-span-2">
            <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
                <label className="font-semibold">First Name</label>
                <input
                type="text"
                name="firstName"
                value={billingInfo.firstName}
                onChange={handleChange}
                className="border border-green-500 rounded-md w-full p-2 mt-1 focus:outline-none"
                placeholder="First Name"
                required
                />
            </div>
            <div>
                <label className="font-semibold">Last Name</label>
                <input
                type="text"
                name="lastName"
                value={billingInfo.lastName}
                onChange={handleChange}
                className="border border-green-500 rounded-md w-full p-2 mt-1 focus:outline-none"
                placeholder="Last Name"
                required
                />
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
                <label className="font-semibold">Phone Number</label>
                <input
                type="text"
                name="phoneNumber"
                value={billingInfo.phoneNumber}
                onChange={handleChange}
                className="border border-green-500 rounded-md w-full p-2 mt-1 focus:outline-none"
                placeholder="Phone Number"
                required
                />
            </div>
            <div>
                <label className="font-semibold">Email Address</label>
                <input
                type="email"
                name="email"
                value={billingInfo.email}
                onChange={handleChange}
                className="border border-green-500 rounded-md w-full p-2 mt-1 focus:outline-none"
                placeholder="Email Address"
                required
                />
            </div>
            </div>

            <div className="mb-6">
            <label className="font-semibold">Address</label>
            <input
                type="text"
                name="address"
                value={billingInfo.address}
                onChange={handleChange}
                className="border border-green-500 rounded-md w-full p-2 mt-1 focus:outline-none"
                placeholder="Address"
                required
            />
            </div>
            <div>
                <label className="font-semibold">Country</label>
                <input
                type="text"
                name="country"
                value={billingInfo.country}
                onChange={handleChange}
                className="border border-green-500 rounded-md w-full p-2 mt-1 focus:outline-none"
                placeholder="Country"
                required
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 py-6">
            <div>
                <label className="font-semibold">City</label>
                <input
                type="text"
                name="city"
                value={billingInfo.city}
                onChange={handleChange}
                className="border border-green-500 rounded-md w-full p-2 mt-1 focus:outline-none"
                placeholder="City"
                required
                />
            </div>
            <div>
                <label className="font-semibold">Pincode</label>
                <input
                type="text"
                name="pincode"
                value={billingInfo.pincode}
                onChange={handleChange}
                className="border border-green-500 rounded-md w-full p-2 mt-1 focus:outline-none"
                placeholder="Pincode"
                required
                />
            </div>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
            <h3 className="font-bold mb-4 text-lg">How would you like to pay?</h3>
            <div>
                <label className="inline-flex items-center">
                <input
                    type="radio"
                    name="paymentMethod"
                    value="credit-card"
                    checked={billingInfo.paymentMethod === 'credit-card'}
                    onChange={handleChange}
                    className="form-radio text-green-500"
                />
                <span className="ml-2">Pay with Credit Card</span>
                </label>
            </div>
            <div>
                <label className="inline-flex items-center">
                <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={billingInfo.paymentMethod === 'paypal'}
                    onChange={handleChange}
                    className="form-radio text-green-500"
                />
                <span className="ml-2">Pay with PayPal</span>
                </label>
            </div>
            <div>
                <label className="inline-flex items-center">
                <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={billingInfo.paymentMethod === 'upi'}
                    onChange={handleChange}
                    className="form-radio text-green-500"
                />
                <span className="ml-2">Pay with UPI</span>
                </label>
            </div>
            </div>

            {/* Card Details */}
            {billingInfo.paymentMethod === 'credit-card' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                <label className="font-semibold">Name on Card</label>
                <input
                    type="text"
                    name="cardName"
                    value={billingInfo.cardDetails.cardName}
                    onChange={handleCardChange}
                    className="border border-green-500 rounded-md w-full p-2 mt-1 focus:outline-none"
                    placeholder="Name on Card"
                    required
                />
                </div>
                <div>
                <label className="font-semibold">Card Number</label>
                <input
                    type="text"
                    name="cardNumber"
                    value={billingInfo.cardDetails.cardNumber}
                    onChange={handleCardChange}
                    className="border border-green-500 rounded-md w-full p-2 mt-1 focus:outline-none"
                    placeholder="Card Number"
                    required
                />
                </div>
                <div>
                <label className="font-semibold">Date of Expiry</label>
                <input
                    type="text"
                    name="expiryDate"
                    value={billingInfo.cardDetails.expiryDate}
                    onChange={handleCardChange}
                    className="border border-green-500 rounded-md w-full p-2 mt-1 focus:outline-none"
                    placeholder="MM/YY"
                    required
                />
                </div>
                <div>
                <label className="font-semibold">CVV</label>
                <input
                    type="text"
                    name="cvv"
                    value={billingInfo.cardDetails.cvv}
                    onChange={handleCardChange}
                    className="border border-green-500 rounded-md w-full p-2 mt-1 focus:outline-none"
                    placeholder="CVV"
                    required
                />
                </div>
            </div>
            )}

            {/* Confirm Payment Button */}
            {/* <div className="mt-6 flex justify-between">
            <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
            >
                Confirm Payment
            </button>
            <button
                type="button"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg"
            >
                Cancel
            </button>
            </div> */}
            </form>
        </div>

        {/* Order Summary */}
        <div className=" rounded-lg">
            <table className="min-w-full rounded-2xl shadow-lg">
            {/* Table Head */}
            <thead>
            <tr className="bg-[#06B13D] text-white">
                <th className="p-4 text-left text-[#FFED05] font-semibold">Order Summary</th>
                <th className="p-4"></th>
            </tr>
            </thead>

            {/* Table Body */}
            <tbody>
            <tr className="">
                <td className="px-4 pt-7 text-left text-xl font-semibold">Subtotal</td>
                <td className="px-4 pt-5 text-right text-[#5D5C5C] font-semibold">₹ 4.0</td>
            </tr>
            <tr className="border-b">
                <td className="px-4 py-3 text-left text-xl font-semibold">Shipping Fee</td>
                <td className="px-4 py-3 text-right text-[#5D5C5C] font-semibold">₹ 4.0</td>
            </tr>
            <tr className="border-b">
                <td className="p-4 text-left text-xl font-semibold">Total</td>
                <td className="p-4 text-right text-[#5D5C5C] font-bold text-lg">₹ 4.0</td>
            </tr>
            <tr className="flex justify-between">
                <td className="flex items-center py-5 px-3">
                    <Link to={"/order-completed"}>
                        <button className="bg-[#FFED05] hover:bg-yellow-500 text-[#06B13D] text-xl font-bold py-3 px-3 rounded-lg ">
                            Confirm Payment
                        </button>
                    </Link>
                </td>
                <td className="flex items-center py-5 px-3">
                    <p className="text-[#FF0101] text-xl">Cancel</p>
                </td>
            </tr>
            </tbody>
            </table>
        </div>
      </div>
    </div>
    <div className="p-6 max-w-3xl mx-auto">
      {/* Billing Details Form */}
      
    </div>

<Store_Footer/>
<Footer/>

    </>
  );
};

export default BillingForm;
