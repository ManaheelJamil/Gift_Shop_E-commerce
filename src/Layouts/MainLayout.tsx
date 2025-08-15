import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/index"
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default MainLayout;
