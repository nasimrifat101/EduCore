import { FiUserPlus, FiSettings, FiDatabase, FiBarChart2, FiCheckCircle } from "react-icons/fi";

const steps = [
  {
    icon: <FiUserPlus size={26} />,
    title: "Institution Registration",
    desc: "Register your school, college, or institute on EduCore within minutes.",
  },
  {
    icon: <FiSettings size={26} />,
    title: "System Setup",
    desc: "Set classes, sections, subjects, fees, roles, and permissions easily.",
  },
  {
    icon: <FiDatabase size={26} />,
    title: "Student & Staff Data Entry",
    desc: "Upload students, teachers, staff, guardians and assign roles instantly.",
  },
  {
    icon: <FiBarChart2 size={26} />,
    title: "Daily Operations",
    desc: "Manage attendance, fees, exams, SMS, payroll, notices & reports seamlessly.",
  },
  {
    icon: <FiCheckCircle size={26} />,
    title: "Smart Automation & Insights",
    desc: "Auto reports, real-time dashboards & data-driven decisions for management.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-primary text-primary relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-logo mb-4">
            How EduCore Works
          </h2>
          <p className="text-green-200 max-w-2xl mx-auto">
            From setup to full automation — EduCore transforms your institution step by step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-green-800 opacity-40"></div>

          <div className="space-y-20">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center gap-10 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Card */}
                <div className="bg-[#020c20] rounded-3xl p-8 shadow-xl backdrop-blur-xl md:w-[45%] hover:scale-105 transition">
                  <div className="flex items-center gap-4 mb-4 text-logo">
                    {step.icon}
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-green-200 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-logo text-black font-bold text-lg z-10">
                  {idx + 1}
                </div>

                {/* Spacer */}
                <div className="md:w-[45%] hidden md:block"></div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
