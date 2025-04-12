import React from "react";
import './Gallery.css';
import Navbar from "../homepage/components/navbar/Navbar";
import Footer from "../homepage/components/Footer/Footer";
import image_1 from './assets/image_1.jpg';
import image_2 from './assets/image_2.png';
import image_3 from './assets/image_3.png';
import image_4 from './assets/image_4.png';
import podcast from './assets/podcast.png';

const cardsDetails = [
    {
        image: image_4,
        date: "08 DEC 2024",
        title: "CRYPTIC QUEST",
        link: "/crypticquest",
    },
    {
        image: image_2,
        date: "06 DEC 2024",
        title: "MURDER MYSTERY",
        link: "/crypticquest",
    },
    {
        image: image_3,
        date: "08 DEC 2024",
        title: "CODE WITH TRUST",
        link: "/crypticquest",
    },
    {
        image: image_1,
        date: "07 DEC 2024",
        title: "DR. TANU JAIN",
        link: "/crypticquest",
    },
    {
        image: podcast,
        date: "07 DEC 2024",
        title: "PODCAST",
        link: "/crypticquest",
    },
];
export default function Gallery() {
    return (
        <div className="gallery-container">
            <Navbar />
            <h1>Events 2024-25</h1>
            <div className="cards-container">
                {cardsDetails.map((card, index) => (
                    <a href={card.link} key={index} >
                        <div className="card">
                            <div className="image">
                                <img src={card.image} alt={card.title} />
                            </div>
                            <div className="lowerContent">
                                <div className="post-date">{card.date}</div>
                                <h3>{card.title}</h3>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <Footer />
        </div>
    );
}
