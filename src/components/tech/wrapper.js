import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0 0 0 5rem;
  color: white;
  .left {
    flex-basis: 50%;
    .imgwrap {
      text-align: right;
    }

    .img {
      width: 70%;
    }
  }

  .right {
    flex-basis: 50%;
    padding-left: 10rem;
    h1 {
      font-family: Bellefair;
      font-style: normal;
      font-weight: normal;
      font-size: 5.5rem;
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
      margin-bottom: 6rem;
    }

    h3 {
      font-family: Barlow Condensed;
      font-style: normal;
      font-weight: normal;
      font-size: 2.8rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 10rem;
    }

    h5 {
      font-family: Barlow Condensed;
      font-style: normal;
      font-weight: normal;
      font-size: 1.6rem;
      letter-spacing: 3px;
      color: #d0d6f9;
      text-transform: uppercase;
    }
  }
`;
