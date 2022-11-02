import React from "react";
import imageWebDesktop from "../assets/images/image-web-3-desktop.jpg";
import imageWebMobile from "../assets/images/image-web-3-mobile.jpg";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col mx-5">
        <img src={imageWebMobile} alt="" />
        <div className="flex flex-col md:flex-row space-x-3 mt-6 ">
          {" "}
          <div className=" font-black text-6xl  md:basis-1/2 ">
            The Bright Future of Web 3.0?
          </div>
          <div className="flex flex-col md:basis-1/2  justify-between">
            <p className="leading-relaxed tracking-wide mt-7 md:mt-0  text-gray-700">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            {/* button read more */}
            <div className="flex flex-row mt-5">
              <div className="flex flex-row items-center justify-center bg-[#f15e50] rounded-md w-48 h-14">
                <p className="text-white font-bold">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
