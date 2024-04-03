import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { Button } from '@/components/ui/button';
import { selectIsAuthenticated } from '@/app/slices/authSlice';

const Donation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [clothtype, setClothtype] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const donationData = {
      name,
      email,
      gender,
      clothtype,
      description,
      bankLocation: location,
    };
    try {
      const response = await fetch('http://127.0.0.1:8000/donation/donations/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });
      if (response.ok) {
        console.log('Donation submitted successfully!');
        // Reset form fields only after successful submission
        setName('');
        setEmail('');
        setGender('');
        setClothtype('');
        setDescription('');
        setLocation('');
      } else {
        console.error('Failed to submit donation:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting donation:', error);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleReward = () => {
    navigate('/Reward');
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow-lg mt-36">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Cloth Donation Form
      </h2>
      {isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            {/* Your form inputs */}
          </div>
          <div className="flex flex-col justify-center items-center">
            <Button
              type="submit"
              onClick={handleReward}
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 items-center"
            >
              Donate
            </Button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center">
          <p className="mb-4 text-center">Please log in to donate</p>
          <Button
            onClick={handleLogin}
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
          >
            Log In
          </Button>
        </div>
      )}
    </div>
  );
};

export default Donation;
