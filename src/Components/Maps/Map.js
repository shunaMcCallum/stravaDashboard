import {useEffect} from "react";
import '../../Styling/Map.css'
import { MapContainer, TileLayer, useMap, Marker, Popup, Polyline } from 'react-leaflet'
import polyline from '@mapbox/polyline'

const Map = ({polyline}) => {

    return(

        <div id="map-container">
            <MapContainer id="map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {polyline.map((p, i) => {
                <Polyline key = {i} positions={p}>
                </Polyline>
            })}

            <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
            </MapContainer>
        </div>
    
    );
    
}

export default Map;