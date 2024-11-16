import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Navbar } from "../components/ComponentsIndex";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {TawkToChat} from "../components/TawkToChat/TawkToChat";

function Layout() {
  return (
    <>
      <ToastContainer />
      <Container className="w-full">
        <Navbar />
        <Outlet />
        {/* <TawkToChat /> */}
      </Container>
    </>
  );
}

export default Layout;
