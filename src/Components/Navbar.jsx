import React from "react";

import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import { Menu, Transition } from "@headlessui/react";
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
  return (
    <div className="my-10 mx-5 flex justify-between  items-center relative  ">
      <img src={logo} alt="logo " />
      <div className="md:flex hidden space-x-6 ">
        <p className=" hover:text-[#f15e50] cursor-pointer">Home</p>
        <p className=" hover:text-[#f15e50] cursor-pointer">New</p>
        <p className=" hover:text-[#f15e50] cursor-pointer">Popular</p>
        <p className=" hover:text-[#f15e50] cursor-pointer">Trending</p>
      </div>
      <Menu className="md:hidden z-10" as="div">
        <Menu.Button as="div" className="z-10">
          <img src={iconMenu} alt="logo " />
        </Menu.Button>
        <Transition
          //   as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute top-10 -right-5  w-3/4  h-screen flex flex-col justify-center ">
            <div className="flex flex-col space-y-7 ">
              {" "}
              {links.map((link) => (
                <Menu.Item>
                  <p className=" hover:bg-[#f15e50] cursor-pointer py-4 px-4 rounded-md">
                    {link.name}
                  </p>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Navbar;
