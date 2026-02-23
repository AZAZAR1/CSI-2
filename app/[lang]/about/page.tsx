import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Lang, t } from '@/lib/i18n';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langStr } = await params;
  const lang = langStr as Lang;

  return (
    <>
      <Nav lang={lang} />
      <div className="section">
        <div className="container">
          <h2>{t(lang, 'about.title')}</h2>
          <p className="small">{t(lang, 'about.sub')}</p>
          <div className="card" style={{ marginTop: 14 }}>
            <h3>{t(lang, 'about.why.title')}</h3>
            <p>{t(lang, 'about.why.body')}</p>
            <hr className="sep" />
            <p className="small">
              <i>{t(lang, 'about.powered')}</i>
            </p>
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
