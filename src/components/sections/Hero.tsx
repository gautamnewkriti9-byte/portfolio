'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ExternalLink, Mail } from 'lucide-react'

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  )
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string }[] = []
    const colors = ['rgba(201,168,76,', 'rgba(15,244,198,', 'rgba(212,228,240,']

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${p.opacity})`
        ctx.fill()
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(201,168,76,${0.04 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.5 }} />
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <GridBackground />
      <ParticleCanvas />

      {/* Ambient orbs */}
      <div className="absolute w-[500px] h-[500px] bg-gold/8 rounded-full blur-[120px] top-[-100px] left-[-150px] animate-float pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-teal/8 rounded-full blur-[120px] bottom-[-80px] right-[-100px] pointer-events-none" style={{ animationDelay: '-3s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-full border border-teal/30 bg-teal/5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          <span className="font-mono text-xs text-teal tracking-widest uppercase">Open to Opportunities &middot; 2025</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4"
        >
          <span className="font-mono text-subtle text-sm tracking-[0.3em] uppercase">Hello, I&apos;m</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light mb-6 leading-none tracking-tight"
        >
          <span className="text-bright">Newkriti</span>
          <br />
          <span className="text-gradient-gold italic">Gautam</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <span className="font-mono text-subtle text-sm tracking-widest uppercase">
            Business &amp; Finance Graduate
          </span>
          <span className="mx-3 text-border">|</span>
          <span className="font-mono text-subtle text-sm tracking-widest uppercase">
            MBA Candidate
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-subtle text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          I combine financial analysis, client management, and business strategy
          to drive real outcomes. From Nepal to a national scholarship in India &mdash;
          I bring <span className="text-gold-light">rigour</span> and <span className="text-teal">results</span> to every role I take on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gold text-bg font-body font-medium text-sm tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gold-light transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 border border-border hover:border-teal/60 text-text font-body font-medium text-sm tracking-wide transition-all duration-300 flex items-center gap-2"
          >
            <Mail size={14} />
            Contact Me
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          {[
            { value: '9.13', label: 'MBA CGPA' },
            { value: '90%+', label: 'Client Retention' },
            { value: '5+', label: 'Client Accounts' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl text-gradient-gold font-light">{stat.value}</div>
              <div className="font-mono text-xs text-muted mt-1 tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-muted tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={14} className="text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
