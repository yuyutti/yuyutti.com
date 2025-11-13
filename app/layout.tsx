// /app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

import GoogleAnalytics from '@/components/GoogleAnalytics'
import { WebVitals } from '@/components/WebVitals'
import ScrollToTop from '@/components/ScrollToTop'

import { NavbarProvider } from '@/context/NavbarContext';

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

            <body>
                <NavbarProvider>
                    <Navbar />
                    {children}
                    <Footer />
                    <GoogleAnalytics />
                    <WebVitals />
                    <ScrollToTop />
                </NavbarProvider>
            </body>
        </html>
    );
}