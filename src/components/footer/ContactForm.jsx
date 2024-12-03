import React from "react";

function ContactForm() {
  return (
    <>
      <h2 className="text-3xl font-bold my-10 text-center text-[#29385E]">
        Get in Touch
      </h2>
      <div className="px-4 md:px-20 lg:flex gap-5 my-10">
        <div className="w-full lg:w-1/2 py-6 px-4 md:py-12 md:px-20 rounded-xl border border-black">
          <h2 className="text-3xl font-medium mb-6 text-center text-[#29385E]">
            Book Session
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-black shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-black"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-black shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-black"
                required
              />
            </div>
            <div className="mb-4">
              {/* <input
                type="tel"
                placeholder="Mobile Number"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="mt-1 block w-full border border-black shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-black"
                required
              /> */}
              <div className="flex items-center space-x-2">
                {/* Country Code Dropdown */}
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="block border border-black shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="+1">+1 (USA)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (India)</option>
                  <option value="+61">+61 (Australia)</option>
                  <option value="+49">+49 (Germany)</option>
                  <option value="+33">+33 (France)</option>
                  <option value="+39">+39 (Italy)</option>
                  <option value="+81">+81 (Japan)</option>
                  <option value="+55">+55 (Brazil)</option>
                  <option value="+1-800">+1-800 (USA - Toll Free)</option>
                  <option value="+34">+34 (Spain)</option>
                  <option value="+7">+7 (Russia)</option>
                  <option value="+52">+52 (Mexico)</option>
                  <option value="+86">+86 (China)</option>
                  <option value="+27">+27 (South Africa)</option>
                  <option value="+61">+61 (Australia)</option>
                  <option value="+66">+66 (Thailand)</option>
                  <option value="+20">+20 (Egypt)</option>
                  {/* Add more country codes as necessary */}
                </select>

                {/* Phone Number Input */}
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-black shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-black"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Subject"
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="mt-1 block w-full border border-black shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-black"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                placeholder="Message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-black shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-black"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className={`text-white bg-[#29385E] py-3 my-5 w-full ${
                loadingStatus === "loading"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={loadingStatus === "loading"}
            >
              {loadingStatus === "loading" ? (
                <div className="flex items-center justify-center">
                  <span className="spinner-border spinner-border-sm"></span>
                  Sending...
                </div>
              ) : (
                "Send"
              )}
            </button>
          </form>
          <a href="https://calendly.com/powerabodedmcc" target="_blank">
            {" "}
            <button className="text-black shadow-sm bg-[#bff0ff] py-3 w-full">
              Book Session
            </button>
          </a>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={Get_in_touch} alt="" />
        </div>
      </div>
    </>
  );
}

export default ContactForm;
