import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <h2 className="text-3xl font-semibold mb-6 text-center">Donation Confirmation</h2>
      <p className="text-gray-700 mb-8 text-center">
        Thank you for your donation! Your generosity will make a difference.
      </p>
      <div className="text-center">
        <Link
          to="/"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
