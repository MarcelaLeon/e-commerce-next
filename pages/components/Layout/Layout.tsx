import React, { FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header";

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
