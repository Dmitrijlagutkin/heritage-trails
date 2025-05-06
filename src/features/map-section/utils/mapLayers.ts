import * as maptilersdk from '@maptiler/sdk'
import {LAYER_IDS} from '../types'
import type {ParkFeature} from '../types'

export const addSource = (map: maptilersdk.Map, features: ParkFeature[]) => {
    map.addSource(LAYER_IDS.SOURCE, {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features
        },
        cluster: true,
        clusterRadius: 50,
        clusterMaxZoom: 2
    })
}

export const addClusterLayer = (map: maptilersdk.Map) => {
    map.addLayer({
        id: LAYER_IDS.CLUSTER,
        type: 'circle',
        source: LAYER_IDS.SOURCE,
        filter: ['has', 'point_count'],
        paint: {
            'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40],
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff',
            'circle-opacity': 0.8
        }
    })
}

export const addClusterCountLayer = (map: maptilersdk.Map) => {
    map.addLayer({
        id: LAYER_IDS.CLUSTER_COUNT,
        type: 'symbol',
        source: LAYER_IDS.SOURCE,
        filter: ['has', 'point_count'],
        layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12
        },
        paint: {
            'text-color': '#ffffff'
        }
    })
}

export const addUnclusteredLayer = (map: maptilersdk.Map) => {
    map.addLayer({
        id: LAYER_IDS.UNCLUSTERED,
        type: 'circle',
        source: LAYER_IDS.SOURCE,
        filter: ['!', ['has', 'point_count']],
        paint: {
            'circle-radius': 6,
            'circle-color': ['get', 'color'],
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff',
            'circle-opacity': 0.8
        }
    })
}
