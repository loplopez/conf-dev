import { socials } from '../../data/partners';
import { useTranslations } from '../../i18n/utils';
import { landingOnly } from '../../data/site';

const t = useTranslations();

// Landing-only demo: only Registration links; the footer keeps its full layout.
const livePaths = new Set(['/registration']);
const L = (path: string) => (landingOnly && !livePaths.has(path) ? '#' : path);

interface Props {
  /** Minimal mode: show only the TU Dresden + SynoSys logo strip. */
  minimal?: boolean;
}

export default function Footer({ minimal = false }: Props) {
  return (
    <footer className="bg-tu-deep text-white">
      {/* Partners strip — TU Dresden + SynoSys logos */}
      <div className={minimal ? '' : 'border-b border-white/10'}>
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-10">
          <div className="text-xs uppercase tracking-[0.25em] text-tu-gold font-semibold text-center mb-6">
            {t('footer.partners')}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            <img
              src="/tu-dresden-logo.png"
              alt="TU Dresden"
              className="h-12 md:h-14 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
            <img
              src="/synosys-logo.png"
              alt="SynoSys"
              className="h-12 md:h-14 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>

      {minimal && (
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-5 text-xs text-white/50">
            <a href="mailto:netsci@tu-dresden.de" className="hover:text-tu-gold transition-colors">netsci@tu-dresden.de</a>
            <a href="https://synosys.github.io/imprint/" className="hover:text-tu-gold transition-colors">Imprint</a>
            <a href="https://synosys.github.io/data-protection" className="hover:text-tu-gold transition-colors">Privacy</a>
            <a href="https://synosys.github.io/accessibility" className="hover:text-tu-gold transition-colors">Accessibility</a>
          </div>
        </div>
      )}

      {!minimal && (
      <>
      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
        {/* Brand block */}
        <div>
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-md px-3 py-2 inline-flex">
              <img src="/netsci-logo.svg" alt="NetSci" className="h-8 w-auto" />
            </div>
            <span className="text-[10px] tracking-[0.18em] uppercase text-tu-gold font-semibold">
              Dresden ★
            </span>
          </div>
          <p className="mt-4 text-white/60 text-sm max-w-sm leading-relaxed">{t('footer.tagline')}</p>

          <div className="mt-6 flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-tu-gold font-semibold mr-1">{t('footer.follow')}</span>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-tu-gold hover:text-tu-deep flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Conference links */}
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-tu-gold font-semibold mb-4">{t('footer.col.conference')}</div>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li><a href={L('/registration')} className="hover:text-tu-gold transition-colors">{t('nav.registration')}</a></li>
            <li><a href={L('/program')} className="hover:text-tu-gold transition-colors">{t('nav.program')}</a></li>
            <li><a href={L('/program/speakers')} className="hover:text-tu-gold transition-colors">{t('nav.program.speakers')}</a></li>
            <li><a href={L('/calls')} className="hover:text-tu-gold transition-colors">{t('nav.calls')}</a></li>
          </ul>
        </div>

        {/* Practical links */}
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-tu-gold font-semibold mb-4">{t('footer.col.practical')}</div>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li><a href={L('/venue')} className="hover:text-tu-gold transition-colors">{t('nav.venue')}</a></li>
            <li><a href={L('/venue/travel')} className="hover:text-tu-gold transition-colors">{t('nav.venue.travel')}</a></li>
            <li><a href={L('/venue/hotels')} className="hover:text-tu-gold transition-colors">{t('nav.venue.hotels')}</a></li>
            <li><a href={L('/about/code-of-conduct')} className="hover:text-tu-gold transition-colors">{t('nav.about.conduct')}</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-tu-gold font-semibold mb-4">{t('footer.col.contact')}</div>
          <ul className="space-y-2.5 text-sm text-white/75">
            <li><a href="mailto:netsci@tu-dresden.de" className="hover:text-tu-gold">netsci@tu-dresden.de</a></li>
            <li><a href="mailto:program.netsci@tu-dresden.de" className="hover:text-tu-gold">program.netsci@tu-dresden.de</a></li>
            <li><a href="mailto:satellites.netsci@tu-dresden.de" className="hover:text-tu-gold">satellites.netsci@tu-dresden.de</a></li>
            <li className="text-white/50 pt-1 text-xs">TU Dresden, 01062 Dresden</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>{t('footer.rights')}</div>
          <div className="flex items-center gap-5">
            <a href="https://synosys.github.io/data-protection" className="hover:text-tu-gold transition-colors">Privacy</a>
            <a href="https://synosys.github.io/imprint/" className="hover:text-tu-gold transition-colors">Imprint</a>
            <a href="https://synosys.github.io/accessibility" className="hover:text-tu-gold transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
      </>
      )}
    </footer>
  );
}
