const DonationDetails = () => {
  // Assuming 'donation' is the donation object received from the backend
  const donation = {
    donated_by: "John Doe",
    cloth_type: "Shirt",
    cloth_bank: "Upcycle Nepal - Revive",
    no_of_clothes: 5,
    donation_date: "2024-04-19",
    status: "Pending", // You need to fetch this status from the backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Donation Details</h1>
    </div>
  );
};

export default DonationDetails;
