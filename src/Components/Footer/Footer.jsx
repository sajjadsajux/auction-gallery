import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="navbar bg-base-100  flex flex-col justify-around items-center space-y-5 p-20">
        <div className="">
          <a className=" text-3xl font-bold text-yellow-500">
            <span className="text-blue-500 font-semibold">Auction</span>Gallery
          </a>
        </div>
        <div>
          <h4 className="text-xl font-medium sora-font">Bid. Win. Own.</h4>
          {/* <h4 className="text-xl font-medium sora-font">Bid. Win. Own.</h4> */}
        </div>
        <div className="flex gap-10 poppins-regular">
          <h1 className=" ">Home</h1>
          <h1 className=" ">Auctions</h1>
          <h1 className=" ">Categories</h1>
          <h1 className=" ">How it Works</h1>
        </div>
        <div>
          <small className="sora-font">© 2025 Auction Gallery BD. All rights reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
