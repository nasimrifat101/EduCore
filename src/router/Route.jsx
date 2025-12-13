import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/home/Home";
import AuthLayout from "../layout/AuthLayout";
import NotFound from "../pages/notFound/NotFound";
import Login from "../pages/Auth/Login/Login";
import Interested from "../pages/Auth/interested/Interested";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
        {
            index: true,
            element: <Home />,
        }
    ]
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/interested',
        element: <Interested/>
      }
    ]
  }
]);
