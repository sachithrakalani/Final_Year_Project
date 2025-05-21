import Homeimg from "../../public/assets/DreamHomeImage.jpeg";
import HotelHomePageBody from "./HotelHomePageBody";

export default function HotelHomePage() {
  return (
    <div>
      <img className="w-full h-[450px]" src={Homeimg} alt="Home" />
      <div className="absolute top-[14%] left-[30%]">
        <div className="text-center text-[40px]">
          <h2>Find Your Dream Hotel for a stay</h2>
          <hr />
        </div>
      </div>
      < HotelHomePageBody/>
    </div>
  );
}