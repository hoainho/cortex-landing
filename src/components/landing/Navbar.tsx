import { motion } from 'framer-motion'
import { Brain, Download, Github } from 'lucide-react'

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-bg-primary/80 border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-10 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
            <Brain size={18} className="text-white" />
          </div>
          <span className="font-semibold text-[17px] text-text-primary tracking-tight">
            Cortex
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[14px] text-text-secondary">
          <a href="#how-it-works" className="hover:text-text-primary transition-colors">
            How it Works
          </a>
          <a href="#modes" className="hover:text-text-primary transition-colors">
            Modes
          </a>
          <a href="#features" className="hover:text-text-primary transition-colors">
            Features
          </a>
          <a href="#changelog" className="hover:text-text-primary transition-colors">
            Changelog
          </a>
          <a href="#security" className="hover:text-text-primary transition-colors">
            Security
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/hoainho/cortex"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-all"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://github.com/hoainho/cortex/releases/download/v4.0.0/Cortex-4.0.0-arm64.dmg"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white text-[13px] font-medium hover:bg-accent-dark transition-all active:scale-[0.97]"
          >
            <Download size={15} />
            Download
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
