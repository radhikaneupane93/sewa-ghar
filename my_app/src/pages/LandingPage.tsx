import BannerBackground from "@/assets/Images/home-banner-background.png";
import BannerImage from "@/assets/Images/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Leaderboard from "./Leaderboard";

const DonationLocations = () => {
  const mapUrls = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113020.7470046899!2d85.2178982972656!3d27.72042480000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b84d7ddd953%3A0x521fe388f278ad54!2sClothes%20Bank%20Sherpa%20(%20Thirft%20Clothes%20Shop)!5e0!3m2!1sen!2snp!4v1709371758943!5m2!1sen!2snp",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113020.7470046899!2d85.2178982972656!3d27.72042480000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ce756d08f1%3A0x4996fdfa01f0dc37!2sUpcycle%20Nepal%20-%20Revive!5e0!3m2!1sen!2snp!4v1709371776979!5m2!1sen!2snp",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113020.7470046899!2d85.2178982972656!3d27.72042480000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191746c19d6f%3A0x5f8ae3ff5db3a7f7!2sPublic%20Cloth%20bank!5e0!3m2!1sen!2snp!4v1709371804339!5m2!1sen!2snp",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56535.97634006774!2d85.24793834863283!3d27.670983000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c556fd6223%3A0xcfbbafb78ca5a04d!2sB.B.R.%20COLLECTION!5e0!3m2!1sen!2snp!4v1709392285332!5m2!1sen!2snp",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56535.97634006774!2d85.24793834863283!3d27.670983000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c556fd6223%3A0xcfbbafb78ca5a04d!2sB.B.R.%20COLLECTION!5e0!3m2!1sen!2snp!4v1709392285332!5m2!1sen!2snp",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56535.97634006774!2d85.24793834863283!3d27.670983000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c556fd6223%3A0xcfbbafb78ca5a04d!2sB.B.R.%20COLLECTION!5e0!3m2!1sen!2snp!4v1709392285332!5m2!1sen!2snp",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56535.97634006774!2d85.24793834863283!3d27.670983000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c556fd6223%3A0xcfbbafb78ca5a04d!2sB.B.R.%20COLLECTION!5e0!3m2!1sen!2snp!4v1709392285332!5m2!1sen!2snp",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56535.97634006774!2d85.24793834863283!3d27.670983000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c556fd6223%3A0xcfbbafb78ca5a04d!2sB.B.R.%20COLLECTION!5e0!3m2!1sen!2snp!4v1709392285332!5m2!1sen!2snp",
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-32">
        <p className="text-4xl md:text-3xl xl:text-4xl font-semibold text-red-600 mb-6">
          Wondering where to Donate?
        </p>
        <p className="text-xl md:text-2xl justify-center leading-6 text-gray-700 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis atquamts
        </p>
      </div>

      <div className="flex p-9 mt-3 gap-6 overflow-y-scroll m-w-full no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {mapUrls.map((url, index) => (
          <iframe
            key={index}
            src={url}
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ))}
      </div>
    </>
  );
};

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex mt-[15vh] ml-5 ">
        <div className=" mt-32 ">
          <h1 className="text-4xl md:text-3xl xl:text-4xl font-semibold text-red-600">
            Are you ready to Donate?
          </h1>
          <p className="mt-6 text-xl md:text-xlxl leading-6 text-gray-700 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>

          <Button
            className="bg-orange-500 hover:bg-orange-300 mt-6"
            onClick={() => navigate("/Donation")}
          >
            Donate Now <FiArrowRight />
          </Button>
        </div>
        <div className="mt-24 ml-96 ">
          <img src={BannerImage} alt="" className="w-inherit h-inherit" />
        </div>
        <div className=" ">
          <img src={BannerBackground} alt="background" className="size-96" />
        </div>
      </div>
      <DonationLocations />
      <Leaderboard />

      
    </>
  );
};

export default LandingPage;
