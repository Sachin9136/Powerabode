import React from "react";
import Layout from "./Layout/Layout";
import './App.css';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About_us from "./Page/About_us/About_us";
import Programme_Services from "./Page/Programme_Services/Programme_Services";
import Get_Involved from "./Page/Get_Involved/Get_Involved";
// import Dental_Treatment from "./Page/Dental_Treatment/Dental_Treatment";
import Login from "./Page/Login/Login";
import Home from "./Page/Home/Home";
import News_Updates from "./Page/News_Updates/News_Updates";
import Courses from "./Page/Courses/Courses";
import Blog from "./Page/Blog/Blog";
import SingleBlog from "./Page/Single_Blog/Single_Blog";
import SingleService from "./Page/Single_Programme/Single_Programme";
import Store from "./Page/Store/Store";
import Product_Details from "./Page/Product_Details/Product_Details";
import Cart_page from "./Page/Cart_page/Cart_page";
import Checkout from "./Page/Checkout/Checkout";
import Order_Completed from "./Page/Order_Completed/Order_Completed";
import Sign_up from "./Page/Sign_up/Sign_up";
import Our_Team from "./Page/Our_Team/Our_Team";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about-us" element={<About_us />} />
      <Route path="programme-services" element={<Programme_Services />} />
      <Route path="get-involved" element={<Get_Involved />} />
      {/* <Route path="dental-treatment" element={<Dental_Treatment />} /> */}
      <Route path="news-updates" element={<News_Updates />} />
      <Route path="courses" element={<Courses />} />
      <Route path="/:id" element={<SingleBlog />} />
      <Route path="/service/:id" element={<SingleService />} />
      <Route path="blog" element={<Blog />} />
      <Route path="store" element={<Store />} />
      <Route path="product-details" element={<Product_Details />} />
      <Route path="cart-page" element={<Cart_page />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="order-completed" element={<Order_Completed />} />
      <Route path="our-team" element={<Our_Team />} />
      {/* login */}
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<Sign_up />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
