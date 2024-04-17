import React from 'react'
import ModalWrapper from './ModalWrapper'
import map from "../../assets/map.png"
import { useState } from 'react'

import { MapContainer, TileLayer ,Popup , Marker, useMapEvents } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

function LocationPicker({ onLocationSelected }) {
  useMapEvents({
    click(e) {
      onLocationSelected(e.latlng); // Retrieve the clicked coordinates and pass them to the callback function
    },
  });

  return null;
}

function Step1({City, Country, location , updateFields}) {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelected = (latlng) => {
    setSelectedLocation(latlng); // Store the selected coordinates
    console.log(latlng)
    updateFields({location: {latitude: latlng.lat, longtude: latlng.lng}})
  };
  return (
     <ModalWrapper title="Address">
    
    <input
            type="text"
            className="  focus:ring-0 focus:outline-none h-[30px] focus:border-blue-900 w-[170px] py-5 border-b-2 border-neutral-400"
            placeholder="City"
            value={City}
            onChange={e => updateFields({ City: e.target.value })}
          />

          <select name="" id="" value={Country}
           onChange={e => updateFields({ Country: e.target.value })}
           className="appearance-none bg-gray-100 w-[200px] border border-gray-300 text-gray-700 py-2 px-5 h-[40px] pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
               <option value="Type of service" className=''>Country</option>
               <option value="Education">Education</option>
               <option value="market">market</option>
               <option value="transport">transport</option>
          </select>
       
          <MapContainer center={[52.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className='w-full h-[40vh]'>
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