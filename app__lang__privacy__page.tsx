import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Lang, t } from '@/lib/i18n';

export default function PrivacyPage({ params }: { params: { lang: Lang } }) {
  const { lang } = params;
  return (
    <>
      <Nav lang={lang} />
      <div className="section">
        <div className="container">
          <h2>{t(lang, 'privacy.title')}</h2>
          <div className="card">
            <p className="small">
              <b>Summary.</b> {t(lang, 'privacy.summary')}
            </p>
            <hr className="sep" />
            <p className="small">
              <b>{t(lang, 'privacy.data.title')}</b> {t(lang, 'privacy.data.body')}
            </p>
            <p className="small">
              <b>{t(lang, 'privacy.intl.title')}</b> {t(lang, 'privacy.intl.body')}
            </p>
            <p className="small">
              <b>{t(lang, 'privacy.sec.title')}</b> {t(lang, 'privacy.sec.body')}
            </p>
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
