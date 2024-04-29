import Donate from "@/assets/Images/donation.png";
import Reward from "@/assets/Images/medal.png";
import Recognize from "@/assets/Images/podium.png";

const Work = () => {
  const workInfoData = [
    {
      image: Donate,
      title: "Do Donate",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci",
    },
    {
      image: Reward,
      title: "Get Points",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci",
    },
    {
      image: Recognize,
      title: "Get Recognized",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top flex mt-[24vh] ml-44">
      <div className=" mt-8 ">
          <h1 className="text font-extrabold text-xl leading-7 text-red-600">
            How we work?
          </h1>
          <p className="mt-6 text-xl leading-6 text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          </div>

      </div>
      <div className="work-section-bottom flex justify-around p-24 gap-6">
        {workInfoData.map((data, index) => (
          <div className="work-section-info" key={index}>
            <div className="info-boxes-img-container mb-2">
              <img src={data.image} alt="" className="w-24 h-24 mx-auto" />
            </div>
            <h2 className="text-lg font-bold">{data.title}</h2>
            <p className="text-sm">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
