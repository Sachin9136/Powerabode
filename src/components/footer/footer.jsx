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
import { Row } from "../../components/ComponentsIndex";
import { useDispatch, useSelector } from "react-redux";
import {
  createContact,
  createNewsletter,
} from "../../ReduxToolkit/Slice/Contact";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const footer = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

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
    // Combine the country code and number before dispatching
    const fullPhoneNumber = formData.countryCode + formData.number;
    // Create a new formData object with the full phone number
    const updatedFormData = {
      ...formData,
      number: fullPhoneNumber,
    };
    // Dispatch the action with the updated formData
    dispatch(createContact(updatedFormData));
  };

  // Handle form submission
  const handleloadingNewsletterSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
    };
    dispatch(createNewsletter(formData));
  };

  useEffect(() => {
    if (loadingStatus === "succeeded") {
      setFormData({ name: "", email: "", reason: "", message: "", number: "" });
      // Redirect to the Calendly link
      closeModal();
    }
    if (loadingNewsletter === "succeeded") {
      setEmail("");
      // Redirect to the Calendly link
    }
  }, [loadingStatus, loadingNewsletter]);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // seach

  return (
    <Row>
      {/* <div className="fixed bottom-5 left-3">
        <a
          href="https://wa.me/971551571994"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Whatsapp_icon} alt="WhatsApp Icon" width="70px" />
        </a>
      </div> */}
      {/* <div className="fixed bottom-10 left-3"> */}
      {/* <Chatbot /> */}
      {/* </div> */}

      {/* <ImageSlider /> */}
      <h2 className="text-3xl font-bold my-10 text-center text-[#29385E]">
        Get in Touch
      </h2>
      <div className="px-4 md:px-20 lg:flex gap-5 my-10">
        <div className="w-full lg:w-1/2 py-6 px-4 md:py-12 md:px-16 rounded-xl border border-black">
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
              <div className="flex items-center space-x-1">
                {/* Country Code Dropdown */}
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="mt-1 text-sm block border border-black shadow-sm py-[10px] px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="+1">+1 (USA/Canada)</option>
                  <option value="+7">+7 (Russia)</option>
                  <option value="+20">+20 (Egypt)</option>
                  <option value="+27">+27 (South Africa)</option>
                  <option value="+30">+30 (Greece)</option>
                  <option value="+31">+31 (Netherlands)</option>
                  <option value="+32">+32 (Belgium)</option>
                  <option value="+33">+33 (France)</option>
                  <option value="+34">+34 (Spain)</option>
                  <option value="+36">+36 (Hungary)</option>
                  <option value="+39">+39 (Italy)</option>
                  <option value="+40">+40 (Romania)</option>
                  <option value="+41">+41 (Switzerland)</option>
                  <option value="+44">+44 (United Kingdom)</option>
                  <option value="+45">+45 (Denmark)</option>
                  <option value="+46">+46 (Sweden)</option>
                  <option value="+47">+47 (Norway)</option>
                  <option value="+48">+48 (Poland)</option>
                  <option value="+49">+49 (Germany)</option>
                  <option value="+51">+51 (Peru)</option>
                  <option value="+52">+52 (Mexico)</option>
                  <option value="+53">+53 (Cuba)</option>
                  <option value="+54">+54 (Argentina)</option>
                  <option value="+55">+55 (Brazil)</option>
                  <option value="+56">+56 (Chile)</option>
                  <option value="+57">+57 (Colombia)</option>
                  <option value="+58">+58 (Venezuela)</option>
                  <option value="+60">+60 (Malaysia)</option>
                  <option value="+61">+61 (Australia)</option>
                  <option value="+62">+62 (Indonesia)</option>
                  <option value="+63">+63 (Philippines)</option>
                  <option value="+64">+64 (New Zealand)</option>
                  <option value="+65">+65 (Singapore)</option>
                  <option value="+66">+66 (Thailand)</option>
                  <option value="+81">+81 (Japan)</option>
                  <option value="+82">+82 (South Korea)</option>
                  <option value="+84">+84 (Vietnam)</option>
                  <option value="+86">+86 (China)</option>
                  <option value="+90">+90 (Turkey)</option>
                  <option value="+91">+91 (India)</option>
                  <option value="+92">+92 (Pakistan)</option>
                  <option value="+93">+93 (Afghanistan)</option>
                  <option value="+94">+94 (Sri Lanka)</option>
                  <option value="+95">+95 (Myanmar)</option>
                  <option value="+98">+98 (Iran)</option>
                  <option value="+211">+211 (South Sudan)</option>
                  <option value="+212">+212 (Morocco)</option>
                  <option value="+213">+213 (Algeria)</option>
                  <option value="+216">+216 (Tunisia)</option>
                  <option value="+218">+218 (Libya)</option>
                  <option value="+220">+220 (Gambia)</option>
                  <option value="+221">+221 (Senegal)</option>
                  <option value="+222">+222 (Mauritania)</option>
                  <option value="+223">+223 (Mali)</option>
                  <option value="+224">+224 (Guinea)</option>
                  <option value="+225">+225 (Ivory Coast)</option>
                  <option value="+226">+226 (Burkina Faso)</option>
                  <option value="+227">+227 (Niger)</option>
                  <option value="+228">+228 (Togo)</option>
                  <option value="+229">+229 (Benin)</option>
                  <option value="+230">+230 (Mauritius)</option>
                  <option value="+231">+231 (Liberia)</option>
                  <option value="+232">+232 (Sierra Leone)</option>
                  <option value="+233">+233 (Ghana)</option>
                  <option value="+234">+234 (Nigeria)</option>
                  <option value="+235">+235 (Chad)</option>
                  {/* <option value="+236">+236 (Central African Republic)</option> */}
                  <option value="+237">+237 (Cameroon)</option>
                  <option value="+238">+238 (Cape Verde)</option>
                  {/* <option value="+239">+239 (São Tomé and Príncipe)</option> */}
                  {/* <option value="+240">+240 (Equatorial Guinea)</option> */}
                  <option value="+241">+241 (Gabon)</option>
                  {/* <option value="+242">+242 (Congo - Brazzaville)</option> */}
                  {/* <option value="+243">+243 (Congo - Kinshasa)</option> */}
                  <option value="+244">+244 (Angola)</option>
                  {/* <option value="+245">+245 (Guinea-Bissau)</option> */}
                  <option value="+248">+248 (Seychelles)</option>
                  <option value="+249">+249 (Sudan)</option>
                  <option value="+250">+250 (Rwanda)</option>
                  <option value="+251">+251 (Ethiopia)</option>
                  <option value="+252">+252 (Somalia)</option>
                  <option value="+253">+253 (Djibouti)</option>
                  <option value="+254">+254 (Kenya)</option>
                  <option value="+255">+255 (Tanzania)</option>
                  <option value="+256">+256 (Uganda)</option>
                  <option value="+257">+257 (Burundi)</option>
                  <option value="+258">+258 (Mozambique)</option>
                  <option value="+260">+260 (Zambia)</option>
                  <option value="+261">+261 (Madagascar)</option>
                  <option value="+263">+263 (Zimbabwe)</option>
                  <option value="+264">+264 (Namibia)</option>
                  <option value="+265">+265 (Malawi)</option>
                  <option value="+266">+266 (Lesotho)</option>
                  <option value="+267">+267 (Botswana)</option>
                  <option value="+268">+268 (Eswatini)</option>
                  <option value="+269">+269 (Comoros)</option>
                  <option value="+290">+290 (Saint Helena)</option>
                  <option value="+291">+291 (Eritrea)</option>
                  <option value="+297">+297 (Aruba)</option>
                  <option value="+298">+298 (Faroe Islands)</option>
                  <option value="+299">+299 (Greenland)</option>
                </select>

                {/* Phone Number Input */}
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  className="mt-1 block w-full border py-3 text-sm border-black shadow-sm px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-black"
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
            <li className="text-[#29385E] font-medium text-md">
              Streamline and optimise your contracting and procurement
            </li>
            <li className="text-[#29385E] font-medium text-md">
              Reduce cost and Improve value
            </li>
            <li className="text-[#29385E] font-medium text-md">
              Third party cost reduction presentation
            </li>
            <li className="text-[#29385E] font-medium text-md">
              Get introduced to the Academy skillset trainings
            </li>
            <li className="text-[#29385E] font-medium text-md">
              Manage all your contracts with fine-grained control
            </li>
            <li className="text-[#29385E] font-medium text-md">
              Outsource some , or all of your Supply Chain and Procurement
              activities.
            </li>
            <li className="text-[#29385E] font-medium text-md">
              Introduce governance and systems fit for best practice delivery
            </li>
          </ul>
          <div className="flex justify-center">
            <button
              className="text-white bg-[#29385E] py-3 px-24 my-5 rounded-lg"
              onClick={openModal} // Open the modal on button click
            >
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
      <div className="bg-[#00abb842] py-8 px-4 md:px-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 ">
            {" "}
             
            <div className="mb-4 md:mb-0 col-span-1 lg:col-span-3 mt-3">
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
                  <h3 className="text-3xl text-[#00abb8] font-normal">
                    Subscribe
                  </h3>
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
                    className="bg-white text-[#29385E] py-2 px-3 rounded mb-2 placeholder-[#29385E] w-60"
                  />
                  {/* <button
                    type="submit"
                    className="bg-[#29385E] px-3 py-1 h-10 -ml-2 rounded-r-lg"
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
            <div className="mb-4 md:mb-0 col-span-1 lg:col-span-3 mt-3">
              <div className="flex items-center gap-3 mb-3">
                <div>
                  <img className="w-16" src={Follow_us} alt="" />
                </div>
                <div>
                  <h3 className="text-3xl text-[#00abb8] font-normal">
                    Follow Us
                  </h3>
                  <p>On Social Media</p>
                </div>
              </div>
              <div className="flex gap-5 ml-14">
                <div className="bg-white p-2 rounded-full shadow-lg">
                  <a
                    href="https://www.linkedin.com/company/powerabode/"
                    target="_blank"
                  >
                    <img src={Linked_in} alt="" width="25px" />
                  </a>
                </div>
                <div className="bg-white p-3 rounded-full shadow-lg">
                  <a
                    href="https://x.com/i/flow/login?redirect_after_login=%2Fpowerabode_com"
                    target="_blank"
                    className=""
                  >
                    {/* <img src={Twitter} alt="" width="25px" /> */}
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </div>
              </div>
            </div>
            <div className="mb-4 md:mb-0 col-span-1 lg:col-span-3 mt-3">
              <div className="flex items-center gap-3 mb-3">
                <div>
                  <img className="w-14" src={Email} alt="" />
                </div>
                <div>
                  <h3 className="text-3xl text-[#00abb8] font-normal">Email</h3>
                  <p>Contact Us</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-lg text-[#29385E]">
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
            <h4 className="text-[#29385E] font-bold text-2xl mb-4">
              Industries
            </h4>
            <ul>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Gas</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Oil</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Desalination
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Renewables</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Solar</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Wind</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Hydrogen</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">LNG</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Refineries</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Processing</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Upstream</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Downstream</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Offshore</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Onshore</p>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div className="col-span-1 py-4 md:py-5 lg:py-10">
            <h4 className="text-[#29385E] font-bold text-2xl mb-4">
              Departments
            </h4>
            <ul>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Finance</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">C&P</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Procurement
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Operations</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Maintenance
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Production</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">Strategy</p>
              </li>
            </ul>
          </div>
          {/* Our Works */}
          <div className="col-span-1 py-4 md:py-5 lg:py-10">
            <h4 className="text-[#29385E] font-bold text-2xl mb-4">
              Stakeholders
            </h4>
            <ul>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">CEO</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">CFO</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">COO</p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Asset manager
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Project manager
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Project director
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Finance director
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Functional lead
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Operations director
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Maintenance manager
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Production manager
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Procurement manager
                </p>
              </li>
            </ul>
          </div>
          <div className="col-span-1 py-4 md:py-5 lg:py-10">
            <h4 className="text-[#29385E] font-bold text-2xl mb-4">
              Stakeholders
            </h4>
            <ul>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Kazakhstan
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Netherlands
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  United Kingdom
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Norway
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Angola
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Ghana
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Nigeria
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  United Arab Emirates
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Qatar
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Bahrain
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Brunei
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Malaysia
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Indonesia
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Vietnam
                </p>
              </li>
              <li className="py-1">
                <p className="text-[#747474] text-md font-medium">
                  Saudi Arabia
                </p>
              </li>
            </ul>
          </div>
        </Row>
        <Row>
          <div className="text-center pb-10">
            <p className="mt-2 mx-auto text-lg font-medium ">
              <span className="underline underline-offset-4">
                <Link to="/disclaimer">Disclaimer</Link>
              </span>{" "}
              <span className="text-2xl text-white"> | </span>{" "}
              <span className="underline underline-offset-4">
                <Link to="/privacy_policy">Cookie & Privacy Policy</Link>
              </span>{" "}
              <span className="text-2xl text-white"> | </span>{" "}
              <span className="underline underline-offset-4">
                <Link to="/copyright">Copyright</Link>
              </span>{" "}
              <span className="text-2xl text-white"> | </span>{" "}
              <span className="underline underline-offset-4">
                <a href="#">©powerabode.com 2024</a>
              </span>
            </p>
          </div>
        </Row>
      </footer>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full md:w-1/2">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </button>
            <h2 className="text-center text-2xl font-bold mb-5 text-[#29385E]">
              Request for Information / Proposal / Quotation
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
        </div>
      )}
    </Row>
  );
};

export default footer;
