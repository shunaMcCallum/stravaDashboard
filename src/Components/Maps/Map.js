import {useEffect, useState} from "react";
import '../../Styling/Map.css'
import { MapContainer, Polyline, ZoomControl, useMap } from 'react-leaflet'
import polyline from '@mapbox/polyline';
import Layers from './Layers.js';

const Map = ({polyline, centre}) => {

    // Leaflect maps can only be updated by updating children of the MapContainer component itself
    // We therefore need to create a function which sort of becomes like a child component - we do that by using the useMap hook
    // Then we call this function below inside the MapContainer as if it's a component and pass it whatever props we want to update - 
    // in this case we're changing the centre point of the map, which will be changed according to which option we have chosen on a
    // drop-down menu
    function ChangeView({lat, lng}) {
        const map = useMap();
        map.setView([lat, lng]);
        return null;
    }

    return(
        <div id="map-container">
            <MapContainer id="map" center={centre} zoom={13} scrollWheelZoom={false}>
                <ChangeView lat={centre[0]} lng={centre[1]} />
                {/* Layers is a custom component we are importing, which in this case is enabling us to choose different types of map */}
                <Layers />
                <ZoomControl position='topright' />
                <Polyline positions={polyline} />
            </MapContainer>
        </div>
    
    );
    
}

export default Map;