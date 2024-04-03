import React from "react";
import { Person as ProfileIcon } from "@mui/icons-material"; 

const Profile: React.FC = () => {
  //Sample Data 
  const profileData = {
    name: "Ram Shrestha",
    age: 30,
    address: "Kathmandu",
    phoneNumber: "9876543210",
    email: "ram12@gmail.com",

  };

  return (
    <div className="max-w-4xl mx-auto mt-32">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <div className="flex items-center mb-4">
            <ProfileIcon
              sx={{
                width: 80,
                height: 80,
                marginRight: 4,
                backgroundColor: "orange",
              }}
            />
            <div>
              <div className="text-xl font-bold">{profileData.name}</div>
              <div className="text-lg text-gray-500">{profileData.email}</div>
            </div>
          </div>
          <div className="flex-column column-gap-10px mt-10">
            <div style={{ marginBottom: "10px" }}>
              <span className="font-bold">Age:</span> {profileData.age}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <span className="font-bold">Address:</span> {profileData.address}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <span className="font-bold">Phone:</span>{" "}
              {profileData.phoneNumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
