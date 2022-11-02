import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto  max-w-screen-2xl">
      <Navbar />
      <div className="flex flex-1">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
