import Donate from "@/assets/Images/donation.png";
import Reward from "@/assets/Images/medal.png";
import Recognize from "@/assets/Images/podium.png";
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();
  const workInfoData = [
    {
      image: Donate,
      title: "Do Donate",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci Non tincidunt magna nonlit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
    },
    {
      image: Reward,
      title: "Get Points",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci Non tincidunt magna nonlit. Dolor turpis molestie dui magnis facilisis at fringilla quam. ",
    },
    {
      image: Recognize,
      title: "Get Recognized",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci Non tincidunt magna nonlit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",

    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top flex mt-[24vh] ml-44">
        <div>
          <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">
            How we work?
          </h1>
          <p className="mt-6 text-xl leading-6 text-gray-700 text-center">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
      </div>
      <div className="work-section-bottom flex justify-around p-24 gap-6">
        {workInfoData.map((data, index) => (
          <div
            className="work-section-info border border-gray-300 rounded-lg p-6"
            key={index}
          >
            <div className="info-boxes-img-container mb-2">
              <img src={data.image} alt="" className="w-24 h-24 mx-auto" />
            </div>
            <h2 className="text-lg font-bold text-red-600 text-center mt-4">
              {data.title}
            </h2>
            <p className="mt-6 text-l text-gray-700 text-center">{data.text}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
      <Button
            className="bg-orange-500 hover:bg-orange-300 mt-3"
            onClick={() => navigate("/Donation")}
          >
            Donate Now <FiArrowRight />
          </Button>
      </div>
    </div>
  );
};

export default Work;
