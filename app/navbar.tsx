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
    const [menuOpen, setMenuOpen] = useState(false);
    const [initialized, setInitialized] = useState(false);

    const lastScrollY = useRef(0);

    useEffect(() => {
        if (!typingDone) return;

        setInitialized(true);

        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY > lastScrollY.current) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [typingDone]);

    const smoothScroll = (targetId: string) => {
        const target = document.querySelector(targetId);
        if (target) target.scrollIntoView({ behavior: 'smooth' });

        // 🔥 スクロールしたら閉じる
        setMenuOpen(false);
    };

    if (!initialized && !typingDone) {
        return <div className="fixed top-0 left-0 w-full h-0 opacity-0" />;
    }

    const navItems = [
        { label: 'Top', target: '#hero' },
        { label: 'About Me', target: '#about' },
        { label: 'Projects', target: '#projects' },
        { label: 'Tech Stack', target: '#tech' },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -80 }}
            animate={showNavbar ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-5 left-0 w-full z-[100]"
        >
            <div className="max-w-7xl mx-auto py-3 flex items-center justify-end px-4">

                {/* PCメニュー */}
                <div className="hidden sm:flex gap-8 text-base sm:text-lg font-medium text-white">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => {
                                if (pathname !== '/') {
                                    router.push('/');
                                    setTimeout(() => smoothScroll(item.target), 300);
                                } else {
                                    smoothScroll(item.target);
                                }
                            }}
                            className="hover:opacity-70 transition"
                        >
                            {item.label}
                        </button>
                    ))}

                    <Link href="/link" className="hover:opacity-70 transition">
                        Links
                    </Link>
                </div>

                {/* SMサイズ・ハンバーガー */}
                <button
                    className="sm:hidden w-8 h-8 flex flex-col justify-center items-center gap-1 z-[200]"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={`h-[3px] w-7 bg-white rounded transition-all ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
                    <span className={`h-[3px] w-7 bg-white rounded transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`h-[3px] w-7 bg-white rounded transition-all ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
                </button>
            </div>

            {/* 背景（外側タップで閉じる） */}
            <motion.div
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: menuOpen ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="sm:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-[150]"
                style={{
                    pointerEvents: menuOpen ? 'auto' : 'none',
                }}
            />

            {/* メニュー本体 */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{
                    opacity: menuOpen ? 1 : 0,
                    y: menuOpen ? 0 : -10,
                }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className={`sm:hidden fixed top-16 right-5 bg-[#0f0f15]/95 
                    border border-white/10 rounded-2xl p-5 flex flex-col gap-4 
                    text-white text-left w-48 z-[200] shadow-xl`}
                style={{
                    pointerEvents: menuOpen ? 'auto' : 'none',
                    visibility: menuOpen ? 'visible' : 'hidden',
                }}
            >
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        onClick={() => {
                            setMenuOpen(false);
                            if (pathname !== '/') {
                                router.push('/');
                                setTimeout(() => smoothScroll(item.target), 300);
                            } else {
                                smoothScroll(item.target);
                            }
                        }}
                        className="hover:text-cyan-300 transition text-left"
                    >
                        {item.label}
                    </button>
                ))}

                <Link
                    href="/link"
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-cyan-300 transition"
                >
                    Links
                </Link>
            </motion.div>
        </motion.nav>
    );
}
