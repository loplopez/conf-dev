// ─────────────────────────────────────────────
//  Program data — daily schedule overview & committee
// ─────────────────────────────────────────────

export interface ScheduleSlot {
  time: string;
  title: string;
  kind: 'keynote' | 'session' | 'break' | 'social' | 'satellite';
  room?: string;
}

export interface ScheduleDay {
  day: string;
  date: string;
  slots: ScheduleSlot[];
}

export const schedule: ScheduleDay[] = [
  {
    day: 'Monday',
    date: '17 May 2027',
    slots: [
      { time: '09:00', title: 'Satellite symposia (full day)', kind: 'satellite', room: 'HSZ' },
      { time: '18:00', title: 'Welcome reception', kind: 'social', room: 'Zwinger' },
    ],
  },
  {
    day: 'Tuesday',
    date: '18 May 2027',
    slots: [
      { time: '09:00', title: 'Opening & keynote — Alessandro Vespignani', kind: 'keynote', room: 'Audimax' },
      { time: '10:30', title: 'Coffee break', kind: 'break' },
      { time: '11:00', title: 'Contributed sessions I', kind: 'session', room: 'HSZ' },
      { time: '14:00', title: 'Lightning talks', kind: 'session', room: 'Audimax' },
      { time: '16:00', title: 'Poster session A', kind: 'session', room: 'SLUB' },
    ],
  },
  {
    day: 'Wednesday',
    date: '19 May 2027',
    slots: [
      { time: '09:00', title: 'Keynote — Tiago P. Peixoto', kind: 'keynote', room: 'Audimax' },
      { time: '11:00', title: 'Contributed sessions II', kind: 'session', room: 'HSZ' },
      { time: '14:00', title: 'Excursion: Saxon Switzerland', kind: 'social' },
    ],
  },
  {
    day: 'Thursday',
    date: '20 May 2027',
    slots: [
      { time: '09:00', title: 'Keynote — Renaud Lambiotte', kind: 'keynote', room: 'Audimax' },
      { time: '11:00', title: 'Contributed sessions III', kind: 'session', room: 'HSZ' },
      { time: '16:00', title: 'Poster session B', kind: 'session', room: 'SLUB' },
      { time: '19:30', title: 'Conference dinner', kind: 'social', room: 'Albrechtsberg' },
    ],
  },
  {
    day: 'Friday',
    date: '21 May 2027',
    slots: [
      { time: '09:00', title: 'Keynote — Yamir Moreno', kind: 'keynote', room: 'Audimax' },
      { time: '11:00', title: 'Awards & closing', kind: 'session', room: 'Audimax' },
    ],
  },
];

// Roles & responsibilities chart (Google doc "NetSci2027 Web content", Oct 2026).
// Affiliations verified from institutional pages, Oct 2026.
export interface CommitteeGroup {
  role: string;
  members: { name: string; affiliation: string }[];
}

const TUD = 'TU Dresden';

export const committees: CommitteeGroup[] = [
  // Order agreed by the organising committee (7 Oct 2026): general chairs + local organizers first,
  // then program, poster and satellite chairs.
  { role: 'General Chairs & Local Organizers', members: [
    { name: 'Dirk Brockmann', affiliation: TUD },
    { name: 'Franziska Derkum', affiliation: TUD },
    { name: 'Philipp Hövel', affiliation: 'Saarland University' },
    { name: 'Thordis Kombrink', affiliation: TUD },
    { name: 'Philipp Lorenz-Spreen', affiliation: TUD },
  ]},
  { role: 'Program Chairs', members: [
    { name: 'Eckehard Olbrich', affiliation: 'MPI for Mathematics in the Sciences, Leipzig' },
    { name: 'Nataša Djurdjevac Conrad', affiliation: 'Zuse Institute Berlin' },
    { name: 'Hiroki Sayama', affiliation: 'Binghamton University' },
    { name: 'Mirta Galesic', affiliation: 'Complexity Science Hub Vienna' },
    { name: 'Sune Lehmann', affiliation: 'Technical University of Denmark' },
  ]},
  { role: 'Poster Chairs', members: [
    { name: 'Jana Diesner', affiliation: 'Technical University of Munich' },
    { name: 'Marc Timme', affiliation: TUD },
    { name: 'Diego Rybski', affiliation: 'Leibniz Institute of Ecological Urban and Regional Development (IÖR)' },
  ]},
  { role: 'Satellite Chairs', members: [
    { name: 'Laura Alessandretti', affiliation: 'Technical University of Denmark' },
    { name: 'Martin Hilbert', affiliation: 'University of California, Davis' },
    { name: 'Carlos Aguilar-Trigueros', affiliation: 'University of Jyväskylä' },
  ]},
  { role: 'Invited Speaker Chairs', members: [
    { name: 'Hiroki Sayama', affiliation: 'Binghamton University' },
    { name: 'Diego Rybski', affiliation: 'Leibniz Institute of Ecological Urban and Regional Development (IÖR)' },
    { name: 'Sune Lehmann', affiliation: 'Technical University of Denmark' },
    { name: 'Eckehard Olbrich', affiliation: 'MPI for Mathematics in the Sciences, Leipzig' },
  ]},
  { role: 'School Chair', members: [
    { name: 'Henrik Olsson', affiliation: 'Complexity Science Hub Vienna' },
  ]},
  { role: 'Young Researcher Chair', members: [
    { name: 'Kathrin Busch', affiliation: 'University of Potsdam' },
  ]},
  { role: 'Travel Awards Chair', members: [
    { name: 'Mirta Galesic', affiliation: 'Complexity Science Hub Vienna' },
  ]},
  { role: 'Sponsor Chair', members: [
    { name: 'Franziska Derkum', affiliation: TUD },
  ]},
  { role: 'Childcare Chairs', members: [
    { name: 'Thordis Kombrink', affiliation: TUD },
    { name: 'Philipp Lorenz-Spreen', affiliation: TUD },
  ]},
  { role: 'Web Chairs', members: [
    { name: 'Bao Tran Truong', affiliation: TUD },
    { name: 'Adrian Pelcaru', affiliation: TUD },
    { name: 'Ezequiel Lopez-Lopez', affiliation: TUD },
  ]},
];
