import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Navbar } from "../components/ComponentsIndex";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  return (
    <>
      <ToastContainer />
      <Container className="w-full">
        <Navbar />
        <Outlet />
      </Container>
    </>
  );
}

export default Layout;
