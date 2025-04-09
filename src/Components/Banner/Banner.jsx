import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="bannner-container sora-font">
        <div className="banner-text max-w-3/4 mx-auto  space-y-7 py-56 ">
          <h1 className="text-5xl text-white font-semibold ">
            Bid on Unique Items from <br />
            Around the World
          </h1>
          <p className="text-xl text-white font-extralight">
            Discover rare collectibles, luxury goods, and vintage <br />
            treasures in our curated auctions
          </p>
          <button className="btn rounded-full font-semibold">
            Explore Auctions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
