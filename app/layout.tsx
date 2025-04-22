import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: 'Pankaj Shah | Software Developer',
  description: 'Portfolio of Pankaj Shah, an experienced software developer specializing in React.js, Node.js, and modern web technologies.',
  keywords: 'software developer, web developer, react developer, nodejs developer, portfolio',
  authors: [{ name: 'Pankaj Shah' }],
  creator: 'Pankaj Shah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pankaj-shah.vercel.app',
    title: 'Pankaj Shah | Software Developer',
    description: 'Portfolio of Pankaj Shah, an experienced software developer specializing in React.js, Node.js, and modern web technologies.',
    siteName: 'Pankaj Shah Portfolio',
    images: [
      {
        url: 'https://pankaj-shah.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pankaj Shah Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pankaj Shah | Software Developer',
    description: 'Portfolio of Pankaj Shah, an experienced software developer specializing in React.js, Node.js, and modern web technologies.',
    creator: '@pankajshah',
    images: ['https://pankaj-shah.vercel.app/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}