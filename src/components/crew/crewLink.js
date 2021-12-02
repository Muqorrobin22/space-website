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
            <Link to="/crew/" getProps={isActive}>
              Douglas
            </Link>
          </li>
          <li>
            <Link to="/crew/mark" getProps={isActive}>
              Mark
            </Link>
          </li>
          <li>
            <Link to="/crew/victor" getProps={isActive}>
              Victor
            </Link>
          </li>
          <li>
            <Link to="/crew/anousheh" getProps={isActive}>
              Anonesh
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
    @media (max-width: 930px) {
      justify-content: center;
    }
    @media (max-width: 630px) {
      font-size: 1.4rem !important;
    }
    @media (max-width: 375px) {
      font-size: 1.2rem !important;
    }
    ul {
      text-decoration: none;
      list-style: none;
      display: flex;
      justify-content: space-between;
      width: 75%;
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
