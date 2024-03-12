// import { useState } from "react";
import Logo from "@/assets/Images/Logo.png";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button"; 
import { useSelector,useDispatch} from "react-redux";
import { selectIsAuthenticated,logout } from "@/app/slices/authSlice";
import {toast} from 'react-toastify'

const Navbar  = () => {
 
  const navigate = useNavigate()
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const dispatch= useDispatch()
  
  console.log(isAuthenticated)
  return (
    <nav className="flex fixed top-0 bg-white shadow-md p-5 px-18 max-h-[%60] overflow-hidden w-full justify-between items-center">
      <div onClick={()=> navigate("/")} className="h-full">
        <img className="h-[60px]" src={Logo} alt="" />
      </div>
      <div className="flex gap-12 font-semibold ">
        <p onClick={()=> navigate("/about")}>About</p>
        <p onClick={()=> navigate("/testimonial")}>Testimonial</p>
        <p onClick={()=> navigate("/contact")}>Contact</p>
        <p onClick={()=> navigate("/work")}>Our Work</p>
      </div>
      
      <div className="flex gap-6 pr-3">
      {
        !isAuthenticated?
        <>
         <Button onClick={()=> navigate("/Login")} className="bg-orange-500 hover:bg-orange-300 ">Login</Button>
         <Button onClick={()=> navigate("/Signup")} className="" variant={"outline"}>Signup</Button>
        </>
        :
        <> 
        <div> Profile</div>
        <button onClick={()=> {
          dispatch(logout())
          toast.success("Logged out Successfully!")
          }}> logout </button>
        
        </>
      }
      </div>
    </nav>
  );
};

export default Navbar;