import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="text-center px-6">
        <h1 className="text-8xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Oops! Page not found
        </h2>
        <p className="text-lg opacity-80 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition duration-300">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;