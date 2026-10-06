import { cn } from '../../lib/cn';

// Fee tiers mirror the NetSci conference-series structure, localized to
// Dresden 2027 (conference opens 18 May 2027).
const earlyDeadline = '5 February 2027';
const onlineDeadline = '6 May 2027';

interface Fee {
  category: string;
  early: string;
  standard: string;
  note?: string;
}

const fees: Fee[] = [
  { category: 'Satellite events only', early: '€300', standard: '€400' },
  { category: 'Students / PhD students', early: '€375', standard: '€475', note: 'Valid student ID required' },
  { category: 'Post-doc', early: '€480', standard: '€580' },
  { category: 'Academic', early: '€655', standard: '€755' },
  { category: 'Non-academic', early: '€780', standard: '€880' },
];

const included = [
  'Access to all keynotes and contributed sessions',
  'Satellite symposia and poster sessions',
  'Welcome reception at the Zwinger',
  'Coffee breaks and lunches on conference days',
  'Conference materials and digital proceedings',
  'Networking and presentation opportunities',
];

const steps = [
  { title: 'Open the portal', body: 'Registration runs through the conference registration system. Click “Register now”.' },
  { title: 'Choose your category', body: 'Select your fee tier and any optional add-ons (conference dinner, excursion).' },
  { title: 'Pay & confirm', body: 'Pay by card or invoice. A confirmation email follows — check spam if it does not arrive.' },
];

const cancellation = [
  { when: 'On or before 20 February 2027', terms: 'Full refund, minus a €25 administration fee.' },
  { when: '21 February – 31 March 2027', terms: '50% refund, minus a €25 administration fee.' },
  { when: 'From 1 April 2027', terms: 'No refund. The same applies to no-shows.' },
];

export const registrationLede = `Early-bird rates apply until ${earlyDeadline}. Online registration closes ${onlineDeadline}; on-site registration opens afterwards.`;

export default function Registration() {
  return (
    <>
      {/* Deadline banner + primary CTA */}
      <div data-reveal className="bg-tu-deep text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5 mb-12">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-tu-gold font-semibold">Early-bird open</div>
          <p className="mt-1 font-display text-2xl font-bold">Register by {earlyDeadline} for the best rate</p>
        </div>
        <a
          href="mailto:register@netsci-dresden.de?subject=NetSci%20Dresden%202027%20Registration"
          className="shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-tu-sky text-white font-semibold hover:bg-tu-blue active:scale-95 transition-all"
        >
          Register now
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        </a>
      </div>

      {/* Fee table */}
      <section data-reveal className="mb-14">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-tu-deep mb-1">Registration fees</h2>
        <p className="text-tu-ink/60 text-sm mb-6">All fees are in euro (€) and include German VAT where applicable.</p>

        <div className="overflow-x-auto rounded-2xl border border-tu-navy/10 shadow-card">
          <table className="w-full text-left border-collapse min-w-[520px]">
            <thead>
              <tr className="bg-tu-deep text-white">
                <th className="px-5 py-4 font-semibold text-sm">Category</th>
                <th className="px-5 py-4 font-semibold text-sm">
                  Early bird
                  <span className="block text-[11px] font-normal text-tu-gold">until {earlyDeadline}</span>
                </th>
                <th className="px-5 py-4 font-semibold text-sm">
                  Standard
                  <span className="block text-[11px] font-normal text-white/50">after {earlyDeadline}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {fees.map((f, i) => (
                <tr
                  key={f.category}
                  className={cn(
                    'group border-t border-tu-navy/10 transition-colors duration-200 hover:bg-tu-ice',
                    i % 2 === 1 && 'bg-tu-ice/40'
                  )}
                >
                  <td className="px-5 py-4 relative">
                    {/* gold accent bar slides in on hover */}
                    <span className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-tu-gold scale-y-0 motion-safe:group-hover:scale-y-100 origin-center transition-transform duration-200" />
                    <div className="font-medium text-tu-deep transition-colors duration-200 group-hover:text-tu-navy">{f.category}</div>
                    {f.note && <div className="text-xs text-tu-ink/50 mt-0.5">{f.note}</div>}
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-block font-display text-lg font-bold text-tu-navy origin-left transition-transform duration-200 motion-safe:group-hover:scale-110">
                      {f.early}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-mono text-tu-ink/70 transition-colors duration-200 group-hover:text-tu-ink">{f.standard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-tu-ink/50 mt-3">
          The conference dinner at Schloss Albrechtsberg and the excursion are optional add-ons selected during registration.
        </p>
      </section>

      {/* What's included + How to register */}
      <div className="grid lg:grid-cols-2 gap-8 mb-14">
        <section data-reveal className="bg-white rounded-2xl border border-tu-navy/10 shadow-card p-7">
          <h2 className="font-display text-xl font-bold text-tu-deep mb-5">What your fee includes</h2>
          <ul className="space-y-2.5 text-sm text-tu-ink/80">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-tu-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section data-reveal className="bg-white rounded-2xl border border-tu-navy/10 shadow-card p-7">
          <h2 className="font-display text-xl font-bold text-tu-deep mb-5">How to register</h2>
          <ol className="space-y-5">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-tu-navy text-white font-display font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <div className="font-semibold text-tu-deep">{s.title}</div>
                  <p className="text-sm text-tu-ink/70 mt-0.5">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* Cancellation */}
      <section data-reveal className="mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-tu-deep mb-6">Cancellation & refunds</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {cancellation.map((c) => (
            <div key={c.when} className="rounded-2xl border border-tu-navy/10 bg-white shadow-card p-6">
              <div className="text-xs uppercase tracking-[0.18em] text-tu-blue font-semibold">{c.when}</div>
              <p className="mt-2 text-sm text-tu-ink/75 leading-relaxed">{c.terms}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-tu-ink/50 mt-4">
          Refunds are processed after the conference. Any change to an issued invoice incurs a €25 fee (plus 19% VAT);
          no invoice changes are possible once the conference has ended.
        </p>
      </section>

      {/* Help */}
      <div data-reveal className="bg-tu-cream border border-tu-navy/10 rounded-2xl p-7 text-center">
        <h2 className="font-display text-xl font-bold text-tu-deep">Questions about registration?</h2>
        <p className="mt-2 text-sm text-tu-ink/70">
          Email <a href="mailto:register@netsci-dresden.de" className="text-tu-navy underline decoration-tu-gold underline-offset-2">register@netsci-dresden.de</a> and we will help you out.
        </p>
      </div>
    </>
  );
}
