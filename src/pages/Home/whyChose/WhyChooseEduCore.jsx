import { FiShield, FiTrendingUp, FiSmartphone, FiCloud, FiClock, FiFileText } from "react-icons/fi";

const benefits = [
  {
    icon: <FiTrendingUp size={32} />,
    title: "Boosts Productivity",
    desc: "Automates daily tasks like attendance, fees, exams, and reports to save valuable time.",
  },
  {
    icon: <FiFileText size={32} />,
    title: "Paperless Management",
    desc: "Eliminate manual registers and files with 100% digital records.",
  },
  {
    icon: <FiClock size={32} />,
    title: "Real-Time Reporting",
    desc: "Instant access to attendance, payments, salaries, and exam results anytime.",
  },
  {
    icon: <FiSmartphone size={32} />,
    title: "Works on Any Device",
    desc: "Fully responsive on mobile, tablet, and desktop without extra software.",
  },
  {
    icon: <FiCloud size={32} />,
    title: "Cloud Based System",
    desc: "Access your institute data securely from anywhere in the world.",
  },
  {
    icon: <FiShield size={32} />,
    title: "High Level Security",
    desc: "Advanced protection for student data, staff records, and financial information.",
  },
];

const WhyChooseEduCore = () => {
  return (
    <section className="py-20 bg-primary bg-linear-to-b from-[#050C15] to-[#001938] text-primary">
      <div className="max-w-screen-2xl mx-auto px-6">

        {/* ✅ SECTION HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-logo mb-4">
            Why Choose EduCore
          </h2>
          <p className="text-green-200 max-w-2xl mx-auto">
            EduCore is built to simplify education management with automation, security,
            and smart digital solutions designed for modern institutions.
          </p>
        </div>

        {/* ✅ BENEFITS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-[#020c20] rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition transform backdrop-blur-lg"
            >
              <div className="text-logo mb-5 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-green-200 opacity-80 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseEduCore;
