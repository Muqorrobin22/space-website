import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import useWindowSize from "../utils/useWindowSize";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : {};
};

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const { width } = useWindowSize();

  const clickHandler = () => {
    setShowLinks((show) => !show);
  };

  let link = showLinks ? (
    <StaticImage
      src="../assets/shared/icon-close.svg"
      alt="button"
      className="hamburger-icon"
      onClick={clickHandler}
    />
  ) : (
    <StaticImage
      src="../assets/shared/icon-hamburger.svg"
      alt="button"
      className="hamburger-icon"
      onClick={clickHandler}
    />
  );

  let navLink = (
    <div className={showLinks ? "nav active" : "nav"}>
      <ul>
        <li>
          <Link to="/" getProps={isActive}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/destination" getProps={isActive}>
            Destination
          </Link>
        </li>
        <li>
          <Link to="/crew" getProps={isActive}>
            Crew
          </Link>
        </li>
        <li>
          <Link to="/technology" getProps={isActive}>
            Technology
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <Wrapper>
      <div className="logo">
        <Link to="/">
          <StaticImage src="../assets/shared/logo.svg" alt="Logo" />
        </Link>
      </div>
      {width < 722 && (
        <div className="hamburger-menu">
          <div>{link}</div>
        </div>
      )}
      {width >= 722 && navLink}
      {showLinks && navLink}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 4rem;
  transition: all 0.5s;
  h1 {
    color: white;
  }
  @media (max-width: 900px) {
    padding: 2rem;
  }

  .logo {
    flex-basis: 50%;
    display: flex;
    align-items: center;
    @media (max-width: 900px) {
      flex-basis: 40%;
      padding-left: 2rem;
    }
  }

  .hamburger-menu {
    display: flex;
    align-items: center;
    justify-content: end;
    flex-basis: 50%;
    z-index: 100;
    cursor: pointer;
    /* padding: 4rem; */
  }

  .nav.active {
    right: 0;
    transition: all 0.5s ease;
  }

  .nav {
    flex-basis: 50%;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
    padding: 3rem 5rem;
    display: flex;
    justify-content: space-around;
    font-size: 1.6rem;
    font-family: "Barlow Condensed";
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2.6px;
    @media (max-width: 722px) {
      position: fixed;
      top: 0;
      right: -50%;
      height: 100vh;
      width: 50%;
      background: rgba(255, 255, 255, 0.04);
      backdrop-filter: blur(81.5485px);
      z-index: 10;
      ul {
        display: flex;
        flex-direction: column;
        height: 60%;
      }
    }
    @media (max-width: 1200px) {
      flex-basis: 70%;
    }
    @media (max-width: 1000px) {
      flex-basis: 80%;
    }
    @media (max-width: 900px) {
      flex-basis: 100%;
      font-size: 1.4rem;
    }
    ul {
      text-decoration: none;
      list-style: none;
      display: flex;
      justify-content: space-around;
      width: 100%;
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
      padding-bottom: 2rem;
    }
  }
`;

export default Navbar;
