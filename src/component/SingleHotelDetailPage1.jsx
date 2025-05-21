import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const hotelDetails = {
  1: {
    name: "Galle Face Hotel, Colombo",
    description:
      "An iconic colonial-style hotel with ocean views, a saltwater pool, and luxurious dining.",
    image: "/assets/Gallefacehotel.jpg",
    address: "2 Galle Face Rd, Colombo 03, Sri Lanka",
    contact: "+94 11 2 444 000",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    amenities: [
      "Free Wi-Fi",
      "Outdoor Swimming Pool",
      "Spa and Wellness Centre",
      "Beach Access",
      "Restaurant & Bar",
      "Gym",
      "Room Service",
    ],
    reviews: [
      {
        user: "Alice",
        rating: 5,
        comment: "Beautiful historic hotel with amazing ocean views!",
      },
      {
        user: "John",
        rating: 4,
        comment: "Great location and friendly staff. Rooms could be updated.",
      },
    ],
  },
  2: {
    name: "Cinnamon Grand, Colombo",
    description:
      "A 5-star hotel with multiple restaurants, a spa, and elegant city views in the heart of Colombo.",
    image: "/assets/CinnamonGrand.jpg",
    address: "77 Galle Rd, Colombo 03, Sri Lanka",
    contact: "+94 11 2 469 123",
    checkIn: "3:00 PM",
    checkOut: "12:00 PM",
    amenities: [
      "Free Parking",
      "Spa & Massage",
      "Fitness Centre",
      "Multiple Dining Options",
      "Conference Rooms",
      "Swimming Pool",
    ],
    reviews: [
      {
        user: "Maria",
        rating: 5,
        comment:
          "Luxury at its best. Food was excellent and service top notch!",
      },
      {
        user: "David",
        rating: 4,
        comment: "Very comfortable stay, loved the spa facilities.",
      },
    ],
  },
  3: {
    name: "The Kingsbury, Colombo",
    description:
      "A waterfront hotel offering fine dining, rooftop lounges, and sunset views of the Indian Ocean.",
    image: "/assets/KingsburyHotel.jpg",
    address: "48 Janadhipathi Mawatha, Colombo 01, Sri Lanka",
    contact: "+94 11 2 444 500",
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    amenities: [
      "Free Wi-Fi",
      "Rooftop Bar",
      "Business Centre",
      "Swimming Pool",
      "24-hour Room Service",
    ],
    reviews: [
      {
        user: "Samantha",
        rating: 4,
        comment: "Fantastic views and great location.",
      },
      {
        user: "Chris",
        rating: 3,
        comment: "Rooms were nice but a bit pricey for the value.",
      },
    ],
  },
  4: {
    name: "Jetwing Blue, Negombo",
    description:
      "A beachfront resort with a large pool, tropical gardens, and signature Sri Lankan hospitality.",
    image: "/assets/JetwingBlue.jpg",
    address: "No 130, St. Anthony's Mawatha, Negombo, Sri Lanka",
    contact: "+94 31 2 222 222",
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    amenities: [
      "Beach Access",
      "Swimming Pool",
      "Free Wi-Fi",
      "Spa",
      "Kids’ Play Area",
    ],
    reviews: [
      {
        user: "Liam",
        rating: 5,
        comment: "Perfect beach resort with excellent facilities!",
      },
      {
        user: "Olivia",
        rating: 4,
        comment: "Loved the peaceful environment and friendly staff.",
      },
    ],
  },
  5: {
    name: "Shangri-La, Hambantota",
    description:
      "A luxury golf and beach resort on Sri Lanka’s southern coast, perfect for family getaways.",
    image: "/assets/ShangriLa.jpg",
    address: "Hambantota, Sri Lanka",
    contact: "+94 47 22 888 88",
    checkIn: "3:00 PM",
    checkOut: "12:00 PM",
    amenities: [
      "Golf Course",
      "Private Beach",
      "Spa & Wellness",
      "Multiple Restaurants",
      "Kids Club",
      "Fitness Centre",
    ],
    reviews: [
      {
        user: "Emma",
        rating: 5,
        comment: "A luxurious escape with fantastic golf and beach activities.",
      },
      {
        user: "Noah",
        rating: 4,
        comment: "Great place for families, very spacious and well maintained.",
      },
    ],
  },
};

