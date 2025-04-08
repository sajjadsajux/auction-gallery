import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="bannner-container ">
        <div className="banner-text max-w-3/4 mx-auto  space-y-5 py-52 ">
          <h1 className="text-5xl text-white font-bold">
            Discover & Bid on <br />
            Rare Global Finds
          </h1>
          <p className="text-xl text-white ">
            Find rare items, luxury products, and old <br /> treasures in our
            special auctions
          </p>
          <button className="btn rounded-full">Explore Auctions</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
