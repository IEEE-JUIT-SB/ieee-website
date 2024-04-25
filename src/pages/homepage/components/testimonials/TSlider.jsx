import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GunjanVerma from "./Assets/GunjanVerma.jpeg";
import "./Testimonials.css";
import TCard from "./TCard";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function TSlider() {
  const testimonials = [
    {
      image: GunjanVerma,
      name: "Gunjan Verma",
      role: "WIE IEEE JUIT Vice Chairperson, IEEE JUIT Web master (2022-2023)",
      testimonial:
        "Being part of IEEE JUIT SB opened up an entirely new world for me. Stepping into the club as a wide-eyed freshman, I barely knew about this world of tech. Fast forward to my third year, where I found myself proudly serving on the council, and I'm left in awe of the journey I've been on. It's not just about learning to code; this club has sculpted me into a more well-rounded individual, sharpening both my technical skills and soft skills along the way. What truly sets IEEE JUIT SB apart, though, is the remarkable network it nurtures. Within the community of peers and club members, I discovered mentors, forged friendships, and stumbled upon a plethora of opportunities.",
      insta: "https://www.instagram.com/gunjanxv/",
      linkedin: "https://www.linkedin.com/in/gunjaan/",
    },
    {
      image: GunjanVerma,
      name: "Ishita2",
      role: "WIE IEEE JUIT Vice Chairperson, IEEE JUIT Web master",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum praesentium natus nisi eveniet corporis ex. Similique doloribus harum ullam. Odit numquam ea non tempore earum nisi quaerat deleniti beatae?",
      insta: "https://www.instagram.com/gunjanxv/",
      linkedin: "https://www.linkedin.com/in/gunjaan/",
    },
    {
      image: GunjanVerma,
      name: "Ishita3",
      role: "WIE IEEE JUIT Vice Chairperson, IEEE JUIT Web master",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum praesentium natus nisi eveniet corporis ex. Similique doloribus harum ullam. Odit numquam ea non tempore earum nisi quaerat deleniti beatae?",
      insta: "https://www.instagram.com/gunjanxv/",
      linkedin: "https://www.linkedin.com/in/gunjaan/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TCard testimonial={testimonial} />

        ))}
      </Slider>
    </div>
  );
}

export default TSlider;
