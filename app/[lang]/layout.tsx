export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }, { lang: 'de' }];
}

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  return <>{children}</>;
}
