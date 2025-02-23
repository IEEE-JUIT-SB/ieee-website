import NoPage from "../noPage/NoPage";
import "./Gallery.css";
import image_1 from "./assets/image_1.jpg";
import image_2 from "./assets/image_2.jpeg";
import image_3 from "./assets/image_3.png";
import image_4 from "./assets/image_4.png";
import image_5 from "./assets/image_5.png";
import image_6 from "./assets/image_6.jpg";
import image_7 from "./assets/image_7.jpeg";
import image_8 from "./assets/image_8.png";
import image_9 from "./assets/image_9.png";
import image_10 from "./assets/image_10.png";




export default function Gallery() {
  return (
    <div className="gallery-page">
      <NoPage />
      <div className="banner">
        <div className="slider" style={{ "--quantity": 10 }}>
          <div className="item" style={{ "--position": 1 }}><img src={image_1} alt="Gallery Image 1" /></div>
          <div className="item" style={{ "--position": 2 }}><img src={image_2} alt="Gallery Image 2" /></div>
          <div className="item" style={{ "--position": 3 }}><img src={image_3} alt="Gallery Image 3" /></div>
          <div className="item" style={{ "--position": 4 }}><img src={image_4} alt="Gallery Image 4" /></div>
          <div className="item" style={{ "--position": 5 }}><img src={image_5} alt="Gallery Image 5" /></div>
          <div className="item" style={{ "--position": 6 }}><img src={image_6} alt="Gallery Image 6" /></div>
          <div className="item" style={{ "--position": 7 }}><img src={image_7} alt="Gallery Image 7" /></div>
          <div className="item" style={{ "--position": 8 }}><img src={image_8} alt="Gallery Image 8" /></div>
          <div className="item" style={{ "--position": 9 }}><img src={image_9} alt="Gallery Image 9" /></div>
          <div className="item" style={{ "--position": 10 }}><img src={image_10} alt="Gallery Image 10" /></div>
        </div>
        {/* <div class="content">
          <h1 data-content="CSS ONLY">
            CSS ONLY
          </h1>
          <div class="author">
            <h2>LUN DEV</h2>
            <p><b>Web Design</b></p>
            <p>
              Subscribe to the channel to watch many interesting videos
            </p>
          </div>
          <div class="model"></div>
        </div> */}
      </div>
    </div>
  );
}

