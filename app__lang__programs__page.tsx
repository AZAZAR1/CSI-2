import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Lang, t } from '@/lib/i18n';

export default function ProgramsPage({ params }: { params: { lang: Lang } }) {
  const { lang } = params;

  const programs = [
    {
      key: 'ccs',
      titleKey: 'home.ccs.title',
      descKey: 'home.ccs.desc',
      brochure: '/assets/brochures/CCS_Certified_Cigar_Sommelier_Brochure.pdf',
      ctaKey: 'btn.apply',
    },
    {
      key: 'acs',
      titleKey: 'home.acs.title',
      descKey: 'home.acs.desc',
      brochure: '/assets/brochures/ACS_Advanced_Cigar_Sommelier_Brochure.pdf',
      ctaKey: 'btn.apply',
    },
    {
      key: 'amc',
      titleKey: 'home.amc.title',
      descKey: 'home.amc.desc',
      brochure: '/assets/brochures/AMC_Aficionado_Master_Class_Brochure_v2.pdf',
      ctaKey: 'btn.request_invite',
    },
  ];

  return (
    <>
      <Nav lang={lang} />
      <div className="section">
        <div className="container">
          <h2>{t(lang, 'programs.title')}</h2>
          <p className="small">{t(lang, 'programs.sub')}</p>
          <div className="grid-3" style={{ marginTop: 14 }}>
            {programs.map((p) => (
              <div className="card" key={p.key}>
                <h3>{t(lang, p.titleKey)}</h3>
                <p>{t(lang, p.descKey)}</p>
                <div className="cta-row">
                  <Link className="btn primary" href={`/${lang}/${p.key}`}>
                    {t(lang, p.ctaKey)}
                  </Link>
                  <a className="btn" href={p.brochure} target="_blank" rel="noopener noreferrer">
                    {t(lang, 'btn.download_brochure')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
