import {
  FiUser,
  FiLock,
  FiLogIn,
  FiEye,
  FiEyeOff,
  FiArrowLeft,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext/AuthContext";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { identifier, password } = data;

    try {
      await login(identifier, password);
      navigate("/dashboard");
    } catch (e) {
      alert("Invalid credentials", e.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#050C15] to-[#001938] px-6 text-primary">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-xl bg-[#020c20]/80 rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-logo mb-2">EduCore</h1>
            <p className="text-green-200 text-sm">
              Login to manage your institution
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Identifier */}
            <div>
              <label className="block text-sm mb-2">
                Email / Phone / Username
              </label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  type="text"
                  placeholder="Email / Phone / Username"
                  {...register("identifier", {
                    required: "Identifier is required",
                    minLength: {
                      value: 3,
                      message: "Too short",
                    },
                  })}
                  className={`w-full bg-transparent border rounded-xl py-3 pl-12 pr-12 outline-none transition ${
                    errors.identifier
                      ? "border-red-500"
                      : "border-white/10 focus:border-logo"
                  }`}
                />
              </div>
              {errors.identifier && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.identifier.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-2">Password</label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 4,
                      message: "Minimum 4 characters",
                    },
                  })}
                  className={`w-full bg-transparent border rounded-xl py-3 pl-12 pr-12 outline-none transition ${
                    errors.password
                      ? "border-red-500"
                      : "border-white/10 focus:border-logo"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-green-300 hover:text-logo transition"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-logo text-white py-3 rounded-xl font-semibold hover:scale-105 transition disabled:opacity-60"
            >
              <FiLogIn />
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-sm text-green-200 mt-8">
            Don’t have an account?{" "}
            <Link to="/interested" className="text-logo hover:underline">
              Request Demo
            </Link>
          </p>
        </div>

        <div className="flex justify-center items-center mt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-green-200 hover:text-logo transition"
          >
            <FiArrowLeft />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
