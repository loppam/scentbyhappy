import React from "react";
import Swiper from "../components/Swiper";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="flex">
          <div className="left">
            <h1>Why Scents By Happy?</h1>
            <p>
              Embark on an olfactory journey with our exquisite collection of
              fragrances, where each scent is a symphony of elegance and allure.
              Elevate your senses and define your signature style with our
              meticulously curated perfumes, crafted to captivate and leave an
              unforgettable impression.
            </p>
            <Link to="explore" className="button-54" role="button">
              Explore
            </Link>
          </div>
          <div className="right">
            <Swiper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
