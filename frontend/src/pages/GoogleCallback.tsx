import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
   
    navigate("/");

  }, [location, navigate]);

  return null; 
}

export default GoogleCallback;
