import { Brain, Github, Download, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary/30">
      <div className="max-w-6xl mx-auto px-8 sm:px-10 py-20">
        {/* CTA */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Ready to give your codebase a <span className="gradient-text">brain</span>?
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Download Cortex and start asking questions about your code in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://github.com/hoainho/cortex/releases/download/v2.0.0/Cortex-2.0.0-arm64.dmg"
              id="download"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-accent text-white font-semibold text-[15px] hover:bg-accent-dark transition-all active:scale-[0.97] shadow-lg shadow-accent/20"
            >
              <Download size={18} />
              Download for Mac
            </a>
            <a
              href="https://github.com/hoainho/cortex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-xl border border-border text-text-secondary font-medium text-[15px] hover:text-text-primary hover:border-text-tertiary transition-all"
            >
              <Github size={18} />
              Star on GitHub
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
              <Brain size={14} className="text-white" />
            </div>
            <span className="font-semibold text-[15px] text-text-primary tracking-tight">
              Cortex
            </span>
          </div>

          <p className="text-text-tertiary text-[13px] flex items-center gap-2">
            Built with <Heart size={13} className="text-accent" /> by Hoai Nho
          </p>

          <div className="flex items-center gap-6 text-text-tertiary text-[13px]">
            <a href="https://github.com/hoainho/cortex" target="_blank" rel="noopener noreferrer" className="hover:text-text-secondary transition-colors">
              GitHub
            </a>
            <a href="https://github.com/hoainho/cortex/releases/download/v2.0.0/Cortex-2.0.0-arm64.dmg" className="hover:text-text-secondary transition-colors">
              Download
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
