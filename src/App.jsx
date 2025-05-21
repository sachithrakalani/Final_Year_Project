import HotelHomePageBody from "./component/HotelHomePageBody";
import HotelHomePage from "./component/HotelHomePage";
import HotelHomePageHeader from "./component/HotelHomePageHeader";
import ReviewHomePage from "./component/ReviewHomePage";
import { Routes, Route } from "react-router-dom";
import SingleHotelDetailPage1 from "./component/SingleHotelDetailPage1";

function App() {
  return (
    <div className="App">
      {/* <ReviewHomePage /> */}
      <HotelHomePageHeader />
      {/* <HotelHomePage /> */}
      {/* < HotelHomePageBody/> */}
      {/* <SingleHotelDetailPage1 /> */}

      <Routes>
        <Route path="/" element={<HotelHomePage />} />
        <Route path="/hotel/:id" element={<SingleHotelDetailPage1 />} />
      </Routes>
    </div>
  );
}

export default App;
