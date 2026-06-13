import { inter } from '@/app/ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
  <body className={`${inter.className} antialiased`}>{children}</body>
}
