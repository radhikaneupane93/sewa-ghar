import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { selectIsAuthenticated } from "@/app/slices/authSlice";

const Donation = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [clothtype, setClothtype] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", {
      name,
      email,
      gender,
      clothtype,
      description,
    });
    setName("");
    setEmail("");
    setGender("");
    setClothtype("");
    setDescription("");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow-lg mt-36">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Cloth Donation Form
      </h2>
      {isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-sm font-semibold mb-1"
            >
              Gender:
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border rounded px-4 py-2"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="clothtype"
              className="block text-sm font-semibold mb-1"
            >
              Cloth Type:
            </label>
            <input
              type="text"
              id="clothcategory"
              value={clothtype}
              onChange={(e) => setClothtype(e.target.value)}
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-semibold mb-1"
            >
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Button
              onClick={() => navigate("/")}
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
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange600"
          >
            Log In
          </Button>
        </div>
      )}
    </div>
  );
};

export default Donation;
