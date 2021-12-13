import ReactMapGL from 'react-map-gl';
import { useState } from 'react';

const SimpleMapPage = () => {

    let key = 'AIzaSyBzRpokcA3bqRYAbuqGkqmzPNny4b33KSs'
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        // The latitude and longitude of the center of London
        latitude: 51.5074,
        longitude: -0.1278,
        zoom: 10
    });
 
    return ( 
        <div id="map">
         <ReactMapGL
  mapStyle="mapbox://styles/mapbox/streets-v11"
  mapboxApiAccessToken={process.env.MAPBOX_KEY}
  {...viewport}
  onViewportChange={(nextViewport) => setViewport(nextViewport)}
  >
</ReactMapGL>
        </div>
    );
}
export default SimpleMapPage;


