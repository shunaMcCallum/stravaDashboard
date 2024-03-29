import { Box } from '@mui/material';
import { MapContainer, Polyline, ZoomControl, useMap } from 'react-leaflet';
import Layers from './layers.js';

const Map = ({polyline}) => {

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
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "1.5rem"
            }}
        >
            {polyline ?
            <MapContainer style={{height: "25rem", width: "30rem"}} center={polyline[0]} zoom={13} scrollWheelZoom={false}>
                <ChangeView lat={polyline[0][0]} lng={polyline[0][1]} />
                {/* Layers is a custom component we are importing, which in this case is enabling us to choose different types of map */}
                <Layers />
                <ZoomControl position='topright' />
                <Polyline positions={polyline} color={'blue'} weight={4} />
            </MapContainer>
            : null }
        </Box>   
    );
    
}

export default Map;