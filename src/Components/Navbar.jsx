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
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          //   enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Menu.Items className="absolute top-10 right-0  w-3/4  h-screen flex flex-col justify-center  shadow-2xl space-y-7">
            {links.map((link) => (
              <Menu.Item>
                <p className=" hover:bg-[#f15e50] cursor-pointer py-4 px-4 rounded-md font-bold mx-5 ">
                  {link.name}
                </p>
              </Menu.Item>
            ))}
            {/* </div> */}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Navbar;
