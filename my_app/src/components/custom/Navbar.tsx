import { useState } from "react";
import Logo from "@/assets/Images/Logo.png";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthenticated, logout } from "@/app/slices/authSlice";
import { toast } from "react-toastify";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="flex fixed top-0 bg-white shadow-md p-5 px-18 max-h-[%60] overflow-hidden w-full justify-between items-center">
      <div onClick={() => navigate("/")} className="h-full">
        <img className="h-[60px]" src={Logo} alt="" />
      </div>
      <div className="flex gap-12 font-semibold ">
        <p onClick={() => navigate("/about")}>About</p>
        <p onClick={() => navigate("/testimonial")}>Testimonial</p>
        <p onClick={() => navigate("/contact")}>Contact</p>
        <p onClick={() => navigate("/work")}>Our Work</p>
      </div>

      <div className="flex gap-6 pr-3">
        {!isAuthenticated ? (
          <>
            <Button
              onClick={() => navigate("/Login")}
              className="bg-orange-500 hover:bg-orange-300 "
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/Signup")}
              className=""
              variant={"outline"}
            >
              Signup
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={handleClick}
              className="bg-white hover:bg-orange-100"
            >
              <AccountCircleIcon
                className="text-orange-500"
                style={{ fontSize: "2.25rem", marginTop: "2px" }}
              />
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/myprofile");
                }}
              >
                My Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/rewards");
                }}
              >
                Rewards
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  navigate("/volunteering");
                }}
              >
                Volunteering
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  dispatch(logout());
                  toast.success("Logged out Successfully!");
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
