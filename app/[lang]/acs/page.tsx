import ProgramDetail from '@/components/ProgramDetail';
import { Lang } from '@/lib/i18n';

export default async function ACSPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langStr } = await params;
  const lang = langStr as Lang;

  return (
    <ProgramDetail
      lang={lang}
      titleKey="acs.title"
      subKey="acs.sub"
      brochure="/assets/brochures/ACS_Advanced_Cigar_Sommelier_Brochure.pdf"
      applySubject="Application — ACS"
    />
  );
}
