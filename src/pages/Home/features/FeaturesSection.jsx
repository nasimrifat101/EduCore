import {
  FiLogIn,
  FiCalendar,
  FiDollarSign,
  FiCreditCard,
  FiUserPlus,
  FiClipboard,
  FiMessageSquare,
  FiUsers,
  FiAward,
  FiTag,
  FiPrinter,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const features = [
  { icon: <FiLogIn size={30} />, title: "Login", desc: "Secure access for admins, teachers & staff." },
  { icon: <FiCalendar size={30} />, title: "Attendance", desc: "Track student & staff attendance easily." },
  { icon: <FiDollarSign size={30} />, title: "Fee Collection", desc: "Manage tuition & other institutional fees." },
  { icon: <FiCreditCard size={30} />, title: "Online Fee Payment", desc: "Students can pay fees digitally." },
  { icon: <FiDollarSign size={30} />, title: "Advance Collection", desc: "Manage advance payments efficiently." },
  { icon: <FiUserPlus size={30} />, title: "Job Circular Posting", desc: "Post recruitment notices online." },
  { icon: <FiClipboard size={30} />, title: "News & Events", desc: "Publish notices to your website." },
  { icon: <FiMessageSquare size={30} />, title: "Excel SMS", desc: "Send bulk SMS from Excel sheets." },
  { icon: <FiMessageSquare size={30} />, title: "Roll Wise SMS", desc: "Send SMS based on student roll." },
  { icon: <FiUsers size={30} />, title: "Teacher Appointment", desc: "Manage teacher recruitment records." },
  { icon: <FiAward size={30} />, title: "Exam Mark Entry", desc: "Enter exam marks from mobile & PC." },
  { icon: <FiTag size={30} />, title: "Subject & Marks Edit", desc: "Modify subjects & marks securely." },
  { icon: <FiPrinter size={30} />, title: "Admit Card", desc: "Generate printable admit cards." },
  { icon: <FiPrinter size={30} />, title: "Due Fee Printing", desc: "Print class-wise due fee lists." },
  { icon: <FiMessageSquare size={30} />, title: "Due SMS Sending", desc: "Notify due fees via SMS." },
  { icon: <FiUserPlus size={30} />, title: "RFID Entry", desc: "RFID based teacher entry system." },
  { icon: <FiClock size={30} />, title: "Staff Attendance", desc: "Monitor all staff attendance." },
  { icon: <FiClock size={30} />, title: "Personal Attendance", desc: "Employees track their attendance." },
  { icon: <FiDollarSign size={30} />, title: "Staff Salary", desc: "Automated salary calculation & reports." },

  // ✅ NEW FEATURE
  { icon: <FiCheckCircle size={30} />, title: "Exam Result Processing", desc: "Automatically generate & publish student results." },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-primary text-primary bg-linear-to-b from-[#001938] to-[#050C15]">
      <div className="max-w-screen-2xl mx-auto px-6">

        {/* ✅ SECTION HEADING */}
        <h2 className="text-4xl font-bold mb-12 text-center text-logo">
          What EduCore Can Manage
        </h2>

        {/* ✅ FEATURE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#020c20] backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition transform shadow-lg"
            >
              <div className="text-logo mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-green-200 opacity-80">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
