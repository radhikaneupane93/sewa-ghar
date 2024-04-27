import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

const getDonations = [
  {
    donated_by: "John Doe",
    cloth_type: "Shirt",
    cloth_bank: "ABC Cloth Bank",
    no_of_clothes: 2,
    donation_date: "2024-04-27",
    status: "Pending",
  },
  {
    donated_by: "Alice Smith",
    cloth_type: "Dress",
    cloth_bank: "XYZ Cloth Bank",
    no_of_clothes: 1,
    donation_date: "2024-04-26",
    status: "Accepted",
  },
  {
    donated_by: "Bob Johnson",
    cloth_type: "Trousers",
    cloth_bank: "ABC Cloth Bank",
    no_of_clothes: 3,
    donation_date: "2024-04-25",
    status: "Rejected",
  },
];

function DonationDetails() {
  const [donations, setDonations] = useState(getDonations);

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedDonations = [...donations];
    updatedDonations[index].status = newStatus;
    setDonations(updatedDonations);
  };

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
          {donations.map((donation, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">
                {donation.donated_by}
              </TableCell>
              <TableCell>{donation.cloth_type}</TableCell>
              <TableCell>{donation.cloth_bank}</TableCell>
              <TableCell>{donation.no_of_clothes}</TableCell>
              <TableCell>{donation.donation_date}</TableCell>
              <TableCell>
                <select
                  value={donation.status}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
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

export default DonationDetails;
