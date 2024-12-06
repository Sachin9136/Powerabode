import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Navbar } from "../components/ComponentsIndex";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopToScroll from "../../src/TopToScroll";
import Chatbot from "../components/Chat/ChatBot";
import ClarityScript from "../components/Chat/ClarityScript";
import CookieConsent from "../components/Chat/Cookie";
import GoogleAnalytics from "../components/Chat/GoogleAnalytics";
//

function Layout() {
  return (
    <>
      <ToastContainer />
      <Container className="w-full">
        <TopToScroll />
        <Navbar />
        <Outlet />
        {/* third party components */}
        <Chatbot />
        <ClarityScript />
        <CookieConsent />
        <GoogleAnalytics/>
      </Container>
    </>
  );
}

export default Layout;
