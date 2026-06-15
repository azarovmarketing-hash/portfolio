// Prefix a public asset path with Vite's BASE_URL so it works under
// any deployment subpath (e.g. /portfolio/ on GitHub Pages).
// In dev BASE_URL is '/', in prod build it's '/portfolio/'.
export const asset = (p) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`
