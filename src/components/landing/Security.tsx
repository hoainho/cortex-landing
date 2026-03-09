import { motion } from 'framer-motion'
import { ShieldCheck, Lock, Eye, Fingerprint, Server, AlertTriangle } from 'lucide-react'
import { SectionWrapper, SectionHeader } from './SectionWrapper'

const securityFeatures = [
  {
    icon: Lock,
    title: 'Memory Isolation',
    description: 'Each project brain is completely sandboxed. Separate vector stores, separate embeddings, separate context windows.',
  },
  {
    icon: Eye,
    title: 'Prompt Injection Guard',
    description: 'Multi-layer detection strips malicious instructions, system override attempts, and data extraction payloads.',
  },
  {
    icon: Fingerprint,
    title: 'Zero-Trust Architecture',
    description: 'Every request is authenticated and scoped. No implicit trust between project boundaries.',
  },
  {
    icon: Server,
    title: 'Local-First Storage',
    description: 'All brain data lives on your machine. Nothing is sent to external servers. Your code never leaves your device.',
  },
  {
    icon: AlertTriangle,
    title: 'Audit Logging',
    description: 'Every query and response is logged locally. Full traceability for security review and compliance.',
  },
  {
    icon: ShieldCheck,
    title: 'Token Encryption',
    description: 'GitHub tokens are encrypted at rest using OS keychain integration. Never stored in plaintext.',
  },
]

export function Security() {
  return (
    <SectionWrapper id="security" className="bg-bg-secondary/50">
      <SectionHeader
        label="Security"
        title="Built for Paranoid Engineers"
        description="Your codebase is your most valuable asset. Cortex treats it that way."
      />

      {/* Security architecture visual */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="mb-20 rounded-2xl border border-border bg-bg-card p-10 sm:p-12"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-18 h-18 rounded-2xl bg-accent-glow border border-border-accent flex items-center justify-center">
              <ShieldCheck size={28} className="text-accent" />
            </div>
            <span className="text-[13px] font-medium text-text-secondary">Your Query</span>
          </div>

          <div className="hidden sm:block text-text-tertiary">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
              <path d="M0 12h50m0 0l-8-6m8 6l-8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="sm:hidden text-text-tertiary">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <path d="M12 0v32m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-18 h-18 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <AlertTriangle size={28} className="text-red-400" />
            </div>
            <span className="text-[13px] font-medium text-text-secondary">Injection Filter</span>
          </div>

          <div className="hidden sm:block text-text-tertiary">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
              <path d="M0 12h50m0 0l-8-6m8 6l-8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="sm:hidden text-text-tertiary">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <path d="M12 0v32m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-18 h-18 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Lock size={28} className="text-blue-400" />
            </div>
            <span className="text-[13px] font-medium text-text-secondary">Scoped Context</span>
          </div>

          <div className="hidden sm:block text-text-tertiary">
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
              <path d="M0 12h50m0 0l-8-6m8 6l-8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="sm:hidden text-text-tertiary">
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <path d="M12 0v32m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-18 h-18 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
              <Fingerprint size={28} className="text-green-400" />
            </div>
            <span className="text-[13px] font-medium text-text-secondary">Safe Response</span>
          </div>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {securityFeatures.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-5 p-6 rounded-xl border border-border bg-bg-card/50 hover:bg-bg-card transition-colors"
          >
            <feature.icon size={20} className="text-accent shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[15px] font-semibold text-text-primary mb-2">
                {feature.title}
              </h4>
              <p className="text-text-secondary text-[14px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
