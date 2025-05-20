import img1 from "../../public/assets/Gallefacehotel.jpg";

export default function SingleHotelDetailPage1() {
  return (
    <div className="bg-blue-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">
        <img
          className="w-full max-w-4xl h-auto mx-auto rounded-lg shadow-lg"
          src={img1}
          alt="Galle Face Hotel"
        />

        <div className="text-center mt-10 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">Galle Face Hotel, Colombo</h1>
          <p className="text-gray-700 text-lg">
            Set in Colombo, 700 metres from Galle Face Beach, Cinnamon Life at City of Dreams offers
            accommodation with an outdoor swimming pool, free private parking, a bar, and a spa and wellness centre.
          </p>

          <p className="text-gray-700 text-lg">
            This iconic colonial-style hotel, built in 1864, boasts a spa and a saltwater pool with sun loungers
            that face the vast Indian Ocean. Most rooms feature wooden flooring and offer views of the Indian Ocean,
            Galle Face Green, or Colombo City. Rooms are equipped with a TV, a private bathroom with a hairdryer,
            a minibar, and a personal safe.
          </p>

          <p className="text-gray-700 text-lg">
            Guests can enjoy a relaxing massage at the spa, work out at the gym, or access the business centre.
            Located in the heart of Colombo City, the hotel is a 15-minute drive from Odel Shopping Mall and 36 km
            from Colombo International Airport. Guests can dine at the on-site restaurants, Verandah and 1864,
            or enjoy a drink at the bar.
          </p>
        </div>
        
      </div>
    </div>
  );
}
