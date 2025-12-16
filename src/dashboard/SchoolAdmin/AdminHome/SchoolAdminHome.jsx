import React, { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DD0"];

const SchoolAdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [finances, setFinances] = useState({
    todayIncome: [],
    todayExpenses: []
  });

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetch("/inst.json")
      .then(res => res.json())
      .then(data => {
        setStudents(data.students || []);
        setClasses(data.classes || []);
        setTeachers(data.teachers || []);
        // Make sure todayIncome and todayExpenses are arrays
        setFinances({
          todayIncome: Array.isArray(data.finances.todayIncome)
            ? data.finances.todayIncome
            : [{ id: 1, source: "General Income", amount: data.finances.todayIncome || 0 }],
          todayExpenses: Array.isArray(data.finances.todayExpenses)
            ? data.finances.todayExpenses
            : [{ id: 1, purpose: "General Expense", amount: data.finances.todayExpenses || 0 }]
        });
      });
  }, []);

  // Attendance
  const presentToday = students.filter(s => s.attendance.includes(today)).length;
  const absentToday = students.length - presentToday;

  // Inactive students (no attendance in last 7 days)
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  const inactiveStudents = students.filter(s => new Date(s.lastActive) < sevenDaysAgo);

  // Class-wise attendance for bar chart
  const classAttendance = classes.map(cls => {
    const count = students.filter(s => s.classId === cls.id && s.attendance.includes(today)).length;
    return { name: cls.name, Present: count };
  });

  // Fees Pie Chart
  const feesData = [
    { name: "Paid", value: students.filter(s => s.feesPaid > 0).length },
    { name: "Pending", value: students.filter(s => s.feesPaid === 0).length },
  ];

  // Finance totals
  const totalIncome = finances.todayIncome.reduce((sum, i) => sum + i.amount, 0);
  const totalExpenses = finances.todayExpenses.reduce((sum, i) => sum + i.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="px-8 bg-[#050C15] text-primary min-h-screen">
      <h1 className="text-3xl font-bold text-logo mb-6">School Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-10">
        <div className="bg-[#020c20]/80 p-6 rounded-xl shadow-lg">
          <p>Total Students</p>
          <h2>{students.length}</h2>
        </div>
        <div className="bg-[#020c20]/80 p-6 rounded-xl shadow-lg">
          <p>Present Today</p>
          <h2>{presentToday}</h2>
        </div>
        <div className="bg-[#020c20]/80 p-6 rounded-xl shadow-lg">
          <p>Absent Today</p>
          <h2>{absentToday}</h2>
        </div>
        <div className="bg-[#020c20]/80 p-6 rounded-xl shadow-lg">
          <p>Total Teachers</p>
          <h2>{teachers.length}</h2>
        </div>
        <div className="bg-[#020c20]/80 p-6 rounded-xl shadow-lg">
          <p>Today's Balance</p>
          <h2 className={balance >= 0 ? "text-green-400" : "text-red-400"}>
            {balance >= 0 ? `Profit: ${balance} ৳` : `Deficit: ${Math.abs(balance)} ৳`}
          </h2>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <div className="bg-[#020c20]/80 p-6 rounded-xl shadow-lg">
          <p>Class-wise Attendance</p>
          <BarChart width={500} height={300} data={classAttendance}>
            <XAxis dataKey="name" stroke="#fff"/>
            <YAxis stroke="#fff"/>
            <Tooltip/>
            <Bar dataKey="Present" fill="#00C49F"/>
          </BarChart>
        </div>
        <div className="bg-[#020c20]/80 p-6 rounded-xl shadow-lg">
          <p>Fees Status</p>
          <PieChart width={400} height={300}>
            <Pie data={feesData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
              {feesData.map((entry,index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Legend/>
            <Tooltip/>
          </PieChart>
        </div>
      </div>

      {/* Today's Finances */}
      <div className="bg-[#020c20]/80 p-6 rounded-xl shadow-lg mb-10">
        <p className="font-semibold mb-4">Today's Finances</p>
        <div className="grid grid-cols-2 gap-6">
          {/* Income */}
          <div>
            <p className="font-semibold text-green-300 mb-2">Income</p>
            <ul className="list-disc pl-5">
              {finances.todayIncome.map(item => (
                <li key={item.id}>{item.source}: {item.amount} ৳</li>
              ))}
            </ul>
            <p className="mt-2 font-bold">Total Income: {totalIncome} ৳</p>
          </div>

          {/* Expenses */}
          <div>
            <p className="font-semibold text-red-300 mb-2">Expenses</p>
            <ul className="list-disc pl-5">
              {finances.todayExpenses.map(item => (
                <li key={item.id}>{item.purpose}: {item.amount} ৳</li>
              ))}
            </ul>
            <p className="mt-2 font-bold">Total Expenses: {totalExpenses} ৳</p>
          </div>
        </div>
      </div>

      <div className="bg-[#020c20]/80 p-6 rounded-xl shadow-lg mb-10">
        <p className={`mt-4 font-bold text-lg ${balance >= 0 ? "text-green-400" : "text-red-400"}`}>
          {balance >= 0 ? `Profit: ${balance} ৳` : `Deficit: ${Math.abs(balance)} ৳`}
        </p>
      </div>

      {/* Inactive Students Table */}
      <div className="bg-[#020c20]/80 p-6 rounded-xl shadow-lg mb-10 overflow-auto">
        <p className="font-semibold mb-4">Inactive Students (Last 7 days)</p>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/20">
              <th className="py-2 px-3">Image</th>
              <th className="py-2 px-3">ID</th>
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Phone</th>
              <th className="py-2 px-3">Last Present</th>
            </tr>
          </thead>
          <tbody>
            {inactiveStudents.map(s => (
              <tr key={s.id} className="border-b border-white/10 hover:bg-[#0a162b] transition">
                <td className="py-2 px-3">
                  <img src={s.avatar || `https://i.pravatar.cc/50?u=${s.id}`} alt={s.name} className="w-10 h-10 rounded-full"/>
                </td>
                <td className="py-2 px-3">{s.id}</td>
                <td className="py-2 px-3">{s.name}</td>
                <td className="py-2 px-3">{s.phone || "N/A"}</td>
                <td className="py-2 px-3">{s.attendance.slice(-1)[0] || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchoolAdminDashboard;
