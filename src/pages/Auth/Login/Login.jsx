import { FiMail, FiLock, FiLogIn, FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // TODO: call login API here
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#050C15] to-[#001938] px-6 text-primary">
      <div className="w-full max-w-md">
        <div className="backdrop-blur-xl bg-[#020c20]/80 rounded-3xl shadow-2xl p-10">

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-logo mb-2">
              EduCore
            </h1>
            <p className="text-green-200 text-sm">
              Login to manage your institution
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Email */}
            <div>
              <label className="block text-sm mb-2">Email</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  type="email"
                  placeholder="admin@educore.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className={`w-full bg-transparent border rounded-xl py-3 pl-12 pr-4 outline-none transition
                    ${errors.email ? "border-red-500" : "border-white/10 focus:border-logo"}`}
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message}
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
                      value: 6,
                      message: "Minimum 6 characters",
                    },
                  })}
                  className={`w-full bg-transparent border rounded-xl py-3 pl-12 pr-12 outline-none transition
                    ${errors.password ? "border-red-500" : "border-white/10 focus:border-logo"}`}
                />

                {/* Eye Toggle */}
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

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("remember")}
                  className="accent-logo"
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-logo hover:underline">
                Forgot password?
              </Link>
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
