import React, { useState } from 'react';
import Banner from "../../components/Banners/Banners";
import { bannerAboutUs, dental_plus, plant_fill, awareness, doctor_health, Medicine_icon, News_Blog, Donation_img, Volunteer_img } from "../../components/Img/ImportedImage";
import {
    Column,
    Heading,
    Row,
    Span,
    Wraper,
    Button,
  } from "../../components/ComponentsIndex";
  import Footer from "../../components/footer/footer";
    import ServiceCard from '../../components/Our_services_card/Our_services_card';
import CommanBanner from '../../components/Banners/CommanBanner';
import { Journy_highlights } from "../../components/Img/ImportedImage";



const Get_Involved = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here (e.g., sending data to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <>
        <CommanBanner children={Journy_highlights} heading={"Get-involved"}/>

        <Row>
            <Heading className="text-4xl font-bold text-center mt-5">
                Partners
            </Heading>
            <Heading className="text-2xl font-semibold text-center mt-3 px-4 text-[#06B13D]">
                Together for a Healthier Future
            </Heading>
        </Row>


        <Row className="py-5">
          
          <Column className="flex px-5 md:px-20">
            <div className="columns-1 md:columns-2 lg:columns-4">
              <div className="block rounded-lg shadow-xl h-72 pt-10" >
                <Wraper className="flex justify-center">
                  <div className="flex align-center justify-center w-24">
                    <img src={dental_plus} alt="Image 1" />
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className="font-semibold text-3xl text-center flex justify-center">
                    Dental Care
                  </Heading>
                  <Heading className="font-medium text-[#06B13D] text-2xl pt-3 text-center flex justify-center">
                  K.K.Dental care & Implant Center poly clinic
                  </Heading>
                </div>
              </div>
              <div className="block rounded-lg shadow-xl h-72 pt-10" >
                <Wraper className="flex justify-center">
                  <div className="flex align-center justify-center w-24">
                    <img src={plant_fill} alt="Image 1" />
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className="font-semibold text-3xl text-center flex justify-center">
                  Environment
                  </Heading>
                  <Heading className="font-medium text-[#06B13D] text-2xl pt-3 text-center flex justify-center">
                  Akil  Bhartiya Jan Hit Samiti
                  </Heading>
                </div>
              </div>
              <div className="block rounded-lg shadow-xl h-72 pt-10" >
                <Wraper className="flex justify-center">
                  <div className="flex align-center justify-center w-24">
                    <img src={awareness} alt="Image 1" />
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className="font-semibold text-3xl text-center flex justify-center">
                  Awareness Programme
                  </Heading>
                  <Heading className="font-medium text-[#06B13D] text-2xl pt-3 text-center flex justify-center">
                  Kendriya Vidhyalay olf
                  </Heading>
                </div>
              </div>
              <div className="block rounded-lg shadow-xl h-72 pt-10" >
                <Wraper className="flex justify-center">
                  <div className="flex align-center justify-center w-24">
                    <img src={doctor_health} alt="Image 1" />
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className="font-semibold text-3xl text-center flex justify-center">
                  Health Camps
                  </Heading>
                  <Heading className="font-medium text-[#06B13D] text-2xl pt-3 text-center flex justify-center">
                  Ajayshree Foundation
                  </Heading>
                </div>
              </div>
            </div>
          </Column>
      </Row>

      <Row className="py-5">
          <Column className="flex justify-center px-5 md:px-20">
              <div className="rounded-lg pt-10 w-full md:w-auto md:px-5 shadow-lg h-72">
                <Wraper className="flex justify-center">
                  <div className="flex align-center justify-center w-24">
                    <img src={Medicine_icon} alt="Image 1" />
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className=" font-semibold text-3xl text-center flex justify-center">
                  Ayurved Medicine
                  </Heading>
                  <Heading className="font-medium text-[#06B13D] text-2xl pt-3 text-center flex justify-center">
                    Nayug Youth
                  </Heading>
                </div>
              </div>
          </Column>
      </Row>

        <Row>
            <Heading className="text-4xl font-bold text-center mt-10">
              Internship Programme
            </Heading>
            <Heading className="text-2xl font-semibold text-center mt-3 px-4 text-[#06B13D]">
              Empower yourself while making a difference in the world. Apply now and be part of the solution!
            </Heading>
        </Row>

        <Row className="py-5">
          <Column className="justify-center pt-14 px-5 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="rounded-lg pt-10 pb-14 mb-24 w-full md:w-auto md:px-5 bg-[#06B13D]">
                <Wraper className="flex justify-center absolute -mt-[90px] -ml-[5px] md:-ml-[25px]">
                  <div className="w-24 h-24 bg-[#06B13D] border-4 border-white rounded-full flex justify-center">
                    <Span className="text-[#FFED05] text-5xl font-bold my-auto">1</Span>
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className=" font-semibold text-3xl text-center flex justify-center text-[#FFED05]">
                    Health <br /> Awareness
                  </Heading>
                  <ul className='list-disc pt-5'>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Orientation & Introduction to Health Awareness</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Community Engagement</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Educational Workshop</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Crowdfunding</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Evaluation & feedback</li>
                  </ul>
                </div>
                <div className='flex justify-center'>
                  <Button children={"Apply Now"} className="px-5 py-3 text-2xl absolute mt-7"/>
                </div>
              </div>

              <div className="rounded-lg pt-10 pb-14 mb-24 w-full md:w-auto md:px-5 bg-[#06B13D]">
                <Wraper className="flex justify-center absolute -mt-[90px] -ml-[5px] md:-ml-[25px]">
                  <div className="w-24 h-24 bg-[#06B13D] border-4 border-white rounded-full flex justify-center">
                    <Span className="text-[#FFED05] text-5xl font-bold my-auto">2</Span>
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className=" font-semibold text-3xl text-center flex justify-center text-[#FFED05]">
                    Mental Health <br /> Awareness
                  </Heading>
                  <ul className='list-disc pt-5'>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Orientation & Introduction to Health Awareness</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Community Engagement</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Educational Workshop</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Crowdfunding</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Evaluation & feedback</li>
                  </ul>
                </div>
                <div className='flex justify-center'>
                  <Button children={"Apply Now"} className="px-5 py-3 text-2xl absolute mt-7"/>
                </div>
              </div>

              <div className="rounded-lg pt-10 pb-14 mb-24 w-full md:w-auto md:px-5 bg-[#06B13D]">
                <Wraper className="flex justify-center absolute -mt-[90px] -ml-[5px] md:-ml-[25px]">
                  <div className="w-24 h-24 bg-[#06B13D] border-4 border-white rounded-full flex justify-center">
                    <Span className="text-[#FFED05] text-5xl font-bold my-auto">3</Span>
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className=" font-semibold text-3xl text-center flex justify-center text-[#FFED05]">
                    Environmental<br /> Conservation
                  </Heading>
                  <ul className='list-disc pt-5'>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Orientation & Introduction to Health Awareness</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Community Engagement</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Educational Workshop</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Crowdfunding</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Evaluation & feedback</li>
                  </ul>
                </div>
                <div className='flex justify-center'>
                  <Button children={"Apply Now"} className="px-5 py-3 text-2xl absolute mt-7"/>
                </div>
              </div>
              
              <div className="rounded-lg pt-10 pb-14 mb-24 w-full md:w-auto md:px-5 bg-[#06B13D]">
                <Wraper className="flex justify-center absolute -mt-[90px] -ml-[5px] md:-ml-[25px]">
                  <div className="w-24 h-24 bg-[#06B13D] border-4 border-white rounded-full flex justify-center">
                    <Span className="text-[#FFED05] text-5xl font-bold my-auto">4</Span>
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className=" font-semibold text-3xl text-center flex justify-center text-[#FFED05]">
                    Environmental<br /> Conservation
                  </Heading>
                  <ul className='list-disc pt-5'>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Orientation & Introduction to Health Awareness</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Community Engagement</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Educational Workshop</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Crowdfunding</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Evaluation & feedback</li>
                  </ul>
                </div>
                <div className='flex justify-center'>
                  <Button children={"Apply Now"} className="px-5 py-3 text-2xl absolute mt-7"/>
                </div>
              </div>

              <div className="rounded-lg pt-10 pb-14 mb-24 w-full md:w-auto md:px-5 bg-[#06B13D]">
                <Wraper className="flex justify-center absolute -mt-[90px] -ml-[5px] md:-ml-[25px]">
                  <div className="w-24 h-24 bg-[#06B13D] border-4 border-white rounded-full flex justify-center">
                    <Span className="text-[#FFED05] text-5xl font-bold my-auto">5</Span>
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className=" font-semibold text-3xl text-center flex justify-center text-[#FFED05]">
                    Environmental<br /> Conservation
                  </Heading>
                  <ul className='list-disc pt-5'>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Orientation & Introduction to Health Awareness</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Community Engagement</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Educational Workshop</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Crowdfunding</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Evaluation & feedback</li>
                  </ul>
                </div>
                <div className='flex justify-center'>
                  <Button children={"Apply Now"} className="px-5 py-3 text-2xl absolute mt-7"/>
                </div>
              </div>

              <div className="rounded-lg pt-10 pb-14 mb-24 w-full md:w-auto md:px-5 bg-[#06B13D]">
                <Wraper className="flex justify-center absolute -mt-[90px] -ml-[5px] md:-ml-[25px]">
                  <div className="w-24 h-24 bg-[#06B13D] border-4 border-white rounded-full flex justify-center">
                    <Span className="text-[#FFED05] text-5xl font-bold my-auto">6</Span>
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className=" font-semibold text-3xl text-center flex justify-center text-[#FFED05]">
                    Environmental<br /> Conservation
                  </Heading>
                  <ul className='list-disc pt-5'>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Orientation & Introduction to Health Awareness</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Community Engagement</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Educational Workshop</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Crowdfunding</li>
                    <li className='text-xl md:text-2xl ml-4 md:ml-0 font-semibold py-1'>Evaluation & feedback</li>
                  </ul>
                </div>
                <div className='flex justify-center'>
                  <Button children={"Apply Now"} className="px-5 py-3 text-2xl absolute mt-7"/>
                </div>
              </div>

              
          </Column>
      </Row>

      <Row>
            <Heading className="text-4xl font-bold text-center">
              Give A Donation
            </Heading>
            <Heading className="text-2xl font-semibold text-center mt-0 md:mt-3 px-4 text-[#06B13D] mb-10">
              Your contribution can make a meaningful impact on lives. Every donation, no matter the size, brings us closer <br /> to positive change. Join us in creating a brighter future for those in need. Together, we can make a difference <br /> that lasts a lifetime.
            </Heading>
        </Row>

        <Row className="bg-white px-4 md:px-20 pb-10 md:py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10 shadow-xl rounded-2xl p-5">
                {/* Image Section */}
                <div className="md:w-2/4 w-full my-4 md:my-0">
                    <img src={Donation_img} alt="" width="100%" />
                </div>
                {/* Text Section */}
                <div className="md:w-2/4 w-full">
                    <Heading className="text-3xl md:text-5xl font-semibold pb-2 mb-2 md:mb-4 text-[#06B13D]">
                      Donation For Health
                    </Heading>
                    <p className="text-xl font-medium pb-2 mb-6">
                      Sponsoring healthcare is a commitment to promoting good health and ensuring access to primary care for all. Your support can bridge gaps, providing essential medical services to those in need. By sponsoring healthcare initiatives, you contribute to a healthier society, where everyone has the opportunity to lead a life of well-being. Together, let's invest in the foundation of good health and make quality primary care accessible to everyone.
                    </p>
                    <div className='flex justify-center'>
                      <Button children={"Click Here to Donate"} className="px-5 py-3 text-2xl w-full"/>
                    </div>
                </div>
            </div>

            <div className="container my-10 mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10 shadow-xl rounded-2xl p-5">
                {/* Image Section */}
                <div className="md:w-2/4 w-full my-4 md:my-0">
                    <img src={Donation_img} alt="" width="100%" />
                </div>
                {/* Text Section */}
                <div className="md:w-2/4 w-full">
                    <Heading className="text-3xl md:text-5xl font-semibold pb-2 mb-2 md:mb-4 text-[#06B13D]">
                      Donation For Health
                    </Heading>
                    <p className="text-xl font-medium pb-2 mb-6">
                      Sponsoring healthcare is a commitment to promoting good health and ensuring access to primary care for all. Your support can bridge gaps, providing essential medical services to those in need. By sponsoring healthcare initiatives, you contribute to a healthier society, where everyone has the opportunity to lead a life of well-being. Together, let's invest in the foundation of good health and make quality primary care accessible to everyone.
                    </p>
                    <div className='flex justify-center'>
                      <Button children={"Click Here to Donate"} className="px-5 py-3 text-2xl w-full"/>
                    </div>
                </div>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10 shadow-xl rounded-2xl p-5">
                {/* Image Section */}
                <div className="md:w-2/4 w-full my-4 md:my-0">
                    <img src={Donation_img} alt="" width="100%" />
                </div>
                {/* Text Section */}
                <div className="md:w-2/4 w-full">
                    <Heading className="text-3xl md:text-5xl font-semibold pb-2 mb-2 md:mb-4 text-[#06B13D]">
                      Donation For Health
                    </Heading>
                    <p className="text-xl font-medium pb-2 mb-6">
                      Sponsoring healthcare is a commitment to promoting good health and ensuring access to primary care for all. Your support can bridge gaps, providing essential medical services to those in need. By sponsoring healthcare initiatives, you contribute to a healthier society, where everyone has the opportunity to lead a life of well-being. Together, let's invest in the foundation of good health and make quality primary care accessible to everyone.
                    </p>
                    <div className='flex justify-center'>
                      <Button children={"Click Here to Donate"} className="px-5 py-3 text-2xl w-full"/>
                    </div>
                </div>
            </div>
        </Row>

        <Row>
            <Heading className="text-4xl mt-10 font-bold text-center">
              Volunteer
            </Heading>
            <Heading className="text-2xl font-semibold text-center mt-0 md:mt-3 px-4 text-[#06B13D]">
              Joining Kawach as a volunteer means becoming a crucial part of a collective effort for positive change.
            </Heading>
        </Row>

        <Row>
          <div className="block lg:flex justify-center items-center gap-10 py-0 md:py-10 px-4 md:px-20">
            {/* Form Section */}
            <div className="bg-white shadow-lg rounded-lg px-4 md:px-16 py-20 lg:w-2/4 w-full">
              <h2 className="text-xl font-bold text-center mb-5">
                I want to join the webinar, <br /> Sign me up!
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#06B13D] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#06B13D] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#06B13D] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#06B13D] rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#FFED05] text-[#06B13D] text-xl font-semibold py-3 rounded-md hover:bg-yellow-500 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Image Section */}
            <div className="w-4/4 md:w-4/4 lg:w-2/4 w-full my-10">
              <img src={Volunteer_img} alt="" width="100%" />
            </div>
          </div>
        </Row>

        <Footer />
    </>
  )
}

export default Get_Involved
