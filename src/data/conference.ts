// ─────────────────────────────────────────────
//  Conference data — dates, stats, contributions
// ─────────────────────────────────────────────

// ── Important dates ──────────────────────────

export interface DateItem {
  label: string;
  date: string;
  done: boolean;
  highlight?: boolean;
  primary?: boolean;
}

// Source: NetSci 2027 organising committee timeline (31 Aug 2026).
export const dates: DateItem[] = [
  { label: 'Satellite proposal deadline',          date: '15 November 2026', done: false, highlight: true },
  { label: 'Abstract submission deadline',         date: '15 December 2026', done: false },
  { label: 'Early bird registration deadline',     date: '28 February 2027', done: false },
  { label: 'Satellites & School',                  date: '17 — 18 May 2027 (until midday)', done: false },
  { label: 'Main conference',                      date: '18 — 21 May 2027', done: false, primary: true },
];

// ── At-a-glance stats ────────────────────────

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '5',    label: 'Days of Program' },
  { value: '800+', label: 'Expected Attendees' },
  { value: '40+',  label: 'Countries' },
  { value: '12',   label: 'Satellite Events' },
];

// ── Contribution formats ─────────────────────

export interface Contribution {
  /** Stroke path for a 24×24 outline icon */
  icon: string;
  title: string;
  spec: string;
  desc: string;
}

export const contributions: Contribution[] = [
  {
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M19.5 12c0 4.142-3.358 7.5-7.5 7.5S4.5 16.142 4.5 12 7.858 4.5 12 4.5s7.5 3.358 7.5 7.5z',
    title: 'Contributed talks',
    spec: '12 minutes + 3 min Q&A',
    desc: 'Standard oral presentations with time reserved for audience questions and discussion.',
  },
  {
    icon: 'M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6m-7 0h8M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z',
    title: 'Posters',
    spec: 'A0 portrait · vertical',
    desc: 'Pins will be provided on-site. Local printing partners are listed in the practical information page.',
  },
];

// ── Venue & travel bullet points ─────────────

export interface TravelItem {
  label: string;
  val: string;
}

export const travelItems: TravelItem[] = [
  { label: 'Direct flights', val: 'via DRS, BER, PRG and LEJ airports' },
  { label: 'On campus',      val: 'Hörsaalzentrum & SLUB host main sessions' },
  { label: 'Getting around', val: 'Trams 3, 8, 11 stop at the venue' },
];
