import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import BannerBackground from "@/assets/Images/home-banner-background.png";
import { useDispatch } from "react-redux";
import { setInitialCredentials } from "@/app/slices/authSlice";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    axios
      .post("http://127.0.0.1:8000/auth/login/", formdata)
      .then((res) => {
        console.log(res);
        toast.success("Logged in Successful");
        dispatch(
          setInitialCredentials({
            email: res.data.email,
            isAuthenticated: true,
          })
        );
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went Wrong");
      });
  };

  const handleGoogleLogin = () => {
    window.location.href =
      "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:5173/auth/google/callback&prompt=consent&response_type=token&client_id=412234909744-1u7pt7qvsr0o6te1cvipjuvor4iiov82.apps.googleusercontent.com&scope=openid%20email%20profile";
  };

  const handleGoogleLoginRedirect = () => {
    if (window.location.search.includes("success=true")) {
      dispatch(
        setInitialCredentials({
          email: "user@example.com",
          isAuthenticated: true,
        })
      );
      navigate("/");
    } else {
      toast.error("Google login failed");
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
        <button
          onClick={handleGoogleLogin}
          className="ml-2 flex items-center bg-gray-100 py-2 px-4 rounded-md mb-4"
        >
          <GoogleIcon />
          <span className="ml-2">Login with Google</span>
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
