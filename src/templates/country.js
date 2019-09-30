import React, {useState, useEffect} from "react";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

import MapGL from '../components/Map';
import styled from 'styled-components';
import Marker from "../components/Marker";
import SEO from "../components/seo";

import axios from 'axios';


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

export default (props) => {
  const [geoLocation, setGeoLocation] = useState(null);

  let country = props.pageContext.country;

  useEffect(() => {

    async function fetchData() {
      const data = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${country}&key=fa11ace2e33a43c390a4128335bb7484`);
      const geo = data.data.results[0].geometry;
      setGeoLocation(geo); 
    }

    fetchData();

  }, []);


  return (
    <Layout>
      <MainPage>
        <SEO title={country} />
        <h1>{country}</h1>
        <p>I haven't been, but you can. Get your guide <a style={{ color: '#007bff'}}href={`https://wikitravel.org/en/${country}`}>here</a></p>
          {geoLocation &&  <MapGL height="500px" viewport={{latitude: geoLocation.lat, longitude: geoLocation.lng}} zoom={4}>
          <a href={`http://maps.google.com/?q=${country} country`} target="_blank"> <Marker latitude={geoLocation.lat} longitude={geoLocation.lng} size={40} /></a>
          </MapGL>}
      
          
        </MainPage>
    </Layout>
  )
}
