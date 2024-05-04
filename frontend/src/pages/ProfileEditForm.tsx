import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProfileType {
  name: string;
  address: string | null;
  email: string;
  phonenumber: string | null;
  points: string | null;
}

interface ProfileEditFormProps {
  profileData: ProfileType;
  onSubmit: (data: ProfileType) => void;
}

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ profileData, onSubmit }) => {
  const [formData, setFormData] = useState<ProfileType>({
    name: profileData.name,
    address: profileData.address || "",
    phonenumber: profileData.phonenumber || "",
    email: profileData.email,
    points: profileData.points || null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-6 rounded-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
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
          <label htmlFor="address" className="block mb-1">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address || ""}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phonenumber" className="block mb-1">
            Phone Number
          </label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber || ""}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
          >
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditForm;
