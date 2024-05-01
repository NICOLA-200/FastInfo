import React from 'react'
import ModalWrapper from './ModalWrapper'
import map from "../../assets/map.png"
import { useState } from 'react'

import { MapContainer, TileLayer ,Popup , Marker, useMapEvents } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

function LocationPicker({ onLocationSelected }) {
  useMapEvents({
    click(e) {
      
      onLocationSelected(e.latlng); 
      e.stopPropagation();
      // Retrieve the clicked coordinates and pass them to the callback function
    },
  });

  return null;
}

function Step1({city, country, location , updateFields}) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelected = (latlng) => {
    setSelectedLocation(latlng); // Store the selected coordinates
    console.log(latlng)
    updateFields({location: {latitude: latlng.lat, longitude: latlng.lng}})
  };
  return (
     <ModalWrapper title="Address">

<input
            type="text"
            className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[170px] py-5 border-b-2 border-neutral-400"
            placeholder="Country"
            value={country}
            onChange={e => updateFields({ country: e.target.value })}
          />
    
    <input
            type="text"
            className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[170px] py-5 border-b-2 border-neutral-400"
            placeholder="City"
            value={city}
            onChange={e => updateFields({ city: e.target.value })}
          />


       
          <MapContainer center={[-1, 29.90269]} zoom={7} scrollWheelZoom={false} className='w-full h-[40vh]'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* {items.map(item=>(
      <Pin item={item} key={item.id}/>
    ))} */}
      <LocationPicker onLocationSelected={handleLocationSelected} />

      {selectedLocation && (
          <Marker position={selectedLocation}>
            <Popup>
              Selected Location: <br />
              Latitude: {selectedLocation.lat} <br />
              Longitude: {selectedLocation.lng}
            </Popup>
          </Marker>
        )}
  </MapContainer>
    </ModalWrapper>
  )
}

export default Step1