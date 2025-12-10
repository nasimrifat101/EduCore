import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Dr. Mahmud Hasan",
    role: "Principal, Sunrise College",
    msg: "EduCore reduced our office workload by more than 70%. Fee collection & attendance are now fully automatic.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Tahmina Akter",
    role: "Admin, Green Valley School",
    msg: "From admit cards to exam results—everything is now one click away. EduCore saved us huge time.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Shahidul Islam",
    role: "Accounts Manager, City College",
    msg: "Salary, dues, online payments—all perfectly managed without accounting headaches.",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Rezaul Karim",
    role: "Vice Principal, Ideal Academy",
    msg: "Attendance, SMS, smart bell—everything works together beautifully. Parents are very happy.",
    img: "https://randomuser.me/api/portraits/men/61.jpg",
  },
  {
    name: "Nusrat Jahan",
    role: "Office Head, Horizon School",
    msg: "Online fee payment alone saved us thousands of hours every year.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-primary text-primary overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-logo text-center mb-14">
          Trusted by Educational Institutions
        </h2>

        {/* Marquee */}
        <Marquee speed={40} pauseOnHover={true} gradient={false}>
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="mx-6 max-w-[340px] bg-[#020c20] p-8 rounded-3xl backdrop-blur-xl shadow-xl"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-logo"
                />
                <div>
                  <h4 className="text-logo font-semibold leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-primary text-xs">{item.role}</p>
                </div>
              </div>

              {/* Message */}
              <p className="text-green-200 text-sm opacity-90 leading-relaxed">
                “{item.msg}”
              </p>
            </div>
          ))}
        </Marquee>

      </div>
    </section>
  );
};

export default Testimonials;
