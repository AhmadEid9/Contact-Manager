import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import axios from "axios";
import "./style.css"
import "leaflet/dist/leaflet.css"

import { Icon, divIcon, point } from "leaflet";
import { useEffect, useState } from "react";

const customIcon = new Icon({
    iconUrl: require("./icons/placeholder.png"),
    iconSize: [38, 38]
});

const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
};


    

const Map = () => {
  const [markers, setMarkers] = useState([
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am pop up 1"
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop up 2"
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am pop up 3"
    }
  ]);
  const fetchContacts = async ()=>{
    await axios.get("http://localhost:8000/api/contacts")
    .then(response => {
        Array.from(response.data).map( (contact) => {
          setMarkers({
            geocode: [contact.longitude, contact.lattitude],
            popUp: contact.name,
          })
          console.log(markers);
      });
      console.log(response.data);
    })
    }

    useEffect(()=>{
        fetchContacts()
    })
    return(
        <MapContainer center={[48.8566, 2.3522]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
        )
}

export default Map;