import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Lang, t } from '@/lib/i18n';

export default async function SystemPage({
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
          <h2>{t(lang, 'system.title')}</h2>
          <p className="small">{t(lang, 'system.sub')}</p>
          <div className="grid-3" style={{ marginTop: 14 }}>
            <div className="card">
              <h3>{t(lang, 'system.combustion.title')}</h3>
              <p>{t(lang, 'system.combustion.body')}</p>
            </div>
            <div className="card">
              <h3>{t(lang, 'system.hygroscopic.title')}</h3>
              <p>{t(lang, 'system.hygroscopic.body')}</p>
            </div>
            <div className="card">
              <h3>{t(lang, 'system.capfoot.title')}</h3>
              <p>{t(lang, 'system.capfoot.body')}</p>
            </div>
          </div>
          <div className="card" style={{ marginTop: 14 }}>
            <h3>{t(lang, 'system.public.title')}</h3>
            <p className="small">{t(lang, 'system.public.body')}</p>
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
