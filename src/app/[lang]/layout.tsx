import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { i18n } from '../../i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Starter App',
  description: 'Description of Starter App',
  twitter: {
    card: "summary_large_image",
    creator: "@imamdev_",
    images: "https://example.com/og.png",
  },
  applicationName: 'Starter App',
  appleWebApp: {
    capable: true,
    title: 'Starter App',
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: "#FFFFFF",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  manifest: "/manifest.json",
  icons: [
    { rel: "apple-touch-icon", url: "/icons/apple-touch-icon.png" },
    { rel: "shortcut icon", url: "/favicon.ico" },
  ],
  keywords: ["nextjs", "pwa", "next-pwa"],
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { lang: string },
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        Header Component
        {children}
        Footer Component
      </body>
    </html>
  )
}
