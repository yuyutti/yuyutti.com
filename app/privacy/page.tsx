'use client'

import { useNavbar } from '@/context/NavbarContext'
import { useEffect } from 'react'

import { motion } from 'framer-motion'

export default function PrivacyPage() {
    const { setTypingDone } = useNavbar()

    useEffect(() => {
        setTypingDone(true) // ← ページ入った瞬間にNavbarを出す
    }, [setTypingDone])

    return (
        <main className="relative flex items-center justify-center min-h-screen bg-[#0d0d0f] text-white px-6 py-24">
            {/* 背景グロー */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/25 via-blue-500/15 to-transparent blur-3xl" />

            {/* 本文ブロック（ここだけフェード） */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative z-10 max-w-3xl w-full space-y-8 p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
            >

                <h1 className="text-2xl sm:text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
                    プライバシーポリシー
                </h1>

                <section className="space-y-6 text-gray-200 leading-relaxed">
                    <p>
                        本プライバシーポリシーは、ゆゆっち公式HP（以下「本サイト」）が利用者のデータをどのように取り扱うかを定めたものです。
                        本サイトでは、利便性向上のため Google アナリティクスを利用しています。
                    </p>

                    {/* 1 */}
                    <h2 className="text-xl font-bold text-pink-300">1. アクセス解析ツールの利用について</h2>

                    <p className="text-gray-200">
                        当サイトでは、アクセス解析のために Google アナリティクスを利用しています。
                        収集されるデータの詳細や利用方法については、以下の公式ページをご確認ください。
                    </p>

                    <ul className="list-disc pl-6 text-blue-400 space-y-2">
                        <li>
                            <a target="_blank" rel="noopener noreferrer" className="hover:underline"
                                href="https://marketingplatform.google.com/about/analytics/terms/jp/">
                                Google アナリティクス利用規約
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" className="hover:underline"
                                href="https://policies.google.com/technologies/ads?hl=ja">
                                Google ポリシーと規約
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" className="hover:underline"
                                href="https://support.google.com/analytics/answer/11593727?hl=ja">
                                Google アナリティクス ヘルプ
                            </a>
                        </li>
                    </ul>

                    {/* 2 */}
                    <h2 className="text-xl font-bold text-pink-300">2. Google Analytics 4 で収集される情報</h2>

                    <p>Google Analytics 4 では、以下のようなデータが自動的に収集される場合があります。</p>

                    <ul className="list-disc ml-6 space-y-1">
                        <li>アクセスしたページの URL</li>
                        <li>閲覧時刻、滞在時間、サイト遷移情報</li>
                        <li>ブラウザ・OS・デバイス情報</li>
                        <li>IP アドレス（地域推定のみに使用され、保存されません）</li>
                        <li>クリック・スクロールなどの操作データ</li>
                    </ul>

                    {/* 3 */}
                    <h2 className="text-xl font-bold text-pink-300">3. Cookie の利用について</h2>

                    <p>
                        Google Analytics は Cookie を使用してデータ収集を行っています。
                        Cookie の無効化はブラウザ設定から可能ですが、一部機能が正常に動作しない場合があります。
                    </p>

                    <p className="text-blue-400 underline">
                        <a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank" rel="noopener noreferrer">
                            → Google アナリティクス オプトアウトアドオン
                        </a>
                    </p>

                    {/* 4 */}
                    <h2 className="text-xl font-bold text-pink-300">4. データの利用目的</h2>
                    <p>
                        収集されたデータは、サイト改善、トラブル分析、
                        利用状況の把握などに利用します。
                        個人が特定される用途には一切使用しません。
                    </p>

                    {/* 5 */}
                    <h2 className="text-xl font-bold text-pink-300">5. プライバシーポリシーの変更</h2>
                    <p>
                        本ポリシーは予告なく変更される場合があります。
                        最新版は本ページにて公開します。
                    </p>

                    <p className="text-sm text-gray-400 text-right mt-8">
                        最終更新日：2025年 11月 14日
                    </p>
                </section>
            </motion.div>
        </main>
    )
}