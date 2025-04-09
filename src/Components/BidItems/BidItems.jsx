import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

const BidItems = ({ HandleBidButton, clickheart }) => {
  const [biditems, setBiditems] = useState([]);
  useEffect(() => {
    fetch("biditems.json")
      .then((res) => res.json())
      .then((data) => setBiditems(data));
  }, []);
  // console.log(biditems);
  return (
    <div>
      <div className="w-full sora-font">
        <table className=" bg-white border-collapse  rounded-3xl  mb-20">
          <thead className="">
            <tr className="">
              <th className=" px-6 py-8 text-xl text-left">Items</th>
              <th className=" px-6 py-8 text-xl text-left">Current Bid</th>
              <th className=" px-6 py-8 text-xl text-left">Time Left</th>
              <th className=" px-6 py-8 text-xl text-left">Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {biditems.map((item) => (
              <tr
                key={item.id}
                className="space-x-8 border-t border-gray-200 border-opacity-40 text-[#0E2954] sora-font"
              >
                <td className=" px-6 py-4 flex gap-5 items-center ">
                  <img
                    className="w-30 h-30 object-cover"
                    src={item.image}
                    alt=""
                  />
                  <p className="font-bold">{item.title}</p>
                </td>
                <td className=" px-6 py-4 text-center font-bold">
                  ${item.currentBidPrice}
                </td>
                <td className=" px-6 py-4 text-center font-bold">
                  {item.timeLeft}
                </td>
                <td className=" px-6 py-4 text-center font-bold">
                  <button
                    className="btn-ghost"
                    onClick={() => HandleBidButton(item)}
                    disabled={clickheart[item.id]}
                    style={{
                      color: clickheart[item.id] ? "red" : "black",
                      cursor: clickheart[item.id] ? "not-allowed" : "pointer",
                    }}
                  >
                    {/* <FaRegHeart size={25} /> */}
                    {clickheart[item.id] ? (
                      <FaHeart size={25} />
                    ) : (
                      <FaRegHeart size={25} />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidItems;
