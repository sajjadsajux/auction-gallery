import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const FavItems = ({ favs }) => {
  console.log(favs);

  return (
    <div>
      <div className="bg-white rounded-3xl space-y-5 py-8">
        <div className="flex items-center justify-center gap-3 py-1">
          <FaRegHeart size={25} />
          <h4 className="text-3xl font-bold">Favorite Items</h4>
        </div>
        {favs.length === 0 ? (
          <div className="blank text-center space-y-5 p-13 border-t border-gray-300 border-opacity-40">
            <h4 className="text-2xl font-bold">Favorite Items</h4>
            <p>Click the heart icon on any item to add it to your favorites</p>
          </div>
        ) : (
          <div>
            {favs.map((fav) => (
              <div
                key={fav.id}
                className="flex justify-between border-t border-gray-300 border-opacity-40 p-5"
              >
                <div>
                  <img
                    className="w-30 h-30 object-cover"
                    src={fav.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-18 ">
                  <div className="">
                    <h5 className=" text-center">{fav.title}</h5>
                  </div>
                  <div className="flex space-x-10">
                    <h5 className="">${fav.currentBidPrice}</h5>
                    <h5 className="">Bids: {fav.bidsCount}</h5>
                  </div>
                </div>
                <div>
                  <button>
                    <RxCross2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-around border-t border-gray-300 border-opacity-40 pt-5">
          <h4 className="text-2xl font-bold">Total bids Amount</h4>
          <h4 className="text-2xl font-bold">$0</h4>
        </div>
      </div>
    </div>
  );
};

export default FavItems;
