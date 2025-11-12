// 'use client';
// import { motion, useAnimation } from 'framer-motion';
// import { useState, useEffect, useMemo } from 'react';
// import { useInView } from 'react-intersection-observer';
// import Link from 'next/link';
// import { FaArrowUp } from 'react-icons/fa6';
// import { useNavbar } from '@/context/NavbarContext';

// export default function Home() {
//     const [displayText, setDisplayText] = useState('');
//     const [startBlink, setStartBlink] = useState(false);
//     const { setTypingDone } = useNavbar();

//     // 🎂 年齢自動計算
//     const birthDate = useMemo(() => new Date(2006, 5, 25), []);
//     const age = useMemo(() => {
//         const today = new Date();
//         let age = today.getFullYear() - birthDate.getFullYear();
//         if (
//             today.getMonth() < birthDate.getMonth() ||
//             (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
//         )
//             age--;
//         return age;
//     }, [birthDate]);

//     // タイピングアニメーション
//     useEffect(() => {
//         const seq = [
//             'ｙ', 'ゆ', 'ゆｙ', 'ゆゆ', 'ゆゆｔ', 'ゆゆｔｔ', 'ゆゆっち', 'ゆゆっちｋ',
//             'ゆゆっちこ', 'ゆゆっちこう', 'ゆゆっちこうｓ', 'ゆゆっちこうしｋ',
//             'ゆゆっちこうしき', 'ゆゆっち公式', 'ゆゆっち公式H', 'ゆゆっち公式HP'
//         ];
//         let i = 0;
//         const interval = setInterval(() => {
//             setDisplayText(seq[i]);
//             i++;
//             if (i >= seq.length) {
//                 clearInterval(interval);
//                 setTimeout(() => {
//                     setStartBlink(true);
//                     setShowNavbar(true);
//                 }, 800);
//             }
//         }, 195);
//         return () => clearInterval(interval);
//     }, [setShowNavbar]);

//     // スクロール監視（TOPボタン表示用）
//     useEffect(() => {
//         const onScroll = () => setShowScrollTop(window.scrollY > 400);
//         window.addEventListener('scroll', onScroll);
//         return () => window.removeEventListener('scroll', onScroll);
//     }, []);

//     const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

//     // 🎨 趣味データ
//     const hobbies = [
//         {
//             icon: '🎮',
//             title: 'ゲーム',
//             gradient: 'from-pink-400 to-red-400',
//             shadow: 'rgba(255,0,100,0.15)',
//             hover: 'hover:border-pink-400/30',
//             content:
//                 "主にValorantをプレイしています。たまにシミュレーションゲームもやります。\n" +
//                 "FortniteやMinecraftも今でもたまにプレイしています。\n" +
//                 "ジェットが好きです！ 噂によるとジェットだけで2000マッチを超えたとか…",
//         },
//         {
//             icon: '💻',
//             title: 'プログラミング',
//             gradient: 'from-cyan-400 to-blue-400',
//             shadow: 'rgba(0,150,255,0.15)',
//             hover: 'hover:border-cyan-400/30',
//             content:
//                 "Node.js（JavaScript）やTypeScriptをメインに開発しています。\n" +
//                 "Webサイト制作やDiscord BOT、Fortniteリプレイ解析ツール、Webスクレイピングを用いたREST APIなど幅広く開発可能です。\n\n" +
//                 "また、実際にプログラムを動かすためのサーバー構築や管理も行っており、\n" +
//                 "2021年ごろからオンプレミス環境で7台のサーバーを運用しています。",
//         },
//         {
//             icon: '🐅',
//             title: '動物園巡り',
//             gradient: 'from-green-400 to-emerald-400',
//             shadow: 'rgba(0,255,150,0.15)',
//             hover: 'hover:border-green-400/30',
//             content:
//                 "全国各地のトラ・ホワイトタイガーがいる動物園を巡っています。\n" +
//                 "特にホワイトタイガーが大好き！\n\n" +
//                 "四国は制覇済み。その他にも姫セン、ニフレル、天王寺動物園、浜松動物園、東山動植物園、\n" +
//                 "伊豆アニマルキングダム、東武動物公園、上野動物園などに行きました。\n\n" +
//                 "全国のトラ・ホワイトタイガーに会いたいです！\n" +
//                 "将来のホワイトタイガーを飼いたいです！",
//         },
//         {
//             icon: '🎧',
//             title: '音楽制作',
//             gradient: 'from-purple-400 to-pink-400',
//             shadow: 'rgba(255,100,255,0.15)',
//             hover: 'hover:border-purple-400/30',
//             content:
//                 "歌ってみたの制作をメインに行っています。\n" +
//                 "歌唱から補正、ミックス、マスタリングまで一通り対応可能。\n\n" +
//                 "さらにボイトレに4年ほど通っており、\n" +
//                 "昔の投稿と比べるとかなり歌唱力が上がっていると思います！",
//         },
//     ];

