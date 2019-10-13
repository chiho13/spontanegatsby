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
import oldpaper from '../images/old-paper.png';

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

const HeaderContainer = styled.div`

  @media ${device.large} {
    margin-bottom: 40px
  }
`;

const MainHeader = styled.div`
font-family: 'Rock Salt', cursive;
font-size: 25px;
margin-bottom: 20px;
color: #007BFF;
line-height: 1.5;

@media ${device.large} {
  font-size: 40px;
}
`;

const WorldMapContainer = styled.div`

  display: block;
  overflow-y: scroll;
  max-width: 1180px;
  background-image: url(${oldpaper});
  background-size: cover;         
  background-repeat: no-repeat;
  background-position: center center; 
  padding: 5px;
  margin: 5px; 

  @media ${device.xlarge} {
    margin: 0 auto;
    padding: 20px; 
  }
`;

const DiscoverHeader = styled.h2`
font-family: "Nunito";
  font-size: 28px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #111;

  @media ${device.large} {
    font-family: "Freebooter Italic";
    position: absolute;
    left: 0;
    right: 0;
    font-size: 42px;
    text-shadow: 1px 1px #E8B977;
    margin-top: 60px;
  }

`;

const Highlightext = styled.div`
font-family: 'Nunito', sans-serif;
font-style: italic;
font-size: 16px;
`;

const DiscoverLink = styled(Link)`
  color: #007bff;

  @media ${device.large} {
    margin: 0 auto;
    color: #000;
    text-decoration: none;
    pointer-events: none;
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

        <HeaderContainer>
          <MainHeader>My Spontaneous Trips</MainHeader>
          <Highlightext>(red countries are places I've been)</Highlightext>
        </HeaderContainer>
        <DiscoverHeader>Discover <DiscoverLink to={country.replace(/[.,\s]/g, '').toLowerCase()} >{country}</DiscoverLink></DiscoverHeader>
            <WorldMapContainer>
            <MapInteractionCSS minScale={1} maxScale={8}>
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
