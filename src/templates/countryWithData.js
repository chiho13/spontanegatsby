import React, {useState, useEffect} from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

import MapGL from '../components/Map';
import styled from 'styled-components';
import Marker from "../components/Marker";
import SEO from "../components/seo";
import axios from 'axios';
import { device } from '../components/breakpoint';
import LoadingPlane from '../components/LoadingPlane';

const MainPage = styled.div`
margin: 0 auto;
padding-left: 10px;
padding-right: 10px;

max-width: 1000px;
margin-top: 40px;

h4 {
  margin-bottom: 40px; 
}
  .mapboxgl-map {
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 2px 6px rgba(0,0,0,0.23);
}
  .map_pin {
    cursor: pointer;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
  h1 {
    margin-top: 30px;
  }
  img {
    width: 50%;
    max-width: 300px;
    height: 100%;
    margin-bottom: 0;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 2px 6px rgba(0,0,0,0.23);
  }

  @media ${device.xsmall} {
    flex-wrap: nowrap;
    justify-content: start;
    img {
      margin-right: 40px;
    }
  }

  @media ${device.large} { 
    justify-content: start;
    img {
      max-width: 350px;
      margin-right: 40px;
    }

    h1 {
      margin-top: 0;
    }
  }
`;

export const DetailsContainer = styled.div`
  display: block;
  width: 100%;

  @media ${device.xsmall} {
    width: auto;
  }
`;


export const GetGuideButton = styled.a`
  position: relative;

  display: inline-flex;
  margin-bottom: 30px;
  padding: 8px 16px;

  overflow: hidden;

  border-width: 0;
  outline: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  font-weight: bold;
  background-color: #FE7B51;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  transition: background-color .3s;

  &:hover {
    background-color: #e2623b;
  }
`;


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }

export default ({ data }) => {
  console.log(data)
  const firstEntry = data.destinations.destinations[0];
  const [countryData, setCountryData] = useState(null);

  let title = firstEntry.country.toLowerCase();

  useEffect(() => {
    console.log(firstEntry);
    async function fetchData() {
  
      const restCountries = await axios.get(`https://restcountries.eu/rest/v2/alpha/${firstEntry.countryid}`);
      const restCountryData = restCountries.data;
      console.log(restCountryData);

      setCountryData(restCountryData);
    }
    
    fetchData();

  }, []);

  return (
    <Layout>
      {countryData ? <MainPage>
        <SEO title={title} />
         <FlexContainer>
        <img src={countryData.flag} />
          <DetailsContainer>
          <h1>{countryData.name}</h1>
          <h4>
            Capital City: {countryData.capital}
          </h4>
          <h4>
            Population: {String(countryData.population).replace(/(.)(?=(\d{3})+$)/g,'$1,')}
          </h4>
          </DetailsContainer>
        </FlexContainer> 
        <GetGuideButton href={`https://wikitravel.org/en/${title}`}>Get your guide</GetGuideButton>

        <h4>These are the few places I've been</h4>
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
      </MainPage> : <LoadingPlane />}
    </Layout>
  )
}

export const query = graphql`
  query($countryid: Destination_CountryCode!) {
    destinations {
      destinations( where: {countryid: $countryid}) {
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
        countryid
        slug
        publisheddate
      }
    }
  }
`
