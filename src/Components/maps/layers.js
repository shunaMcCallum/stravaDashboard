import {React} from "react";
import { TileLayer, LayersControl} from 'react-leaflet'

const Layers = () => {
 
    return(
        <div id="map-layers">
            <LayersControl position='topright'>
                <LayersControl.BaseLayer checked name='Basic Map'>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer checked name='Topo Map'>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
            </LayersControl>
        </div>
    
    );



    
}

export default Layers;