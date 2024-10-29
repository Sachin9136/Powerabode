import React from 'react';
import Banner from "../../components/Banners/Banners";
import { Dental_Treatment_Banner, dental_1 } from "../../components/Img/ImportedImage";
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



const Programme_Services = () => {

  return (
    <>
        <Row>
            <Banner 
                bannerImage={Dental_Treatment_Banner}
                headingText="Services & Dental Treatment"
                textColor="#FFED05"
            />
        </Row>

        <Row className="bg-white px-4 md:px-20 py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
                {/* Image Section */}
                <div className="md:w-2/5 w-full">
                    <img src={dental_1} alt="" width="100%" />
                </div>
                {/* Text Section */}
                <div className="md:w-3/5 w-full">
                    <p className="text-2xl pb-2 text-gray-700 mb-6">
                     One of the biggest decisions of your life is education. What you learn is the ultimate determinant of what you become. From kindergarten to your higher secondary, you've surpassed all the classes with the decisions of your parents and all the influences. But it’s now time to make your own choices after successfully completing your 12th board exams. What to do after 12th might be your lingering question of all time. Deciding on courses after 12th science and navigating career options afterwards might feel like a brain-bending task.
                    </p>
                    <p className="text-2xl pb-2 text-gray-700 mb-6">
                    One of the biggest decisions of your life is education. What you learn is the ultimate determinant of what you become. From kindergarten to your higher secondary, you've surpassed all the classes with the decisions of your parents and all the influences. But it’s now time to make your own choices after successfully completing your 12th board exams. What to do after 12th might be your lingering question of all time. Deciding on courses after 12th science and navigating career options afterwards might feel like a brain-bending task.
                    </p>
                </div>
            </div>
        </Row>

        <Footer />
    </>
  )
}

export default Programme_Services
