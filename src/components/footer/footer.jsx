import React, { useState } from "react";
import {
  Logo,
  x,
  mail,
  linked_in,
  send_button,
  Get_in_touch,
  Whatsapp_icon,
  The_hague,
  Dubai,
  Subscribe,
  Follow_us,
  Email,
  Twitter,
  Linked_in,
} from "../Img/ImportedImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import the X (Twitter) and LinkedIn icons
import {
  Column,
  Heading,
  Row,
  Span,
  Wraper,
  Button,
} from "../../components/ComponentsIndex";
import TawkToChat from "../Chat/Chat";
import { useDispatch, useSelector } from "react-redux";
import {
  createContact,
  createNewsletter,
} from "../../ReduxToolkit/Slice/Contact";
import { useEffect } from "react";

const footer = () => {
  const dispatch = useDispatch();
  const { loadingStatus, loadingNewsletter } = useSelector(
    (state) => state.Contact
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
    number: "",
  });

  const [email, setEmail] = useState();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createContact(formData));
  };
  // Handle form submission
  const handleloadingNewsletterSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
    };
    dispatch(createNewsletter(formData));
  };

  // Reset form data when submission succeeds
  useEffect(() => {
    if (loadingStatus === "succeeded") {
      setFormData({ name: "", email: "", reason: "", message: "", number: "" });
    }
    if (loadingNewsletter === "succeeded") {
      setEmail("");
    }
  }, [loadingStatus, loadingNewsletter]);

  return (
    <Row>
      <div className="fixed bottom-5 left-3">
        <a
          href="https://wa.me/971551571994"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Whatsapp_icon} alt="WhatsApp Icon" width="70px" />
        </a>
      </div>
      {/* <div className="fixed bottom-10 left-3"> */}
      <TawkToChat />
      {/* </div> */}

      {/* <ImageSlider /> */}
      <h2 class="text-3xl font-bold my-10 text-center">Get in Touch</h2>
      <div className="px-4 md:px-20 lg:flex gap-5 my-10">
        <div class="w-full lg:w-1/2 py-6 px-4 md:py-12 md:px-20 rounded-xl border border-black">
          <h2 class="text-3xl font-medium mb-6 text-center">Book A Session</h2>
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
              <input
                type="tel"
                placeholder="Number"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="mt-1 block w-full border border-black shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-black"
                required
              />
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
        </div>
        <div className="w-full lg:w-1/2">
          <img src={Get_in_touch} alt="" />
        </div>
      </div>

      <div className="bg-white py-5">
        <h2 className="text-center text-3xl font-bold text-[#29385E]">
          “Request for RFQ"
        </h2>
        <p className="text-center text-2xl font-medium text-[#51A9B4] mt-3">
          Submit a Request For Information / Proposal / Quotation.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full md:w-[550px] px-4">
          <p className="text-lg font-medium">
            We’ll provide detailed information about how powerabode can be of
            help:
          </p>
          <ul className="list-disc pl-8">
            <li className="text-[#504F4F] font-medium text-md">
              Streamline and optimise your contracting and procurement
            </li>
            <li className="text-[#504F4F] font-medium text-md">
              Reduce cost and Improve value
            </li>
            <li className="text-[#504F4F] font-medium text-md">
              Third party cost reduction presentation
            </li>
            <li className="text-[#504F4F] font-medium text-md">
              Get introduced to the Academy skillset trainings
            </li>
            <li className="text-[#504F4F] font-medium text-md">
              Manage all your contracts with fine-grained control
            </li>
            <li className="text-[#504F4F] font-medium text-md">
              Outsource some , or all of your Supply Chain and Procurement
              activities.
            </li>
            <li className="text-[#504F4F] font-medium text-md">
              Introduce governance and systems fit for best practice delivery
            </li>
          </ul>
          <div className="flex justify-center">
            <button className="text-white bg-[#29385E] py-3 px-24 my-5 rounded-lg">
              Request
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-3xl text-white font-bold text-center py-3">
          Cost Efficiency Experts. Driven By Energy.
        </h1>
      </div>
      <div class="bg-[#00abb842] py-8 px-4 md:px-20">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 ">
            {" "}
             
            <div class="mb-4 md:mb-0 col-span-1 lg:col-span-3 mt-3">
              <div>
                <img className="w-[80%]" src={Logo} alt="" />
              </div>
              <div className="flex gap-3 mt-2">
                <div className="flex gap-2">
                  <span className="text-md text-[#1b3b64]">THE HAGUE</span>
                  <img className="w-5" src={The_hague} alt="" />
                </div>
                <div className="flex gap-2">
                  <span className="text-md text-[#1b3b64]">DUBAI</span>
                  <img className="w-5" src={Dubai} alt="" />
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3 mt-3">
              <div className="flex items-center gap-3 mb-3">
                <div>
                  <img className="w-10" src={Subscribe} alt="" />
                </div>
                <div>
                  <h3 class="text-3xl text-[#00abb8] font-normal">Subscribe</h3>
                  <p>To our Newsletter</p>
                </div>
              </div>
              <form action="" onSubmit={handleloadingNewsletterSubmit}>
                <div className="flex align-middle">
                  <input
                    type="email"
                    placeholder="Subscribe"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    class="bg-white text-[#504F4F] py-2 px-3 rounded mb-2 placeholder-[#504F4F] w-60"
                  />
                  {/* <button
                    type="submit"
                    class="bg-[#29385E] px-3 py-1 h-10 -ml-2 rounded-r-lg"
                  >
                    
                  </button> */}
                  <button
                    type="submit"
                    className={`bg-[#29385E] px-3 py-1 h-10 -ml-2 rounded-r-lg ${
                      loadingNewsletter === "loading"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={loadingNewsletter === "loading"}
                  >
                    {loadingNewsletter === "loading" ? (
                      <div className="flex items-center justify-center">
                        <span className="spinner-border spinner-border-sm text-white"></span>
                        O
                      </div>
                    ) : (
                      <img src={send_button} alt="" width="20px" />
                    )}
                  </button>
                </div>
              </form>
            </div>
            <div class="mb-4 md:mb-0 col-span-1 lg:col-span-3 mt-3">
              <div className="flex items-center gap-3 mb-3">
                <div>
                  <img className="w-16" src={Follow_us} alt="" />
                </div>
                <div>
                  <h3 class="text-3xl text-[#00abb8] font-normal">Follow Us</h3>
                  <p>On Social Media</p>
                </div>
              </div>
              <div class="flex gap-5 ml-14">
                <div className="bg-white p-2 rounded-full shadow-lg">
                  <a href="#">
                    <img src={Linked_in} alt="" width="25px" />
                  </a>
                </div>
                <div className="bg-white p-2 rounded-full shadow-lg">
                  <a href="#" class="">
                    <img src={Twitter} alt="" width="25px" />
                  </a>
                </div>
              </div>
            </div>
            <div class="mb-4 md:mb-0 col-span-1 lg:col-span-3 mt-3">
              <div className="flex items-center gap-3 mb-3">
                <div>
                  <img className="w-14" src={Email} alt="" />
                </div>
                <div>
                  <h3 class="text-3xl text-[#00abb8] font-normal">Email</h3>
                  <p>Contact Us</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-lg text-[#504F4F]">
                  Email:
                  <a
                    href="mailto:info@powerabode.com"
                    className="hover:underline text-[#0d6efd]"
                  >
                    info@powerabode.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <footer
        className=" px-4 md:px-10 lg:px-20"
        style={{ backgroundColor: "#F8F8F8" }}
      >
        <Row className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:px-10">
          {/* Logo and Copyright */}
          <div className="col-span-1 py-4 md:py-5 lg:py-10">
            <h4 className="text-black font-bold text-3xl mb-4">Industries</h4>
            <ul>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Gas
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Oil
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Desalination
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Renewables
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Solar
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Wind
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Hydrogen
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  LNG
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Refineries
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Processing
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Upstream
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Downstream
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Offshore
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Onshore
                </a>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="col-span-1 py-4 md:py-5 lg:py-10">
            <h4 className="text-black font-bold text-3xl mb-4">Departments</h4>
            <ul>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Finance
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  C&P
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Procurement
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Operations
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Maintenance
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Production
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md font-medium"
                >
                  Strategy
                </a>
              </li>
            </ul>
          </div>
          {/* Our Works */}
          <div className="col-span-1 py-4 md:py-5 lg:py-10">
            <h4 className="text-black font-bold text-3xl mb-4">Stakeholders</h4>
            <ul>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  CEO
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  CFO
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  COO
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Asset manager
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Project manager
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Project director
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Finance director
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Functional lead
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Operations director
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Maintenance manager
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Production manager
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Procurement manager
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 py-4 md:py-5 lg:py-10">
            <h4 className="text-black font-bold text-3xl mb-4">Stakeholders</h4>
            <ul>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Kazakhstan
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Netherlands
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  United Kingdom
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Norway
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Angola
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Ghana
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Nigeria
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  United Arab Emirates
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Qatar
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Bahrain
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Brunei
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Malaysia
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Indonesia
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Vietnam
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="text-[#747474] hover:underline text-md my-20 font-medium"
                >
                  Saudi Arabia
                </a>
              </li>
            </ul>
          </div>
        </Row>
        <Row>
          <div className="text-center pb-10">
            <p className="mt-2 mx-auto text-lg font-medium ">
              <span className="underline underline-offset-4"><a href="#">Disclaimer</a></span>{" "}
              <span className="text-2xl text-white"> | </span>{" "}
              <span className="underline underline-offset-4">
                <a href="#">Cookie & Privacy Policy</a>
              </span>{" "}
              <span className="text-2xl text-white"> | </span>{" "}
              <span className="underline underline-offset-4"><a href="#">Copyright</a></span>{" "}
              <span className="text-2xl text-white"> | </span>{" "}
              <span className="underline underline-offset-4">
                <a href="#">©powerabode.com 2024</a>
              </span>
            </p>
          </div>
        </Row>
      </footer>
    </Row>
  );
};

export default footer;
