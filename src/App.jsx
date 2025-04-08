import "./App.css";
import Banner from "./Components/Banner/Banner";
import BidItems from "./Components/BidItems/BidItems";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
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
          <div className="left-container w-70%]">
            <BidItems></BidItems>
          </div>
          <div className="right-container w-[25%]">dssdd</div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
