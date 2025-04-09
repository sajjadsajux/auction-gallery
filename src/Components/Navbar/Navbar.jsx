import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <div className="navbar   flex justify-between items-center max-w-3/4 mx-auto">
        <div className="">
          <a className=" text-3xl font-bold text-yellow-500">
            <span className="text-blue-500 font-semibold">Auction</span>Gallery
          </a>
        </div>
        <div className="flex gap-10 poppins-regular">
          <h1 className="text-xl ">Home</h1>
          <h1 className="text-xl ">Auctions</h1>
          <h1 className="text-xl ">Categories</h1>
          <h1 className="text-xl ">How it Works</h1>
        </div>
        <div className="gap-5 flex items-center justify-center">
          <div className="relative bg-[#ebf0f5] rounded-4xl p-2">
            <IoMdNotificationsOutline size={25} />
            <span className="absolute top-1 right-1 bg-blue-900 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              9
            </span>
          </div>
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co.com/RTqzmQ3B/012027201.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
