export const getAssets = (url) => new URL(`/src/assets/${url}`, import.meta.url).href
