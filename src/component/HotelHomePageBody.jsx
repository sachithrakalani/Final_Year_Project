import { Link } from "react-router-dom";
import galleFaceImg from "../../public/assets/Gallefacehotel.jpg";
import cinemondGrandImg from "../../public/assets/CinnamonGrand.jpg";
import kingsburyImg from "../../public/assets/KingsburyHotel.jpg";
import jetwingImg from "../../public/assets/JetwingBlue.jpg";
import shangrilaImg from "../../public/assets/ShangriLa.jpg";

const hotels = [
  {
    id: 1,
    name: "Galle Face Hotel",
    location: "Colombo",
    image: galleFaceImg,
  },
  {
    id: 2,
    name: "Cinnamon Grand",
    location: "Colombo",
    image: cinemondGrandImg,
  },
  {
    id: 3,
    name: "The Kingsbury",
    location: "Colombo",
    image: kingsburyImg,
  },
  {
    id: 4,
    name: "Jetwing Blue",
    location: "Negombo",
    image: jetwingImg,
  },
  {
    id: 5,
    name: "Shangri-La",
    location: "Hambantota",
    image: shangrilaImg,
  },
];

export default function HotelHomePageBody() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {hotels.map((hotel) => (
        <Link
          key={hotel.id}
          to={`/hotel/${hotel.id}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
        >
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{hotel.name}</h2>
            <p className="text-gray-600">{hotel.location}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}



