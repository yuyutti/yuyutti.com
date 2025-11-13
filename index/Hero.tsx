'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useNavbar } from '@/context/NavbarContext';

export default function Hero() {
    const [displayText, setDisplayText] = useState('');
    const [startBlink, setStartBlink] = useState(false);
    const { setTypingDone } = useNavbar();

    useEffect(() => {
        const seq = [
            'ｙ', 'ゆ', 'ゆｙ', 'ゆゆ', 'ゆゆｔ', 'ゆゆｔｔ',
            'ゆゆっち', 'ゆゆっちｋ', 'ゆゆっちこ', 'ゆゆっちこう',
            'ゆゆっちこうｓ', 'ゆゆっちこうしｋ', 'ゆゆっちこうしき',
            'ゆゆっち公式', 'ゆゆっち公式H', 'ゆゆっち公式HP'
        ];

        let i = 0;
        const interval = setInterval(() => {
            setDisplayText(seq[i]);
            i++;
            if (i >= seq.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setStartBlink(true);
                    setTypingDone(true); // ← ここで通知
                }, 950);
            }
        }, 210);

        return () => clearInterval(interval);
    }, [setTypingDone]);

    return (
        <section
            id="hero"
            className="relative z-10 text-center px-4 flex flex-col justify-center items-center h-screen overflow-hidden"
        >   
        
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="text-4xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,0,80,0.4)]"
            >
                {displayText}
                {startBlink ? (
                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                        className="inline-block w-2 h-6 sm:w-3 sm:h-8 bg-pink-400 ml-1"
                    />
                ) : (
                    <span className="inline-block w-2 h-6 sm:w-3 sm:h-8 bg-pink-400 ml-1" />
                )}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.3, duration: 1.5 }}
                className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto"
            >
                ECS e-Sports - Team Manager & Developer <br />
                Node.js x TypeScript｜ Web x Discord Tools / Vocal Mixing
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.3, duration: 1.7 }}
                className="mt-10 flex flex-wrap gap-3 justify-center"
            >
                <Link
                    href="#about"
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 text-lg rounded-full bg-gradient-to-r from-red-500 to-pink-600 hover:opacity-90 transition"
                >
                    About Me
                </Link>
                <Link
                    href="/link"
                    className="px-6 py-3 text-lg rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition"
                >
                    Links
                </Link>
            </motion.div>
        </section>
    );
}
