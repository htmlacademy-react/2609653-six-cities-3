import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import { MAP_ZOOM_DEFAULT, URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { useCallback, useEffect, useRef } from 'react';
import React from 'react';

type OfferMapProps = {
  city: City;
  offers: Offer[];
  activeOfferId?: string | null;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mapContainerStyle = { height: '100%', minHeight: '500px', margin: '0 auto' };

function OfferMap({ city, offers, activeOfferId }: OfferMapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const activeId = useRef<string | null>(activeOfferId || null);
  const activeMarker = useRef<leaflet.Marker | null>(null);

  const pickMarkers = useCallback((mapObj: leaflet.Map, center: leaflet.LatLngExpression, points: leaflet.LatLngExpression[], zoom: number) => {
    mapObj.setView(center, zoom);

    points.forEach((p) => {
      leaflet.marker(p, { icon: defaultCustomIcon }).addTo(mapObj);
    });
  }, []);

  useEffect(() => {
    //console.log(`Active Offer: ${activeOfferId};`);
    if (map && city.location && offers.length) {
      pickMarkers(map, { lat: city.location.latitude, lng: city.location.longitude },
        offers.map((x) => new leaflet.LatLng(x.location.latitude, x.location.longitude)),
        city.location?.zoom || MAP_ZOOM_DEFAULT);
    }
  }, [city.location, map, offers]);

  useEffect(() => {
    //console.log(activeOfferId);
    //console.log('activeId.current:' + activeId.current)
    if(!map) {
      return;
    }
    if(activeMarker.current !== null) {
      activeMarker.current.removeFrom(map);
      activeMarker.current = null;
    }

    if(activeOfferId) {
      const activeOffer = offers.find((x) => x.id === activeOfferId);
      if (activeOffer) {
        activeMarker.current = leaflet.marker({lat: activeOffer.location.latitude, lng: activeOffer.location.longitude}, { icon: currentCustomIcon });
        activeMarker.current.addTo(map);
      }
    }

    activeId.current = activeOfferId || null;
  }, [map, activeOfferId, offers]);

  return (
    <div style={mapContainerStyle} ref={mapRef}></div>
  );
}

export default React.memo(OfferMap);
