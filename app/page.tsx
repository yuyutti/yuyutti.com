'use client';

import Hero from '@/index/Hero';
import AboutSection from '@/index/AboutSection';
import ProjectsSection from '@/index/ProjectsSection';
import HistorySection from '@/index/HistorySection';
import TechStackSection from '@/index/TechStackSection';

export default function Home() {
    return (
        <main className="relative flex flex-col items-center justify-start min-h-screen bg-[#0d0d0f] text-white overflow-hidden scroll-smooth">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/25 via-blue-500/15 to-transparent blur-3xl" />
            <Hero />
            <AboutSection />
            <ProjectsSection />
            <HistorySection />
            <TechStackSection />
        </main>
    );
}
