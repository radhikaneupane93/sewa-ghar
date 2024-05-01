import { useState } from "react";
import Logo from "@/assets/Images/Logo.png";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthenticated, logout, selectRole } from "@/app/slices/authSlice";
import { toast } from "react-toastify";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const role = useSelector(selectRole);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="flex z-50 fixed top-0 bg-white shadow-md p-5 px-18 max-h-[%60] overflow-hidden w-full justify-between items-center">
      <div onClick={() => navigate("/")} className="h-full cursor-pointer">
        <img className="h-[60px]" src={Logo} alt="" />
      </div>
      <div className="flex gap-12 font-semibold cursor-pointer">
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
                  navigate("/Profile");
                }}
              >
                My Profile
              </MenuItem>

              {role === "DONOR" ? (
                <div>
                  <MenuItem
                    onClick={() => navigate("/Reward")}
                  >
                    Rewards
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/Volunteering");
                    }}
                  >
                    Volunteering
                  </MenuItem>
                </div>
              ):(
                <div>
                <MenuItem
                  onClick={() => navigate("/all-donations")}
                >
                  Donation Requests
                </MenuItem>
              </div>
              )}


              <MenuItem
                onClick={() => {
                  handleClose();
                  dispatch(logout());
                  navigate("/Login")
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
