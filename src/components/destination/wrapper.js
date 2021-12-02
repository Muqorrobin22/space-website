import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0 5rem;
  color: white;
  @media (max-width: 930px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    .left {
      h1 {
        padding-left: 0 !important;
      }
      .img {
        width: 60%;
        margin: 0 auto;
      }
    }

    .right {
      padding-top: 5rem !important;
      padding-left: 0 !important;
      .link {
        width: 100%;
        text-align: center;
        margin: 0 auto;
      }
      p {
        margin: 0 auto;
      }
      .info {
        margin: 0 auto;
      }
    }
  }

  @media (max-width: 630px) {
    .left {
      h1 {
        font-size: 1.6rem !important;
      }
      .img {
        width: 50%;
      }
    }

    .right {
      h1 {
        font-size: 5.6rem !important;
        margin: 3rem 0 !important;
      }
      p {
        font-size: 1.5rem !important;
      }
      .info {
        flex-direction: column;
        padding-top: 1rem !important;
        width: 80% !important;
        div {
          margin-top: 2rem !important;
        }
        h3 {
          font-size: 2rem !important;
        }
      }
    }
  }

  @media (max-width: 375px) {
    .left {
      .img {
        width: 40%;
      }
      h1 {
        font-size: 1.4rem !important;
      }
    }

    .right {
      p {
        font-size: 1.2rem !important;
      }
    }

    .info {
      div {
        margin-top: 1rem !important;
      }
    }
  }

  .left {
    flex-basis: 50%;
    h1 {
      font-family: Barlow Condensed;
      padding-left: 9rem;
      font-style: normal;
      font-weight: normal;
      font-size: 2.8rem;
      letter-spacing: 4.725px;
      text-transform: uppercase;
      padding-bottom: 3rem;
    }
    .img {
      padding-top: 3rem;
      padding-left: 20rem;
    }

    @media (max-width: 1122px) {
      flex-basis: 60%;
      justify-content: center;
      text-align: center;

      .img {
        padding: 0;
      }
    }
  }

  .right {
    flex-basis: 50%;
    padding-top: 6rem;
    @media (max-width: 1122px) {
      padding-left: 3rem;
    }
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
      width: 60%;
      margin-bottom: 3rem;
      color: #d0d6f9;
      @media (max-width: 1122px) {
        width: 80%;
      }
    }
    .info {
      display: flex;
      justify-content: space-between;
      width: 50%;
      border-top: 1px solid white;
      padding-top: 3rem;
      p {
        font-family: Barlow Condensed;
        font-style: normal;
        font-weight: normal;
        font-size: 1.4rem;
        width: 100%;
      }

      h3 {
        font-family: Bellefair;
        font-style: normal;
        font-weight: normal;
        font-size: 2.8rem;
        text-transform: uppercase;
      }

      @media (max-width: 613px) {
        width: 70%;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 0 2rem;
  }
`;
