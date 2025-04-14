import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css';
import Navbar from "../homepage/components/navbar/Navbar";
import Footer from "../homepage/components/Footer/Footer";
import Starfield from "../homepage/components/landing/Starfield";
import Asset2 from "../homepage/components/landing/Assets/asset2.png";
import csession from './assets/cSession.jpeg';
import podcast from './assets/podcast.png';
import woi from './assets/wings of innovation.jpeg';
import Enigma24 from './assets/Enigma24.jpeg';
import tech from './assets/techtrak.jpg';
const cardsData = [
    {
        image: Enigma24,
        title: "ENIGMA 2024",
        link: "https://drive.google.com/drive/folders/1nsiMQRACAg7wQFtjZjVhurNrYWKFtBK7",
    },
    {
        image: woi,
        title: "WINGS OF INNOVATION",
        link: "https://drive.google.com/drive/folders/1Er1rP6CD5jsMe88q6u-3FKMZfn9oE-aV",
    },
    {
        image: csession,
        title: "C SESSION",
        link: "https://drive.google.com/drive/folders/1KC-Y5plDDKkvInyPxT0JU-efDuGVxCBK",
    },
    {
        image: tech,
        title: "TECHTREK",
        link: "https://drive.google.com/drive/folders/1S_Mra_Bu29iOysAuBXOaPOBUPfIlQeQL",
    },
    {
        image: podcast,
        title: "PODCAST",
        link: "https://drive.google.com/drive/folders/1W197B9CeQ2ThTEHyG--8dYWFheb4dE6_",
    },
];
export default function Gallery() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
        ]
};
    return (
        <div className="gallery">
            <Navbar />
            <div className="w-full min-h-screen flex flex-col justify-center items-center relative">
                <div className="cardContainer pt-3 pl-6 ">
                <Slider {...settings} className="card">
                    {cardsData.map((d)=> (
                        <div className="bg-black-500 h-[480px] text-black rounded-xl px-2">
                            <div className="h-[385px] rounded-t-xl rounded-b-xl flex justify-center items-center overflow-hidden">
                                <img src={d.image} alt="" className="object-fit w-full h-full"/>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-y-2 p-4">
                                <p className="text-xl font-bold text-white">{d.title}</p>
                                <a href={d.link}><button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">View Gallery</button></a>
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>
            </div>
            <Footer />
        </div>
    );
}
