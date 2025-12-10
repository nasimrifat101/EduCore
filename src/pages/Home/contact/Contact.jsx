import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="min-h-screen bg-primary text-primary py-24">
      <div className="max-w-screen-2xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-logo mb-4">
            Contact Us & Request a Demo
          </h2>
          <p className="text-green-200 max-w-xl mx-auto">
            Have questions? Want a live demo of EduCore? Send us a message and our team will contact you shortly.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* LEFT INFO PANEL */}
          <div className="bg-[#020c20] rounded-3xl p-10 backdrop-blur-xl shadow-xl flex flex-col justify-between">

            <div>
              <h3 className="text-2xl font-bold text-logo mb-6">
                Get In Touch
              </h3>

              <p className="text-green-200 mb-10 leading-relaxed">
                EduCore helps institutions automate everything from attendance,
                fees, exams, SMS, salary, and accounts. We’re ready to guide your institution into smart digital management.
              </p>

              {/* Contact Info */}
              <div className="space-y-6 text-green-200">
                <div className="flex items-center gap-4">
                  <FiMail className="text-logo text-xl" />
                  <span>support@educore.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <FiPhone className="text-logo text-xl" />
                  <span>+880 1XXX-XXXXXX</span>
                </div>

                <div className="flex items-center gap-4">
                  <FiMapPin className="text-logo text-xl" />
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Footer Tag */}
            <div className="mt-12 text-sm text-green-200 opacity-70">
              Office hours: 10:00 AM – 7:00 PM (Sunday – Thursday)
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#020c20] rounded-3xl p-10 backdrop-blur-xl shadow-xl">

            <h3 className="text-2xl font-bold text-logo mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">

              <div>
                <label className="block mb-1 text-sm">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent border border-green-700 px-4 py-3 rounded-xl focus:outline-none focus:border-logo"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Institution Name</label>
                <input
                  type="text"
                  placeholder="College / School Name"
                  className="w-full bg-transparent border border-green-700 px-4 py-3 rounded-xl focus:outline-none focus:border-logo"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Email</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full bg-transparent border border-green-700 px-4 py-3 rounded-xl focus:outline-none focus:border-logo"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Phone</label>
                <input
                  type="tel"
                  placeholder="+880..."
                  className="w-full bg-transparent border border-green-700 px-4 py-3 rounded-xl focus:outline-none focus:border-logo"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us what you need..."
                  className="w-full bg-transparent border border-green-700 px-4 py-3 rounded-xl focus:outline-none focus:border-logo"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-logo text-black py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                <FiSend />
                Send Message
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
