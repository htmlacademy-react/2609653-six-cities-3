import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import { URL_MARKER_DEFAULT } from '../../const';
import { useEffect, useRef } from 'react';

type OfferMapProps = {
    city: City;
    offers: Offer[];
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function OfferMap({city, offers}: OfferMapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((ofr) => {
        if(ofr.coords) {
          leaflet
            .marker({
              lat: ofr.coords.lat,
              lng: ofr.coords.lng,
            }, {
              icon: defaultCustomIcon,
            })
            .addTo(map);
        }
      });
    }
  }, [map, offers]);

  return (
    <div
      style={{ height: '100%', minHeight: '500px', margin: '0 auto' }} ref={mapRef}
    >
    </div>
  );
}

export default OfferMap;
