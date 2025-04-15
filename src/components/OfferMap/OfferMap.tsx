import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import { URL_MARKER_DEFAULT } from '../../const';
import { useEffect, useRef } from 'react';
import { MapPoint } from '../../types/mapPoint';

type OfferMapProps = {
  city: City;
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
      const createMarker = ({ latitude, longitude }: MapPoint) => {
        leaflet.marker({ lat: latitude, lng: longitude }, { icon: defaultCustomIcon }).addTo(map);
      };

      if (city.location) {
        map.setView(new leaflet.LatLng(city.location.latitude, city.location.longitude), city.location?.zoom);
      }

      offers.forEach((offer) => {
        if (offer.location) {
          createMarker(offer.location);
        }
      });
    }
  }, [city.location, map, offers]);

  return (
    <div style={mapContainerStyle} ref={mapRef}></div>
  );
}

export default OfferMap;
