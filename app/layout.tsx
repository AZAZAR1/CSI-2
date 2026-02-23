import type { Metadata } from 'next';
import '../public/assets/css/style.css';

export const metadata: Metadata = {
  title: 'CSI — Cigar Sommelier Institute',
  description: 'CSI — Swiss institutional cigar education.',
  icons: { icon: '/assets/img/csi_logo_emboss.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