//     // About セクション アニメーション制御
//     const controls = useAnimation();
//     const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });

//     useEffect(() => {
//         if (inView) controls.start('visible');
//     }, [inView, controls]);

//     return (
//         <main className="relative flex flex-col items-center justify-start min-h-screen bg-[#0d0d0f] text-white overflow-hidden scroll-smooth">
//             {/* 背景グロー */}
//             <div className="absolute inset-0 bg-gradient-to-br from-red-500/25 via-blue-500/15 to-transparent blur-3xl" />

//             {/* Hero */}
//             <section className="relative z-10 text-center px-4 flex flex-col justify-center items-center h-screen overflow-hidden">
//                 <motion.h1
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 1, ease: 'easeOut' }}
//                     className="text-5xl sm:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(255,0,80,0.4)]"
//                 >
//                     {displayText}
//                     {startBlink ? (
//                         <motion.span
//                             animate={{ opacity: [0, 1, 0] }}
//                             transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
//                             className="inline-block w-3 h-8 bg-pink-400 ml-1"
//                         />
//                     ) : (
//                         <span className="inline-block w-3 h-8 bg-pink-400 ml-1" />
//                     )}
//                 </motion.h1>

//                 <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 3, duration: 1 }}
//                     className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto"
//                 >
//                     ECS e-Sports - Team Manager & Developer <br />
//                     Node.js x TypeScript｜ Web x Discord Tools / Vocal Mixing
//                 </motion.p>

//                 <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 4, duration: 1 }}
//                     className="mt-10 flex flex-wrap gap-3 justify-center"
//                 >
//                     <Link
//                         href="#about"
//                         onClick={(e) => {
//                             e.preventDefault();
//                             document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
//                         }}
//                         className="px-6 py-3 text-lg rounded-full bg-gradient-to-r from-red-500 to-pink-600 hover:opacity-90 transition"
//                     >
//                         About Me
//                     </Link>
//                     <Link
//                         href="/link"
//                         className="px-6 py-3 text-lg rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition"
//                     >
//                         Links
//                     </Link>
//                 </motion.div>
//             </section>

//             {/* About */}
//             <section
//                 ref={ref}
//                 id="about"
//                 className="relative z-10 w-full flex flex-col items-center pt-32 pb-40 bg-[#0d0d0f]"
//             >
//                 <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={controls}
//                     variants={{
//                         visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
//                     }}
//                     className="text-4xl sm:text-5xl font-bold mb-10 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent text-center"
//                 >
//                     About Me
//                 </motion.h2>

//                 <motion.p
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={controls}
//                     variants={{
//                         visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
//                     }}
//                     className="max-w-3xl text-gray-300 text-lg leading-relaxed px-4 text-left"
//                 >
//                     <span className="font-semibold text-white">活動名：</span> ゆゆっち <br />
//                     <span className="font-semibold text-white">年齢：</span> {age}歳（2006/6/25 生まれ）<br />
//                     <span className="font-semibold text-white">MBTI：</span> INTJ x ENTP-A<br />
//                     <span className="font-semibold text-white">趣味：</span> ゲーム / プログラミング + サーバー / 動物園巡り / 音楽制作 <br /><br />
//                     ECS e-SportsというEsportsチームでの運営をメインに活動しています。
//                 </motion.p>

//                 <motion.h3
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={controls}
//                     variants={{
//                         visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
//                     }}
//                     className="text-2xl sm:text-4xl font-bold mt-16 mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent text-center"
//                 >
//                     趣味
//                 </motion.h3>

//                 <div className="max-w-4xl text-gray-300 text-lg leading-relaxed px-4 space-y-10 text-left">
//                     {hobbies.map((h, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ opacity: 0}}
//                             animate={controls}
//                             variants={{
//                                 visible: {
//                                     opacity: 1,
//                                     y: 0,
//                                     transition: { duration: 1.2, delay: 0.5 + i * 0.2 },
//                                 },
//                             }}
//                             className={`rounded-2xl bg-gradient-to-br from-[#181818] to-[#0f0f0f] p-6 border border-white/5 shadow-[0_0_20px_${h.shadow}] ${h.hover} transition-all`}
//                         >
//                             <h4
//                                 className={`text-2xl font-semibold text-white mb-3 bg-gradient-to-r ${h.gradient} bg-clip-text text-transparent`}
//                             >
//                                 {h.icon} {h.title}
//                             </h4>
//                             <p className="whitespace-pre-line">{h.content}</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </section>

//             {/* 上に戻るボタン */}
//             <motion.button
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={showScrollTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.3 }}
//                 onClick={scrollToTop}
//                 className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:scale-110 transition-transform z-50"
//             >
//                 <FaArrowUp className="text-xl" />
//             </motion.button>
//         </main>
//     );
// }
