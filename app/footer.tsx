// /app/footer.tsx
import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            className="
                max-w-full py-10
                bg-gradient-to-br
                from-[#0a0f28]
                via-[#1a1f4a]
                to-[#341a3c]
                text-center text-sm text-white/80
                border-t border-white/10
            "
        >
            <div className="flex flex-col items-center gap-2">
                <Link
                    href="/privacy"
                    className="hover:text-white transition text-sm text-gray-300"
                >
                    プライバシーポリシー
                </Link>

                <p className="text-xs sm:text-sm text-gray-400">
                    © 2025 yuyutti.com — Created by yuyutti. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
