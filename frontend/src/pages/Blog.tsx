import one from "../assets/Images/AchievementOne.jpg";
import two from "../assets/Images/AchievementTwo.jpg";
import three from "../assets/Images/AchievementThree.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <p className="text-4xl md:text-3xl xl:text-4xl font-semibold text-red-600 mb-6">
        Our Blogs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Blog */}
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src={one}
            alt="Blog One"
            className="w-full h-auto object-cover rounded-t-lg"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Blog One Title</h3>
            <p className="text-gray-700 mb-4">
              Short description or excerpt of Blog One.
            </p>
            <Link
              to="/BlogDetail"
              className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
            >
              Read more
            </Link>
          </div>
        </div>

        {/* Second Blog */}
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src={two}
            alt="Blog Two"
            className="w-full h-auto object-cover rounded-t-lg"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Blog Two Title</h3>
            <p className="text-gray-700 mb-4">
              Short description or excerpt of Blog Two.
            </p>
            <Link
              to="/BlogDetail"
              className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
            >
              Read more
            </Link>
          </div>
        </div>

        {/* Third Blog */}
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src={three}
            alt="Blog Three"
            className="w-full h-auto object-cover rounded-t-lg"
          />
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Blog Three Title</h3>
            <p className="text-gray-700 mb-4">
              Short description or excerpt of Blog Three.
            </p>
            <Link
              to="/BlogDetail"
              className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/blogs" // Link to all blogs page
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-300"
        >
          Explore more
        </Link>
      </div>
    </div>
  );
};

export default Blog;