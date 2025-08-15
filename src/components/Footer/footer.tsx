import React from "react";
import FooterLinksJson from "../../data/footerLinks.json";
import RenderSection from "./renderFooterLinks";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  
  const { Pages, Company } = FooterLinksJson;

  return (
    <div className="bg-[#663ab7]">
      <div className=" z-20 relative -mt-1   px-10 p-3 lg:pt-24 lg:0">
        <div className="lg:flex lg:mt-0 mt-10 justify-between w-full">
          <div>
            <img
              src="/assets/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="lg:w-[250px] -mt-14 lg:h-[250px] w-[200px] h-[200px]"
            />
          </div>
          <div className="flex gap-16 z-30">
            <RenderSection title="Pages" items={Pages} />
            <RenderSection title="Company" items={Company} />
          </div>
        </div>
        <hr className="border z-40  border-x-transparent border-b-gray-900 border-t-transparent my-6" />
        <div className="flex items-center pb-5 justify-between">
          <p className="text-sm font-semibold text-gray-900">
            © 2025 S & R Towing. All rights reserved.
          </p>
          <div className="flex lg:items-center lg:pr-0 pr-4 lg:gap-5 gap-3">
            <FaFacebook className="text-xl text-white cursor-pointer" />
            <FaInstagram className="text-xl text-white cursor-pointer" />
            <FaWhatsapp className="text-xl text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
