// ─────────────────────────────────────────────
//  Navigation structure. `key` is an i18n string id
//  (see src/i18n/ui.ts); `href` is a locale-agnostic
//  route that gets localized at render time.
// ─────────────────────────────────────────────
import type { ui } from '../i18n/ui';

type UIKey = keyof (typeof ui)['en'];

export interface NavChild {
  key: UIKey;
  href: string;
}

export interface NavItem {
  key: UIKey;
  href: string;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  {
    key: 'nav.about',
    href: '/about',
    children: [
      { key: 'nav.about.committee', href: '/about/committee' },
      { key: 'nav.about.awards', href: '/about/awards' },
      { key: 'nav.about.conduct', href: '/about/code-of-conduct' },
    ],
  },
  {
    key: 'nav.calls',
    href: '/calls',
    children: [
      { key: 'nav.calls.abstracts', href: '/calls/abstracts' },
      { key: 'nav.calls.satellites', href: '/calls/satellites' },
    ],
  },
  {
    key: 'nav.program',
    href: '/program',
    children: [
      { key: 'nav.program.speakers', href: '/program/speakers' },
      { key: 'nav.program.schedule', href: '/program/schedule' },
      { key: 'nav.program.satellites', href: '/program/satellites' },
      { key: 'nav.program.posters', href: '/program/posters' },
      { key: 'nav.program.social', href: '/program/social' },
    ],
  },
  { key: 'nav.registration', href: '/registration' },
  {
    key: 'nav.venue',
    href: '/venue',
    children: [
      { key: 'nav.venue.travel', href: '/venue/travel' },
      { key: 'nav.venue.campus', href: '/venue/campus' },
      { key: 'nav.venue.hotels', href: '/venue/hotels' },
    ],
  },
  { key: 'nav.partners', href: '/partners' },
  { key: 'nav.practical', href: '/practical' },
];
