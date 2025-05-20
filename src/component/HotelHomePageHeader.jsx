export default function HotelHomePageHeader() {
  return (
    <div>
      <header className="flex justify-between items-center px-4 py-5">
        <h1 className="text-xl font-bold">Hotels</h1>
        <div className="space-x-4">
          <button>Home</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Log In
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Sign in
          </button>
        </div>
      </header>
    </div>
  );
}
