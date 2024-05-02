import { createBrowserRouter } from "react-router-dom";
import NavLayout from "@/layout/NavLayout";

import {
  Home,
  Contact,
  About,
  Testimonial,
  Work,
  Login,
  Signup,
  Donation,
  Leaderboard,
  Reward,
  Volunteering,
  Profile,
  ClothLocationsPage,
  AllDonations,
  Blog,
  BlogDetail,
  DataChart,
  RequestForm,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Testimonial",
        element: <Testimonial />,
      },
      {
        path: "/Work",
        element: <Work />,
      },
      {
        path: "/Donation",
        element: <Donation />,
      },
      {
        path: "/donate/:clothBankId/:clothBankTitle",
        element: <Donation />,
      },
      {
        path: "/Leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/Reward",
        element: <Reward />,
      },
      {
        path: "/Volunteering",
        element: <Volunteering />,
      },
      {
        path: "/RequestForm",
        element: <RequestForm />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetail />,
      },
      {
        path: "/ClothLocations",
        element: <ClothLocationsPage />,
      },
      {
        path: "/all-donations",
        element: <AllDonations />,
      },
      {
        path: "/DataChart",
        element: < DataChart />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  {},
]);

export default router;
