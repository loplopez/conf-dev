import { u } from '../../lib/url';
import { socials } from '../../data/partners';

/**
 * Footer — structure follows netsci2026.com (logo + host logos, then contact,
 * credits, socials, legal), in the NetSci 2027 navy palette.
 */
export default function Footer() {
  return (
    <footer className="bg-[#00005C] text-white font-['Rubik']">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 pt-10 pb-8">
        {/* Logos row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          <a href={u('/')} aria-label="NetSci 2027 home" className="bg-white rounded-md px-3 py-2 inline-flex">
            <img src={u('/netsci-logo.svg')} alt="NetSci" className="h-8 w-auto" />
          </a>
          <div className="flex items-center gap-10">
            <img src={u('/tu-dresden-logo.png')} alt="TU Dresden" className="h-11 w-auto brightness-0 invert opacity-85" />
            <img src={u('/synosys-logo.png')} alt="SynoSys" className="h-11 w-auto brightness-0 invert opacity-85" />
          </div>
        </div>

        {/* Contact, credits, socials, legal */}
        <div className="pt-6 flex flex-col md:flex-row md:items-end justify-between gap-6 text-sm text-white/70">
          <div className="space-y-1">
            <p>
              Contact: <a href="mailto:netsci@tu-dresden.de" className="underline hover:text-tu-gold">netsci@tu-dresden.de</a>
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-3">
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.name}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-tu-gold hover:text-tu-deep flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.d} /></svg>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs text-white/50">
              <a href="https://synosys.github.io/imprint/" className="hover:text-tu-gold">Imprint</a>
              <a href="https://synosys.github.io/data-protection" className="hover:text-tu-gold">Privacy</a>
              <a href="https://synosys.github.io/accessibility" className="hover:text-tu-gold">Accessibility</a>
              <span>© 2027 NetSci</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
