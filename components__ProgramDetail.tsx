import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Lang, t } from '@/lib/i18n';

interface ProgramDetailProps {
  lang: Lang;
  titleKey: string;
  subKey: string;
  brochure: string;
  applySubject: string;
  isInvite?: boolean;
}

export default function ProgramDetail({
  lang,
  titleKey,
  subKey,
  brochure,
  applySubject,
  isInvite,
}: ProgramDetailProps) {
  return (
    <>
      <Nav lang={lang} />
      <div className="section">
        <div className="container">
          <h2>{t(lang, titleKey)}</h2>
          <p className="small">{t(lang, subKey)}</p>
          <div className="cta-row" style={{ marginTop: 12 }}>
            <a className="btn" href={brochure} target="_blank" rel="noopener noreferrer">
              {t(lang, 'btn.download_brochure')}
            </a>
            <Link
              className="btn primary"
              href={`/${lang}/contact?subject=${encodeURIComponent(applySubject)}`}
            >
              {isInvite ? t(lang, 'btn.request_invite') : t(lang, 'btn.apply')}
            </Link>
          </div>
          <div className="notice" style={{ marginTop: 16 }}>
            <b>Note:</b> {t(lang, 'program.note')}
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
}
