import React from "react";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row mx-5 md:space-x-5">
        <div className="md:basis-2/3">
          <BannerLeft />
        </div>
        <div className="md:basis-1/3  bg-black mt-10 md:mt-0">
          <BannerRight />
        </div>
      </div>
    </div>
  );
};

export default Banner;
