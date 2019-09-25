import React from 'react';

const Pin = (props) => {
    const {size} = props;
    return <svg
        height={size}
        fill="#e22"
        version="1.1"
        x="0px"
        y="0px"
        className="map_pin"
        style={{
        transform: `translate(${ - size / 2}px,${ - size}px)`
    }}
        viewBox="0 0 100 100">
        <path
            d="M50,1.757c-22.471,0-40.687,18.217-40.687,40.687c0,32.55,40.687,55.8,40.687,55.8s40.687-25.575,40.687-55.8  C90.687,19.974,72.471,1.757,50,1.757z M50,57.557c-8.346,0-15.112-6.766-15.112-15.113c0-8.346,6.767-15.111,15.112-15.111  s15.113,6.766,15.113,15.111C65.113,50.791,58.346,57.557,50,57.557z"></path>
    </svg>
};

export default Pin;