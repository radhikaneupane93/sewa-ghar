import React, { useEffect, useState } from "react";
import { Person as ProfileIcon } from "@mui/icons-material";
import CookieHelper from "@/helpers/CookieHelper";
import axios from "axios";
import { toast } from "react-toastify";

interface Profile {
  name: string,
  address: string | null,
  email: string,
  phonenumber: string | null,
  points: string | null
}

const Profile = () => {
  const [profileData, setProfileData] = useState<Profile | null>(null)

  const fetchProfileData = async () => {
    const token = CookieHelper.getCookie('token')
    await axios.get('http://127.0.0.1:8000/users/api/user/',
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ).then(res => {
      setProfileData(res.data)
      console.log(res.data)
    })
      .catch(err => {
        toast.error(err)
      })
  }

  useEffect(() => {
    fetchProfileData();
  }, [])

  return (
    <div className="max-w-4xl mx-auto mt-32">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {profileData && (
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
                <span className="font-bold">Address:</span> {profileData.address}
              </div>
              <div style={{ marginBottom: "10px" }}>
                <span className="font-bold">Phone:</span> {profileData.phonenumber}
              </div>
              <div style={{ marginBottom: "10px" }}>
                <span className="font-bold">Points:</span> {profileData.points}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile
