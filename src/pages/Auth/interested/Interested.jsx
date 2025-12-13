import {
  FiUser,
  FiBriefcase,
  FiMail,
  FiPhone,
  FiHome,
  FiUsers,
  FiArrowLeft,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Interested = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Demo Request Data:", data);
    // TODO: send to backend / email / CRM
  };

  return (
    <section className="min-h-screen bg-linear-to-b from-[#050C15] to-[#001938] px-6 py-20 text-primary">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-logo mb-4">
            Request a Demo
          </h1>
          <p className="text-green-200">
            Tell us about your institution. Our team will contact you shortly.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#020c20]/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="text-sm mb-2 block">Your Full Name</label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="e.g. Md. Rahman"
                  className={`w-full bg-transparent border rounded-xl py-3 pl-12 pr-4 outline-none transition
                    ${errors.name ? "border-red-500" : "border-white/10 focus:border-logo"}`}
                />
              </div>
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Role */}
            <div>
              <label className="text-sm mb-2 block">Your Role</label>
              <div className="relative">
                <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <select
                  {...register("role", { required: "Role is required" })}
                  className={`w-full bg-transparent border rounded-xl py-3 pl-12 pr-4 outline-none transition
                    ${errors.role ? "border-red-500" : "border-white/10 focus:border-logo"}`}
                >
                  <option className="bg-[#020c20]" value="">Select Role</option>
                  <option className="bg-[#020c20]">Principal</option>
                  <option className="bg-[#020c20]">Vice Principal</option>
                  <option className="bg-[#020c20]">Administrator</option>
                  <option className="bg-[#020c20]">Accounts Officer</option>
                  <option className="bg-[#020c20]">IT Officer</option>
                  <option className="bg-[#020c20]">Owner / Chairman</option>
                </select>
              </div>
              {errors.role && (
                <p className="text-red-400 text-xs mt-1">{errors.role.message}</p>
              )}
            </div>

            {/* Institute Name */}
            <div>
              <label className="text-sm mb-2 block">Institute Name</label>
              <div className="relative">
                <FiHome className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  {...register("instituteName", {
                    required: "Institute name is required",
                  })}
                  placeholder="e.g. Sunrise College"
                  className={`w-full bg-transparent border rounded-xl py-3 pl-12 pr-4 outline-none transition
                    ${errors.instituteName ? "border-red-500" : "border-white/10 focus:border-logo"}`}
                />
              </div>
              {errors.instituteName && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.instituteName.message}
                </p>
              )}
            </div>

            {/* Institute Type */}
            <div>
              <label className="text-sm mb-2 block">Institute Type</label>
              <select
                {...register("instituteType", {
                  required: "Institute type is required",
                })}
                className={`w-full bg-transparent border rounded-xl py-3 px-4 outline-none transition
                  ${errors.instituteType ? "border-red-500" : "border-white/10 focus:border-logo"}`}
              >
                <option className="bg-[#020c20]" value="">Select Type</option>
                <option className="bg-[#020c20]">School</option>
                <option className="bg-[#020c20]">College</option>
                <option className="bg-[#020c20]">Madrasa</option>
                <option className="bg-[#020c20]">Coaching Center</option>
                <option className="bg-[#020c20]">University</option>
              </select>
              {errors.instituteType && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.instituteType.message}
                </p>
              )}
            </div>

            {/* Total Students */}
            <div>
              <label className="text-sm mb-2 block">Total Students</label>
              <div className="relative">
                <FiUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  type="number"
                  {...register("totalStudents", {
                    required: "Total students required",
                    min: { value: 1, message: "Must be at least 1" },
                  })}
                  placeholder="e.g. 1200"
                  className={`w-full bg-transparent border rounded-xl py-3 pl-12 pr-4 outline-none transition
                    ${errors.totalStudents ? "border-red-500" : "border-white/10 focus:border-logo"}`}
                />
              </div>
              {errors.totalStudents && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.totalStudents.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="text-sm mb-2 block">Email Address</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email",
                    },
                  })}
                  placeholder="contact@school.com"
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

            {/* Phone */}
            <div>
              <label className="text-sm mb-2 block">Phone Number</label>
              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  {...register("phone", {
                    required: "Phone number required",
                  })}
                  placeholder="+880 1XXXXXXXXX"
                  className={`w-full bg-transparent border rounded-xl py-3 pl-12 pr-4 outline-none transition
                    ${errors.phone ? "border-red-500" : "border-white/10 focus:border-logo"}`}
                />
              </div>
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 bg-logo text-white py-3 rounded-xl font-semibold hover:scale-105 transition disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Request Demo"}
            </button>
          </form>
        </div>

        {/* Back Home */}
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

export default Interested;
