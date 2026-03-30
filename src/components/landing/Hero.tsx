import { motion } from 'framer-motion'
import { Download, Github, ArrowRight } from 'lucide-react'
import { NeuralNetwork } from './NeuralNetwork'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="hero-glow top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-50" />
      <div className="grid-pattern absolute inset-0" />

      {/* Neural network canvas */}
      <NeuralNetwork />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 sm:px-10 pt-28 sm:pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-accent-glow border border-border-accent text-accent text-[13px] font-medium mb-5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          v4.5 "Hippocampus" — 7-Tier Fuzzy Matching Engine, Indent-Aware Replacement
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-8"
        >
          The AI Brain That
          <br />
          <span className="gradient-text">Knows Your Codebase</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Not a ChatGPT wrapper. A 7-layer AI brain with{' '}
          <span className="text-accent font-medium">12 agents</span>,{' '}
          <span className="text-accent font-medium">30+ tools</span>, persistent memory,
          self-learning, and Document Intelligence — built to understand YOUR codebase.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="https://github.com/hoainho/cortex/releases"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-white font-semibold text-[15px] hover:bg-accent-dark transition-all active:scale-[0.97] shadow-lg shadow-accent/20"
          >
            <Download size={18} />
            Download for Mac
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="https://github.com/hoainho/cortex"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-xl border border-border text-text-secondary font-medium text-[15px] hover:text-text-primary hover:border-text-tertiary hover:bg-bg-secondary transition-all"
          >
            <Github size={18} />
            View on GitHub
          </a>
        </motion.div>

        {/* Terminal preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <div className="rounded-xl border border-border bg-bg-secondary/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/30">
            {/* Terminal header */}
            <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <span className="text-[12px] text-text-tertiary font-mono ml-2">
                cortex — brain: Atlas
              </span>
            </div>
            {/* Terminal content */}
            <div className="p-6 code-mock text-left">
              <div className="text-text-tertiary mb-3">
                <span className="comment">{'// Ask anything about your codebase'}</span>
              </div>
              <div className="mb-2">
                <span className="text-accent">{'> '}</span>
                <span className="text-text-primary">How does the authentication flow work?</span>
              </div>
              <div className="mt-5 pl-4 border-l-2 border-accent/30">
                <p className="text-text-secondary text-[13px] leading-relaxed">
                  The auth flow uses <span className="text-accent-light">JWT tokens</span> with refresh rotation.
                  Entry point: <span className="function">src/auth/middleware.ts</span>
                </p>
                <p className="text-text-secondary text-[13px] leading-relaxed mt-1.5">
                  Login → <span className="function">validateCredentials()</span> →
                  <span className="function"> generateTokenPair()</span> →
                  Set httpOnly cookie
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
