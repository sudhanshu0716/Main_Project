import React from "react";
import { Link } from "react-router-dom";
import "./MainMenu.css";
import scenicImg from "../../assets/scenic.jpg";
import lostFoundImg from "../../assets/lf.png";
import crushTheRushImg from "../../assets/crush_the_rush.jpg";

// Carousel images
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";
import image6 from "../../assets/6.jpg";

const MainMenu = () => {
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
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel-container">
        {/* Carousel radio inputs */}
        <input type="radio" name="position" id="pos1" defaultChecked />
        <input type="radio" name="position" id="pos2" />
        <input type="radio" name="position" id="pos3" />
        <input type="radio" name="position" id="pos4" />
        <input type="radio" name="position" id="pos5" />
        <input type="radio" name="position" id="pos6" />

        {/* Carousel items */}
        <main id="carousel">
          <div
            className="item"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${image2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${image3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${image4})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${image5})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${image6})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </main>
      </div>
    </div>
  );
};

export default MainMenu;
