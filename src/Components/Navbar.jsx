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
    <div className="my-10 mx-5 flex justify-between  items-center ">
      <img src={logo} alt="logo " />
      <div className="md:flex hidden space-x-6 ">
        <p className=" hover:text-[#f15e50] cursor-pointer">Home</p>
        <p className=" hover:text-[#f15e50] cursor-pointer">New</p>
        <p className=" hover:text-[#f15e50] cursor-pointer">Popular</p>
        <p className=" hover:text-[#f15e50] cursor-pointer">Trending</p>
      </div>
      <Menu className="md:hidden  " as="div">
        <Menu.Button>
          <img src={iconMenu} alt="menu " />
        </Menu.Button>
        <Transition
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <Menu.Items className=" bg-white fixed h-screen w-44 -right-2  shadow-2xl space-y-7 flex flex-col  justify-center">
            {links.map((link) => (
              <Menu.Item
                className="py-3 px-2 hover:bg-orange-400 cursor-pointer font-bold"
                as="div"
              >
                {link.name}
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
