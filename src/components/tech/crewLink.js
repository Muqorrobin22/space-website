import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : {};
};

function CrewLink() {
  return (
    <Wrapper>
      <div className="nav">
        <ul>
          <li>
            <Link to="/technology/" getProps={isActive}>
              Launch
            </Link>
          </li>
          <li>
            <Link to="/technology/spaceport" getProps={isActive}>
              SpacePort
            </Link>
          </li>
          <li>
            <Link to="/technology/space-capsule" getProps={isActive}>
              Space Capsule
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .nav {
    display: flex;
    justify-content: start;
    font-size: 1.6rem;
    font-family: "Barlow Condensed";
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2.6px;
    ul {
      text-decoration: none;
      list-style: none;
      display: flex;
      justify-content: space-between;
      width: 80%;
    }
    a {
      text-decoration: none;
      color: white;
      text-transform: uppercase;
      letter-spacing: 2.7px;
      transition: all 0.5s ease;
    }
    a:hover,
    a:active,
    a.active {
      border-bottom: 3px solid white;
      padding-bottom: 1rem;
    }
  }
`;

export default CrewLink;
