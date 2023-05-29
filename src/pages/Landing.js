import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page ">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>tracking</span>app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            architecto aperiam, alias illo est unde praesentium ut magnam
            consectetur qui.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/ register{" "}
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
