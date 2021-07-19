import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

export default function Map() {
  //setting state to hold the center of the map
  const [center, setCenter] = useState([44.4759, -73.2121]);

  return (
    //   div to hold leaflet map
    <div id="mapContainer">
      <MapContainer center={center} zoom={14} style={{ height: "60vh" }}>
        {/* importing map texture aka tile layer */}
        <TileLayer
          url="https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* //hard coding markers for all the restaurants with links to individual pages */}
        <Marker position={[44.4883656, -73.1851576]} icon={DefaultIcon}>
          <Popup>
            <a href="/restaurants/pingala">Pingala</a>
          </Popup>
        </Marker>
        <Marker position={[44.4779227, -73.2116447]} icon={DefaultIcon}>
          <Popup>
            <a href="/restaurants/revol-kitch">Revolution Kitchen</a>
          </Popup>
        </Marker>
        <Marker position={[44.4879014, -73.2074067]} icon={DefaultIcon}>
          <Popup>
            <a href="/restaurants/knead">Knead</a>
          </Popup>
        </Marker>
        <Marker position={[44.4903305, -73.18678905]} icon={DefaultIcon}>
          <Popup>
            <a href="/restaurants/tiny-thai">Tiny Thai</a>
          </Popup>
        </Marker>
        <Marker position={[44.47703, -73.21143]} icon={DefaultIcon}>
          <Popup>
            <a href="/restaurants/stone-soup">Zabby and Elf's Stone Soup</a>
          </Popup>
        </Marker>
        <Marker position={[44.4889265, -73.207074]} icon={DefaultIcon}>
          <Popup>
            <a href="/restaurants/pho-hong">Pho Hong</a>
          </Popup>
        </Marker>
        <Marker position={[44.4779574, -73.21464412856254]} icon={DefaultIcon}>
          <Popup>
            {" "}
            <a href="/restaurants/sing-peb">A Single Pebble</a>
          </Popup>
        </Marker>
        <Marker position={[44.47612, -73.212212]} icon={DefaultIcon}>
          <Popup>
            <a href="/restaurants/honey-road">Honey Road</a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
