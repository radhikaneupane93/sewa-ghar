import { createBrowserRouter } from "react-router-dom"
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
    Blog,
    BlogDetail,
    
    
} from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path:"/Contact",
                element: <Contact/>
            },
            {
                path:"/About",
                element:<About />
            },
            {
                path:"/Testimonial",
                element:<Testimonial />
            },
            {
                path:"/Work",
                element:<Work />
            },
            {
                path:"/Donation",
                element:<Donation />
            },
            {
                path:"/Leaderboard",
                element:<Leaderboard />
            },
            {
                path:"/Reward",
                element:<Reward />
            },
            {
                path:"/Volunteering",
                element:<Volunteering />
            },
            {
                path:"/Profile",
                element:<Profile />
            },
            {
                path:"/Blog",
                element:<Blog />
            },
            {
                path:"/BlogDetail",
                element:<BlogDetail />
            },
            
        ]
    },
    {
        path:"/Login",
        element:<Login/>
    },
    {
        path:"/Signup",
        element:<Signup/>
    },
    
    {
        
    }
])

export default router;