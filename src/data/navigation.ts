// ─────────────────────────────────────────────
//  Navigation — mirrors netsci2026.com.
//  Items with `children` are dropdown headers only (no landing page);
//  items with `href` and no children are direct links.
// ─────────────────────────────────────────────
import type { ui } from '../i18n/ui';

type UIKey = keyof (typeof ui)['en'];

export interface NavChild {
  key: UIKey;
  href: string;
}

export interface NavItem {
  key: UIKey;
  href?: string;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  {
    key: 'nav.about',
    children: [
      { key: 'nav.about.netsci', href: '/about' },
      { key: 'nav.about.committee', href: '/about/committee' },
      { key: 'nav.about.awards', href: '/about/awards' },
    ],
  },
  {
    key: 'nav.calls',
    children: [
      { key: 'nav.calls.abstracts', href: '/calls/abstracts' },
      { key: 'nav.calls.satellites', href: '/calls/satellites' },
    ],
  },
  {
    key: 'nav.program',
    children: [
      { key: 'nav.program.full', href: '/program' },
      { key: 'nav.program.speakers', href: '/program/speakers' },
      { key: 'nav.program.satellites', href: '/program/satellites' },
    ],
  },
  { key: 'nav.registration', href: '/registration' },
  {
    key: 'nav.venue',
    children: [
      { key: 'nav.venue.venue', href: '/venue' },
      { key: 'nav.venue.hotels', href: '/venue/accommodations' },
      { key: 'nav.venue.visa', href: '/venue/visa' },
      { key: 'nav.venue.travel', href: '/venue/travel' },
      { key: 'nav.venue.local', href: '/venue/local' },
    ],
  },
  { key: 'nav.partners', href: '/partners' },
  { key: 'nav.contact', href: '/contact' },
];
