import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
const GoogleMaps = (props) => {
    const mapStyles = {
        border: "1px solid black",
        minWidth: '550px',
        maxWidth: "550px",
        height: '90%',
        borderRadius: "20px",
        padding: "20px"
    };
    return (
        <div>
        <Map
            google={props.google}
            zoom={7}
            style={mapStyles}
            initialCenter={{
                lat: 23.6850,
                lng: 90.3563 }}
        >
            <Marker position={{
                lat: 23.3813964,
                lng: 92.2861862 
            }} />
            <Marker position={{
                lat: 24.3135237,
                lng: 91.7075346
            }} />
            <Marker position={{
                lat: 21.8161455,
                lng: 89.3926256
            }} />
        </Map>
    </div>
    );
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDL0ZDhLrpJtMvu22Hr50J9HTqvWO4uR3o")
  })(GoogleMaps)