import { useEffect, useRef, useState } from 'react';
import { navItems } from '../../data/navigation';
import { useTranslations } from '../../i18n/utils';
import { landingOnly, showMenu } from '../../data/site';

const t = useTranslations();

// Landing-only demo: only these paths navigate; everything else is a dead link.
const livePaths = new Set(['/', '/registration']);
const href = (path: string) => (landingOnly && !livePaths.has(path) ? '#' : path);

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null); // open dropdown key
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close dropdowns on Escape and on click outside the header.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(null);
    }
    function onClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(null);
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  const toggle = (key: string) => setOpen((cur) => (cur === key ? null : key));

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-6" aria-label="Main">
        {/* Logo */}
        <a href={href('/')} className="flex items-center gap-2 shrink-0" aria-label={t('nav.home')}>
          <span className="flex flex-col items-center leading-none">
            <img src="/netsci-logo.svg" alt="NetSci" className="h-8 w-auto" />
            <span className="font-['Rubik'] text-[13px] text-[#00008C] mt-0.5">Dresden 2027</span>
          </span>
        </a>

        {/* Desktop menu */}
        {showMenu && (
        <ul className="hidden lg:flex items-center gap-0 text-[15px] font-normal text-tu-ink">
          {navItems.map((item) => (
            <li key={item.key} className="nav-item relative">
              {item.children ? (
                <>
                  <div className="flex items-center">
                    <a href={href(item.href)} className="px-2 py-2.5 hover:bg-tu-ice transition-colors rounded">
                      {t(item.key)}
                    </a>
                    <button
                      type="button"
                      className="dropdown-toggle px-1.5 py-2.5 hover:bg-tu-ice transition-colors rounded"
                      aria-expanded={open === item.key}
                      aria-haspopup="true"
                      aria-label={`${t(item.key)} ▾`}
                      onClick={() => toggle(item.key)}
                    >
                      <svg className="w-3 h-3 opacity-60 transition-transform" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                        <path d="M2 4l4 4 4-4z" />
                      </svg>
                    </button>
                  </div>
                  <ul className="submenu absolute top-full left-0 mt-1 min-w-[220px] bg-white border border-tu-navy/10 rounded-lg shadow-card py-2">
                    {item.children.map((child) => (
                      <li key={child.key}>
                        <a href={href(child.href)} className="block px-4 py-2 text-sm hover:bg-tu-ice hover:text-tu-navy focus:bg-tu-ice focus:text-tu-navy transition-colors">
                          {t(child.key)}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={href(item.href)} className="px-2 py-2.5 hover:bg-tu-ice transition-colors rounded inline-flex">
                  {t(item.key)}
                </a>
              )}
            </li>
          ))}
        </ul>
        )}

        {/* Mobile hamburger */}
        {showMenu && (
        <button
          className="lg:hidden p-2 rounded-md hover:bg-tu-ice"
          aria-label={t('nav.menu.open')}
          aria-expanded={mobileOpen}
          aria-controls="mobileMenu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg className="w-6 h-6 text-tu-deep" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        )}
      </nav>

      {/* Mobile drawer */}
      {showMenu && mobileOpen && (
        <div id="mobileMenu" className="lg:hidden border-t border-tu-navy/10 bg-white">
          <ul className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.key}>
                {item.children ? (
                  <>
                    <div className="flex items-center justify-between">
                      <a href={href(item.href)} className="flex-1 block px-3 py-2.5 rounded-md text-tu-deep hover:bg-tu-ice font-medium">
                        {t(item.key)}
                      </a>
                      <button
                        type="button"
                        className="dropdown-toggle p-2.5 rounded-md hover:bg-tu-ice"
                        aria-expanded={open === item.key}
                        aria-label={`${t(item.key)} ▾`}
                        onClick={() => toggle(item.key)}
                      >
                        <svg className="w-4 h-4 text-tu-deep transition-transform" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                          <path d="M2 4l4 4 4-4z" />
                        </svg>
                      </button>
                    </div>
                    <ul className="submenu ml-4 mb-2 border-l-2 border-tu-ice pl-3">
                      {item.children.map((child) => (
                        <li key={child.key}>
                          <a href={href(child.href)} className="block px-2 py-1.5 text-sm text-tu-ink/70 hover:text-tu-navy">
                            {t(child.key)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href={href(item.href)} className="block px-3 py-2.5 rounded-md text-tu-deep hover:bg-tu-ice font-medium">
                    {t(item.key)}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
