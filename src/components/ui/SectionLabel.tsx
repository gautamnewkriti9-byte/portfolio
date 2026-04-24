'use client'
import { motion } from 'framer-motion'
import { fadeIn, viewportOnce } from '@/lib/motion'

interface SectionLabelProps {
  label: string
  className?: string
}

export default function SectionLabel({ label, className = '' }: SectionLabelProps) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`inline-flex items-center gap-2 mb-6 ${className}`}
    >
      <span className="h-px w-8 bg-gradient-to-r from-gold to-transparent" />
      <span className="font-mono text-xs tracking-[0.25em] uppercase text-gold">
        {label}
      </span>
      <span className="h-px w-8 bg-gradient-to-l from-teal to-transparent" />
    </motion.div>
  )
}
