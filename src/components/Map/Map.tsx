import React, {useContext, useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon.ts';
import {SimpleAdEntity} from 'types';

import 'leaflet/dist/leaflet.css';
import './Map.css';
import {SearchContext} from "../../context/search.context";
import {SingleAd} from "./SingleAd";

export const Map = () => {
  const {search} = useContext(SearchContext);
  const [ads, setAds] = useState<SimpleAdEntity[]>([])

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/ad/search/${search}`)
      const data = await res.json();
      const checkAds = data === null ? [] : data;
      setAds(checkAds);
    })();
  }, [search]);
  return (
    <div className='map'>
      <MapContainer center={[9, 9]} zoom={7}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> & contributors'
        />
        {ads.map(ad => {
            if (ad !== null) {
              return (
                <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                  <Popup>
                    <SingleAd key={ad.id} id={ad.id}/>
                  </Popup>
                </Marker>
              )
            } else {
              console.log('poklik')
              return null
            }
          }
        )}
      </MapContainer>
    </div>
  )
}
