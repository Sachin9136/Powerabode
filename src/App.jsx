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
import Success_Formula from "./Page/Success_Formula/Success_Formula";
import Home from "./Page/Home/Home";
import Drilling_Cost_Transformation from "./Page/Drilling_Cost_Transformation/Drilling_Cost_Transformation";
import Article_Business_Cases_Background from "./Page/Article_Business_Cases_Background/Article_Business_Cases_Background";
import SingleService from "./Page/Single_Programme/Single_Programme";
import Supply_Chain_by_SLA from "./Page/Supply_Chain_by_SLA/Supply_Chain_by_SLA";
import The_story_of_Powerabode from "./Page/The_story_of_Powerabode/The_story_of_Powerabode";
import Category_Strategy_Contract_Strategy from "./Page/Category_Strategy_Contract_Strategy/Category_Strategy_Contract_Strategy";
import Post_Award from "./Page/Post_Award/Post_Award";
import Commercial_Assurance from "./Page/Commercial_Assurance/Commercial_Assurance";
import Cost_Recovery from "./Page/Cost_Recovery/Cost_Recovery";
import Tendering_Outsourcing from "./Page/Tendering_Outsourcing/Tendering_Outsourcing";
import Materials_Management from "./Page/Materials_Management/Materials_Management";
import CM_for_Contract from "./Page/CM_for_Contract/CM_for_Contract";
import Skillset_Development from "./Page/Skillset_Development/Skillset_Development";
import Deal_Design from "./Page/Deal_Design/Deal_Design";
import CODEX_Supply_Chain from "./Page/CODEX_Supply_Chain/CODEX_Supply_Chain";
import Conflict_or_Conflicting_KPI from "./Page/Single_blogs/Conflict_or_Conflicting_KPI";
import Hidden_in_plain_Sight from "./Page/Single_blogs/Hidden_in_plain_Sight";
import Deliver_as_Planned from "./Page/Single_blogs/Deliver_as_Planned";
import Drilling_Cost_Transformation_blog from "./Page/Single_blogs/Drilling_Cost_Transformation_blog";
import Deliver_Despite_Budget from "./Page/Single_blogs/Deliver_Despite_Budget";
import Focus_on_Rates from "./Page/Single_blogs/Focus_on_Rates";
import Supply_Chain_Management from "./Page/Single_blogs/Supply_Chain_Management";
import Unlocking_Value_bottom from "./Page/Single_blogs/Unlocking_Value_bottom";
import Procurement_Department from "./Page/Single_blogs/Procurement_Department";
import Materials_Management_blog from "./Page/Single_blogs/Materials_Management_blog";
import Misalignment_with_business from "./Page/Single_blogs/Misalignment_with_business";
import Local_content_development from "./Page/Single_blogs/Local_content_development";
import Strategic_Sourcing from "./Page/Single_blogs/Strategic_Sourcing";
import The_Art_of_Deal from "./Page/Single_blogs/The_Art_of_Deal";
import Disclaimer from "./components/footer/Disclaimer";
import { PrivacyPolicy } from "./components/footer/PrivacyPolicy";
import Copyright from "./components/footer/CopyRight";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="cost-and-value-philosophy" element={<Cost_and_Value_Philosophy />} />
      <Route path="success-formula-disruptive-and-controlled" element={<Success_Formula />} />
      <Route path="drilling-cost-transformation" element={<Drilling_Cost_Transformation />} />
      <Route path="/service/:id" element={<SingleService />} />
      <Route path="article-business-cases-background" element={<Article_Business_Cases_Background />} />
      <Route path="supply-chain-by-sla" element={<Supply_Chain_by_SLA />} />
      <Route path="the-story-of-powerabode" element={<The_story_of_Powerabode />} />
      <Route path="category-strategy" element={<Category_Strategy_Contract_Strategy />} />
      <Route path="post-award-contract-management" element={<Post_Award />} />
      <Route path="commercial-assurance" element={<Commercial_Assurance />} />
      <Route path="cost-recovery" element={<Cost_Recovery />} />
      <Route path="tendering-outsourcing" element={<Tendering_Outsourcing />} />
      <Route path="materials-management" element={<Materials_Management />} />
      <Route path="cm-for-contract" element={<CM_for_Contract />} />
      <Route path="skillset-development" element={<Skillset_Development />} />
      <Route path="ai-ecosystem" element={<Deal_Design />} />
      <Route path="codex-supply-chain" element={<CODEX_Supply_Chain />} />
      <Route path="disclaimer" element={<Disclaimer />} />
      <Route path="privacy_policy" element={<PrivacyPolicy />} />
      <Route path="copyright" element={<Copyright />} />
   

      {/* Single Blogs */}

      <Route path="blog-articles-business-cases/key-performance-indicators-kpi" element={<Conflict_or_Conflicting_KPI />} />
      <Route path="blog-articles-business-cases/Solutions-to-influence-cost" element={<Hidden_in_plain_Sight />} />
      <Route path="blog-articles-business-cases/Project-management-bottle-necks" element={<Deliver_as_Planned />} />
      <Route path="blog-articles-business-cases/drilling-cost-transformationblog" element={<Drilling_Cost_Transformation_blog />} />
      <Route path="blog-articles-business-cases/budget-constraints-delivery" element={<Deliver_Despite_Budget />} />
      <Route path="blog-articles-business-cases/discount-price-reduction" element={<Focus_on_Rates />} />
      <Route path="articles-business-cases/supply-Chain-Procurement-Management-System" element={<Supply_Chain_Management />} />
      <Route path="blog-articles-business-cases/Unlocking-value-savings-bottom-line" element={<Unlocking_Value_bottom />} />
      <Route path="blog-articles-business-cases/Performance-dna-procurement-supplychain-department" element={<Procurement_Department />} />
      <Route path="blog-articles-business-cases/Materials-Management" element={<Materials_Management_blog />} />
      <Route path="blog-articles-business-cases/businessplan" element={<Misalignment_with_business />} />
      <Route path="blog-articles-business-cases/local-content-development" element={<Local_content_development />} />
      <Route path="articles-business-cases/sourcing-strategy" element={<Strategic_Sourcing />} />
      <Route path="blog-articles-business-cases/the-art-of-the-deal-outsourcing-supply-chain" element={<The_Art_of_Deal />} />

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
