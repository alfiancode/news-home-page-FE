import React, { useState } from "react";

import logo from "../assets/images/logo.svg";
import iconMenu from "../../src/assets/images/icon-menu.svg";
import iconMenuClose from "../../src/assets/images/icon-menu-close.svg";
import { Menu, Transition } from "@headlessui/react";
import MenuMobile from "./MenuMobile";
const links = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "New",
    link: "#",
  },
  {
    name: "Popular",
    link: "#",
  },
  {
    name: "Trending",
    link: "#",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);
  return (
    <div className="my-10 mx-5 flex justify-between  items-center ">
      <img src={logo} alt="logo " />

      <div className="md:flex hidden space-x-6 ">
        <p className=" hover:text-[#f15e50] cursor-pointer">Home</p>
        <p className=" hover:text-[#f15e50] cursor-pointer">New</p>
        <p className=" hover:text-[#f15e50] cursor-pointer">Popular</p>
        <p className=" hover:text-[#f15e50] cursor-pointer">Trending</p>
      </div>

      {/* headless ui sidebar menu */}
      <div className="mx-2 md:hidden" onClick={() => setIsHeadlessOpen(true)}>
        <img src={iconMenu} alt="" />
      </div>

      <MenuMobile open={isHeadlessOpen} setOpen={setIsHeadlessOpen}>
        <div className="flex flex-col">
          <div
            className="flex justify-end"
            onClick={() => setIsHeadlessOpen(false)}
          >
            <img src={iconMenuClose} alt="" className="h-8 w-8  " />
          </div>
          <div
            className="h-full flex flex-col mt-32"
            onClick={() => setIsHeadlessOpen(false)}
          >
            {/* map links  */}
            {links.map((link) => (
              <p className=" hover:text-[#f15e50] cursor-pointer px-3 py-6 font-bold hover:bg-slate-300">
                {link.name}
              </p>
            ))}
          </div>
        </div>
      </MenuMobile>
    </div>
  );
};

export default Navbar;
