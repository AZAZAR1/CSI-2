'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Lang, t } from '@/lib/i18n';

export default function Nav({ lang }: { lang: Lang }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (newLang: string) => {
    const parts = pathname.split('/').filter(Boolean);
    const page = parts.slice(1).join('/');
    router.push('/' + newLang + (page ? '/' + page : ''));
  };

  return (
    <div className="nav">
      <div className="container nav-inner">
        <Link className="brand" href={`/${lang}`}>
          <Image
            src="/assets/img/csi_logo_color.png"
            alt="CSI logo"
            width={34}
            height={34}
            style={{ borderRadius: 8 }}
          />
          <div className="name">Cigar Sommelier Institute</div>
        </Link>
        <div className="menu">
          <Link href={`/${lang}/programs`}>{t(lang, 'nav.programs')}</Link>
          <Link href={`/${lang}/about`}>{t(lang, 'nav.about')}</Link>
          <Link href={`/${lang}/system`}>{t(lang, 'nav.system')}</Link>
          <Link href={`/${lang}/partners`}>{t(lang, 'nav.partners')}</Link>
          <Link href={`/${lang}/contact`}>{t(lang, 'nav.contact')}</Link>
          <div className="lang">
            {(['en', 'fr', 'de'] as Lang[]).map((l) => (
              <button
                key={l}
                className={lang === l ? 'active' : ''}
                onClick={() => switchLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
