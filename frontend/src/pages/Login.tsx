import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import BannerBackground from "@/assets/Images/home-banner-background.png";
import { useDispatch } from "react-redux";
import { setInitialCredentials } from "@/app/slices/authSlice";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import CookieHelper from "@/helpers/CookieHelper";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formdata, setFormdata] = useState({ email: "", password: "" });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const fetchData = async (token: string) => {
    try {
      console.log(token);
      const response = await axios.get("http://127.0.0.1:8000/users/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Token from cookie:", response);

      dispatch(
        setInitialCredentials({
          email: response.data.email,
          role: response.data.role,
          token: token,
          isAuthenticated: true,
        })
      );
    } catch (error) {
      toast.error("Failed to fetch user data");
    }
  };

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/users/api/login/",
        formdata
      );
      const token = response.data.access;
      console.log("Login response token:", token);

      CookieHelper.setCookie("token", token, 3);
      await fetchData(token);
      navigate("/");
      toast.success("Logged in Successfully");
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
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formdata.password}
          onChange={onChangeHandler}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
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
