import { selectToken } from "@/app/slices/authSlice";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


interface Donation {
    id: string,
    donated_by: {
        name: string
    }
    cloth_type: string,
    cloth_bank: {
        title: string,
    }
    no_of_clothes: string,
    donation_date: string,
    status: string,
}

function AllDonations() {
    const [donations, setDonations] = useState<Donation[]>([]);

    const token = useSelector(selectToken)

    const getDonations = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/donation/alldonations/", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const donationData: Donation[] = response.data;
            setDonations(donationData);
        } catch (error) {

        }
    }

    const handleStatusChange = async (donationId:any, newStatus:any) => {
        try {
            const response = await axios.post("http://127.0.0.1:8000/donation/verify-donation/", {
                donation_id: donationId,
                status: newStatus
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            toast.success("Status updated successfully!")
            getDonations();
        } catch (error) {
            console.error("Failed to update donation status:", error);
        }
    };

    useEffect(() => {
        if (token) {
            getDonations();
        }
    }, [token])

    return (
        <div className="flex mt-36">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Donated By</TableHead>
                        <TableHead>Cloth Type</TableHead>
                        <TableHead>Cloth Bank</TableHead>
                        <TableHead>No. of Clothes</TableHead>
                        <TableHead>Donation Date</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {donations?.map((donation) => (
                        <TableRow key={donation.id}>
                            <TableCell className="font-medium">
                                {donation.donated_by.name}
                            </TableCell>
                            <TableCell>{donation.cloth_type}</TableCell>
                            <TableCell>{donation.cloth_bank.title}</TableCell>
                            <TableCell>{donation.no_of_clothes}</TableCell>
                            <TableCell>{donation.donation_date}</TableCell>
                            <TableCell>
                                <select
                                    value={donation.status}
                                    onChange={(e) => handleStatusChange(donation.id, e.target.value)}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Accepted">Accepted</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </div>
    );
}

export default AllDonations;