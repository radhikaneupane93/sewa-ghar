import React from "react";
import { Link } from "react-router-dom";
import { PeopleAlt, Public, DoneAll } from "@mui/icons-material";
import image from "../assets/Images/AboutUSVolunteering.jpg";
import image1 from "../assets/Images/image1.jpg";
import image2 from "../assets/Images/image2.jpg";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-32 justify-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

        {/* Mission Section */}
        <div className="p-6 bg-white rounded-lg shadow-md mb-8 flex transition-transform duration-300 hover:scale-105">
          <PeopleAlt className="text-orange-500 text-4xl" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Our Mission:</h2>
            <p className="text-gray-700">
              To connect volunteers with meaningful opportunities and empower them to create positive change in their communities. We believe in making a lasting impact by facilitating impactful collaborations and initiatives.
            </p>
          </div>
        </div>{/* Vision Section */}
        <div className="p-6 bg-white rounded-lg shadow-md mb-8 flex transition-transform duration-300 hover:scale-105">
          <Public className="text-orange-500 text-4xl" />
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Our Vision:</h2>
            <p className="text-gray-700">
              Our vision is to create a world where everyone is inspired and equipped to contribute to positive change, leading to a more inclusive and sustainable future. We envision a global community that actively participates in building a better tomorrow.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="p-6 bg-white rounded-lg shadow-md mb-8 flex gap-2 transition-transform duration-300 hover:scale-105">
          <DoneAll className="text-orange-500 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-2">Our Values:</h2>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Community: Fostering a sense of belonging and collaboration among volunteers and communities.</li>
            <li>Empowerment: Empowering individuals to take meaningful actions and make a difference.</li>
            <li>Inclusivity: Embracing diversity and creating inclusive environments for everyone to participate.</li>
            <li>Impact: Striving for measurable and meaningful impact in every initiative we undertake.</li>
            <li>Sustainability: Committing to sustainable practices and long-term solutions for a better future.</li>
          </ul>
        </div>
{/* Additional Images Section */}
<div className="grid grid-cols-1 md:grid-cols-1 gap-32">
          <div className="image-description flex gap-12 transition-transform duration-300 hover:scale-105">
            <img
              src={image}
              alt="About Us"
              className="w-80 h-70 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              nobis molestias deserunt modi voluptas sit totam voluptates,
              mollitia iste iure quod quia sequi minima officia magnam sint
              quisquam dolores nisi.
            </p>
          </div>
          <div className="image-description flex gap-12 transition-transform duration-300 hover:scale-105">
            <img
              src={image1}
              alt="Image 1"
              className="w-80 h-70 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              nobis molestias deserunt modi voluptas sit totam voluptates,
              mollitia iste iure quod quia sequi minima officia magnam sint
              quisquam dolores nisi.
            </p>
          </div>
          <div className="image-description flex gap-12 transition-transform duration-300 hover:scale-105">
            <img
              src={image2}
              alt="Image 2"
              className="w-80 h-70 object-cover rounded-lg shadow-lg"
            />
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
              nobis molestias deserunt modi voluptas sit totam voluptates,
              mollitia iste iure quod quia sequi minima officia magnam sint
              quisquam dolores nisi.
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-700 mb-6">
            Meet our dedicated team of professionals who work tirelessly to make
            a difference.
          </p>

          <h2 className="text-2xl font-bold mb-4">Achievements</h2>
          <p className="text-gray-700 mb-6">
            We are proud of our accomplishments, including X number of
            volunteers reached, Y projects completed, and Z impact made.
          </p>

          <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-gray-700 mb-2">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                commodo, velit sit amet consequat dapibus."
              </p>
              <p className="text-gray-500">- John Doe, Volunteer</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <p className="text-gray-700 mb-2">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                commodo, velit sit amet consequat dapibus."
              </p>
              <p className="text-gray-500">- Jane Smith, Beneficiary</p>
            </div>
          </div>
        </div>

        {/* Contact Us Link */}
        <div className="text-center mt-8">
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
