import React from "react";
import gaming from "../assets/images/image-gaming-growth.jpg";
import keyboard from "../assets/images/image-top-laptops.jpg";
import pc from "../assets/images/image-retro-pcs.jpg";
const content = [
  {
    id: "01",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    image: gaming,
  },
  {
    id: "02",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets",
    image: keyboard,
  },
  {
    id: "03",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities",
    image: pc,
  },
];
const Articel = () => {
  return (
    <div className="mt-16 flex flex-col md:flex-row   mx-5 space-y-10 md:space-y-0 md:space-x-10">
      {/* map content */}
      {content.map((item) => {
        return (
          <div className="flex md:basis-1/3 items-center">
            <img src={item.image} alt="" className="mr-8 w-28 h-40 md:w-32" />
            <div className="flex flex-col space-y-5">
              <p className="font-bold text-3xl text-gray-300">{item.id}</p>
              <p className="font-bold text-lg">{item.title}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Articel;
