import React from "react";
import Navbar from "components/Navbar";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      {children}
    </>
  );
};

export default Layout;
