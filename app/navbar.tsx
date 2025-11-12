'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { useNavbar } from '@/context/NavbarContext';

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const { typingDone } = useNavbar();

    const [showNavbar, setShowNavbar] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const lastScrollY = useRef(0);
    const lastDirection = useRef<'up' | 'down' | null>(null);

    useEffect(() => {
        if (!typingDone) return;

        setInitialized(true);

        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastScrollY.current) {
                // 下スク
                setShowNavbar(false);
                lastDirection.current = 'down';
            } else if (currentY < lastScrollY.current) {
                // 上スク
                setShowNavbar(true);
                lastDirection.current = 'up';
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [typingDone]);

    // typing完了直後の状態を決める
    useEffect(() => {
        if (!typingDone) return;

        // typing終わった瞬間のスクロール位置と向きで決定
        if (lastDirection.current === 'down') {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        setInitialized(true);
    }, [typingDone]);

    const smoothScroll = (targetId: string) => {
        const target = document.querySelector(targetId);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    // typing中は完全非表示
    if (!initialized && !typingDone) {
        return <div className="fixed top-0 left-0 w-full h-0 opacity-0" />;
    }

    return (
        <motion.nav
            initial={{ opacity: 0, y: -80 }}
            animate={showNavbar ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-5 left-0 w-full z-50"
        >
            <div className="max-w-7xl mx-auto py-3 flex items-center justify-end">
                <div className="flex gap-8 text-base sm:text-lg font-medium text-white transition-all duration-300">
                    <button
                        onClick={() => {
                            if (pathname !== '/') router.push('/');
                            else smoothScroll('#hero');
                        }}
                        className="hover:opacity-70 transition"
                    >
                        Top
                    </button>

                    <button
                        onClick={() => {
                            if (pathname !== '/') {
                                router.push('/');
                                setTimeout(() => smoothScroll('#about'), 300);
                            } else {
                                smoothScroll('#about');
                            }
                        }}
                        className="hover:opacity-70 transition"
                    >
                        About Me
                    </button>

                    <button
                        onClick={() => {
                            if (pathname !== '/') {
                                router.push('/');
                                setTimeout(() => smoothScroll('#projects'), 300);
                            } else {
                                smoothScroll('#projects');
                            }
                        }}
                        className="hover:opacity-70 transition"
                    >
                        Projects
                    </button>

                    <button
                        onClick={() => {
                            if (pathname !== '/') {
                                router.push('/');
                                setTimeout(() => smoothScroll('#tech'), 300);
                            } else {
                                smoothScroll('#tech');
                            }
                        }}
                        className="hover:opacity-70 transition"
                    >
                        Tech Stack
                    </button>

                    <Link href="/link" className="hover:opacity-70 transition">
                        Links
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}
