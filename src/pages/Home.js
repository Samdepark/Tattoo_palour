import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <AliceCarousel
        autoPlay
        autoPlayInterval="5000"
        disableButtonsControls="true"
      >
        <div className="intro-slide">
          <img
            src="https://i.pinimg.com/564x/30/35/11/30351172d262cc90e155043994542eea.jpg"
            className="slidering"
            alt="slide 1"
          />
          <h2>HELLO WELCOME TO TATTOO WORLD</h2>
        </div>
        <p>
          <img
            src="https://i.pinimg.com/564x/30/35/11/30351172d262cc90e155043994542eea.jpg"
            className="slidering"
            alt="slide 2"
          />
        </p>
        <p>
          <img
            src="https://i.pinimg.com/564x/30/35/11/30351172d262cc90e155043994542eea.jpg"
            className="slidering"
            alt="slide 3"
          />
        </p>
        <p>
          <img
            src="https://i.pinimg.com/564x/30/35/11/30351172d262cc90e155043994542eea.jpg"
            className="slidering"
            alt="slide 4"
          />
        </p>
      </AliceCarousel>
      <main>
        <div className="left-sider">
          <img src="" alt="Logo" />
          <h3>What we do</h3>
          <ul>
            <li>Tattoo coaching</li>
            <li>colour tattoo service</li>
            <li>Tattoo cove-ups</li>
            <li>Black and Grey tattoo</li>
            <li>Laser Tattoo Removal</li>
            <li>Piercing service</li>
            <li>Training</li>
            <li>micro-blading</li>
            <li>Tattoo coaching</li>
          </ul>
        </div>
        <div className="right-sider">
          <h2>Welcome to tattoo world</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
