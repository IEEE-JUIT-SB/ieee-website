import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UEBox from "./UEBox";
import "./UEBox.css"

function UESlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <UEBox
          date="08"
          month="March"
          year="2023"
          name="R&D Expo"
          about="R&D Expo is one of the biggest tech fest and flagship event of IEEE JUIT SB."
        />
        <UEBox
          date="06"
          month="April"
          year="2023"
          name="Enigma"
          about="R&D Expo is one of the biggest tech fest and flagship event of IEEE JUIT SB."
        />
        <UEBox
          date="02"
          month="May"
          year="2023"
          name="Mindscape"
          about="R&D Expo is one of the biggest tech fest and flagship event of IEEE JUIT SB."
        />
      </Slider>
    </div>
  );
}

export default UESlider;
