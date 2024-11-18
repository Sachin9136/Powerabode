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
      <Route path="category-strategy-contract-strategy" element={<Category_Strategy_Contract_Strategy />} />
      <Route path="post-award-contract-management" element={<Post_Award />} />
      <Route path="commercial-assurance" element={<Commercial_Assurance />} />
      <Route path="cost-recovery" element={<Cost_Recovery />} />
      <Route path="tendering-outsourcing" element={<Tendering_Outsourcing />} />
      <Route path="materials-management" element={<Materials_Management />} />
      <Route path="cm-for-contract" element={<CM_for_Contract />} />
      <Route path="skillset-development" element={<Skillset_Development />} />
      <Route path="deal-design" element={<Deal_Design />} />
      <Route path="codex-supply-chain" element={<CODEX_Supply_Chain />} />

      {/* Single Blogs */}

      <Route path="conflict-or-conflicting-KPI" element={<Conflict_or_Conflicting_KPI />} />


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
