import React, {useState, useMemo} from "react";
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
        <SEO title="My Spontaneous Trips" />
        <h1>My Spontaneous Trips</h1>
        <em>(highlighted green)</em>
        <p>or click on another country for more</p>
        <h2>Discover {country}</h2>
            <WorldMapContainer>
            <MapInteractionCSS minScale={1} maxScale={4}>
              <WorldMap changeCountry={changeCountry} data={data.destinations.destinations.map(el => el.countryid)}/>
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
        countryid
      }
    }
  }
`
