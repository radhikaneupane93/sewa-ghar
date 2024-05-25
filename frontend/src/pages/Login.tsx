import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import BannerBackground from "@/assets/Images/home-banner-background.png";
import { useDispatch } from "react-redux";
import { setInitialCredentials } from "@/app/slices/authSlice";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormdata] = useState({ email: "", password: "" });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const fetchData = (token: string) => {
    try {
      axios
        .get("http://127.0.0.1:8000/users/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const userData = response.data;
          dispatch(
            setInitialCredentials({
              id: userData.id,
              name: userData.name,
              email: userData.email,
              role: userData.role,
              phonenumber: userData.phonenumber,
              address: userData.address,
              token: token,
              isAuthenticated: true,
            })
          );
          toast.success("Login successful!");

          // Conditional navigation based on role
          if (userData.role === "DONOR") {
            navigate("/");
          } else {
            navigate("/all-donations");
          }
        })
        .catch((err) => {
          toast.error("Something went wrong");
        });
    } catch (error) {
      toast.error("Failed to fetch user data");
    }
  };

  const onSubmit = () => {
    try {
      axios
        .post("http://127.0.0.1:8000/users/api/login/", formdata)
        .then((res: any) => {
          console.log(res.data);
          fetchData(res.data.access);
        })
        .catch((_err) => {
          toast.error(_err.response.data.message);
        });
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Something went wrong with login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="absolute top-0 right-0 w-1/5 aspect-square">
        <img
          src={BannerBackground}
          alt="background"
          className="h-inherit w-inherit"
        />
      </div>
      <div className="absolute bottom-0 left-0 rotate-180 w-1/5 aspect-square">
        <img
          src={BannerBackground}
          alt="background"
          className="h-inherit w-inherit"
        />
      </div>
      <h2 className="text-3xl font-semibold mb-4">Login</h2>
      <div className="w-full max-w-xs">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formdata.email}
          onChange={onChangeHandler}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <div className="flex flex-col gap-2">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formdata.password}
            onChange={onChangeHandler}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                id="company"
                className="border-neutral-600"
                checked={showPassword}
                onClick={() => setShowPassword(!showPassword)}
              />
              <label
                htmlFor="company"
                className="text-sm text-neutral-600 font-satoshimd leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Show Password
              </label>
            </div>
            <Button
              variant={"link"}
              onClick={() => navigate("/ForgotPassword")}
            >
              <span className="text-neutral-600">Forgot Password?</span>
            </Button>
          </div>
        </div>

        <button
          onClick={onSubmit}
          className="block w-full bg-orange-500 text-white py-2 rounded-md mb-4"
        >
          Login
        </button>

        <p className="text-sm text-gray-600 p-5">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/Signup")}
            className="text-orange-500"
          >
            Register here
          </button>
        </p>
      </div>
      <button onClick={() => navigate("/")} className="absolute top-4 left-4">
        {" "}
        <ArrowCircleLeftIcon className="text-orange-500 w-8 h-8" />{" "}
      </button>
    </div>
  );
};

export default Login;
