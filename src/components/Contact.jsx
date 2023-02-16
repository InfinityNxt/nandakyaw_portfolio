const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center pt-[90px]"
    >
      <form action="https://getform.io/f/d2220cc3-89e2-4514-8180-795d33bd665e" method="POST" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-800 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            mightyndk.mm@gmail.com
          </p>
        </div>

        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] p-2 my-4"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>

        <button className="text-white border-2 hover:bg-yellow-800 hover:border-yellow-800 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
