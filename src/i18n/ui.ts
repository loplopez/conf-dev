// ─────────────────────────────────────────────
//  Centralised UI strings (English only for now).
//  Kept as a table so copy lives in one place and a
//  second locale can be re-added later if needed.
// ─────────────────────────────────────────────

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.about.netsci': 'About NetSci',
    'nav.about.committee': 'Committees',
    'nav.about.awards': 'Conference Awards',
    'nav.calls': 'Calls',
    'nav.calls.abstracts': 'Abstracts',
    'nav.calls.satellites': 'Satellites',
    'nav.program': 'Program',
    'nav.program.full': 'Full Program',
    'nav.program.speakers': 'Speakers',
    'nav.program.satellites': 'Satellites',
    'nav.registration': 'Registration',
    'nav.venue': 'Venue & Travel',
    'nav.venue.venue': 'Conference Venue',
    'nav.venue.hotels': 'Accommodations',
    'nav.venue.visa': 'Visa Information',
    'nav.venue.travel': 'Getting to Dresden',
    'nav.venue.local': 'Local Information',
    'nav.partners': 'Partners & Sponsors',
    'nav.home': 'NetSci Dresden — home',
    'nav.menu.open': 'Open menu',

    // Use `|` to mark line breaks (the Hero renders one <br/> per pipe).
    'hero.title': 'International School & Conference|on Network Science',
    'hero.dates': 'May 17 — 21, 2027 · Dresden, Germany',
    'hero.cta': 'More Information soon',
    'hero.eventLabel': 'NetSci 2027',

    'about.label': 'Welcome to NetSci Dresden',
    'about.heading': 'NetSci 2027 —',
    'about.place': 'Dresden, Germany',
    'about.body1.pre': 'NetSci is the flagship gathering of the',
    'about.body1.link': 'Network Science Society',
    'about.body1.post':
      ', uniting researchers and practitioners who study complex systems through the lens of networks. For its 2027 edition, the conference comes to Dresden, hosted by the Center Synergy of Systems (SynoSys) at TU Dresden.',
    'about.body2':
      'NetSci 2027 is about breaking the current boundaries of network science: forward-looking ideas, new connections across disciplines, and young researchers at the centre of the program.',

    'dates.label': 'Mark your calendar',
    'dates.heading': 'Important dates',

    'contrib.label': 'For Authors',
    'contrib.heading': 'Preparing your contribution',
    'contrib.sub': 'Format guidelines for the two presentation tracks at NetSci Dresden 2027.',
    'contrib.print.label': 'Local printing',
    'contrib.print.heading': 'Need to print on-site?',
    'contrib.print.body':
      "If you'd rather not travel with your poster, a partner shop near campus offers same-day A0 printing. Place your order at least 24 hours in advance. Closed on Sundays and German public holidays.",
    'contrib.print.cta': 'Full instructions',

    'discover.label': 'Discover Dresden',
    'discover.heading': 'A city of baroque art and bold science.',
    'discover.body':
      "Saxony's capital pairs reconstructed baroque architecture with one of Europe's most ambitious research clusters. TU Dresden — a German University of Excellence — sits a short tram ride from the historic centre, the Elbe river, and the museums of the Zwinger.",
    'discover.cta': 'Read the full travel guide',
    'discover.caption': 'Welcome to Dresden — Florence on the Elbe',

    'footer.partners': 'Hosted by · In partnership with',
    'footer.tagline':
      'The International School and Conference on Network Science, hosted at TU Dresden, 17 — 21 May 2027.',
    'footer.follow': 'Follow',
    'footer.col.conference': 'Conference',
    'footer.col.practical': 'Practical',
    'footer.col.contact': 'Contact',
    'footer.rights': '© 2027 NetSci Dresden Organising Committee. All rights reserved.',
  },
} as const;

export type Lang = keyof typeof ui;
export const defaultLang: Lang = 'en';
