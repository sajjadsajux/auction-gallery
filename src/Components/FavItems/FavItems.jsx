import React from "react";
import { FaRegHeart } from "react-icons/fa";

const FavItems = () => {
  return (
    <div>
      <div className="bg-white rounded-3xl space-y-5 py-8">
        <div className="flex items-center justify-center gap-3 py-1">
          <FaRegHeart size={25} />
          <h4 className="text-3xl font-bold">Favorite Items</h4>
        </div>
        <div className="text-center space-y-5 p-13 border-t border-gray-300 border-opacity-40">
          <h4 className="text-2xl font-bold">Favorite Items</h4>
          <p>Click the heart icon on any item to add it to your favorites</p>
        </div>
        <div className="flex justify-around border-t border-gray-300 border-opacity-40 pt-5">
          <h4 className="text-2xl font-bold">Total bids Amount</h4>
          <h4 className="text-2xl font-bold">$0</h4>
        </div>
      </div>
    </div>
  );
};

export default FavItems;
