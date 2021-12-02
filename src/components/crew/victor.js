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
        }
      }
    }
  }
`;

function VictorPage() {
  const { Crew } = useStaticQuery(data);
  // const images = useStaticQuery(image);
  // console.log(images);
  return (
    <div className="crew">
      <Navbar />
      <Wrapper>
        <div className="right">
          <h3>Meet Your Crew</h3>
          <h2>{Crew.nodes[0].crew[2].role}</h2>
          <h1>{Crew.nodes[0].crew[2].name}</h1>
          <p>{Crew.nodes[0].crew[2].description}</p>
          <CrewLink />
        </div>
        <div className="left">
          <div className="imgwrap">
            <StaticImage
              src="../../assets/crew/image-victor-glover.webp"
              alt="Douglas"
              className="img"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default VictorPage;
