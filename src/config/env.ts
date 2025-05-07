const MAP_TILER_API_KEY = import.meta.env.PUBLIC_MAP_TILER_API;

export const envVars = {
    MAP_TILER_API_KEY: MAP_TILER_API_KEY || 'default_key_for_development'
} as const; 