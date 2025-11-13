// /app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { NavbarProvider } from '@/context/NavbarContext';
import Script from 'next/script'

import Navbar from './navbar';
import Footer from './footer';


export const metadata: Metadata = {
    title: {
        default: 'ゆゆっち - Top Page',
        template: 'ゆゆっち - %s',
    },
    description: 'ECS e-Sports / Node.js & TypeScript Developer ゆゆっちの公式HPです。',
    openGraph: {
        title: 'ゆゆっち公式HP',
        description: 'ECS e-Sports / Node.js & TypeScript Developer',
        url: 'https://yuyutti.com',
        siteName: 'ゆゆっち公式HP',
        locale: 'ja_JP',
        type: 'website',
    },
    twitter: {
        creator: '@yuyuttiofficial',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <head>
                {/* Google Analytics */}
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-K1ZDWBYEJ1"
                />
                <Script id="google-analytics">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-K1ZDWBYEJ1');
                    `}
                </Script>
            </head>
            <body>
                <NavbarProvider>
                    <Navbar />
                    {children}
                    <Footer />
                </NavbarProvider>
            </body>
        </html>
    );
}