const MAP_TILER_API_KEY = import.meta.env.MAP_TILER_API_KEY;

// Debug environment variables
console.log('Environment variables:', {
    MAP_TILER_API_KEY: import.meta.env.MAP_TILER_API_KEY,
    allEnv: import.meta.env
});

export const envVars = {
    MAP_TILER_API_KEY: MAP_TILER_API_KEY || 'default_key_for_development'
} as const; 