import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'International Cigar Sommelier Institute',
  description: 'CSI — Swiss institutional cigar education.',
  icons: { icon: '/assets/img/csi_logo_emboss.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@500;600;700&display=swap"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
