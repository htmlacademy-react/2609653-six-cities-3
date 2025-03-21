import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { City2, OfferPoint } from '../../types/city';
import { Offer } from '../../types/offer';
import { URL_MARKER_DEFAULT } from '../../const';
import { useEffect, useRef } from 'react';

type OfferMapProps = {
  city: City2;
  offers: Offer[];
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mapContainerStyle = { height: '100%', minHeight: '500px', margin: '0 auto' };

function OfferMap({ city, offers }: OfferMapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map && offers.length > 0) {
      const createMarker = (coords: OfferPoint) => {
        leaflet.marker({ lat: coords.lat, lng: coords.lng }, { icon: defaultCustomIcon }).addTo(map);
      };

      if (city.location) {
        map.setView(new leaflet.LatLng(city.location.lat, city.location.lng), city.location?.zoom);
      }

      offers.forEach((offer) => {
        if (offer.coords) {
          createMarker(offer.coords);
        }
      });
    }
  }, [city.location, map, offers]);

  return (
    <div style={mapContainerStyle} ref={mapRef}></div>
  );
}

export default OfferMap;
