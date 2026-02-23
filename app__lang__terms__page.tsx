import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Lang, t } from '@/lib/i18n';

export default function TermsPage({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  return (
    <>
      <Nav lang={lang} />
      <div className="section">
        <div className="container">
          <h2>{t(lang, 'terms.title')}</h2>
          <div className="card">
            <p className="small"><b>Programs.</b> {t(lang, 'terms.programs')}</p>
            <p className="small"><b>Intellectual property.</b> {t(lang, 'terms.ip')}</p>
            <p className="small"><b>Conduct.</b> {t(lang, 'terms.conduct')}</p>
            <p className="small"><b>Disclaimer.</b> {t(lang, 'terms.disclaimer')}</p>
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
