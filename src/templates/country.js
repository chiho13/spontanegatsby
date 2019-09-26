import React from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

import MapGL from '../components/Map';
import styled from 'styled-components';
import Marker from "../components/Marker";

const MainPage = styled.div`
margin: 0 auto;
padding-left: 10px;
padding-right: 10px;

max-width: 1000px;
margin-top: 40px;
  .mapboxgl-map {
    border-radius: 10px;
}
  .map_pin {
    cursor: pointer;
  }
`;

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }

export default ({ data }) => {
  console.log(data)
  const firstEntry = data.destinations.destinations[0];

  let title = firstEntry.country.toLowerCase();

  return (
    <Layout>
      <MainPage>
        <h1>{title}</h1>
        <MapGL viewport={{latitude: firstEntry.geolocation.latitude, longitude: firstEntry.geolocation.longitude, zoom: 4}} height="500px">
          {data && data.destinations.destinations.map((destination, i) => {
             const { country, slug, geolocation: {
              latitude, longitude
          }} = destination
            return ( <Link key={i} to={`${country.toLowerCase()}/${slug}`}>
              <Marker latitude={latitude} longitude={longitude} size={24} />
             </Link>
            )
          })}
            </MapGL>
      </MainPage>
    </Layout>
  )
}

export const query = graphql`
  query($country: Destination_Country!) {
    destinations {
      destinations( where: {country: $country}) {
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
