import React from 'react';
import logo from "../../assets/Images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the X (Twitter) and LinkedIn icons
import {
    Column,
    Heading,
    Row,
    Span,
    Wraper,
    Button,
  } from "../../components/ComponentsIndex";

const footer = () => {
  return (
    <Row>
      <div class="bg-white py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between">   

                <div class="mb-4 md:mb-0">
                    <img src={logo} alt="" />
                </div>
                <div class="mb-4 md:mb-0">
                    <h3 class="text-2xl font-bold mb-2">Follow Us</h3>
                    <div class="flex">
                        <a href="#" class="mr-4"><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href="#" class="mr-4"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
                <div class="mb-4 md:mb-0">
                    <h3 class="text-2xl font-bold mb-2">Contact Us</h3>
                    <a href="mailto:info@powerabode.com" class="text-white">info@powerabode.com</a>
                </div>
                <div>
                    <h3 class="text-3xl font-bold mb-2">Subscribe</h3>
                    <input type="email" placeholder="Your Email" class="bg-white text-[#504F4F] border-2 border-[#504F4F] py-2 px-3 rounded mb-2" />
                    <button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
      {/* Footer Section */}
      <footer className=" text-white px-4 md:px-10 lg:px-20" 
      style={{ backgroundColor: "#29385E" }}>
        <Row className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:px-10">
          {/* Logo and Copyright */}
          <div className="col-span-1 py-4 md:py-5 lg:py-10">
            <h4 className="text-white font-medium text-3xl mb-4">Industries</h4>
            <ul>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Gas</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Oil</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Desalination</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Renewables</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Solar</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Wind</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Hydrogen</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">LNG</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Refineries</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Processing</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Upstream</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Downstream</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Offshore</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Onshore</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 py-4 md:py-5 lg:py-10">
            <h4 className="text-white font-bold text-3xl mb-4">Departments</h4>
            <ul>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Finance</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">C&P</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Procurement</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Operations</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Maintenance</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Production</a></li>
              <li className='py-1'><a href="#contact" className="text-white hover:underline text-md font-medium">Strategy</a></li>
            </ul>
          </div>

          {/* Our Works */}
          <div className="col-span-1 py-4 md:py-5 lg:py-10">
            <h4 className="text-white font-bold text-3xl mb-4">Stakeholders</h4>
            <ul>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">CEO</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">CFO</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">COO</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Asset manager</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Project manager</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Project director</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Finance director</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Functional lead</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Operations director</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Maintenance manager</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Production manager</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Procurement manager</a></li>
            </ul>
          </div>

          <div className="col-span-1 py-4 md:py-5 lg:py-10">
            <h4 className="text-white font-bold text-3xl mb-4">Stakeholders</h4>
            <ul>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Kazakhstan</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Netherlands</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">United Kingdom</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Norway</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Angola</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Ghana</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Nigeria</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">United Arab Emirates</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Qatar</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Bahrain</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Brunei</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Malaysia</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Indonesia</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Vietnam</a></li>
              <li className='py-1'><a href="#works" className="text-white hover:underline text-md my-20 font-medium">Saudi Arabia</a></li>
            </ul>
          </div>
        </Row>
        <Row>
          <div className='text-center pb-10'>
            <p className="mt-2 mx-auto text-white text-lg font-medium ">
            <span className='underline underline-offset-4'>Disclaimer</span> <span className="text-2xl text-white"> | </span> <span className='underline underline-offset-4'>Cookie & Privacy Policy</span> <span className="text-2xl text-white"> | </span> <span className='underline underline-offset-4'>Copyright</span> <span className="text-2xl text-white"> | </span> <span className='underline underline-offset-4'>©powerabode.com 2024</span>
            </p>
          </div>
        </Row>
      </footer>
    </Row>
  )
}

export default footer
