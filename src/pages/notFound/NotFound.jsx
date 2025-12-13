import { Link } from "react-router-dom";
import { FiAlertTriangle, FiHome } from "react-icons/fi";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#050C15] to-[#001938] text-primary px-6">
      <div className="text-center max-w-xl">
        {/* Icon */}
        <div className="flex justify-center mb-6 text-logo">
          <FiAlertTriangle size={80} />
        </div>

        {/* 404 Text */}
        <h1 className="text-7xl md:text-8xl font-extrabold mb-4 hover-stroke">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Page Not Found
        </h2>

        <p className="text-green-200 mb-10">
          The page you’re looking for doesn’t exist or may have been moved.
          Don’t worry — let’s get you back on track.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-logo text-white font-semibold hover:scale-105 transition"
        >
          <FiHome />
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
