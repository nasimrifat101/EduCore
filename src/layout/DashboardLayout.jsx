import React, { useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";

const DashboardLayout = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();           // just clears the user
    navigate("/login"); // navigate after logout
  };

  return (
    <div className="min-h-screen flex bg-[#050C15] text-primary">
      {/* Sidebar */}
      <aside className="w-64 bg-[#020c20]/80 backdrop-blur-xl p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-logo mb-6">EduCore</h1>
        <nav className="flex flex-col gap-4 mt-4">
          <Link to="/dashboard" className="hover:text-logo transition">Dashboard Home</Link>
          <Link to="/dashboard/students" className="hover:text-logo transition">Students</Link>
          <Link to="/dashboard/exams" className="hover:text-logo transition">Exams</Link>
          <Link to="/dashboard/fees" className="hover:text-logo transition">Fees</Link>
        </nav>

        {/* Superadmin school switch */}
        {user?.role === "superadmin" && (
          <div className="mt-auto">
            <p className="text-green-200 mb-2">Switch School:</p>
            <select className="w-full bg-transparent border border-white/10 rounded-xl p-2 focus:border-logo">
              <option>Sunrise College</option>
              <option>Green Valley School</option>
              <option>City College</option>
            </select>
          </div>
        )}

        <button
          onClick={handleLogout} // ✅ navigate here
          className="mt-6 w-full bg-logo text-white py-2 rounded-xl hover:scale-105 transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
