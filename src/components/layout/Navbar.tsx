import { useEffect, useRef, useState } from 'react';
import { navItems } from '../../data/navigation';
import { useTranslations } from '../../i18n/utils';
import { landingOnly, showMenu } from '../../data/site';

const t = useTranslations();

// Landing-only mode: only these paths navigate; everything else is a dead link.
const livePaths = new Set(['/', '/registration']);
const href = (path: string) => (landingOnly && !livePaths.has(path) ? '#' : path);

const Chevron = ({ className = 'w-3 h-3' }: { className?: string }) => (
  <svg className={`${className} opacity-60 transition-transform`} viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
    <path d="M2 4l4 4 4-4z" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null); // open dropdown key (desktop)
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | null>(null);

  // Hover intent: open immediately, close after a short grace period so the
  // pointer can travel from the header item into the dropdown without it vanishing.
  const enter = (key: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(key);
  };
  const leave = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 250);
  };

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

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 font-['Rubik']">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-6" aria-label="Main">
        {/* Logo */}
        <a href={href('/')} className="flex items-center gap-2 shrink-0" aria-label={t('nav.home')}>
          <span className="flex flex-col items-center leading-none">
            <img src="/netsci-logo.svg" alt="NetSci" className="h-8 w-auto" />
            <span className="text-[13px] text-[#003063] mt-0.5">Dresden 2027</span>
          </span>
        </a>

        {/* Desktop menu */}
        {showMenu && (
          <ul className="hidden lg:flex items-center gap-1 text-[15px] text-tu-ink">
            {navItems.map((item) => (
              <li
                key={item.key}
                className="relative"
                onMouseEnter={item.children ? () => enter(item.key) : undefined}
                onMouseLeave={item.children ? leave : undefined}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex items-center gap-1 px-3 py-2.5 rounded hover:text-[#003063]"
                      aria-expanded={open === item.key}
                      aria-haspopup="true"
                      onClick={() => setOpen((cur) => (cur === item.key ? null : item.key))}
                    >
                      {t(item.key)}
                      <Chevron className={`w-3 h-3 ${open === item.key ? 'rotate-180' : ''}`} />
                    </button>
                    {open === item.key && (
                      // pt-2 bridges the gap between button and panel, so hover is never lost
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <ul className="min-w-[220px] bg-white border border-gray-200 shadow-lg py-2">
                          {item.children.map((child) => (
                            <li key={child.key}>
                              <a
                                href={href(child.href)}
                                className="block px-4 py-2 text-sm hover:bg-[#E8F1FB] hover:text-[#003063] focus:bg-[#E8F1FB] focus:text-[#003063]"
                              >
                                {t(child.key)}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <a href={href(item.href!)} className="inline-flex px-3 py-2.5 rounded hover:text-[#003063]">
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
            className="lg:hidden p-2 rounded-md hover:bg-[#E8F1FB]"
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

      {/* Mobile drawer: headers toggle their submenu; leaf items link directly */}
      {showMenu && mobileOpen && (
        <div id="mobileMenu" className="lg:hidden border-t border-gray-200 bg-white">
          <ul className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.key}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-tu-deep hover:bg-[#E8F1FB]"
                      aria-expanded={mobileSub === item.key}
                      onClick={() => setMobileSub((cur) => (cur === item.key ? null : item.key))}
                    >
                      {t(item.key)}
                      <Chevron className={`w-4 h-4 ${mobileSub === item.key ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileSub === item.key && (
                      <ul className="ml-4 mb-2 border-l-2 border-[#E8F1FB] pl-3">
                        {item.children.map((child) => (
                          <li key={child.key}>
                            <a href={href(child.href)} className="block px-2 py-1.5 text-sm text-tu-ink/80 hover:text-[#003063]">
                              {t(child.key)}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={href(item.href!)} className="block px-3 py-2.5 rounded-md text-tu-deep hover:bg-[#E8F1FB]">
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
