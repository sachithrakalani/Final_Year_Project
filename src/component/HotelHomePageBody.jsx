import { Link } from "react-router-dom";
import img1 from "./../../public/assets/Gallefacehotel.jpg";


export default function HomePageBody() {
  return (
    <div>
      <div className="flex flex-row p-[20px]">
        <div className="flex flex-col">
          <div className="px-[50px] m-[20px]">
            <img className="w-xs  rounded-2xl" src={img1} alt="img1" />   
          </div>
          <div className="px-[70px] top-[1%]">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              Galle Face Hotel
            </h2>
            <div>
              <h2 className="font-semibold">$580</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="px-[50px] m-[20px]">
            <img className="w-xs  rounded-2xl" src={img1} alt="img1" />
          </div>
          <div className="px-[70px] top-[1%]">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              Galle Face Hotel
            </h2>
            <div>
              <h2 className="font-semibold">$580</h2>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
}



