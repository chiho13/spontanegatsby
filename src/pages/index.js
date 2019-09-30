import React, {useState} from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

import MapGL from '../components/Map';
import styled from 'styled-components';
import Marker from "../components/Marker";

import SEO from "../components/seo";
import { MapInteractionCSS } from 'react-map-interaction';

import WorldMap from '../components/WorldMapSVG';
import { device } from "../components/breakpoint";

const MainPage = styled.div`
  margin-top: 40px;
  text-align:center;
  .mapboxgl-map {
    border-radius: 10px;
}
  .map_pin {
    cursor: pointer;
  }
`;


const WorldMapContainer = styled.div`

  display: block;
  overflow-y: scroll;
  max-width: 1180px;
  margin: 0 20px;
  border: 1px solid #bbb;
  border-radius: 10px;

  @media ${device.xlarge} {
    margin: 0 auto;
  }
`;

export default ({ data }) => {
  const [country, setCountry] = useState("");

  function changeCountry(val) {
    setCountry(val)
  }

  return (
    <Layout>
      <MainPage>
        <SEO title="Be Spontaneous" />
        <h1>Be Spontaneous</h1>
        <p>Click on a country to start</p>
        <h2>Discover {country}</h2>
            <WorldMapContainer>
            <MapInteractionCSS>
              <WorldMap changeCountry={changeCountry}/>
              </MapInteractionCSS>
            </WorldMapContainer>
      </MainPage>
    </Layout>
  )
}

export const query = graphql`
  query {
    destinations {
      destinations {
        status
        updatedAt
        createdAt
        id
        name
        location
        image {
          status
          updatedAt
          createdAt
          id
          handle
          fileName
          height
          width
          size
          mimeType
          attribution
        }
        content {
          raw
          html
        }
        geolocation {
          latitude
          longitude
        }
        country
        slug
        publisheddate
      }
    }
  }
`
