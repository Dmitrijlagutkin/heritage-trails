import { useEffect, useRef } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { envVars } from '../../../config/env';

// Configure MapTiler SDK
maptilersdk.config.apiKey = envVars.MAP_TILER_API_KEY;

interface MapSectionProps {
  currentLocale: string | undefined;
}

export const Map = ({ currentLocale }: MapSectionProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const locale = currentLocale || "en";

  // Center of USA
  const centerUSA = { lat: 39.8283, lng: -98.5795 };
  const zoom = 4;

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize the map
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS.NIGHT,
      center: [centerUSA.lng, centerUSA.lat],
      zoom: zoom,
      projection: 'mercator'
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return (
    
      <div 
        ref={mapContainer} 
        className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg"
      />
  
  );
};
