import { Link } from "react-router-dom";

export default function HotelHomePageHeader() {
  return (
    <header className="bg-white shadow-md py-5 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition">
          🌴 Sri Lanka Hotels
        </Link>

        <nav className="space-x-4">
        </nav>
      </div>
    </header>
  );
}
