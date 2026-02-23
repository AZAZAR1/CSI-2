import { Suspense } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Lang, t } from '@/lib/i18n';

export default async function ContactPage({
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
          <h2>{t(lang, 'contact.title')}</h2>
          <p className="small">{t(lang, 'contact.sub')}</p>
          <div className="notice" style={{ marginTop: 12 }}>
            {t(lang, 'contact.notice')}
          </div>
          {/* ContactForm uses useSearchParams → must be wrapped in Suspense */}
          <Suspense>
            <ContactForm lang={lang} />
          </Suspense>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
