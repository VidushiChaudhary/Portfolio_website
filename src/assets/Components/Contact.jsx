import React from "react";
import msg_image from "../images/msg_icon.png"; // optional icon

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fbb741c7-cf6d-4dba-b635-aa2df9850f7e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Heading outside the card */}
      <h2 className="text-white text-5xl md:text-6xl font-semibold italic  text-center mb-8">
        Contact --
      </h2>

      {/* Form Card */}
      <div className="w-full max-w-xl bg-white/5 rounded-lg p-8 shadow-lg shadow-cyan-600">
        <form className="flex flex-col space-y-5" onSubmit={onSubmit}>
          <input
            required
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="bg-transparent border border-white text-white px-4 py-4 rounded-md "
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="bg-transparent border border-white text-white px-4 py-4 rounded-md "
          />
          <input
            required
            type="number"
            name="phone"
            placeholder="Enter Your Mobile No"
            className="bg-transparent border border-white text-white px-4 py-4 rounded-md "
          />
          <input
            required
            type="text"
            name="subject"
            placeholder="Subject"
            className="bg-transparent border border-white text-white px-4 py-4 rounded-md "
          />
          <textarea
            required
            name="message"
            placeholder="Enter Your Message"
            className="bg-transparent border border-white text-white px-4 py-4 rounded-md h-40 resize-none"
          ></textarea>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 text-lg font-semibold text-white py-3 rounded-md bg-cyan-600 transition duration-300 cursor-pointer"
          >
            <img src={msg_image} alt="Send Icon" className="h-5 w-5" />
            Send Message
          </button>
        </form>

        {/* Result Message */}
        {result && (
          <p className="text-white text-center mt-4 font-medium">{result}</p>
        )}
      </div>
    </div>
  );
}

export default Contact;
