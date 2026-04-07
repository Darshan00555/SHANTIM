import animationData from '../assets/404-animation.json';

import React from 'react';
import { Link } from 'react-router-dom';

import Lottie from 'lottie-react';

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 px-4">
      <div className="w-full max-w-2xl text-center">
        <div className="mb-8">
          <Lottie animationData={animationData} loop={true} className="mx-auto w-full max-w-xl" />
        </div>

        <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-300">Page Not Found</h2>
        <p className="mx-auto mb-8 max-w-md text-gray-400">
          Oops! The page you're looking for seems to have drifted into space. Let's get you back on
          track.
        </p>

        <Link
          to="/"
          className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-slate-900 transition-colors duration-200 hover:bg-gray-100"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
