import { useEffect, useRef } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import { envVars } from '../../../config/env';
import { features } from '../utils/parkFeatures';
import { addClusterCountLayer, addUnclusteredLayer } from '../utils/mapLayers';
import { addClusterLayer } from '../utils/mapLayers';
import { addSource } from '../utils/mapLayers';
import { LAYER_IDS } from '../types';
import type { ParkFeatureProperties } from '../types';
import { handlePointHover, handlePointLeave } from '../helpers/helpers';
import { createPopup } from '../helpers/helpers';
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

     // Wait for map to load before adding sources and layers
     map.current.on('load', () => {
      if (!map.current) return
     
      // Add layers
      addSource(map.current, features)
      addClusterLayer(map.current)
      addClusterCountLayer(map.current)
      addUnclusteredLayer(map.current)

      // Add popup for unclustered points
      const popup = createPopup()

      // Add hover events for unclustered points
      map.current.on('mouseenter', LAYER_IDS.UNCLUSTERED, e => {
          if (!map.current) return
          handlePointHover(e, map.current, popup)
      })

      map.current.on('mouseleave', LAYER_IDS.UNCLUSTERED, () => {
          if (!map.current) return
          handlePointLeave(map.current, popup)
      })

      // Add click event for point
      map.current.on('click', LAYER_IDS.UNCLUSTERED, e => {
          if (!map.current) return
          const feature = e.features?.[0]
          if (!feature) return

          const properties = feature.properties as ParkFeatureProperties
          console.log("unclustered clicked", properties)
      })

      // Add click event for clusters
      map.current.on('click', LAYER_IDS.CLUSTER, e => {
          if (!map.current) return
          console.log('cluster clicked')
          // handleClusterClick(e, map.current, LAYER_IDS.SOURCE, LAYER_IDS.CLUSTER)
      })
  })

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
