import Link from 'next/link';
import { Lang, t } from '@/lib/i18n';

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <div className="footer">
      <div className="container footer-grid">
        <div>
          <div className="badge">{t(lang, 'footer.badge')}</div>
          <div className="small" style={{ marginTop: 10 }}>{t(lang, 'footer.copy')}</div>
        </div>
        <div className="small">
          <Link className="underline" href={`/${lang}/privacy`}>{t(lang, 'footer.privacy')}</Link>
          &nbsp;·&nbsp;
          <Link className="underline" href={`/${lang}/terms`}>{t(lang, 'footer.terms')}</Link>
        </div>
      </div>
    </div>
  );
}
