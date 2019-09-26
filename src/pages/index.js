import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

import MapGL from '../components/Map';
import styled from 'styled-components';
import Marker from "../components/Marker";

import WorldMap from '../components/WorldMapSVG/SVGMap';

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


export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <MainPage>
        <h1>Be Spontaneous</h1>
        <p>Click on a country to start</p>
        {/* <MapGL viewport={{latitude:43, longitude: 9, zoom: 1}} height="500px">
          {data && data.destinations.destinations.map(destination => {
             const { country, slug, geolocation: {
              latitude, longitude
          }} = destination
            return ( <Link to={`${country.toLowerCase()}/${slug}`}>
              <Marker latitude={latitude} longitude={longitude} size={24} />
             </Link>
            )
          })}
            </MapGL> */}
            <WorldMap />
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
