'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaXTwitter, FaDiscord, FaYoutube, FaGithub, FaTiktok } from 'react-icons/fa6';
import { useNavbar } from '@/context/NavbarContext';

export default function LinksPage() {
    const [displayText, setDisplayText] = useState('');
    const [startBlink, setStartBlink] = useState(false);
    const { setTypingDone, typingDone } = useNavbar();

    useEffect(() => {
        const seq = ['L', 'Li', 'Lin', 'Link'];
        let i = 0;

        const interval = setInterval(() => {
            setDisplayText(seq[i]);
            i++;
            if (i >= seq.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setStartBlink(true);
                    setTypingDone(true);
                }, 650);
            }
        }, 195);

        return () => clearInterval(interval);
    }, [setTypingDone]);

    const links = [
        {
            name: 'X (Twitter)',
            url: 'https://x.com/yuyuttiofficial',
            desc: '@yuyuttiofficial｜日常のつぶやきから告知まで何でもこのアカウントに投稿します。\nフォローお願いします！\n\n@yuyutti_subも俺が所有してるアカウントです。',
            color: 'from-blue-500 to-cyan-400',
            icon: <FaXTwitter className="text-3xl text-cyan-300 group-hover:text-white transition" />,
        },
        {
            name: 'TikTok',
            url: 'https://www.tiktok.com/@yuyutti_official',
            desc: '@yuyutti_official｜雑多垢',
            color: 'from-pink-500 to-gray-700',
            icon: <FaTiktok className="text-3xl text-pink-400 group-hover:text-white transition" />,
        },
        {
            name: 'YouTube',
            url: 'https://youtube.com/@yuyutti',
            desc: '@yuyutti｜不定期で歌ってみた上げてます！',
            color: 'from-red-500 to-pink-500',
            icon: <FaYoutube className="text-3xl text-red-400 group-hover:text-white transition" />,
        },
        {
            name: 'Discord',
            url: null,
            desc: '@yuyutti マイクラ・開発界隈用\n\n@yuyuttigg ゲーム界隈用',
            color: 'from-indigo-500 to-purple-400',
            icon: <FaDiscord className="text-3xl text-indigo-300 group-hover:text-white transition" />,
        },
        {
            name: 'GitHub',
            url: 'https://github.com/yuyutti',
            desc: 'Node.js / TypeScript\n\n音楽BOTやスクレイピングツール、\nFortniteリプレイ解析ツールなどのリポジトリ公開してます！',
            color: 'from-gray-700 to-gray-500',
            icon: <FaGithub className="text-3xl text-gray-400 group-hover:text-white transition" />,
        },
    ];

    return (
        <main className="relative flex items-center justify-center min-h-screen bg-[#0d0d0f] text-white px-6">
            {/* 背景グロー */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/25 via-blue-500/15 to-transparent blur-3xl" />

            {/* 中央コンテンツ */}
            <div className="flex flex-col items-center justify-center w-full max-w-6xl py-16">
                {/* タイトル */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="text-4xl sm:text-6xl font-bold mb-12 bg-gradient-to-r from-red-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,0,80,0.4)]"
                >
                    {displayText}
                    {startBlink ? (
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="inline-block w-3 h-8 bg-pink-400 ml-1"
                        />
                    ) : (
                        <span className="inline-block w-3 h-8 bg-pink-400 ml-1" />
                    )}
                </motion.h1>

                {/* リンクカード */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {links.map((link, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={
                                typingDone
                                    ? { scale: 1, opacity: 1 }
                                    : { scale: 0.6, opacity: 0 }
                            }
                            transition={{
                                delay: typingDone ? 0.2 + i * 0.1 : 0,
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`group relative rounded-2xl p-[2px] bg-gradient-to-r ${link.color}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={
                                    typingDone
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 10 }
                                }
                                transition={{
                                    delay: typingDone ? 0.4 + i * 0.1 : 0,
                                    duration: 0.5,
                                    ease: [0.25, 0.1, 0.25, 1],
                                }}
                                className="rounded-2xl bg-[#0d0d0f]/90 p-6 h-full flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        {link.icon}
                                        <h2 className="text-2xl font-bold">{link.name}</h2>
                                    </div>
                                    <p className="text-gray-400 text-sm whitespace-pre-line">
                                        {link.desc}
                                    </p>
                                </div>

                                {link.url && (
                                    <div className="mt-6 text-right">
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-gray-500 group-hover:text-white transition"
                                        >
                                            → visit
                                        </a>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
