import React from "react";
import styled from "@emotion/styled";
import Hero from "../Hero";

const MainNav = styled.nav`
  /* background-color: #4398f1; */
  /*   position: absolute;
  left: 0;
  right: 0;
  height: 10%; */
  display: flex;
  align-items: center;
  height: 72px;

  .container1 {
    height: 100%;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 25px;
    font-weight: 400;
    span {
      font-weight: 700;
    }
  }

  ul {
    display: flex;
    align-items: center;
    color: black;
    font-weight: 500;
  }

  ul li .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    background-color: #4398f1;
    color: white;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Header = () => {
  return (
    <header>
      <MainNav>
        <div class="container1">
          <div class="logo">
            luisma<span>.dev</span>
          </div>
          <ul>
            <li>
              <a href="#">About me</a>
            </li>
            <li>
              <a href="#projects">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact me</a>
            </li>
            <li>
              <a href="#" className="button">
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </MainNav>
      <div class="container">
        <Hero />
      </div>
    </header>
  );
};

export default Header;
