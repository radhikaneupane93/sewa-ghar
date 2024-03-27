import React from 'react';
import first from "../assets/Images/first.jpg";
import second from "../assets/Images/second.jpg";
import third from "../assets/Images/third.jpg";

const images = [
  { id: 'volunteering', src: first },
  { id: 'volunteering', src: second },
  { id: 'volunteering', src: third }
];

const Volunteering: React.FC = () => {
    return (
        <>  <div className="flex flex-col items-center justify-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 mt-32"> 
        <h1 className="text-3xl font-bold text-gray-800">About</h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          volutpat auctor magna ut viverra. Vestibulum vel arcu ac libero
          vehicula feugiat. Nam consectetur suscipit felis, in iaculis ex
          finibus eget.
        </p>
      </div>
        <div className="max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg overflow-hidden flex items-center mt-32">
            <div className="flex flex-col">
                {images.map((image, key) => (
                    <div key={key} className="flex mb-8">
                        <img
                            src={image.src}
                            alt={`Image ${image.id}`}
                            className="flex-shrink-0 w-64 h-48 rounded-full object-cover mr-10"
                        />
                        <div>
                            <p className="text-base mb-2 mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Impedit provident nemo, deleniti quibusdam recusandae nihil sapiente nisi! Nulla, nesciunt omnis!
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Impedit provident nemo, deleniti quibusdam recusandae nihil sapiente nisi! Nulla, nesciunt omnis!</p>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
                };

                export default Volunteering;