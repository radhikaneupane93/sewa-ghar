const Contact = () => {
  return (
    <div className="contact-page-wrapper bg-gray-100 py-44 px-4 sm:px-6 lg:px-8 align-middle mt-12 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Have Question In Mind?</h1>
      <h1 className="text-3xl font-bold text-red-600 mb-4">Let Us Help You</h1>
      <div className="contact-form-container mt-8">
        <input type="email" placeholder="yourmail@gmail.com" className="border-gray-300 border-solid border p-2 rounded-md mb-4" />
        <button className="bg-orange-500 text-white py-2 px-4 rounded-md shadow hover:bg-orange-300 transition duration-300">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
