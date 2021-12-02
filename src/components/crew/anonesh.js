import React from "react";
import Navbar from "../navbar";
import "./destination.css";
import { StaticImage } from "gatsby-plugin-image";
import { Wrapper } from "./wrapper";
import { graphql, useStaticQuery } from "gatsby";
import CrewLink from "./crewLink";
import styled from "styled-components";

const data = graphql`
  {
    Crew: allDataJson {
      nodes {
        crew {
          bio
          name
          role
        }
      }
    }
  }
`;

const Wrapper2 = styled(Wrapper)`
  .left {
    .img {
      width: 78%;
    }
  }
`;

function AnoushehPage() {
  const { Crew } = useStaticQuery(data);
  // const images = useStaticQuery(image);
  // console.log(images);
  return (
    <div className="crew">
      <Navbar />
      <Wrapper2>
        <div className="right">
          <h3>Meet Your Crew</h3>
          <h2>{Crew.nodes[0].crew[3].role}</h2>
          <h1>{Crew.nodes[0].crew[3].name}</h1>
          <p>{Crew.nodes[0].crew[3].description}</p>
          <CrewLink />
        </div>
        <div className="left">
          <div className="imgwrap">
            <StaticImage
              src="../../assets/crew/image-anousheh-ansari.webp"
              alt="Douglas"
              className="img"
            />
          </div>
        </div>
      </Wrapper2>
    </div>
  );
}

export default AnoushehPage;
