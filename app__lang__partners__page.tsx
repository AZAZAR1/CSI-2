import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Lang, t } from '@/lib/i18n';

export default function PartnersPage({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  return (
    <>
      <Nav lang={lang} />
      <div className="section">
        <div className="container">
          <h2>{t(lang, 'partners.title')}</h2>
          <p className="small">{t(lang, 'partners.sub')}</p>
          <div className="grid-3" style={{ marginTop: 14 }}>
            <div className="card">
              <h3>{t(lang, 'partners.lounges.title')}</h3>
              <p>{t(lang, 'partners.lounges.body')}</p>
            </div>
            <div className="card">
              <h3>{t(lang, 'partners.hotels.title')}</h3>
              <p>{t(lang, 'partners.hotels.body')}</p>
            </div>
            <div className="card">
              <h3>{t(lang, 'partners.path.title')}</h3>
              <p>{t(lang, 'partners.path.body')}</p>
            </div>
          </div>
          <div className="cta-row" style={{ marginTop: 14 }}>
            <Link
              className="btn primary"
              href={`/${lang}/contact?subject=${encodeURIComponent('Partner with CSI')}`}
            >
              {t(lang, 'partners.cta')}
            </Link>
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
