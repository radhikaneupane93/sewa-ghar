import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface ClothBank{
        "id": string,
        "title": string,
        "description": string,
        "latitude": string,
        "longitude": string,
        "address": string ,
        "city": string,
        "phone_number": string,
        "map_url": string
    
}
const ClothLocation = ({ title, description, address, phone_number, mapUrl }:any) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4 flex gap-8 mx-auto w-full">
            <div className="bg-green w-1/2 h-96">
                <iframe
                    className="rounded-lg w-full h-full"
                    title={title}
                    src={mapUrl}
                    allowFullScreen
                ></iframe>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
                <p className="text-gray-600 mb-4">{address}</p>
                <p className="text-gray-600 mb-4">{phone_number}</p>
            </div>
        </div>
    );
};

const ClothLocationsPage = () => {
    const navigate = useNavigate()
    const [clothBanks, setClothBanks] = useState<ClothBank[]>([]);

    const navigateToDonation = (bankId: string, title: string) => {
        navigate(`/donate/${bankId}/${title}`);
    }

    useEffect(() => {
        const fetchClothBanks = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/donation/clothbanks/");
                setClothBanks(response.data);
            } catch (error) {
                console.error("Error fetching cloth banks:", error);
            }
        };

        fetchClothBanks();
    }, []);

    

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl text-center font-semibold text-red-600 mt-32">
                These are the locations where you can contribute and Get Recognized
            </h1>
            <p className="text-gray-600 mb-4 mt-8 text-center">
                These locations provide you with the opportunity to make a positive impact through your donations, and also offer recognition for your contributions. Select the nearest cloth bank and donate today!
            </p>
            <div className="flex flex-col mt-8">
                {clothBanks.map((bank, index) => (
                    <div className="bg-white rounded-lg shadow-md p-6 mb-4 flex gap-8 mx-auto w-full" onClick={()=>navigateToDonation(bank.id, bank.title)}>
                        <ClothLocation
                        key={index}
                        title={bank.title}
                        description={bank.description}
                        address = {bank.address}
                        city = {bank.city}
                        phone_number = {bank.phone_number}
                        mapUrl={bank.map_url}
                    />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClothLocationsPage;
