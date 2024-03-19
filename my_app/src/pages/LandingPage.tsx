import BannerBackground from "@/assets/Images/home-banner-background.png";
import BannerImage from "@/assets/Images/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Leaderboard from "./Leaderboard";

const DonationLocations = () => {
  const mapUrls = [
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d366425.29761937587!2d85.25933814201278!3d27.673854871921694!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ce756d08f1%3A0x4996fdfa01f0dc37!2sUpcycle%20Nepal%20-%20Revive!5e0!3m2!1sen!2snp!4v1710852519522!5m2!1sen!2snp",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113020.7470046899!2d85.2178982972656!3d27.72042480000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191746c19d6f%3A0x5f8ae3ff5db3a7f7!2sPublic%20Cloth%20bank!5e0!3m2!1sen!2snp!4v1709371804339!5m2!1sen!2snp",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594819.3719144505!2d81.48838264448688!3d28.37197426013081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b84d7ddd953%3A0x521fe388f278ad54!2sClothes%20Bank%20Sherpa%20(%20Thirft%20Clothes%20Shop)!5e0!3m2!1sen!2snp!4v1710852681583!5m2!1sen!2snp",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902433.9839738016!2d83.98068150851094!3d27.92857533863575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19211f982a63%3A0x80bbd49bc965dd27!2sSukhawati%20charity%20Store!5e0!3m2!1sen!2snp!4v1710852858122!5m2!1sen!2snp",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902433.9839738016!2d83.98068150851094!3d27.92857533863575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19080d17c723%3A0xfd074968858e6a4b!2sSukhawati%20store!5e0!3m2!1sen!2snp!4v1710852964763!5m2!1sen!2snp",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56508.08115814216!2d85.22309574863279!3d27.724847599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b0eeb63c9f%3A0xee53ef0d95b05b4f!2sAction%20Works%20Nepal!5e0!3m2!1sen!2snp!4v1710853036613!5m2!1sen!2snp",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41702.12404194699!2d85.34649934021049!3d27.725074345726032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d6fbb3ccfb%3A0x48ee1b9881a267dc!2sAroan%20Nepal!5e0!3m2!1sen!2snp!4v1710853312790!5m2!1sen!2snp"


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
