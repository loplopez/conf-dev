// ─────────────────────────────────────────────
//  Conference data — dates, stats, contributions
// ─────────────────────────────────────────────

// ── Important dates ──────────────────────────

export interface DateItem {
  short: string; // as shown on the home timeline, e.g. "NOV 15"
  label: string;
  date: string;
  done: boolean;
  highlight?: boolean;
  primary?: boolean;
}

// Items mirror the netsci2026.com key-dates timeline; TBD where not decided yet.
// Source for known dates: organising committee timeline + 6 Oct decisions.
export const dates: DateItem[] = [
  { short: 'OCT 9',     label: 'Call for contributions',            date: '9 October 2026',   done: false },
  { short: 'NOV 15',    label: 'Satellite submission deadline',     date: '15 November 2026', done: false, highlight: true },
  { short: 'DEC 1',     label: 'Abstract submission deadline',      date: '1 December 2026', done: false },
  { short: 'TBD',       label: 'Satellite notification',            date: 'TBD',              done: false },
  { short: 'TBD',       label: 'Abstract notification',             date: 'TBD',              done: false },
  { short: 'FEB 28',    label: 'Early bird registration deadline',  date: '28 February 2027', done: false },
  { short: 'TBD',       label: 'Presenter deadline',                date: 'TBD',              done: false },
  { short: 'MAY 17–18', label: 'Satellites & School (until 18 May midday)',           date: '17 — 18 May 2027', done: false, primary: true },
  { short: 'MAY 18–21', label: 'Main conference (from 18 May midday)',                   date: '18 — 21 May 2027', done: false, primary: true },
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
    desc: 'Pins will be provided on-site.',
  },
];

// ── Venue & travel bullet points ─────────────

export interface TravelItem {
  label: string;
  val: string;
}

export const travelItems: TravelItem[] = [
  { label: 'Direct flights', val: 'via DRS, BER, PRG and LEJ airports' },
  { label: 'Venue',          val: 'To-be-revealed location in Dresden' },
  { label: 'Getting around', val: 'Trams 3, 8, 11 stop at the venue' },
];
