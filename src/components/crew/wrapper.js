import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0 5rem;
  color: white;
  h3 {
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 2.8rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 10rem;
    order: -2;
  }
  @media (max-width: 926px) {
    flex-direction: column;
    h3 {
      font-size: 2rem;
      margin: 3rem auto;
    }
    .right {
      text-align: center;
      padding-left: 0 !important;
      margin: 0 auto;
      h1 {
        font-size: 4rem !important;
      }
      h2 {
        font-size: 2.4rem;
      }

      p {
        margin: 3rem auto !important;
        text-align: center;
      }
    }

    .left {
      .imgwrap {
        width: 40%;
        margin: 0 auto;
        padding-top: 3rem;
      }
    }
  }

  @media (max-width: 714px) {
    .left {
      .imgwrap {
        padding-top: 5rem;
        width: 50%;
      }
    }
  }

  @media (max-width: 614px) {
    .right {
      display: flex;
      flex-direction: column;
      .link {
        order: -1;
        padding: 3rem 0;
      }
      .mini {
        display: none;
      }
    }
    .left {
      order: -1;
      .imgwrap {
        padding-top: 5rem;
        width: 50%;
      }
    }
  }

  .left {
    flex-basis: 50%;

    .imgwrap {
      text-align: center;
      width: 100%;
    }

    .img {
      width: 40%;
    }
  }

  .right {
    flex-basis: 50%;
    padding-left: 10rem;
    h1 {
      font-family: Bellefair;
      font-style: normal;
      font-weight: normal;
      font-size: 10rem;
      text-transform: uppercase;
      margin: 3rem 0;
    }
    p {
      font-family: Barlow;
      font-style: normal;
      font-weight: normal;
      font-size: 1.8rem;
      letter-spacing: 2.8px;
      width: 70%;
      margin-bottom: 3rem;
    }

    h2 {
      font-family: Bellefair;
      font-style: normal;
      font-weight: normal;
      font-size: 3.2rem;
      opacity: 0.5;
    }
  }
`;
