import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MainMenu.css";
import scenicImg from "../../assets/scenic.jpg";
import lostFoundImg from "../../assets/lf.png";
import crushTheRushImg from "../../assets/crush_the_rush.jpg";
import stationRating from "../../assets/Station.jpg"

const MainMenu = () => {
  const [images, setImages] = useState([
    
  ]);


  return (
    <div className="main-menu-wrapper">
      {/* Upper Menu Section */}
      <div className="main-menu-container">
        <h1 className="menu-title">Main Menu</h1>

        <div className="menu-cards">
          <div className="menu-card">
            <Link to="/scenic">
              <div className="card-image">
                <img src={scenicImg} alt="Scenic Views" />
              </div>
              <div className="card-title">Scenic Views</div>
            </Link>
          </div>
          
          <div className="menu-card">
            <Link to="/lost">
              <div className="card-image">
                <img src={lostFoundImg} alt="Lost and Found" />
              </div>
              <div className="card-title">Lost and Found</div>
            </Link>
          </div>

          <div className="menu-card">
            <Link to="/crush">
              <div className="card-image">
                <img src={crushTheRushImg} alt="Crush the Rush" />
              </div>
              <div className="card-title">Crush the Rush</div>
            </Link>
          </div>

          <div className="menu-card">
            <Link to="/station-ratings">
              <div className="card-image">
                <img src={stationRating} alt="Station Ratings" />
              </div>
              <div className="card-title">Station Ratings</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="train-gallery">
       
        <div className="gallery">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.title} />
              <h4>{image.title}</h4> {/* Display the title */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
