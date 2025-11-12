'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function ProjectsSection() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) controls.start('visible');
    }, [inView, controls]);

    const projects = [
        {
            category: 'Web',
            title: 'ECS e-Sports 公式サイト',
            tech: ['Next.js', 'Tailwind CSS', 'Node.js', 'MySQL', 'Cloudflare', 'Nginx'],
            desc: '　Next.jsで構築したeスポーツチームの公式サイト。\nログイン機能やGoogleフォーム風のフォームも独自に実装。\nCloudflareとNginxによる最適化で高速表示を実現しています。',
            link: 'https://ecs-esports.com',
            gradient: 'from-pink-400 to-red-400',
        },
        {
            category: 'Discord BOT',
            title: 'DJ-Music',
            tech: ['Node.js', 'Discord.js', 'worker_threads', 'chilled fork', 'ffmpeg'],
            desc: '　1300サーバー以上に導入されている高性能音楽BOT。\n検索処理をworker threadに分離し、音声再生をforkプロセス化。\n再生処理をforkにて独立スレッドで動かすことで、同時再生でも処理落ちを防いでいます。',
            link: 'https://top.gg/bot/1113282204064297010',
            repo: 'https://github.com/yuyutti/musicbot',
            gradient: 'from-cyan-400 to-blue-400',
        },
        {
            category: 'REST API',
            title: 'Fortnite Power Ranking API',
            tech: ['Node.js', 'Express', 'Puppeteer'],
            desc: '　FortniteTrackerの大会データを自動収集し、APIとして運用。\nCloudflare Turnstileの回避と非同期ブラウジングを実装。\nさらにFortnite.io APIからシーズンデータを取得して、最新のPR大会情報とシーズン情報を取得できます。\n\n※大人の都合で公開はできませんので、ご興味ある方はリポジトリクローンにて自己責任でのご利用をお願いします。',
            repo: 'https://github.com/yuyutti/fortnite-PR-API',
            gradient: 'from-green-400 to-emerald-400',
        },
    ];

    return (
        <section
            ref={ref}
            id="projects"
    className="relative z-10 w-full flex flex-col items-center pt-20 pb-40 
               bg-gradient-to-br from-[#3a0a23] via-[#1a0e3a] to-[#0b1a3f]"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: 'easeOut' },
                    },
                }}
                className="text-4xl sm:text-5xl font-bold mb-20 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent text-center"
            >
                Projects
            </motion.h2>

            <div className="max-w-6xl w-full flex flex-col gap-24 sm:gap-16 px-6">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        animate={controls}
                        variants={{
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1, delay: 0.3 + i * 0.2 },
                            },
                        }}
                        className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${
                            i % 2 === 1 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        {/* Visual block */}
                        <div
                            className={`relative w-full md:w-1/2 h-25 md:h-72 rounded-2xl bg-gradient-to-br ${p.gradient} shadow-lg overflow-hidden`}
                        >
                            {/* 背景ブラー */}
                            <div className="absolute inset-0 bg-[#0d0d0f]/60 backdrop-blur-sm rounded-2xl z-0" />

                            {/* 左上カテゴリ */}
                            <p className="absolute top-4 left-5 text-xs uppercase tracking-widest text-gray-300 z-10">
                                {p.category}
                            </p>

                            {/* 中央タイトル */}
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <h3
                                    className={`text-2xl sm:text-3xl mt-3 md:mt-0 font-semibold text-center bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent`}
                                >
                                    {p.title}
                                </h3>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="w-full md:w-1/2 text-left">
                            <p className="text-gray-400 text-sm mb-3">
                                {p.tech.join(' / ')}
                            </p>
                            <p className="text-gray-300 text-base leading-relaxed mb-5 whitespace-pre-line">
                                {p.desc}
                            </p>
                            <div className="flex gap-4">
                                {p.link && (
                                    <Link
                                        href={p.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cyan-400 hover:text-pink-400 transition-colors text-sm"
                                    >
                                        → サイトを見る
                                    </Link>
                                )}
                                {p.repo && (
                                    <Link
                                        href={p.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        → GitHub
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
