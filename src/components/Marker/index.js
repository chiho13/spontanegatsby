import React from 'react';
import CityPin from './pin';
import {Marker} from 'react-map-gl';


const DestinationMarker = (props) => {
    const {latitude, longitude, size} = props;
    return <div>
        <Marker
            longitude={parseFloat(longitude)}
            latitude={parseFloat(latitude)}>
            <CityPin size={size}/>
        </Marker>
        </div>
}


export default DestinationMarker;