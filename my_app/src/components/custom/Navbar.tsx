import { useState } from "react";
import Logo from "@/assets/Images/Logo.png";

import { useNavigate } from "react-router-dom";
import {Box, Drawer,List,Divider,ListItem,ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {Home, Info, CommentRounded, PhoneRounded, VolunteerActivism } from "@mui/icons-material";
import { Button } from "../ui/button"; 


const Navbar  = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <Home />,
    },
    {
      text: "About",
      icon: <Info />,
    },
    {
      text: "Testimonials",
      icon: <CommentRounded />,
    },
    {
      text: "Contact",
      icon: <PhoneRounded />,
    },
    {
      text: "Volnteering",
      icon: <VolunteerActivism />,
    },
  ];
  const navigate = useNavigate()
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
      
         <Button onClick={()=> navigate("/Login")} className="bg-orange-500 hover:bg-orange-300 ">Login</Button>
         <Button onClick={()=> navigate("/Signup")} className="" variant={"outline"}>Signup</Button>
      </div>
      {/* <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div> */}
      {/* <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer> */}
    </nav>
  );
};

export default Navbar;