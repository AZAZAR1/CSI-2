import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Lang, t } from '@/lib/i18n';

export default function ProgramsPage({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  const programs = [
    {
      key: 'ccs',
      title: t(lang, 'programs.ccs.title'),
      desc: t(lang, 'home.ccs.desc'),
      brochure: '/assets/brochures/CCS_Certified_Cigar_Sommelier_Brochure.pdf',
      applySubject: 'Application — CCS',
      cta: t(lang, 'btn.apply'),
    },
    {
      key: 'acs',
      title: t(lang, 'programs.acs.title'),
      desc: t(lang, 'home.acs.desc'),
      brochure: '/assets/brochures/ACS_Advanced_Cigar_Sommelier_Brochure.pdf',
      applySubject: 'Application — ACS',
      cta: t(lang, 'btn.apply'),
    },
    {
      key: 'amc',
      title: t(lang, 'programs.amc.title'),
      desc: t(lang, 'home.amc.desc'),
      brochure: '/assets/brochures/AMC_Aficionado_Master_Class_Brochure_v2.pdf',
      applySubject: 'Invite Request — AMC',
      cta: t(lang, 'btn.request_invite'),
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
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="cta-row">
                  <Link className="btn primary" href={`/${lang}/${p.key}`}>{p.cta}</Link>
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
