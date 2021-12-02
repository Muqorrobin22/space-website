import React from "react";
import Navbar from "../navbar";
import "./destination.css";
import { StaticImage } from "gatsby-plugin-image";
import { Wrapper } from "./wrapper";
import { graphql, useStaticQuery } from "gatsby";
import CrewLink from "./crewLink";

const data = graphql`
  {
    Crew: allDataJson {
      nodes {
        crew {
          bio
          name
          role
          bio
        }
      }
    }
  }
`;

function CrewPage() {
  const { Crew } = useStaticQuery(data);
  // const images = useStaticQuery(image);
  // console.log(images);
  return (
    <div className="crew">
      <Navbar />
      <Wrapper>
        <h3 className="large">Meet Your Crew</h3>
        <div className="right">
          <h3 className="mini">Meet Your Crew</h3>
          <h2>{Crew.nodes[0].crew[0].role}</h2>
          <h1>{Crew.nodes[0].crew[0].name}</h1>
          <p>{Crew.nodes[0].crew[0].bio}</p>
          <div className="link">
            <CrewLink />
          </div>
        </div>
        <div className="left">
          <div className="imgwrap">
            <StaticImage
              src="../../assets/crew/image-douglas-hurley.webp"
              alt="Douglas"
              className="img"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default CrewPage;
