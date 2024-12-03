import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Navbar } from "../components/ComponentsIndex";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopToScroll from '../../src/TopToScroll';
import Chatbot from "../components/Chat/ChatBot";
import ClarityScript from "../components/Chat/ClarityScript";
// 

function Layout() {
  return (
    <>
      <ToastContainer />
      <Container className="w-full">
        <TopToScroll/>
        <Navbar />
        <Outlet />
        <Chatbot/>
        <ClarityScript/>
      </Container>
    </>
  );
}

export default Layout;
