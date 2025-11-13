'use client';
import { useRef, useState, useEffect } from 'react';

export default function TechStackSection() {
const stacks = [
    {
        category: 'Languages',
        items: [
            'Node.js',
            'TypeScript',
            'SQL',
            'HTML / CSS',
            'JavaScript',
            'Lua',
            'C#'
        ],
        gradient: 'from-cyan-400 to-sky-400'
    },
    {
        category: 'Frameworks / Libraries',
        items: [
            'Next.js',
            'React',
            'Tailwind CSS',
            'Framer Motion',
            'Express',
            'jQuery'
        ],
        gradient: 'from-blue-400 to-indigo-400'
    },
    {
        category: 'Backend / Infra',
        items: [
            'MySQL',
            'Nginx',
            'Cloudflare',
            'Docker',
            'Proxmox',
            'Ubuntu'
        ],
        gradient: 'from-green-400 to-emerald-400'
    },
    {
        category: 'Automation / Bot',
        items: [
            'Discord.js',
            'pm2',
            'Webhook System',
            'API Integration'
        ],
        gradient: 'from-pink-400 to-red-400'
    },
    {
        category: 'Audio / Mix Tools',
        items: [
            'Studio One',
            'Melodyne 5 Studio',
            'Ozone 11',
            'RX 10',
            'Nectar 4'
        ],
        gradient: 'from-purple-400 to-pink-400'
    },
    {
        category: 'Creative / Design',
        items: [
            'Premiere Pro',
            'Photoshop',
            'Illustrator'
        ],
        gradient: 'from-yellow-400 to-orange-400'
    },
    {
        category: 'Development Tools',
        items: [
            'Git / GitHub',
            'VS Code',
            'Tera Term',
            'WinSCP'
        ],
        gradient: 'from-sky-400 to-cyan-400'
    }
];

    const ref = useRef<HTMLDivElement>(null);

    const [isDragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(true);

    // ---- Drag ----
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!ref.current) return;
        setDragging(true);
        setStartX(e.pageX - ref.current.offsetLeft);
        setScrollLeft(ref.current.scrollLeft);
    };
    const handleMouseLeave = () => setDragging(false);
    const handleMouseUp = () => setDragging(false);
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !ref.current) return;
        e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        ref.current.scrollLeft = scrollLeft - walk;
        updateButtons();
    };

    // ---- Snap center helper ----
    const findCenterIndex = () => {
        const el = ref.current;
        if (!el) return 0;

        const center = el.scrollLeft + el.clientWidth / 2;
        const cards = Array.from(el.querySelectorAll('[data-card]')) as HTMLElement[];

        let best = 0;
        let bestDist = Infinity;

        cards.forEach((c, i) => {
            const mid = c.offsetLeft + c.clientWidth / 2;
            const dist = Math.abs(mid - center);
            if (dist < bestDist) {
                bestDist = dist;
                best = i;
            }
        });

        return best;
    };

    const go = (dir: 1 | -1) => {
        const el = ref.current;
        if (!el) return;

        const cards = Array.from(el.querySelectorAll('[data-card]')) as HTMLElement[];
        const current = findCenterIndex();

        const next = Math.max(0, Math.min(cards.length - 1, current + dir));
        cards[next].scrollIntoView({ behavior: 'smooth', inline: 'center' });
    };

    // ---- ボタン状態更新 ----
    const updateButtons = () => {
        const el = ref.current;
        if (!el) return;

        const maxScroll = el.scrollWidth - el.clientWidth;

        setCanLeft(el.scrollLeft > 10);
        setCanRight(el.scrollLeft < maxScroll - 10);
    };

    useEffect(() => {
        updateButtons();
        const handler = () => updateButtons();
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, []);

    return (
        <section
            id="tech"
            className="relative w-full flex flex-col items-center pt-32 pb-40
                       bg-gradient-to-br from-[#0b1a3f] via-[#1a0e3a] to-[#3a0a23]"
        >
            <h2 className="text-4xl sm:text-5xl font-bold mb-12
                           bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent text-center">
                Tech Stack
            </h2>


            {/** --------------------------------------------------
             *  親コンテナ (relative)
             *  → ここを基準に矢印を absolute 固定
             -------------------------------------------------- */}
            <div className="relative w-full">

                {/** ---- Apple式：右下に固定される矢印 ---- */}
                <div className="absolute -bottom-24 right-[7vw] flex gap-4 z-50 pointer-events-none">

                    {/* ← */}
                    <button
                        onClick={() => go(-1)}
                        disabled={!canLeft}
                        className={`pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center
                                    backdrop-blur-md border border-white/10 transition
                                    ${canLeft ? 'bg-black/40 hover:bg-black/55' : 'bg-black/20 opacity-40 cursor-not-allowed'}`}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <path d="M15 6l-6 6 6 6" stroke="white" strokeWidth="2" fill="none"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* → */}
                    <button
                        onClick={() => go(1)}
                        disabled={!canRight}
                        className={`pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center
                                    backdrop-blur-md border border-white/10 transition
                                    ${canRight ? 'bg-black/40 hover:bg-black/55' : 'bg-black/20 opacity-40 cursor-not-allowed'}`}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <path d="M9 6l6 6-6 6" stroke="white" strokeWidth="2" fill="none"
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>


                {/** ---- スクロール領域（矢印より後ろ） ---- */}
                <div
                    ref={ref}
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    onScroll={updateButtons}
                    className="w-full overflow-x-auto snap-x snap-mandatory scroll-smooth 
                               px-[8vw] sm:px-[10vw] lg:px-[8vw]
                               cursor-grab active:cursor-grabbing select-none
                               [-ms-overflow-style:none] [scrollbar-width:none]"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    <style>{`#tech::-webkit-scrollbar{display:none}`}</style>

                    <div className="flex gap-[5vw] lg:gap-[2.5vw]">
                        {stacks.map((stack, i) => (
                            <div
                                key={i}
                                data-card
                                className={`snap-center shrink-0 
                                            w-[84vw] sm:w-[70vw] lg:w-[32vw]
                                            rounded-[2rem] p-[2px]
                                            bg-gradient-to-r ${stack.gradient} shadow-lg`}
                            >
                                <div
                                    className="bg-[#0d0d0f]/90 rounded-[2rem]
                                               px-8 py-10 aspect-square 
                                               flex flex-col items-center justify-between text-center"
                                >
                                    <h3 className={`text-lg sm:text-xl font-semibold
                                                    bg-gradient-to-r ${stack.gradient}
                                                    bg-clip-text text-transparent`}>
                                        {stack.category}
                                    </h3>

                                    <div className="flex flex-wrap items-center justify-center gap-3 m-auto">
                                        {stack.items.map((item, j) => (
                                            <span
                                                key={j}
                                                className="px-4 py-1.5 rounded-full bg-white/10 text-gray-200
                                                           text-sm sm:text-base backdrop-blur-sm border border-white/10"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
