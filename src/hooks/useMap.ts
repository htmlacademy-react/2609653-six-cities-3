import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from '../types/city';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City
) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    const createMapInstance = () => {
      const mapConfig = {
        center: {
          lat: city.location?.latitude || 0,
          lng: city.location?.longitude || 0,
        },
        zoom: city.location?.zoom,
      };
      return new Map(mapRef.current!, mapConfig);
    };

    const addTileLayer = (mapInstance: Map) => {
      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );
      mapInstance.addLayer(layer);
    };

    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = createMapInstance();
      addTileLayer(instance);
      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
