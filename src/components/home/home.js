import React from "react";
import Navbar from "../navbar";
import "./home.css";
import styled from "styled-components";
import { Link } from "gatsby";

function Home() {
  return (
    <div className="body">
      <Navbar />
      <Wrapper>
        <div className="left">
          <h3>SO, YOU WANT TO TRAVEL TO</h3>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="right">
          <Link to="/destination">
            <button>Explore</button>
          </Link>
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  color: white;
  padding: 0 5rem;
  height: 70%;
  align-items: end;
  @media (max-width: 1200px) {
    padding: 0;
  }
  @media (max-width: 818px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
  }
  @media (max-width: 538px) {
    margin-top: 12rem;
  }
  .left {
    flex-basis: 60%;
    padding-left: 15rem;

    @media (max-width: 818px) {
      text-align: center;
    }
    h3 {
      font-family: Barlow Condensed;
      font-style: normal;
      font-weight: 400;
      font-size: 2.8rem;
      letter-spacing: 2px;
      @media (max-width: 818px) {
        font-size: 2rem;
      }
      @media (max-width: 538px) {
        font-size: 1.6rem;
      }
    }
    h1 {
      font-family: Bellefair;
      font-style: normal;
      font-weight: normal;
      font-size: 15rem;
      margin: 2.4rem auto;
      @media (max-width: 538px) {
        font-size: 8rem;
      }
    }
    p {
      font-family: Barlow;
      font-style: normal;
      font-weight: 200;
      font-size: 1.8rem;
      width: 60%;
      text-align: justify;
      letter-spacing: 3px;
      line-height: 26px;
      @media (max-width: 1200px) {
        width: 90%;
      }
      @media (max-width: 818px) {
        text-align: center;
        font-size: 1.6rem;
        width: 96%;
        color: #d0d6f9;
      }
      @media (max-width: 538px) {
        font-size: 1.5rem;
      }
    }

    @media (max-width: 1200px) {
      padding-left: 5rem;
    }
  }
  .right {
    flex-basis: 40%;
    justify-content: end;
    padding-left: 15rem;
    @media (max-width: 1200px) {
      padding: 0;
      text-align: center;
    }
    button {
      width: 275px;
      height: 275px;
      border-radius: 50%;
      cursor: pointer;
      font-family: Bellefair;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      letter-spacing: 2px;
      transition: all 0.5s ease;
      @media (max-width: 538px) {
        font-size: 2rem;
        width: 200px;
        height: 200px;
      }
    }

    button:hover {
      transform: translateY(-8px);
    }
  }
`;

export default Home;
