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
            <p className="small"><b>{t(lang, 'terms.programs.title')}</b> {t(lang, 'terms.programs.body')}</p>
            <p className="small"><b>{t(lang, 'terms.ip.title')}</b> {t(lang, 'terms.ip.body')}</p>
            <p className="small"><b>{t(lang, 'terms.conduct.title')}</b> {t(lang, 'terms.conduct.body')}</p>
            <p className="small"><b>{t(lang, 'terms.disclaimer.title')}</b> {t(lang, 'terms.disclaimer.body')}</p>
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
