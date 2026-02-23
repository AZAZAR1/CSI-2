import ProgramDetail from '@/components/ProgramDetail';
import { Lang } from '@/lib/i18n';

export default async function CCSPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langStr } = await params;
  const lang = langStr as Lang;

  return (
    <ProgramDetail
      lang={lang}
      titleKey="ccs.title"
      subKey="ccs.sub"
      brochure="/assets/brochures/CCS_Certified_Cigar_Sommelier_Brochure.pdf"
      applySubject="Application — CCS"
    />
  );
}
