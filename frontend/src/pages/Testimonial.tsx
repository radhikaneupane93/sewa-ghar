import ProfilePic from "@/assets/Images/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 mt-24">
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <h1 className="flex flex-col items-center justify-center text-3xl font-bold text-gray-800 mb-4">
            What They Are Saying
          </h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="testimonial-section-bottom bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={ProfilePic}
                alt="Profile"
                className="rounded-full mx-auto w-24 h-24 mb-4"
              />
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non
                et elit. Dolor turpis molestie dui magnis facilisis at fringilla
                quam.
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className="text-yellow-400" />
                ))}
              </div>
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                John Doe
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
