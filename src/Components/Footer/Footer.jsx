import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="navbar bg-base-100  flex flex-col justify-around items-center space-y-3 p-20">
        <div className="">
          <a className=" text-2xl font-bold text-yellow-500">
            <span className="text-blue-500">Auction</span>Gallery
          </a>
        </div>
        <div>
          <h4 className="text-xl font-medium">Bid. Win. Own.</h4>
        </div>
        <div className="flex gap-10">
          <h1 className=" ">
            <a href="">Home</a>
          </h1>
          <h1 className=" ">
            <a href="">Auctions</a>
          </h1>
          <h1 className=" ">
            <a href="">Categories</a>
          </h1>
          <h1 className=" ">
            <a href="">How to works</a>
          </h1>
        </div>
        <div>
          <small>© 2025 Auction Gallery BD. All rights reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
