import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface ClothBank {
    id: string;
    title: string;
    description: string;
    latitude: string;
    longitude: string;
    address: string;
    phone_number: string;
}

const ClothLocation = ({ title, description, address, phone_number, mapUrl }: ClothBank) => {
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
    const navigate = useNavigate();
    const [clothBanks, setClothBanks] = useState<ClothBank[]>([]);

    const navigateToDonation = (bankId: string, title: string) => {
        navigate(`/donate/${bankId}/${title}`);
    };

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

    const mapUrls = [
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d366425.29761937587!2d85.25933814201278!3d27.673854871921694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ce756d08f1%3A0x4996fdfa01f0dc37!2sUpcycle%20Nepal%20-%20Revive!5e0!3m2!1sen!2snp!4v1710852519522!5m2!1sen!2snp",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113020.7470046899!2d85.2178982972656!3d27.72042480000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191746c19d6f%3A0x5f8ae3ff5db3a7f7!2sPublic%20Cloth%20bank!5e0!3m2!1sen!2snp!4v1709371804339!5m2!1sen!2snp",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594819.3719144505!2d81.48838264448688!3d28.37197426013081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b84d7ddd953%3A0x521fe388f278ad54!2sClothes%20Bank%20Sherpa%20(%20Thirft%20Clothes%20Shop)!5e0!3m2!1sen!2snp!4v1710852681583!5m2!1sen!2snp",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902433.9839738016!2d83.98068150851094!3d27.92857533863575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19211f982a63%3A0x80bbd49bc965dd27!2sSukhawati%20charity%20Store!5e0!3m2!1sen!2snp!4v1710852858122!5m2!1sen!2snp",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902433.9839738016!2d83.98068150851094!3d27.92857533863575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19080d17c723%3A0xfd074968858e6a4b!2sSukhawati%20store!5e0!3m2!1sen!2snp!4v1710852964763!5m2!1sen!2snp",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56508.08115814216!2d85.22309574863279!3d27.724847599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b0eeb63c9f%3A0xee53ef0d95b05b4f!2sAction%20Works%20Nepal!5e0!3m2!1sen!2snp!4v1710853036613!5m2!1sen!2snp",
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41702.12404194699!2d85.34649934021049!3d27.725074345726032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d6fbb3ccfb%3A0x48ee1b9881a267dc!2sAroan%20Nepal!5e0!3m2!1sen!2snp!4v1710853312790!5m2!1sen!2snp",
    ];

    const generateMapUrl = (index: number) => {
        return mapUrls[index];
    };

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
                    <div key={index} className="bg-white rounded-lg shadow-md p-6 mb-4 flex gap-8 mx-auto w-full" onClick={() => navigateToDonation(bank.id, bank.title)}>
                        <ClothLocation
                            title={bank.title}
                            description={bank.description}
                            address={bank.address}
                            phone_number={bank.phone_number}
                            mapUrl={generateMapUrl(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClothLocationsPage;
