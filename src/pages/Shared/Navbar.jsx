import { NavLink } from "react-router-dom";

const Navbar = () => {
 

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-3xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl backdrop-blur-xl shadow-lg px-8 py-4">
          <h1 className="text-2xl font-bold text-primary">EduCore</h1>

         
          <button className="border text-primary px-6 py-2 rounded-xl font-semibold hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
