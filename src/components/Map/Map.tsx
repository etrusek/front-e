import React, {useContext, useEffect} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon.ts';

import 'leaflet/dist/leaflet.css';
import './Map.css';
import {SearchContext} from "../../context/search.context";

export const Map = ()=>{
  const {search}=useContext(SearchContext);

  useEffect(()=>{
    console.log('Maqe request to search for', search)
  }, [search])

  return (
    <div className='map'>
      <h1>Search for: {search}</h1>
      <MapContainer center={[52.5525931,19.703432]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> & contributors'
        />
        <Marker position={[52.5525931,19.703432]}>
          <Popup>
            <h2>Coś w Płockowie</h2>
            <p>I opis do tego</p>
          </Popup>
        </Marker>
        <Marker position={[52.5527606,19.6995239]}>
          <Popup>
            <h2>Coś w Płockowie obok</h2>
            <p>I opis do tego</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
