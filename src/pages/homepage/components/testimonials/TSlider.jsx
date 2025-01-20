import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GunjanVerma from "./Assets/GunjanVerma.jpeg";
import VishrutiSharma from "./Assets/VishrutiSharma.jpeg";
import SunilKhah from "./Assets/SunilKhah.jpeg";
import AkinoriNishihara from "./Assets/AkinoriNishihara.png";
import ShrutiJain from "./Assets/ShrutiJain.jpeg";
import IshitaKapoor from "./Assets/IshitaKapoor.png";
import HarshVardhan from "./Assets/Harsh.jpeg";
import "./Testimonials.css";
import TCard from "./TCard";

function TSlider() {
  const testimonials = [
    {
      image: AkinoriNishihara,
      name: "Akinori Nishihara",
      role: "DIRECTOR, IEEE REGION 10",
      testimonial:
        "Greetings to All of Our Region 70 Members, It will be my great honor and privilege this year to serve IEEE Region 70. Fortunately, I have an excellent predecessor, Prof Kukjin Chun, as well as powerful Executive Committee members who have promised to work with me in support of Region 70 and IEEE as a whole will help me to achieve new Landmarks.",
      insta: "/",
      linkedin: "https://www.linkedin.com/in/akinori-nishihara-4a14ab29/?originalSubdomain=jp",
    },
    {
      image: ShrutiJain,
      name: "Prof. Dr. Shruti Jain",
      role: "BRANCH COUNSELLOR, IEEE JUIT-SB",
      testimonial:
        "Great greetings to all our IEEE JIJIT Student Branch Members, it is my colossal satisfaction to have this gathering of new people , with your predictable assistance and attempts, our society has set incredible accomplishments already, and I wish to achieve new landmarks with this gifted group.",
      insta: "https://www.instagram.com/jain.shruti15/",
      linkedin: "https://www.linkedin.com/in/dr-shruti-jain-92705b130/",
    },
    {
      image: SunilKhah,
      name: "Prof. Dr. Sunil Khah",
      role: "BRANCH MENTOR, IEEE JUIT-SB",
      testimonial:
        "Greetings to all the fellow, life senior, senior, professional and student members of IEEE JUIT student Branch, it is because of your strength and support, IEEE JUIT Student Branch has achieved exceptional feats in past few years. I wish further success to IEEE JUIT Student Branch",
      insta: "/",
      linkedin: "https://www.linkedin.com/in/sunil-kumar-khah-a792a56/",
    },
    {
      image: IshitaKapoor,
      name: "Ishita Kapoor",
      role: "STUDENT MENTOR, IEEE JUIT-SB (2020-2021)",
      testimonial:
        "A deep sense of appreciation, gratitude and joy surge through my heart as I greet you through the columns of IEEE-JUIT SB website. I extend my warm congratulations to all our budding talents who have generously contributed to take the IEEE student branch to greater heights. I hope that this branch will scale even higher in the years to come.",
      insta: "https://www.instagram.com/_ishita_kapoor/",
      linkedin: "https://www.linkedin.com/in/ishita-kapoor-9455371a5/",
    },
    {
      image: VishrutiSharma,
      name: "Vishruti Sharma",
      role: "WIE Chairperson (2022-2023)",
      testimonial:
        "Being part of IEEE JUIT has been amazing, but leading WIE as Chairperson has been truly special. As Chairperson, I've watched our members not just excel in tech skills, but also come together as a team, helping and supporting each other every step of the way. Moreover, they've honed their leadership skills, guiding and inspiring one another towards collective success. It's been a journey of personal growth for me too. Beyond the technical skills I gained, serving in this role truly enhanced my personal growth. From refining my connection-building abilities to my public speaking skills, each day presented new development opportunities. ",
      insta: "https://www.instagram.com/vishruti_sharma_/",
      linkedin: "https://www.linkedin.com/in/vishrutisharma22/",
    },
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
      image: HarshVardhan,
      name: "Harsh Vardhan",
      role: "IEEE JUIT-SB Chairperson (2024-2025)",
      testimonial:
        "Welcome to the IEEE JUIT Student Branch! As a Chairperson, I am honored to lead a dynamic community of innovators and learners. Our branch serves as a platform to inspire creativity, foster technical excellence, and nurture professional growth. We aim to empower students to excel in the fields of engineering and technology through engaging workshops, collaborative projects, and industry interactions. IEEE JUIT SB is more than a student branch, its a family of passionate individuals working together to make a meaningful impact. I invite you to be part of our journey as we explore, innovate, and shape our future together. Join us!.",
      insta: "https://www.instagram.com/harsh_1302?igsh=eWRsdmFrdmFyM3J0&utm_source=qr",
      linkedin: "https://www.linkedin.com/in/harsh-vardhan-49b189250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  ];

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
        {testimonials.map((testimonial, index) => (
          <TCard testimonial={testimonial} />

        ))}
      </Slider>
    </div>
  );
}

export default TSlider;
