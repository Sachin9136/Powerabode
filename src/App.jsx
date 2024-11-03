import React from "react";
import Layout from "./Layout/Layout";
import './App.css';
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Cost_and_Value_Philosophy from "./Page/Cost_and_Value_Philosophy/Cost_and_Value_Philosophy";
import Get_Involved from "./Page/Get_Involved/Get_Involved";
import Success_Formula from "./Page/Success_Formula/Success_Formula";
import Home from "./Page/Home/Home";
import News_Updates from "./Page/News_Updates/News_Updates";
import Drilling_Cost_Transformation from "./Page/Drilling_Cost_Transformation/Drilling_Cost_Transformation";
import Article_Business_Cases_Background from "./Page/Article_Business_Cases_Background/Article_Business_Cases_Background";
import SingleService from "./Page/Single_Programme/Single_Programme";
import Store from "./Page/Store/Store";
import Cart_page from "./Page/Cart_page/Cart_page";
import Checkout from "./Page/Checkout/Checkout";
import Supply_Chain_by_SLA from "./Page/Supply_Chain_by_SLA/Supply_Chain_by_SLA";
import Order_Completed from "./Page/Order_Completed/Order_Completed";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="cost-and-value-philosophy" element={<Cost_and_Value_Philosophy />} />
      <Route path="get-involved" element={<Get_Involved />} />
      <Route path="success-formula-disruptive-and-controlled" element={<Success_Formula />} />
      <Route path="news-updates" element={<News_Updates />} />
      <Route path="drilling-cost-transformation" element={<Drilling_Cost_Transformation />} />
      <Route path="/service/:id" element={<SingleService />} />
      <Route path="article-business-cases-background" element={<Article_Business_Cases_Background />} />
      <Route path="store" element={<Store />} />
      <Route path="cart-page" element={<Cart_page />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="order-completed" element={<Order_Completed />} />
      <Route path="supply-chain-by-sla" element={<Supply_Chain_by_SLA />} />
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
