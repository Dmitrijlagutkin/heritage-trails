import * as maptilersdk from '@maptiler/sdk'
import type {Point} from 'geojson'
import type {ParkFeatureProperties} from '../types'

export const createPopup = () => {
    return new maptilersdk.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 25
    })
}

export const handlePointHover = (e: maptilersdk.MapLayerMouseEvent, map: maptilersdk.Map, popup: maptilersdk.Popup) => {
    map.getCanvas().style.cursor = 'pointer'

    const feature = e.features?.[0]
    if (!feature) return

    const coordinates = (feature.geometry as Point).coordinates.slice()
    const properties = feature.properties as ParkFeatureProperties

    if (!coordinates || !properties) return

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
    }

    popup
        .setLngLat(coordinates as [number, number])
        .setHTML(
            `
            <div style="padding: 4px; display: flex; flex-direction: column; gap: 4px; align-items: center;">
                <h3 style="font-size: 16px; font-weight: 600; text-align: center;">${properties.name}</h3>
                <img src="${properties.image}" alt="${properties.name}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 4px;">
            </div>
        `
        )
        .addTo(map)
}

export const handlePointLeave = (map: maptilersdk.Map, popup: maptilersdk.Popup) => {
    map.getCanvas().style.cursor = ''
    popup.remove()
}

export const handleClusterClick = (
    e: maptilersdk.MapLayerMouseEvent,
    map: maptilersdk.Map,
    sourceId: string,
    clusterLayerId: string
) => {
    const features = map.queryRenderedFeatures(e.point, {
        layers: [clusterLayerId]
    })
    if (!features?.[0]) return

    const clusterId = features[0].properties?.cluster_id
    const source = map.getSource(sourceId) as maptilersdk.GeoJSONSource
    source.getClusterExpansionZoom(clusterId).then((zoom: number) => {
        map.easeTo({
            center: (features[0].geometry as any).coordinates,
            zoom: zoom
        })
    })
}
