import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-7xl font-bold text-gray-900">404</h1>
      <p className="text-lg text-gray-500 mt-4 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block px-7 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}