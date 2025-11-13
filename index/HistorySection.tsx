'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function HistorySection() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (inView) controls.start('visible');
    }, [inView, controls]);

const history = [
    { 
        year: '2025', 
        items: [
            'Next.js を使い始める',
            'DJ-Music が1300サーバー突破',
            'ECSオフラインイベントを2回運営',
            '大会結果画像の自動生成ツールを制作',
            'トラにはまる',
            'Fortniteで神視点獲得'
        ] 
    },
    { 
        year: '2024', 
        items: [
            '「ゆゆっちミュージック」をグローバル化に向けて\n「DJ-Music」へ改名、本格運用に向けて開発を開始',
            'ECS e-Sports のWeb運営を継続',
            'WordPress でサイト運用を強化',
            '歌ってみたMixを学び始める',
            'うどんとラーメンにはまる',
        ] 
    },
    { 
        year: '2023', 
        items: [
            'Discord音楽BOT「DJ-Music」の前身\n「ゆゆっちミュージック」の開発を開始',
            'LauRo解散 → ECS入隊',
            'Web / BOT 開発を本格開始',
            'DiscordBOTを多数制作し運営効率化',
            '300人規模の大会を1人で運営'
        ] 
    },
    { 
        year: '2022', 
        items: [
            'Minecraft → Fortnite界隈へ移行',
            'Esportsチーム「LauRo」を設立',
            'WordPress運用を始める',
            'Node.js を書き始める',
            'Fortniteでクリエイターサポート権限獲得',
            'ボイストレーニングを始める',
            '歌ってみた動画の投稿を開始'
        ] 
    },
    { 
        year: '2021', 
        items: [
            '自宅サーバー運用開始',
            'Minecraftサーバーを複数管理',
            'Skriptを書き始める'
        ] 
    },
    { 
        year: '2020', 
        items: [
            'Discordサーバーを作成',
            '200人規模のコミュニティを構築'
        ] 
    },
    { year: '2019', items: ['ゆゆっちとして活動開始'] },
    { year: '2016 - 2018', items: ['ネットに触れ始める'] },
];



    const latest = history.slice(0, 3);
    const older = history.slice(3);

    // 年ブロック（縦線つき）
    const YearBlock = ({ year, items }: { year: string; items: string[] }) => {
        return (
            <div className="relative">
                {/* 左線 */}
                <span className="absolute left-0 top-0 w-px h-full bg-gray-600 opacity-70"></span>

                <div className="pl-6 pb-10">
                    <h4 className="text-xl sm:text-2xl font-semibold text-cyan-300 mb-3">
                        {year}
                    </h4>

                    <ul className="space-y-2 text-gray-300 text-sm sm:text-base list-disc pl-4">
                        {items.map((item, i) => (
                            <li className="whitespace-pre-line" key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <section ref={ref} className="mt-32 w-full max-w-3xl px-6 mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                }}
                className="text-4xl sm:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"
            >
                History
            </motion.h2>

            {/* 最新3年 */}
            {latest.map((y, i) => (
                <YearBlock key={i} year={y.year} items={y.items} />
            ))}

            {/* older（DOMは残したまま、heightで消す） */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: open ? 'auto' : 0,
                    opacity: open ? 1 : 0,
                }}
                transition={{ duration: open ? 0.5 : 0.7, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                {older.map((y, i) => (
                    <YearBlock key={i} year={y.year} items={y.items} />
                ))}
            </motion.div>

            {/* フェード（閉じてる時だけ） */}
            {!open && (
                <div className="pointer-events-none -mt-20 h-28 bg-gradient-to-t from-[#0b1a3f] to-transparent"></div>
            )}

            {/* ボタン */}
            <button
                onClick={() => setOpen(!open)}
                className="mx-auto mt-10 mb-12 block px-5 py-2
                    rounded-xl bg-[#ffffff15] backdrop-blur-md
                    border border-white/10 text-cyan-300 text-sm
                    hover:bg-[#ffffff25] transition-all duration-300"
            >
                {open ? '▲ 閉じる' : '▼ もっと見る'}
            </button>
        </section>
    );
}
