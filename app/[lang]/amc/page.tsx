import ProgramDetail from '@/components/ProgramDetail';
import { Lang } from '@/lib/i18n';

export default async function AMCPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langStr } = await params;
  const lang = langStr as Lang;

  return (
    <ProgramDetail
      lang={lang}
      titleKey="amc.title"
      subKey="amc.sub"
      brochure="/assets/brochures/AMC_Aficionado_Master_Class_Brochure_v2.pdf"
      applySubject="Invite Request — AMC"
      isInvite
    />
  );
}
