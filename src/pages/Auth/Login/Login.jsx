import { FiMail, FiLock, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#050C15] to-[#001938] px-6 text-primary">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="backdrop-blur-xl bg-[#020c20]/80 rounded-3xl shadow-2xl p-10 ">
          
          {/* Logo / Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-logo mb-2">
              EduCore
            </h1>
            <p className="text-green-200 text-sm">
              Login to manage your institution
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm mb-2">Email</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  type="email"
                  placeholder="admin@educore.com"
                  className="w-full bg-transparent border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-logo transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-2">Password</label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-logo transition"
                />
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-logo" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-logo hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-logo text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              <FiLogIn />
              Login
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-green-200 mt-8">
            Don’t have an account?{" "}
            <Link to="/interested" className="text-logo hover:underline">
              Request Demo
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
