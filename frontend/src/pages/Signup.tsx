import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const handleSignUp = () => {
    if (!emailRegex.test(email)) {
      toast.error('Invalid email format');
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    const formData = {
      email,
      password,
    };

    axios.post('http://127.0.0.1:8000/auth/registration/', formData)
      .then(res => {
        console.log(res);
        toast.success('Sign Up Successful');
        navigate("/login");
      })
      .catch(err => {
        console.error(err);
        toast.error('Failed to Sign Up');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
      <button onClick={() => navigate("/")} className='absolute top-4 left-4'> <ArrowCircleLeftIcon className='text-orange-500 w-8 h-8'/> </button>
    </div>
  );
};

export default SignUp;
