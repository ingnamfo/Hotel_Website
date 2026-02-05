import Slider from "react-slick";

import React from "react";

import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner4 from "../assets/banner4.jpg";

export default function Bannerslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  const banners = [
   
    { id: 2, image: banner1 },
    { id: 3, image: banner2},
    { id: 4, image: banner4 },
   
  ];

  return (
    <div className="w-full  ">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="h-[400pxl]">
            <img
              src={banner.image}
              className="w-full h-full object-cover rounded-xl -mt-12"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
