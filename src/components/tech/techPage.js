import React from "react";
import Navbar from "../navbar";
import "./destination.css";
import { StaticImage } from "gatsby-plugin-image";
import { Wrapper } from "./wrapper";
import { graphql, useStaticQuery } from "gatsby";
import CrewLink from "./crewLink";

const data = graphql`
  {
    Tech: allDataJson {
      nodes {
        technology {
          description
          name
        }
      }
    }
  }
`;

function TechPage() {
  const { Tech } = useStaticQuery(data);
  // const images = useStaticQuery(image);
  // console.log(images);
  return (
    <div className="tech">
      <Navbar />
      <Wrapper>
        <div className="right">
          <h3>Space Launch</h3>
          <h5>The Technology...</h5>
          <h1>{Tech.nodes[0].technology[0].name}</h1>
          <p>{Tech.nodes[0].technology[0].description}</p>
          <CrewLink />
        </div>
        <div className="left">
          <div className="imgwrap">
            <StaticImage
              src="../../assets/technology/image-launch-vehicle-portrait.jpg"
              alt="Launch Vehicle"
              className="img"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default TechPage;
