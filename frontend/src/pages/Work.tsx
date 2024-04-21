import Donate from "@/assets/Images/donation.png";
import Reward from "@/assets/Images/medal.png";
import Recognize from "@/assets/Images/podium.png";
import image from "../assets/Images/AboutUSVolunteering.jpg";
import image2 from "../assets/Images/image1.jpg";
import image3 from "../assets/Images/image2.jpg";

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
    <>
      <div className="work-section-wrapper">
        <div className="work-section-top flex mt-[24vh] ml-8 mr-8">
          <div className=" mt-8 ">
            {/* <h1 className="text font-extrabold text-xl leading-7 text-red-600">
            How we work?
          </h1> */}
            <p className="mt-6 text-xl leading-6 text-gray-700 text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              nobis molestias deserunt modi voluptas sit totam voluptates,
              mollitia iste iure quod quia sequi minima officia magnam sint
              quisquam dolores nisi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Neque nobis molestias deserunt modi voluptas sit
              totam voluptates, mollitia iste iure quod quia sequi minima
              officia magnam sint quisquam dolores nisi. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Neque nobis molestias deserunt
              modi voluptas sit totam voluptates, mollitia iste iure quod quia
              sequi minima officia magnam sint quisquam dolores nisi.
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
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-32">
        <div className="image-description flex gap-12 transition-transform duration-300 hover:scale-105">
          <img
            src={image}
            alt="About Us"
            className="w-1/2 h-50 object-cover rounded-lg shadow-lg"
          />
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            nobis molestias deserunt modi voluptas sit totam voluptates,
            mollitia iste iure quod quia sequi minima officia magnam sint
            quisquam dolores nisi. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Neque nobis molestias deserunt modi voluptas sit
            totam voluptates, mollitia iste iure quod quia sequi minima officia
            magnam sint quisquam dolores nisi. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Neque nobis molestias deserunt modi
            voluptas sit totam voluptates, mollitia iste iure quod quia sequi
            minima officia magnam sint quisquam dolores nisi.
          </p>
        </div>
        <div className="image-description flex gap-12 transition-transform duration-300 hover:scale-105">
          <img
            src={image2}
            alt="About Us"
            className="w-1/2 h-50 object-cover rounded-lg shadow-lg"
          />
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            nobis molestias deserunt modi voluptas sit totam voluptates,
            mollitia iste iure quod quia sequi minima officia magnam sint
            quisquam dolores nisi. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Neque nobis molestias deserunt modi voluptas sit
            totam voluptates, mollitia iste iure quod quia sequi minima officia
            magnam sint quisquam dolores nisi. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Neque nobis molestias deserunt modi
            voluptas sit totam voluptates, mollitia iste iure quod quia sequi
            minima officia magnam sint quisquam dolores nisi.
          </p>
        </div>
        <div className="image-description flex gap-12 transition-transform duration-300 hover:scale-105">
          <img
            src={image3}
            alt="About Us"
            className="w-1/2 h-50 object-cover rounded-lg shadow-lg"
          />
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            nobis molestias deserunt modi voluptas sit totam voluptates,
            mollitia iste iure quod quia sequi minima officia magnam sint
            quisquam dolores nisi. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Neque nobis molestias deserunt modi voluptas sit
            totam voluptates, mollitia iste iure quod quia sequi minima officia
            magnam sint quisquam dolores nisi. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Neque nobis molestias deserunt modi
            voluptas sit totam voluptates, mollitia iste iure quod quia sequi
            minima officia magnam sint quisquam dolores nisi.
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
