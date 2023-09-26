import React from "react";
import "./styles/hero.css";
import HeroBannerImage from '../assets/hero.png';

const HeroBanner = () => {
  return (
    <div className="hero-main">
      <img className="image" alt="Rectangle" src={HeroBannerImage} />
      <div className="overlap">
        <p className="upgrade-yourself">
          <span className="span">Upgrade</span>
          <span className="text-wrapper-2">
            {" "}
            Yourself,
            <br />
            Become The Fit You!
          </span>
        </p>
        <div className="vectors">
          <div className="rectangle-1" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="rectangle-5" />
        </div>
      </div>
      <p className="text">Check out the best personalized exercises for you</p>
      <button className="explore">Explore</button>
    </div>
  );
};

export default HeroBanner;
