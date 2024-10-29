import React, { useState } from "react";
import Banner from "../../components/Banners/Banners";
import {
  Store_banner,
  Medicine1,
  Medicine2,
  Medicine3,
} from "../../components/Img/ImportedImage";
import {
  Column,
  Heading,
  Row,
  Span,
  Wraper,
  Button,
  Input,
} from "../../components/ComponentsIndex";
import Footer from "../../components/footer/footer";
import Store_Footer from "../../components/Store_Footer/Store_Footer";
import { Link } from "react-router-dom";
import CommanBanner from "../../components/Banners/CommanBanner";

// Sample data (you can replace it with dynamic data)
const initialCart = [
  {
    id: 1,
    name: "Medicine",
    price: 4.52,
    quantity: 1,
    image: Medicine1,
  },
  {
    id: 2,
    name: "Medicine",
    price: 4.52,
    quantity: 1,
    image: Medicine2,
  },
  {
    id: 3,
    name: "Medicine",
    price: 4.52,
    quantity: 1,
    image: Medicine3,
  },
];

const Cart_page = () => {
  const [cart, setCart] = useState(initialCart);

  const handleIncrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cart
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const shippingFee = 4.52; // Fixed shipping fee for simplicity

  const calculateTotal = () => {
    return (parseFloat(calculateSubtotal()) + shippingFee).toFixed(2);
  };

  return (
    <>
      <Row>
        <CommanBanner children={Store_banner} heading={"Cart"} />
      </Row>
      <div className="p-6">
        {/* <h2 className="text-2xl font-bold mb-10 text-center">Cart</h2> */}

        {/* Cart Table */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mb-20 px-4 md:px-20">
          <div className="md:col-span-2">
            <table className="min-w-full border rounded-2xl">
              <thead>
                <tr className="bg-[#06B13D] text-white">
                  <th className="p-4 text-left text-[#FFED05]">Product</th>
                  <th className="p-4 text-left text-[#FFED05]">Price</th>
                  <th className="p-4 text-left text-[#FFED05]">Quantity</th>
                  <th className="p-4 text-left text-[#FFED05]">Subtotal</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="p-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className=" rounded-xl mr-4"
                        width="80px"
                      />
                      {item.name}
                    </td>
                    <td className="p-4 text-xl text-[#5D5C5C] font-semibold">
                      ₹{item.price.toFixed(2)}
                    </td>
                    <td className="p-4">
                      <div className="flex justify-between items-center border-2 border-black rounded-lg">
                        <button
                          className="px-2 py-1"
                          onClick={() => handleDecrement(item.id)}
                        >
                          -
                        </button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          className="px-2 py-1"
                          onClick={() => handleIncrement(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4 text-xl text-[#5D5C5C] font-semibold">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="mt-2 absolute">
                      <button
                        className="text-red-500"
                        onClick={() => handleRemove(item.id)}
                      >
                        {/* <img src={Close} alt="" width="15px"/> */}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Order Summary */}
          <div className=" rounded-lg shadow-lg">
            <table className="min-w-full rounded-2xl ">
              {/* Table Head */}
              <thead>
                <tr className="bg-[#06B13D] text-white">
                  <th className="p-4 text-left text-[#FFED05] font-semibold">
                    Order Summary
                  </th>
                  <th className="p-4"></th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                <tr className="">
                  <td className="px-4 pt-7 text-left text-xl font-semibold">
                    Subtotal
                  </td>
                  <td className="px-4 pt-5 text-right text-[#5D5C5C] font-semibold">
                    ₹{calculateSubtotal()}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 text-left text-xl font-semibold">
                    Shipping Fee
                  </td>
                  <td className="px-4 py-3 text-right text-[#5D5C5C] font-semibold">
                    ₹{shippingFee.toFixed(2)}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 text-left text-xl font-semibold">Total</td>
                  <td className="p-4 text-right text-[#5D5C5C] font-bold text-lg">
                    ₹{calculateTotal()}
                  </td>
                </tr>
              </tbody>
            </table>
          <Link to={"/order-completed"}>  <div className="grid p-2">
              <Button className="m-2">Complete Payment</Button>
              <label  className="text-red-500 text-sm">Prescription required! Please upload a valid prescription to proceed with your medicine order.</label>
              <Input type="file"/>
            </div></Link>
          </div>
        </div>
      </div>
      <Store_Footer />
      <Footer />
    </>
  );
};

export default Cart_page;
