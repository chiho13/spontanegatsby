import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from 'styled-components';
import MapGL from "../components/Map";
import Marker from "../components/Marker";
import { device } from "../components/breakpoint";
import GoogleMapButton from "../components/GoogleMapsButton";

const BlogTemplate = styled.div`

    margin-top: 40px;
    .mapboxgl-map, img {
        border-radius: 10px;
    }
`;

const LocationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LocationTitle = styled.h1`
    font-size: 24px;
    margin-top: 20px;

        @media ${device.large} {
            font-size: 36px;
        }
`;


export default ({ data }) => {
  return (
    <Layout>
      <BlogTemplate>
        {data.destinations.destinations.map(destination => {
          const { name, slug, geolocation: {
              latitude, longitude
          }, image, location } = destination
          return (
            <div>

                 <MapGL viewport={{latitude, longitude, zoom: 8}} height="250px" mapStyle="mapbox://styles/mapbox/light-v9">
             <Marker latitude={latitude} longitude={longitude} size={48}/>
            </MapGL>
            
            <LocationContainer>
              <LocationTitle>
                <strong>{name}</strong>
              </LocationTitle>
              <GoogleMapButton link={`http://maps.google.com/?q=${location}`}/>
              </LocationContainer>

              <img src={image.url} />

              <div dangerouslySetInnerHTML={{ __html: destination.content.html }} />
            </div>
          )
        })}
      </BlogTemplate>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    destinations {
      destinations(where: { slug: $slug }) {
        status
    updatedAt
    createdAt
    id
    name
    location
    image {
      url
    }
    content {
      raw
      html
    }
    geolocation {
      latitude
      longitude
    }
    slug
    publisheddate
      }
    }
  }
`
