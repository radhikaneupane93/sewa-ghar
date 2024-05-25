import { useEffect, useState } from "react";
import { Person as ProfileIcon } from "@mui/icons-material";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectToken } from "@/app/slices/authSlice";
import { Button } from "@/components/ui/button";
import ConfirmationModel from "./ConfirmationModel";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

interface ProfileType {
  name: string;
  address: string | null;
  email: string;
  phonenumber: string | null;
  points: string | null;
  role: string | null;
}

interface ProfileEditForm {
  name: string;
  address: string;
  phonenumber: string;
}

const Profile = () => {
  const [profileData, setProfileData] = useState<ProfileType | null>(null);
  const { register, handleSubmit, reset } = useForm<ProfileEditForm>();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/users/api/user/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfileData(response.data);
    } catch (error) {
      toast.error("Error fetching profile data");
    }
  };

  useEffect(() => {
    if (token) {
      fetchProfileData();
    }
  }, [token]);

  const updateProfile = async (data: any) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/users/api/update-profile/",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Profile updated successfully");
      navigate('/')
    } catch (error) {
      toast.error("Error updating profile data");
    }
  };

  const handleAccountDeletion = async () => {
    try {
      await axios.delete("http://127.0.0.1:8000/users/delete-user/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Account deleted successfully");
      navigate("/Login");
    } catch (error) {
      toast.error("Error deleting account");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-40">
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
                <div className="text-lg text-gray-500">{profileData.role}</div>
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
                <span className="font-bold">Donation Points:</span> {profileData.points}
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="bg-orange-500 hover:bg-orange-400 text-white">Edit Profile</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <form onSubmit={handleSubmit(updateProfile)}>
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when
                          you're done.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            defaultValue={profileData.name}
                            className="col-span-3"
                            {...register("name")}
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="address" className="text-right">
                            Address
                          </Label>
                          <Input
                            id="address"
                            defaultValue={profileData.address ?? ""}
                            className="col-span-3"
                            {...register("address")}
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="phonenumber" className="text-right">
                            Phone number
                          </Label>
                          <Input
                            id="phonenumber"
                            defaultValue={profileData.phonenumber ?? ""}
                            className="col-span-3"
                            {...register("phonenumber")}
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" className="bg-orange-500 hover:bg-orange-400 text-white">Save changes</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </>
              <Button
                onClick={() => setConfirmDelete(true)}
                className="bg-orange-500 hover:bg-orange-400 text-white"
              >
                Delete Account
              </Button>
            </div>
          </div>
        )}
      </div>
      <ConfirmationModel
        open={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        onConfirm={handleAccountDeletion}
        title="Confirm Account Deletion"
        description="Are you sure you want to delete your account? This action cannot be undone."
      />
    </div>
  );
};

export default Profile;
