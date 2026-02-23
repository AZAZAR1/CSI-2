import Image from 'next/image';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Lang, t } from '@/lib/i18n';

export default function HomePage({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  return (
    <>
      <Nav lang={lang} />

      <div className="hero">
        <div className="container hero-grid">
          <div>
            <div className="kicker">{t(lang, 'home.kicker')}</div>
            <h1>{t(lang, 'home.h1')}</h1>
            <p className="lead">{t(lang, 'home.lead')}</p>
            <div className="cta-row">
              <Link className="btn primary" href={`/${lang}/programs`}>{t(lang, 'home.cta.programs')}</Link>
              <Link className="btn" href={`/${lang}/contact`}>{t(lang, 'home.cta.contact')}</Link>
              <Link className="btn" href={`/${lang}/partners`}>{t(lang, 'home.cta.partner')}</Link>
            </div>
            <div className="small" style={{ marginTop: 14 }}>
              <i>{t(lang, 'home.powered')}</i>
            </div>
          </div>
          <div className="hero-card">
            <Image src="/assets/img/hero.svg" alt="Abstract luxury background" width={480} height={320} style={{ width: '100%', height: 'auto' }} />
            <div className="pad">
              <div className="tag"><i>{t(lang, 'home.hero.tag')}</i></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2>{t(lang, 'home.programs.title')}</h2>
          <p className="small">{t(lang, 'home.programs.sub')}</p>
          <div className="grid-3" style={{ marginTop: 14 }}>
            <div className="card">
              <h3>CCS®</h3>
              <p>{t(lang, 'home.ccs.desc')}</p>
              <hr className="sep" />
              <Link className="btn primary" href={`/${lang}/ccs`}>{t(lang, 'btn.apply')}</Link>
            </div>
            <div className="card">
              <h3>ACS®</h3>
              <p>{t(lang, 'home.acs.desc')}</p>
              <hr className="sep" />
              <Link className="btn primary" href={`/${lang}/acs`}>{t(lang, 'btn.apply')}</Link>
            </div>
            <div className="card">
              <h3>AMC™</h3>
              <p>{t(lang, 'home.amc.desc')}</p>
              <hr className="sep" />
              <Link className="btn primary" href={`/${lang}/amc`}>{t(lang, 'btn.request_invite')}</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer lang={lang} />
    </>
  );
}
