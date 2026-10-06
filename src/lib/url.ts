/**
 * Base-path aware internal URLs. The public site is served at "/", the dev
 * preview at "/dev/" (netsci2027.github.io/dev). Always build internal links
 * and /public assets with u('/path') so both work.
 */
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
export const u = (path: string) => (path.startsWith('/') ? `${BASE}${path}` : path);
