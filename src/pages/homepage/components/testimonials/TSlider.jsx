import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Person1 from "./Assets/person1.jpg";
import "./Testimonials.css";
import TCard from "./TCard";

function TSlider() {
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
        <TCard
          image={Person1}
          name="Ishita"
          testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        dolorum praesentium natus nisi eveniet corporis ex. Similique
        doloribus harum ullam. Odit numquam ea non tempore earum nisi quaerat
        deleniti beatae?"
        />
        <TCard
          image={Person1}
          name="Ishita"
          testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        dolorum praesentium natus nisi eveniet corporis ex. Similique
        doloribus harum ullam. Odit numquam ea non tempore earum nisi quaerat
        deleniti beatae?"
        />
        <TCard
          image={Person1}
          name="Ishita"
          testimonial="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
        dolorum praesentium natus nisi eveniet corporis ex. Similique
        doloribus harum ullam. Odit numquam ea non tempore earum nisi quaerat
        deleniti beatae?"
        />
      </Slider>
    </div>
  );
}

export default TSlider;
