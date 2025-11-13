'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa6';

import Hero from '@/index/Hero';
import AboutSection from '@/index/AboutSection';
import ProjectsSection from '@/index/ProjectsSection';
import HistorySection from '@/index/HistorySection';
import TechStackSection from '@/index/TechStackSection';

export default function Home() {
    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        const onScroll = () => setShowScrollTop(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <main className="relative flex flex-col items-center justify-start min-h-screen bg-[#0d0d0f] text-white overflow-hidden scroll-smooth">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/25 via-blue-500/15 to-transparent blur-3xl" />
            <Hero />
            <AboutSection />
            <ProjectsSection />
            <HistorySection />
            <TechStackSection />

            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={showScrollTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:scale-110 transition-transform z-50"
            >
                <FaArrowUp className="text-xl" />
            </motion.button>
        </main>
    );
}
