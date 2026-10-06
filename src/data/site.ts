// ─────────────────────────────────────────────
//  Site-wide switches, set at build time.
//  Public site (netsci2027.github.io):  landing page only, menu hidden.
//  Dev preview  (netsci2027.github.io/dev, built with PUBLIC_FULL_SITE=1): full site + menu.
//  To launch the full public site, build main with PUBLIC_FULL_SITE=1 as well.
// ─────────────────────────────────────────────
const full = import.meta.env.PUBLIC_FULL_SITE === '1';

/** true → only Home/Registration navigate; other links are inert. */
export const landingOnly = !full;

/** false → top menu and mobile hamburger are hidden (logo only). */
export const showMenu = full;
