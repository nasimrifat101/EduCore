const plans = [
  {
    name: "Basic",
    price: "৳2,499 / month",
    features: ["Student Management", "Attendance", "Fee Collection", "Exam Results"],
  },
  {
    name: "Professional",
    price: "৳4,999 / month",
    features: ["Everything in Basic", "Online Payments", "SMS System", "Staff Salary"],
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    features: ["Unlimited Access", "RFID System", "Smart Bell", "Dedicated Support"],
  },
];

const Pricing = () => {
  return (
    <section className="py-24 bg-primary text-primary bg-linear-to-b from-[#050C15] to-[#001938]">
      <div className="max-w-screen-2xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-logo mb-4">
          Simple & Transparent Pricing
        </h2>
        <p className="text-green-200 mb-14">
          Choose the best plan for your institution size.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-[#020c20] p-10 rounded-3xl shadow-xl hover:scale-105 transition backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-logo text-3xl font-extrabold mb-6">{plan.price}</p>

              <ul className="space-y-3 text-green-200 text-sm mb-8">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <button className="w-full bg-logo text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
