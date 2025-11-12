import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

/* --- Hobbyコンポーネント --- */
function Hobby({
    title,
    emoji,
    children,
}: {
    title: string;
    emoji: string;
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-gray-700/50 rounded-xl p-5 bg-[#111]/40 hover:bg-[#1a1a1a]/60 transition-all duration-300"
        >
            <button
                onClick={() => setOpen(!open)}
                className="flex justify-between items-center w-full text-left text-xl font-semibold text-white"
            >
                <span>{emoji} {title}</span>
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-gray-400 select-none"
                >
                    ▼
                </motion.span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="text-gray-300 text-lg mt-3 leading-relaxed"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default Hobby;