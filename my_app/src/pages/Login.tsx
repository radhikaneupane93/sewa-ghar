import { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import BannerBackground from "@/assets/Images/home-banner-background.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Import the navigate function

  return (
    <div className="flex flex-col items-center justify-center h-screen">
       {/* <div className="justify-end ">
          <img src={BannerBackground} alt="background" className="size-96 ml-96" />
        </div> */}
      <h2 className="text-3xl font-semibold mb-4">Login</h2>
      <div className="w-full max-w-xs">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <button className="block w-full bg-orange-500 text-white py-2 rounded-md mb-4">
          Login
        </button>
        <button className="ml-2 flex items-center bg-gray-100 py-2 px-4 rounded-md mb-4">
          <GoogleIcon />
          <span className="ml-2">Login with Google</span>
        </button>
        <p className="text-sm text-gray-600 p-5">
          Don't have an account?{' '}
          <button onClick={() => navigate("/Signup")} className="text-orange-500">
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
