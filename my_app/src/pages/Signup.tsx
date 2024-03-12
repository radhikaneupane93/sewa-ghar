import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BannerBackground from "@/assets/Images/home-banner-background.png";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate(); 


  const handleSignUp = () => {
    // Implement sign up logic here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      <div className="absolute top-0 right-0 w-1/5 aspect-square">
        <img src={BannerBackground} alt="background" className="h-inherit w-inherit" />
      </div>
      <div className="absolute bottom-0 left-0 rotate-180 w-1/5 aspect-square">
        <img src={BannerBackground} alt="background" className="h-inherit w-inherit" />
      </div>

      <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
      <div className="w-full max-w-xs">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
        />
        <button onClick={handleSignUp} className="block w-full bg-orange-500 text-white py-2 rounded-md mb-4">
          Sign Up
        </button>
        <p onClick={() => navigate("/login")} className="text-sm text-gray-600 p-5">
          Already have an account?{' '}
          <button className="text-orange-500">
            Log in here
          </button>
        </p>
      </div>
      <button onClick ={() => navigate("/")} className='absolute top-4 left-4'> <ArrowCircleLeftIcon className='text-orange-500 w-8 h-8'/> </button>
    </div>
  );
};

export default SignUp;
