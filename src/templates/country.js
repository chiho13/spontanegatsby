import React, {useState, useEffect} from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

import MapGL from '../components/Map';
import styled from 'styled-components';
import Marker from "../components/Marker";
import SEO from "../components/seo";

import axios from 'axios';
import { device } from '../components/breakpoint';
import { FlexContainer } from './countryWithData';
import { DetailsContainer } from './countryWithData';
import {GetGuideButton} from './countryWithData';
import LoadingPlane from '../components/LoadingPlane';


const MainPage = styled.div`
margin: 0 auto;
padding-left: 10px;
padding-right: 10px;

max-width: 1000px;
margin-top: 40px;
  .mapboxgl-map {
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 2px 6px rgba(0,0,0,0.23);
}
  .map_pin {
    cursor: pointer;
  }
`;


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1)
  }

export default (props) => {
  const [geoLocation, setGeoLocation] = useState(null);
  const [countryData, setCountryData] = useState(null);

  let country = props.pageContext.country;

  let alphaCode = props.pageContext.code;

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${country}&key=fa11ace2e33a43c390a4128335bb7484`);
      const geo = data.data.results[0].geometry;
      const restCountries = await axios.get(`https://restcountries.eu/rest/v2/alpha/${alphaCode}`);
      const restCountryData = restCountries.data;
      console.log(restCountryData);

      setCountryData(restCountryData);
      setGeoLocation(geo); 
    }

    fetchData();

  }, []);


  return (
    <Layout>
      {countryData ? <MainPage>
        <SEO title={country} />

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
        <p>I haven't been, but you can.</p>
        <GetGuideButton href={`https://en.wikivoyage.org/wiki/${country}`} target="_blank">Get your guide</GetGuideButton>
        
          {geoLocation &&  <MapGL height="500px" viewport={{latitude: geoLocation.lat, longitude: geoLocation.lng}} zoom={4}>
          <a href={`http://maps.google.com/?q=${country} country`} target="_blank"> <Marker latitude={geoLocation.lat} longitude={geoLocation.lng} size={40} /></a>
          </MapGL>}
      
          
        </MainPage> :
         <LoadingPlane />}
    </Layout>
  )
}
