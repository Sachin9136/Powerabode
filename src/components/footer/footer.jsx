import React from 'react';
import {Logo, x, mail, linked_in, send_button, Get_in_touch, Whatsapp_icon} from "../Img/ImportedImage";
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

    <div className="fixed bottom-10 right-3">
      <a href="https://wa.me/971551571994" target="_blank" rel="noopener noreferrer">
        <img src={Whatsapp_icon} alt="WhatsApp Icon" width="70px" />
      </a>
    </div>

      {/* <ImageSlider /> */}
      <h2 class="text-3xl font-bold my-10 text-center">Get in Touch</h2>
      <div className='px-4 md:px-20 lg:flex gap-5 my-10'>
        <div class="w-full lg:w-1/2 bg-[#DCEEF0] py-6 px-4 md:py-12 md:px-20 rounded-3xl shadow-md">
          <h2 class="text-3xl font-bold mb-6 text-center">Book A Session</h2>
          <form>
              <div class="mb-4">
                  <input type="text" placeholder='Name' id="name" name="name" class="mt-1 block w-full border border-[#ced4da] rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-black" />
              </div>
              <div class="mb-4">
                  <input type="email" placeholder='Email' id="email" name="email" class="mt-1 block w-full border border-[#ced4da] rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-black" />
              </div>
              <div class="mb-4">
                  <input type="text" placeholder='Subject' id="subject" name="subject" class="mt-1 block w-full border border-[#ced4da] rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-black" />
              </div>
              <div class="mb-4">
                  <textarea id="message" placeholder='Message' name="message" rows="4" class="mt-1 block w-full border border-[#ced4da] rounded-lg shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder-black"></textarea> 
              </div>
              <button type="submit" className="text-white bg-[#29385E] py-3 my-5 rounded-lg w-full">Send</button>
          </form>
        </div>
        <div className='w-full lg:w-1/2'>
          <img src={Get_in_touch} alt="" />
        </div>
      </div>

      <div className='bg-white py-5'>
        <h2 className='text-center text-3xl font-bold text-[#29385E]'>“Request for RFQ"</h2>
        <p className='text-center text-2xl font-medium text-[#51A9B4] mt-3'>Submit a Request For Information / Proposal / Quotation.</p>
      </div>

      <div className='flex justify-center'> 
        <div className='w-full md:w-[550px] px-4'>
          <p className='text-lg font-medium'>We’ll provide detailed information about how powerabode can be of help:</p>
          <ul className='list-disc pl-8'>
            <li className='text-[#504F4F] font-medium text-md'>Streamline and optimise your contracting and procurement</li>
            <li className='text-[#504F4F] font-medium text-md'>Reduce cost and Improve value</li>
            <li className='text-[#504F4F] font-medium text-md'>Third party cost reduction presentation</li>
            <li className='text-[#504F4F] font-medium text-md'>Get introduced to the Academy skillset trainings</li>
            <li className='text-[#504F4F] font-medium text-md'>Manage all your contracts with fine-grained control</li>
            <li className='text-[#504F4F] font-medium text-md'>Outsource some , or all of your Supply Chain and Procurement activities.</li>
            <li className='text-[#504F4F] font-medium text-md'>Introduce governance and systems fit for best practice delivery</li>
          </ul>
          <div className='flex justify-center'> 
            <button className='text-white bg-[#29385E] py-3 px-24 my-5 rounded-lg'>Request</button>
          </div>
        </div>
      </div>

      <div className='bg-[#29385E]'>
        <h1 className='text-3xl text-white font-bold text-center py-3'>Cost Efficiency Experts. Driven By Energy.</h1>
      </div>
      <div class="bg-white py-8">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 ">   
                <div class="mb-4 md:mb-0 col-span-1 lg:col-span-3 mt-3">
                    <img src={Logo} alt="" />
                </div>
                <div class="mb-4 md:mb-0 col-span-1 lg:col-span-2 mt-3">
                    <h3 class="text-2xl font-bold mb-2">Follow Us</h3>
                    <div class="flex gap-5 items-center">
                      <div className='bg-[#29385E] p-4 rounded-2xl'>
                        <a href="#"><img src={x} alt="" width="20px" /></a>
                      </div>
                      <div className='bg-[#29385E] p-4 rounded-2xl'>
                        <a href="#" class=""><img src={linked_in} alt="" width="20px" /></a>
                      </div>
                    </div>
                </div>
                <div class="mb-4 md:mb-0 col-span-1 lg:col-span-4 mt-3">
                    <h3 class="text-2xl font-bold mb-2">Contact Us</h3>
                      <div className='flex items-center gap-3'>
                        <div className='bg-[#29385E] p-4 rounded-2xl'>
                          <a href="#"><img src={mail} alt="" width="23px" /></a>
                        </div>
                          <div className='text-2xl text-[#504F4F]'>
                            <a href="mailto:info@powerabode.com" className="hover:underline">
                              info@powerabode.com
                            </a>
                          </div>
                      </div>
                  </div>
                <div className='col-span-1 lg:col-span-3 mt-3'>
                    <h3 class="text-3xl font-bold mb-2">Subscribe</h3>
                    <div className='flex align-middle'>
                      <input type="email" placeholder="Subscribe" class="bg-white text-[#504F4F] border-t-2 border-l-2 border-b-2 border-[#504F4F] py-2 px-3 rounded mb-2 placeholder-[#504F4F] w-80"/>
                      <button class="bg-[#29385E] px-3 py-1 h-11 -ml-2 rounded-r-lg"><img src={send_button} alt="" width="19px" /></button>
                    </div>
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
