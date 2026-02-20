import ProgramDetail from '@/components/ProgramDetail';
import { Lang } from '@/lib/i18n';

export default function CCSPage({ params }: { params: { lang: Lang } }) {
  return (
    <ProgramDetail
      lang={params.lang}
      titleKey="ccs.title"
      subKey="ccs.sub"
      brochure="/assets/brochures/CCS_Certified_Cigar_Sommelier_Brochure.pdf"
      applySubject="Application — CCS"
    />
  );
}
