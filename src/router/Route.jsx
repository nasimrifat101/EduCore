import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";

import Home from "../pages/Home/home/Home";
import Login from "../pages/Auth/Login/Login";
import Interested from "../pages/Auth/interested/Interested";
import NotFound from "../pages/notFound/NotFound";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "interested", element: <Interested /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />, // wraps all dashboard pages
    children: [
      { index: true, element: <></> },
      { path: "students", element: <></> },
      { path: "exams", element: <div>Exams Page</div> }, // placeholder
      { path: "fees", element: <div>Fees Page</div> }, // placeholder
    ],
  },
]);
