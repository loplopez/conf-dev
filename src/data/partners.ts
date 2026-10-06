// ─────────────────────────────────────────────
//  Social link data
// ─────────────────────────────────────────────

export interface Social {
  name: string;
  href: string;
  /** SVG fill path for a 24×24 viewBox icon */
  d: string;
}

// Only accounts we have confirmed. Add X / Bluesky / Instagram once the NetSci handles are confirmed.
export const socials: Social[] = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/netsci-conference/',
    d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z',
  },
];
