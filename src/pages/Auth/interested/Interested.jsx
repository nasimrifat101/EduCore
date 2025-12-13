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

const Interested = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#050C15] to-[#001938] px-6 py-20 text-primary">
      <div className="max-w-screen-md mx-auto">
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
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="text-sm mb-2 block">Your Full Name</label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Md. Rahman"
                  className="w-full bg-transparent border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-logo transition"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="text-sm mb-2 block">Your Role</label>
              <div className="relative">
                <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <select
                  required
                  className="w-full bg-transparent border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-logo transition"
                >
                  <option className="bg-[#020c20]">Principal</option>
                  <option className="bg-[#020c20]">Vice Principal</option>
                  <option className="bg-[#020c20]">Administrator</option>
                  <option className="bg-[#020c20]">Accounts Officer</option>
                  <option className="bg-[#020c20]">IT Officer</option>
                  <option className="bg-[#020c20]">Owner / Chairman</option>
                </select>
              </div>
            </div>

            {/* Institute Name */}
            <div>
              <label className="text-sm mb-2 block">Institute Name</label>
              <div className="relative">
                <FiHome className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Sunrise College"
                  className="w-full bg-transparent border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-logo transition"
                />
              </div>
            </div>

            {/* Institute Type */}
            <div>
              <label className="text-sm mb-2 block">Institute Type</label>
              <select
                required
                className="w-full bg-transparent border border-white/10 rounded-xl py-3 px-4 outline-none focus:border-logo transition"
              >
                <option className="bg-[#020c20]">School</option>
                <option className="bg-[#020c20]">College</option>
                <option className="bg-[#020c20]">Madrasa</option>
                <option className="bg-[#020c20]">Coaching Center</option>
                <option className="bg-[#020c20]">University</option>
              </select>
            </div>

            {/* Total Students */}
            <div>
              <label className="text-sm mb-2 block">Total Students</label>
              <div className="relative">
                <FiUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  type="number"
                  required
                  placeholder="e.g. 1200"
                  className="w-full bg-transparent border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-logo transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm mb-2 block">Email Address</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  type="email"
                  required
                  placeholder="contact@school.com"
                  className="w-full bg-transparent border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-logo transition"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm mb-2 block">Phone Number</label>
              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-green-300" />
                <input
                  type="tel"
                  required
                  placeholder="+880 1XXXXXXXXX"
                  className="w-full bg-transparent border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-logo transition"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-6 bg-logo text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Request Demo
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center mt-5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-6 text-green-200 hover:text-logo transition"
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
