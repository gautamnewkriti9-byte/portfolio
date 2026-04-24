'use client'
import { motion } from 'framer-motion'
import { fadeIn, viewportOnce } from '@/lib/motion'

export default function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="border-t border-border py-10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg text-gradient-gold font-semibold">NG</span>
          <span className="text-muted text-sm font-light">Newkriti Gautam · AI + Finance Builder</span>
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: 'Email', href: 'mailto:gautamnewkriti9@gmail.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/newkritigautam' },
            { label: 'Projects', href: '#projects' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs text-muted hover:text-gold transition-colors tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} · Built with Next.js
        </p>
      </div>
    </motion.footer>
  )
}
