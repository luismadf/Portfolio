import React from "react";
import styled from "@emotion/styled";

const List = styled.ul`
  margin-top: 50px;
  display: flex;
  list-style: none;

  li a {
    color: gray;
    font-size: 40px;
    margin-right: 20px;
  }
`;

const ContactIcons = () => {
  return (
    <List>
      <li>
        <a
          href="https://www.linkedin.com/in/luis-de-freites-6a5888181/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="mailto:luisdefreites120@gmail.com">
          <i class="fas fa-envelope-square"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/luismadf" target="_blank" rel="noreferrer">
          <i class="fab fa-twitter-square"></i>
        </a>
      </li>
    </List>
  );
};

export default ContactIcons;
