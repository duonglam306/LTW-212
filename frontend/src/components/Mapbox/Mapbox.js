import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import location from "./image/location.png";
import React, { useState, useRef, useCallback } from "react";
import MapGL, { FullscreenControl, GeolocateControl, Marker } from "react-map-gl";

const MAPBOXACCESSTOKEN =
    "pk.eyJ1IjoibG9uZ21haTEwNiIsImEiOiJjbDB4ajZ3cWwwOGxiM2lwajN2MG9kN2p1In0.4PE7Yoc48wF6IEmKGWT--Q";
function Mapbox() {
    const [viewport, setViewport] = useState({
        longitude: 106.8053733958996,
        latitude: 10.880560770336665,
        zoom: 14,
    });
    const mapRef = useRef();
    const handleViewportChange = useCallback((newViewport) => setViewport(newViewport), []);

    return (
        <div>
            <MapGL
                ref={mapRef}
                {...viewport}
                width="100vw"
                height="100vh"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={handleViewportChange}
                mapboxApiAccessToken={MAPBOXACCESSTOKEN}
                transitionDuration={20}
            >
                <Marker
                    longitude={106.80618697610669}
                    latitude={10.879752117974931}
                    mapboxApiAccessToken={MAPBOXACCESSTOKEN}
                    offsetLeft={-25}
                    offsetTop={-40}
                >
                    <img src={location} alt="marker" style={{ height: 50, width: 50 }} />
                </Marker>
                <FullscreenControl style={{ right: 10, top: 10 }} />
                <GeolocateControl
                    style={{ right: 10, top: 50 }}
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                    auto
                />
            </MapGL>
        </div>
    );
}

export default Mapbox;
