import { Button } from "@/components/ui/button";
import { useState } from "react";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-md mt-36">
      <h1 className="text-xl text-center font-semibold mb-9 text-red-600 mt-4">
        Join hands and make a difference
      </h1>
      <h1 className="text-l text-center font-semibold mb-9 text-black-600">
        Fill the Volunteering Form
      </h1>
      <form>
        <div className="mb-4 mt-6">
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
          ></textarea>
        </div>
        <div className="flex justify-center">
        <Button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600" >
          Submit
        </Button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerForm;
