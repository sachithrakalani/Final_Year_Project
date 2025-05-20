import HotelHomePageBody from "./component/HotelHomePageBody";
import HotelHomePage from "./component/HotelHomePage";
import HotelHomePageHeader from "./component/HotelHomePageHeader";
import ReviewHomePage from "./component/ReviewHomePage";

function App() {
  return (
    <div className="App">
      {/* <ReviewHomePage /> */}
      <HotelHomePageHeader />
      <HotelHomePage />
     < HotelHomePageBody/>
    </div>
  );
}

export default App;
