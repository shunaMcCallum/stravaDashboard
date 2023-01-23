import {React} from "react";
import { TileLayer, LayersControl} from 'react-leaflet'

const Layers = () => {
 
    return(
        <div>
            <LayersControl position='topright'>
                <LayersControl.BaseLayer checked name='Basic Map'>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer checked name='Topo Map'>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
            </LayersControl>
        </div>
    
    );
    
}

export default Layers;