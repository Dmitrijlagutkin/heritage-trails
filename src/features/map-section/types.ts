import type {Feature, Point} from 'geojson'

export const LAYER_IDS = {
    SOURCE: 'parks-source',
    CLUSTER: 'parks-clusters',
    CLUSTER_COUNT: 'parks-cluster-count',
    UNCLUSTERED: 'parks-unclustered'
} as const

export interface ParkFeatureProperties {
    name: string
    designation: string
    color: string
    parkCode: string
    image: string
}

export type ParkFeature = Feature<Point, ParkFeatureProperties>