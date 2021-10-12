import React from "react";
import styled from "@emotion/styled";

const MainNav = styled.nav`
  background-color: #4398f1;
  display: flex;
  align-items: center;
  height: 72px;
  color: white;

  .container1 {
    height: 100%;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
      flex-direction: column;
    }
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
    font-weight: 500;
    list-style: none;
  }

  ul li a {
    color: white;
    text-decoration: none;
    margin-left: 30px;
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
    <footer>
      <MainNav>
        <div class="container1">
          <div class="logo">
            luisma<span>.dev</span>
          </div>
          <ul>
            {/* <li>
              <a href="#">About me</a>
            </li> */}
            <li>
              <a href="#projects">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact me</a>
            </li>
          </ul>
        </div>
      </MainNav>
    </footer>
  );
};

export default Header;
