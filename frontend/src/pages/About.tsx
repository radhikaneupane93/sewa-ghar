import React from "react";
import { Link } from "react-router-dom";
import vision from "../assets/Images/OurVision.jpg";
import mission from "../assets/Images/OurMissions.jpg";
import values from "../assets/Images/ourValues.jpg";
import one from "../assets/Images/AchievementOne.jpg";
import two from "../assets/Images/AchievementTwo.jpg";
import three from "../assets/Images/AchievementThree.jpg";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

        {/* Mission Section */}
        <div className="p-6 bg-white rounded-lg shadow-md mb-8 flex transition-transform duration-300 hover:scale-105">
          <img
            src={mission}
            alt="Our Mission"
            className="w-1/2 h-50 object-cover rounded-lg shadow-lg"
          />
          <div className="ml-4 w-1/2">
            <h2 className="text-xl font-semibold">Our Mission:</h2>
            <p className="text-gray-700">
              To connect volunteers with meaningful opportunities and empower
              them to create positive change in their communities. We believe in
              making a lasting impact by facilitating impactful collaborations
              and initiatives.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="p-6 bg-white rounded-lg shadow-md mb-8 flex transition-transform duration-300 hover:scale-105">
          <div className="ml-4 w-1/2">
            <h2 className="text-xl font-semibold">Our Vision:</h2>
            <p className="text-gray-700">
              Our vision is to create a world where everyone is inspired and
              equipped to contribute to positive change, leading to a more
              inclusive and sustainable future. We envision a global community
              that actively participates in building a better tomorrow.
            </p>
          </div>
          <img
            src={vision}
            alt="Our Vision"
            className="w-1/2 h-50 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Values Section */}
        <div className="p-6 bg-white rounded-lg shadow-md mb-8 flex gap-2 transition-transform duration-300 hover:scale-105">
          <img
            src={values}
            alt="Our Values"
            className="w-1/2 h-50 object-cover rounded-lg shadow-lg"
          />
          <div className="w-1/2">
            <h2 className="text-xl font-semibold mb-2">Our Values:</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li>
                Community: Fostering a sense of belonging and collaboration
                among volunteers and communities.
              </li>
              <li>
                Empowerment: Empowering individuals to take meaningful actions
                and make a difference.
              </li>
              <li>
                Inclusivity: Embracing diversity and creating inclusive
                environments for everyone to participate.
              </li>
              <li>
                Impact: Striving for measurable and meaningful impact in every
                initiative we undertake.
              </li>
              <li>
                Sustainability: Committing to sustainable practices and
                long-term solutions for a better future.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Achievements</h2>
          <div className="achievementImages flex gap-4">
            <img
              src={one}
              alt="Achievement One"
              className="w-1/3 h-auto object-cover rounded-lg shadow-lg"
            />
            <img
              src={two}
              alt="Achievement Two"
              className="w-1/3 h-auto object-cover rounded-lg shadow-lg"
            />
            <img
              src={three}
              alt="Achievement Three"
              className="w-1/3 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <p className="text-gray-700 mb-6 mt-8">
            We are proud of our accomplishments, including X number of
            volunteers reached, Y projects completed, and Z impact made.We are
            proud of our accomplishments, including X number of volunteers
            reached, Y projects completed, and Z impact made.We are proud of our
            accomplishments, including X number of volunteers reached, Y
            projects completed, and Z impact made.We are proud of our
            accomplishments, including X number of volunteers reached, Y
            projects completed, and Z impact made.We are proud of our
            accomplishments, including X number of volunteers reached, Y
            projects completed, and Z impact made.We are proud of our
            accomplishments, including X number of volunteers reached, Y
            projects completed, and Z impact made.We are proud of our
            accomplishments, including X number of volunteers reached, Y
            projects completed, and Z impact made.
          </p>
        </div>

        {/* Contact Us Link */}
        <div className="text-center mt-8">
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
          >
            Explore more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;