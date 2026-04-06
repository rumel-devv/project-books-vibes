import React from "react";
import { FaBookOpen, FaHeart } from "react-icons/fa";
import { Link } from "react-router";

const EmptyState = ({ type }) => {
  const isWishlist = type === "wishlist";

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="text-center bg-white shadow-xl rounded-2xl p-8 max-w-md w-full border border-gray-200">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-4 rounded-full">
            {isWishlist ? (
              <FaHeart className="text-pink-500 text-3xl" />
            ) : (
              <FaBookOpen className="text-blue-500 text-3xl" />
            )}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {isWishlist ? "Wishlist is Empty" : "No Books Read Yet"}
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          {isWishlist
            ? "You haven't added any books to your wishlist yet."
            : "You haven't marked any books as read."}
        </p>

        {/* Button */}
        <Link to='/' className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl transition duration-300">
          Browse Books
        </Link>
      </div>
    </div>
  );
};

export default EmptyState;