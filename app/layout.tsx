import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Jun's Website",
  description: 'Jun Song, Founding Engineer at Rapidflare. Building AI agents, evaluations, and customer-facing products.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
      <body className={`antialiased ${inter.className}`}>{children}</body>
    </html>
  );
}
