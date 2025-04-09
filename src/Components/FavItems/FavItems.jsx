import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const FavItems = ({ favs, HandleRemoveFav }) => {
  console.log(favs);
  const [totalamount, setTotalamount] = useState(0);

  useEffect(() => {
    let total = 0;
    for (const price of favs) {
      total = total + price.currentBidPrice;
    }
    setTotalamount(total);
  }, [favs]);

  return (
    <div>
      <div className="bg-white rounded-3xl space-y-4 py-8">
        <div className="flex items-center justify-center gap-3 py-1 text-[#0E2954]">
          <FaRegHeart size={25} />
          <h4 className="text-3xl font-bold">Favorite Items</h4>
        </div>
        {favs.length === 0 ? (
          <div className="blank text-center space-y-5 p-13 border-t border-gray-200 border-opacity-40">
            <h4 className="text-2xl font-semibold sora-font">
              No favorites yet
            </h4>
            <p>Click the heart icon on any item to add it to your favorites</p>
          </div>
        ) : (
          <div>
            {favs.map((fav) => (
              <div
                key={fav.id}
                className="flex justify-between border-t border-gray-200 border-opacity-40 p-3 sora-font"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-25 h-25 object-cover"
                      src={fav.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div className="text-container w-full">
                      <h5 className="text-left ">{fav.title}</h5>
                    </div>
                    <div className="flex gap-10">
                      <h5 className="text-left">${fav.currentBidPrice}</h5>
                      <h5 className="text-left">Bids: {fav.bidsCount}</h5>
                    </div>
                  </div>
                </div>

                <div>
                  <button onClick={() => HandleRemoveFav(fav.id)}>
                    <RxCross2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-around border-t border-gray-200 border-opacity-40 pt-5">
          <h4 className="text-2xl ">Total bids Amount:</h4>
          <h4 className="text-2xl font-bold">${totalamount}</h4>
        </div>
      </div>
    </div>
  );
};

export default FavItems;
