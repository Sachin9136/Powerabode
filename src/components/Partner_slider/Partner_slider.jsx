import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dental_plus, plant_fill, awareness, doctor_health } from "../../components/Img/ImportedImage";

const PartnerCarousel = () => {
  // Slick slider settings
  const settings = {
    dots: true, // Add dots if needed
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides shown at a time
    slidesToScroll: 1, // Number of slides to scroll per click
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 py-10">    <Slider {...settings}>
        <div className="p-3">
          <div className="bg-green-600 p-5 rounded-lg shadow-lg flex flex-col justify-center items-center h-80">
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
              <img className="max-w-full max-h-full" src={dental_plus} alt="Dental Care" />
            </div>
            <div className="text-center">
              {/* <h3 className="text-white font-semibold text-3xl">Dental Care</h3> */}
              <p className="font-medium text-2xl mt-2 text-white">
                K.K. Dental care & Implant Center poly clinic
              </p>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-green-600 p-5 rounded-lg shadow-lg flex flex-col justify-center items-center h-80">
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
              <img className="max-w-full max-h-full" src={dental_plus} alt="Dental Care" />
            </div>
            <div className="text-center">
              {/* <h3 className="text-white font-semibold text-3xl">Dental Care</h3> */}
              <p className="font-medium text-2xl mt-2 text-white">
              Ajayshree Foundation
              </p>
            </div>
          </div>
        </div>

        <div className="p-3">
          <div className="bg-green-600 p-5 rounded-lg shadow-lg flex flex-col justify-center items-center h-80">
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
              <img className="max-w-full max-h-full" src={plant_fill} alt="Environment" />
            </div>
            <div className="text-center">
              {/* <h3 className="text-white font-semibold text-3xl">Environment</h3> */}
              <p className=" font-medium text-2xl mt-2 text-white">
                Akil Bhartiya Jan Hit Samiti
              </p>
            </div>
          </div>
        </div>

        <div className="p-3">
          <div className="bg-green-600 p-5 rounded-lg shadow-lg flex flex-col justify-center items-center h-80">
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
              <img className="max-w-full max-h-full" src={awareness} alt="Awareness Programme" />
            </div>
            <div className="text-center">
              {/* <h3 className="text-white font-semibold text-3xl">Awareness Programme</h3> */}
              <p className=" font-medium text-2xl mt-2 text-white">
              Bajaj alliance life insurance
              </p>
            </div>
          </div>
        </div>

        <div className="p-3">
          <div className="bg-green-600 p-5 rounded-lg shadow-lg flex flex-col justify-center items-center h-80">
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
              <img className="max-w-full max-h-full" src={doctor_health} alt="Health Camps" />
            </div>
            <div className="text-center">
              {/* <h3 className="text-white font-semibold text-3xl">Health Camps</h3> */}
              <p className="font-medium text-2xl mt-2 text-white">Kendriya vidyalay olf</p>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-green-600 p-5 rounded-lg shadow-lg flex flex-col justify-center items-center h-80">
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
              <img className="max-w-full max-h-full" src={doctor_health} alt="Health Camps" />
            </div>
            <div className="text-center">
              {/* <h3 className="text-white font-semibold text-3xl">Health Camps</h3> */}
              <p className="font-medium text-2xl mt-2 text-white">Navyug Youth</p>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-green-600 p-5 rounded-lg shadow-lg flex flex-col justify-center items-center h-80">
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
              <img className="max-w-full max-h-full" src={doctor_health} alt="Health Camps" />
            </div>
            <div className="text-center">
              {/* <h3 className="text-white font-semibold text-3xl">Health Camps</h3> */}
              <p className="font-medium text-2xl mt-2 text-white">Elwick life sciences pvt ltd</p>
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="bg-green-600 p-5 rounded-lg shadow-lg flex flex-col justify-center items-center h-80">
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
              <img className="max-w-full max-h-full" src={doctor_health} alt="Health Camps" />
            </div>
            <div className="text-center">
              {/* <h3 className="text-white font-semibold text-3xl">Health Camps</h3> */}
              <p className="font-medium text-2xl mt-2 text-white"> Kalika mandir samiti</p>
            </div>
          </div>
        </div>
      </Slider>
      </div>

  );
};

export default PartnerCarousel;
