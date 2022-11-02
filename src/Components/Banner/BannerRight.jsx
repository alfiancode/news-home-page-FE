import React from "react";

const data = [
  {
    title: "New Hydrogen VS Electric Cars",
    desc: "Will hydrogen-fueled cars ever catch up to EVs? ",
  },
  {
    title: "The Downsides of AI Artistry",
    desc: "What are the possible adverse effects of on-demand AI image generation? ",
  },
  {
    title: "Is VC Funding Drying Up? ",
    desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means. ",
  },
];
``;
const BannerRight = () => {
  return (
    <div>
      <div className="text-white mt-8 mx-5">
        <div className="font-bold text-4xl text-yellow-600">New</div>
        {data.map((item, index) => (
          <div className="md:mt-10">
            <div className="mt-4 font-bold">{item.title}</div>
            <div className="mt-2 text-sm font-thin">{item.desc}</div>
            {/* separator */}
            <div className="mt-8">
              <div className="h-[1px] bg-gray-600"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerRight;
