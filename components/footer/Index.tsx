import React from "react";
import { IconType } from "react-icons";
import { FaFacebookMessenger } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { FaTiktok } from "react-icons/fa6";

//interface
interface FooterProps {
  title: string;
  description: string;
  list: string[];
  icon?: IconType;
}

export const Footer: React.FC<FooterProps> = ({ title, description, list }) => {
  return (
    <footer className="bg-secondaryDark text-center py-[2rem]">
      <div className="flex text-white flex-row justify-center gap-[5rem]">
        <h2 className="text-center flex items-center">{title}</h2>
        <p className=" gap-[5rem]">
          <img
            src="/assets/images/herologo1.png"
            alt="logo"
            className="w-[10rem]"
          />
        </p>
        <nav className="flex justify-center ">
          {list.map((item, index) => (
            <span key={index} className="flex items-center">
              {item}
              {index < list.length - 1 && <span className="mx-2">|</span>}{" "}
            </span>
          ))}
        </nav>
      </div>
      <p className="text-white pt-[1rem]">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </p>
    </footer>
  );
};
