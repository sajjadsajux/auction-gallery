import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import BidItems from "./Components/BidItems/BidItems";
import FavItems from "./Components/FavItems/FavItems";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [favs, setFavs] = useState([]);
  const HandleBidButton = (item) => {
    setFavs([...favs, item]);
  };
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="bg-[#EBF0F5] w-full">
        <div className="max-w-3/4 mx-auto py-16 space-y-5">
          <h1 className="text-3xl">Active Auctions</h1>
          <p className="text-xl">Discover and bid on extraordinary items</p>
        </div>

        <div className="container max-w-3/4 mx-auto flex justify-between">
          <div className="left-container w-50%]">
            <BidItems HandleBidButton={HandleBidButton}></BidItems>
          </div>
          <div className="right-container w-[30%]">
            <FavItems favs={favs}></FavItems>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
