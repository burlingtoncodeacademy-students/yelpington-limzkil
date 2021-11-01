import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

import Nav from "./Nav.js";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

export default function Restaurant() {
  //creating state to hold the fetched object
  const [restInf, setRestInf] = useState("");
  //creating state to hold the center of the leaflet map
  const [center, setCenter] = useState([44.4759, -73.2121]);
  //creating state to hold the lat value of the fetched object
  const [lat, setLat] = useState("");
  //creating state to hold the lat value of the fetched object
  const [lon, setLon] = useState("");

  //retrieving the pathname in the URL and then splitting it in order to dynamically fetch the correct object
  let location = useLocation();

  let id = location.pathname.toString().slice(13);

  useEffect(() => {
    //fetching from internal API
    fetch(`http://localhost:5000/api/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //setting the states to hold various data from the fetched object
        setRestInf(data);
        setLat(data.lat);
        setLon(data.lon);
        setCenter([data.lat, data.lon]);
      });
  }, []);

  return (
    //setting up the page layout to hold all of the fetched information about the restaurant
    <>
      <div id="resta-wrap">
        <h1>{restInf.name}</h1>
        <h2>{restInf.phone}</h2>
        <h2>
          <a href={restInf.web}>Link to website</a>
        </h2>
        <h3>{restInf.address}</h3>
        <blockquote>
          {restInf.days}
          <br />
          {restInf.hours}
        </blockquote>
        <p>{restInf.descrip}</p>
        <h4>{restInf.isVeg}</h4>
        {/* importing the Nav component so it is present on every page */}
        <Nav />
      </div>
      {/* container holding the leaflet map */}
      <div id="mapContainer">
        <MapContainer
          center={center}
          zoom={14}
          style={{ height: "50vh", width: "50vw", margin: "auto" }}
        >
          <TileLayer
            url="https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* dynamically setting the position of the marker with fetched data put into two states */}
          <Marker position={L.latLng(lat, lon)} icon={DefaultIcon}>
            {/* dynamically setting the content of the popup with fetched data */}
            <Popup>
              <a href={restInf.web}>{restInf.name}</a>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}
