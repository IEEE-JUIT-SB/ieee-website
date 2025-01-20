import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import ButBack from "./Assets/arr_back.svg"
import ButNext from "./Assets/arr_fwd.svg"


const AboutCarousel = (parse) => {
  return (
    <CarouselProvider
      naturalSlideWidth={80}
      naturalSlideHeight={100}
      totalSlides={3}
    >
      <Slider>
        <Slide className="evcar_slides" index={0}>
          <div className="about-us__p1">
            <h3>IEEE JUIT SB</h3>
            <p>
              The JUIT IEEE Student Branch stands as a dynamic and pioneering
              arm of the IEEE organization, dedicated to facilitating the
              fulfillment of its core mission. Our primary objectives revolve
              around the realms of scientific and educational pursuits, with a
              steadfast focus on advancing the theory and practice of
              electrical, electronic communication, computer science and
              engineering, as well as the broader spectrum of allied engineering
              branches and the encompassing arts and sciences.
            </p>
            <br />
            <p>
              At JUIT IEEE-SB, our mission is to empower our student members on
              their technological journeys. We do so by providing unparalleled
              access to indispensable technical knowledge and cutting-edge
              research, fostering invaluable networking opportunities, equipping
              them with the tools for career development, and delivering a host
              of exclusive benefits that bolster their educational and
              professional growth.
            </p>
          </div>
        </Slide>
        <Slide className="evcar_slides" index={1}>
          <div className="about-us__p1">
            <h3>IEEE Region 10</h3>
            <p>
              The IEEE Region 10, also sometimes referred as the Asia Pacific
              Region, comprises of 57 Sections, 6 Councils, 17 Sub-sections, 515
              Chapters, 60 Affinity Groups and 958 Student Branches. It covers a
              geographical area stretching from South Korea and Japan in the
              north-east to New Zealand in the south, and Pakistan in the west.
              With over 100,000 members it is one of the largest regions in
              IEEE.
            </p>
            <a className="about-links" href="https:www.ieeer10.org/">
              Visit Here!
            </a>
          </div>
        </Slide>
        <Slide className="evcar_slides" index={2}>
          <div className="about-us__p1">
            <h3>IEEE Delhi Section</h3>
            <p>
              Delhi Section is one of the 12 Sections in India coming under
              Asia-Pacific Region, the Region 10 of IEEE. At present it covers
              entire northern part of the country consisting of the four states
              of Rajasthan, Haryana, Punjab, Himachal Pradesh, and the National
              Capital Territory of Delhi, Union Territories of Chandigarh, Jammu
              & Kashmir, Ladakh. IEEE Delhi Section, which started on May 13,
              1976 (after remaining as Sub-section since 1974), has as per
              latest (September 03, 2020) statistics 3571 active Members
              (including 19 Society Affiliates), consisting of 0 Honorary
              Member, 7 Life Fellow, 7 Fellow, 33 Life Senior, 392 Senior
              Member, 7 Life Member, 1302 Member, 28 Associate Member, 528
              Graduate Student Member, 1247 Student Member, 1 SA.
            </p>
            <a className="about-links" href="https:ewh.ieee.org/r10/delhi/">
              Visit Here!
            </a>
          </div>
        </Slide>
      </Slider>
      <ButtonBack className="but_back">
        <img src={ButBack} alt="Back" />
      </ButtonBack>
      <ButtonNext className="but_next">
        <img src={ButNext} alt="Next" />
      </ButtonNext>
    </CarouselProvider>
  );
};

export default AboutCarousel;