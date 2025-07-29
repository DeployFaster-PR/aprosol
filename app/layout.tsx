import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ScrollAnimations from './components/Animations/ScrollAnimations';
import Header from './components/Constants/Header';
import Footer from './components/Constants/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DeployFaster - Aprosol Oil & Gas Website',
  description: 'A complete fullstack website for oil & gas companies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ScrollAnimations />
        <Header />
        <main className="px-2 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