export default function SingleHotelDetailPage1() {
  const { id } = useParams();
  const hotel = hotelDetails[id];

  const [reviews, setReviews] = useState(hotel ? hotel.reviews : []);
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!hotel)
    return (
      <p className="text-center mt-10 text-red-600 font-semibold">
        Hotel not found.
      </p>
    );

  async function handleSubmit(e) {
    e.preventDefault();

    if (!userName.trim() || !comment.trim()) {
      alert("Please enter your name and comment.");
      return;
    }

    const review = {
      user: userName.trim(),
      rating: Number(rating),
      comment: comment.trim(),
      hotelId: id,
    };

    setLoading(true);
    setErrorMsg("");

    try {
      const response = await axios.post("http://localhost:3000/api/review", {
        review,
      });

      if (response.status === 200) {
        setReviews((prev) => [review, ...prev]);
        setUserName("");
        setRating(5);
        setComment("");
      } else {
        setErrorMsg("Failed to submit review. Please try again.");
      }
    } catch (error) {
      setErrorMsg(
        "An error occurred: " + (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-blue-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-6">
        <img
          className="w-full max-w-4xl h-auto mx-auto rounded-lg shadow-lg"
          src={hotel.image}
          alt={hotel.name}
        />

        <div className="mt-8 text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{hotel.name}</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {hotel.description}
          </p>

          <div className="mt-8 flex justify-center gap-10 text-left max-w-3xl mx-auto">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Address</h2>
              <p>{hotel.address}</p>

              <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
              <p>{hotel.contact}</p>

              <h2 className="text-2xl font-semibold mt-6 mb-2">
                Check-In / Check-Out
              </h2>
              <p>
                Check-in: <span className="font-medium">{hotel.checkIn}</span>
              </p>
              <p>
                Check-out: <span className="font-medium">{hotel.checkOut}</span>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
              <ul className="list-disc list-inside space-y-1">
                {hotel.amenities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto text-left">
            <h2 className="text-3xl font-semibold mb-4">Reviews</h2>

            <form
              onSubmit={handleSubmit}
              className="mb-8 bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Add a Review</h3>

              <label className="block mb-2 font-medium" htmlFor="userName">
                Your Name
              </label>
              <input
                id="userName"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
                disabled={loading}
              />

              <label className="block mb-2 font-medium" htmlFor="rating">
                Rating
              </label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={loading}
              >
                {[5, 4, 3, 2, 1].map((val) => (
                  <option key={val} value={val}>
                    {val} Star{val > 1 ? "s" : ""}
                  </option>
                ))}
              </select>

              <label className="block mb-2 font-medium" htmlFor="comment">
                Comment
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Write your review"
                required
                disabled={loading}
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300 transition"
              >
                {loading ? "Submitting..." : "Submit Review"}
              </button>

              {errorMsg && (
                <p className="text-red-600 mt-3 font-medium">{errorMsg}</p>
              )}
            </form>

            {reviews.length === 0 ? (
              <p className="text-gray-600">
                No reviews yet. Be the first to review!
              </p>
            ) : (
              <ul className="space-y-6">
                {reviews.map((review, i) => (
                  <li
                    key={i}
                    className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm"
                  >
                    <p className="font-semibold text-lg">{review.user}</p>
                    <p className="text-yellow-500 mb-2">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </p>
                    <p className="text-gray-700">{review.comment}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/hotels"
              className="text-blue-600 hover:underline font-semibold"
            >
              &larr; Back to Hotels List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
