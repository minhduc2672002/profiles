import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tran Minh Duc - Data Engineer Profile',
  description: 'Professional portfolio of Tran Minh Duc, Data Engineer specializing in ETL processes, data modeling, and database management',
  keywords: 'Data Engineer, Portfolio, ETL, Big Data, Data Pipelines, SQL, Python, Apache Spark',
  authors: [{ name: 'Tran Minh Duc', url: 'https://github.com/minhduc2672002' }],
  creator: 'Tran Minh Duc',
  openGraph: {
    title: 'Tran Minh Duc - Data Engineer Profile',
    description: 'Professional portfolio of Tran Minh Duc, Data Engineer',
    url: 'https://minhduc2672002.github.io/profiles/',
    siteName: 'Tran Minh Duc Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-background min-h-screen`}>
        {children}
      </body>
    </html>
  );
} 