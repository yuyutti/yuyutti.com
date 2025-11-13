'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa6'

export default function ScrollToTop() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handler = () => setShow(window.scrollY > 400)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:scale-110 transition-transform z-50"
        >
            <FaArrowUp className="text-xl" />
        </motion.button>
    )
}
