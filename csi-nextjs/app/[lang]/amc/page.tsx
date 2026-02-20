import ProgramDetail from '@/components/ProgramDetail';
import { Lang } from '@/lib/i18n';

export default function AMCPage({ params }: { params: { lang: Lang } }) {
  return (
    <ProgramDetail
      lang={params.lang}
      titleKey="amc.title"
      subKey="amc.sub"
      brochure="/assets/brochures/AMC_Aficionado_Master_Class_Brochure_v2.pdf"
      applySubject="Invite Request — AMC"
      isInvite
    />
  );
}
