import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const BidItems = () => {
  const [biditems, setBiditems] = useState([]);
  useEffect(() => {
    fetch("biditems.json")
      .then((res) => res.json())
      .then((data) => setBiditems(data));
  }, []);
  console.log(biditems);
  return (
    <div>
      <div className="w-full">
        <table className=" bg-white border-collapse  rounded-3xl  mb-20">
          <thead className="">
            <tr className="">
              <th className=" px-6 py-8 text-2xl text-left">Items</th>
              <th className=" px-6 py-8 text-2xl text-left">Current Bid</th>
              <th className=" px-6 py-8 text-2xl text-left">Time Left</th>
              <th className=" px-6 py-8 text-2xl text-left">Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {biditems.map((item) => (
              <tr
                key={item.id}
                className="space-x-32 border-t border-gray-300 border-opacity-40"
              >
                <td className=" px-6 py-4 flex gap-5 items-center ">
                  <img className="w-20 h-20" src={item.image} alt="" />
                  <p className="font-bold">{item.title}</p>
                </td>
                <td className=" px-6 py-4 text-center font-bold">
                  {item.currentBidPrice}
                </td>
                <td className=" px-6 py-4 text-center font-bold">
                  {item.timeLeft}
                </td>
                <td className=" px-6 py-4 text-center font-bold">
                  <button className="">
                    <FaRegHeart size={25} />
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
