import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Heading, Button } from "../../components/ComponentsIndex";
import { getAllBanners } from "../../ReduxToolkit/Slice/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerApi = () => {
  const dispatch = useDispatch();
  const { banners, status } = useSelector((state) => state.banner);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllBanners());
    }
  }, [dispatch, status]);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative">
      {banners && banners && banners.length > 0 ? (
        <Slider {...settings} className="overflow-hidden">
          {banners.map((banner) => (
            <div key={banner.id} className="relative">
              {/* Directly display the image */}
              <img
                src={banner.Image}
                alt={banner.Name}
                className="w-full h-[510px] lg:h-[633px] object-cover"
              />

              {/* Overlay text on the image */}
              <div className="absolute top-[30%] left-[10%] z-20 text-white space-y-4 lg:top-[35%] lg:left-[15%]">
                <Heading className="text-3xl md:text-5xl lg:text-7xl font-bold text-yellow-400">
                  {banner.Name}
                </Heading>
                <Heading className="text-xl md:text-2xl lg:text-4xl font-semibold">
                  Take a step to donate needy
                </Heading>
                <Link to={"/teacher-registration"}>
                  <Button className="px-8 py-5 text-lg md:text-xl mt-3 lg:mt-5 bg-yellow-400 text-gray-900">
                    Donate Now
                  </Button>
                </Link>
              </div>
              {/* Optional overlay effect */}
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="text-center">No banners available</div>
      )}
    </div>
  );
};

export default BannerApi;
