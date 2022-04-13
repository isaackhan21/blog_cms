import React from "react";
import { Header } from "./";

const Layout = ({ children }) => {
  return (
    <div className="  flex h-screen flex-col  ">
      <div className=" dark:bg-gray-900">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
