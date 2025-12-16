import React, { useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const schoolName = "Sunrise School & College";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-[#050C15] text-primary">
      
      {/* Fixed Sidebar */}
      <aside className="w-64 bg-[#020c20]/80 backdrop-blur-xl p-6 flex flex-col justify-between fixed top-0 left-0 h-full">
        {/* Top Section */}
        <div>
          <h1 className="text-2xl font-bold text-logo mb-6">EduCore</h1>
          <nav className="flex flex-col gap-4">
            <Link to="/dashboard" className="hover:text-logo transition">Dashboard</Link>
            <Link to="/dashboard/students" className="hover:text-logo transition">Students</Link>
            <Link to="/dashboard/exams" className="hover:text-logo transition">Exams</Link>
            <Link to="/dashboard/fees" className="hover:text-logo transition">Fees</Link>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4">
          {user?.role === "schoolAdmin" && (
            <div>
              <p className="text-green-200 mb-2">Switch School:</p>
              <select className="w-full bg-transparent border border-white/10 rounded-xl p-2 focus:border-logo">
                <option>Sunrise College</option>
                <option>Green Valley School</option>
                <option>City College</option>
              </select>
            </div>
          )}

          <button
            onClick={handleLogout}
            className="w-full bg-logo text-white py-2 rounded-xl hover:scale-105 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-64 overflow-hidden">
        {/* Navbar */}
        <div className="flex justify-between items-center bg-[#020c20]/80 p-4 rounded-xl mb-6 shadow-md">
          <h2 className="text-xl font-semibold text-green-300">{schoolName}</h2>
          <div className="flex items-center gap-3">
           <div className="flex flex-col">
             <span className="text-white">{user?.username}</span>
            <p className="text-sm">{user?.role}</p>
           </div>
            <img
              src={user?.avatar}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-logo"
            />
          </div>
        </div>

        {/* Scrollable page content */}
        <div className="flex-1 overflow-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
