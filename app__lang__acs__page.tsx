import ProgramDetail from '@/components/ProgramDetail';
import { Lang } from '@/lib/i18n';

export default function ACSPage({ params }: { params: { lang: Lang } }) {
  return (
    <ProgramDetail
      lang={params.lang}
      titleKey="acs.title"
      subKey="acs.sub"
      brochure="/assets/brochures/ACS_Advanced_Cigar_Sommelier_Brochure.pdf"
      applySubject="Application — ACS"
    />
  );
}
