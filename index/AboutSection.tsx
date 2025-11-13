'use client';
import { motion, useAnimation } from 'framer-motion';
import { useMemo, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
    const birthDate = useMemo(() => new Date(2006, 5, 25), []);
    const age = useMemo(() => {
        const today = new Date();
        let a = today.getFullYear() - birthDate.getFullYear();
        if (
            today.getMonth() < birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
        )
            a--;
        return a;
    }, [birthDate]);

    const hobbies = [
        {
            icon: '🎮',
            title: 'ゲーム',
            gradient: 'from-pink-400 to-red-400',
            shadow: 'rgba(255,0,100,0.15)',
            hover: 'hover:border-pink-400/30',
            content:
                "主にValorantをプレイしています。たまにシミュレーションゲームもやります。\n" +
                "FortniteやMinecraftも、今でもたまにプレイしています。\n" +
                "Valorantのキャラの中で特にジェットが好きです！ \n" +
                "噂によるとジェットだけで2000マッチを超えたとか…",
        },
        {
            icon: '💻',
            title: 'プログラミング',
            gradient: 'from-cyan-400 to-blue-400',
            shadow: 'rgba(0,150,255,0.15)',
            hover: 'hover:border-cyan-400/30',
            content:
                "Node.js（JavaScript）やTypeScriptをメインに開発しています。\n" +
                "Webサイト制作やDiscord BOT、Fortniteリプレイ解析ツール、Webスクレイピングを用いたREST APIなど幅広く開発しています。\n\n" +
                "また、実際にプログラムを動かすためのサーバー構築や管理も行っており、\n" +
                "2021年ごろからオンプレミス環境で7台のサーバーを運用しています。",
        },
        {
            icon: '🐅',
            title: '動物園巡り',
            gradient: 'from-green-400 to-emerald-400',
            shadow: 'rgba(0,255,150,0.15)',
            hover: 'hover:border-green-400/30',
            content:
                "全国各地のトラ・ホワイトタイガーがいる動物園を巡っています。\n" +
                "特にホワイトタイガーが大好き！\n\n" +
                "四国は制覇済み。その他にも姫セン、ニフレル、天王寺動物園、浜松動物園、東山動植物園、\n" +
                "伊豆アニマルキングダム、東武動物公園、上野動物園などに行きました。\n\n" +
                "全国のトラ・ホワイトタイガーに会いに行きます！\n" +
                "将来、ホワイトタイガーを飼いたいです！",
        },
        {
            icon: '🎧',
            title: '音楽制作',
            gradient: 'from-purple-400 to-pink-400',
            shadow: 'rgba(255,100,255,0.15)',
            hover: 'hover:border-purple-400/30',
            content:
                "歌ってみたの制作をメインに行っています。\n" +
                "歌唱から補正、ミックス、マスタリングまで一通り対応可能。\n\n" +
                "ボイトレに4年ほど通っており、\n" +
                "昔の投稿と比べるとかなり歌唱力が上がっていると思います！",
        },
    ];

    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.25 });

    useEffect(() => {
        if (inView) controls.start('visible');
    }, [inView, controls]);

    return (
        <section
            ref={ref}
            id="about"
            className="relative z-10 w-full flex flex-col items-center pt-32 pb-32 bg-[#0d0d0f]"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
                }}
                className="text-4xl sm:text-5xl font-bold mb-10 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent text-center"
            >
                About Me
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
                }}
                className="max-w-3xl text-gray-300 text-lg leading-relaxed px-4 text-left"
            >
                <span className="font-semibold text-white">活動名：</span> ゆゆっち <br />
                <span className="font-semibold text-white">年齢：</span> {age}歳（2006/6/25 生まれ）<br />
                <span className="font-semibold text-white">MBTI：</span> INTJ x ENTP-A<br />
                <span className="font-semibold text-white">趣味：</span> ゲーム / プログラミング + サーバー / 動物園巡り / 音楽制作 <br />
                <span className="font-semibold text-white">好きな食べ物：</span> うどん / ラーメン <br /><br />
                ECS e-Sportsというesportsチームでの運営をメインに活動しています。
            </motion.p>

            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
                }}
                className="text-2xl sm:text-4xl font-bold mt-16 mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent text-center"
            >
                Hobbies
            </motion.h3>

            <div className="max-w-4xl text-gray-300 text-lg leading-relaxed px-4 space-y-10 text-left">
                {hobbies.map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={controls}
                        variants={{
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 1.2, delay: 0.5 + i * 0.2 },
                            },
                        }}
                        style={{
                            boxShadow: `0 0 20px ${h.shadow}`
                        }}
                        className={`rounded-2xl bg-gradient-to-br from-[#181818] to-[#0f0f0f]
                            p-6 border border-white/5 ${h.hover} transition-all`}
                    >
                        <h4 className={`text-2xl font-semibold text-white mb-3 bg-gradient-to-r ${h.gradient} bg-clip-text text-transparent`}>
                            {h.icon} {h.title}
                        </h4>
                        <p className="whitespace-pre-line">{h.content}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
