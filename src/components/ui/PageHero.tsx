import { u } from '../../lib/url';
/**
 * PageHero — inner-page title block, styled after netsci2026.com:
 * white background, light-weight NetSci-red title, plain lede. Eyebrow kept as an optional small label.
 */
interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs?: Crumb[];
}

export default function PageHero({ title, lede, crumbs = [] }: Props) {
  return (
    <section className="relative bg-white overflow-hidden">
      <canvas data-network="light" className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-4 lg:px-8 pt-28 pb-10">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-[#7C7C7C]">
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-2">
                  {c.href ? (
                    <a href={u(c.href)} className="hover:text-[#00008C] transition-colors">{c.label}</a>
                  ) : (
                    <span className="text-[#242A2F]">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="font-['Rubik'] text-4xl md:text-5xl font-light leading-tight text-[#00008C]">{title}</h1>
        {lede && <p className="mt-4 text-base text-[#171717] max-w-3xl leading-relaxed">{lede}</p>}
      </div>
    </section>
  );
}
