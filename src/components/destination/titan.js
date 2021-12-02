import React from "react";
import Navbar from "../navbar";
import "./destination.css";
import { StaticImage } from "gatsby-plugin-image";
import DesLink from "./desLink";
import { Wrapper } from "./wrapper";
import { graphql, useStaticQuery } from "gatsby";

const data = graphql`
  {
    Destination: allDataJson {
      nodes {
        destinations {
          name
          description
          distance
          travel
          images {
            png
          }
        }
      }
    }
  }
`;

function TitanPage() {
  const { Destination } = useStaticQuery(data);

  return (
    <div className="destination">
      <Navbar />
      <Wrapper>
        <div className="left">
          <h1>Pick your destination</h1>
          <div className="img">
            <StaticImage
              src="../../assets/destination/image-titan.webp"
              alt="moon"
            />
          </div>
        </div>
        <div className="right">
          <DesLink />
          <h1>{Destination.nodes[0].destinations[3].name}</h1>
          <p>{Destination.nodes[0].destinations[3].description}</p>
          <div className="info">
            <div>
              <p>AVG. DISTANCE</p>
              <h3>{Destination.nodes[0].destinations[3].distance}</h3>
            </div>
            <div>
              <p>Est. travel time</p>
              <h3>{Destination.nodes[0].destinations[3].travel}</h3>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default TitanPage;
