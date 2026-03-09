import { motion } from 'framer-motion'
import { Github, Brain, ToggleLeft, Shield, RefreshCw, WifiOff } from 'lucide-react'
import { SectionWrapper, SectionHeader } from './SectionWrapper'

const features = [
  {
    icon: Github,
    title: 'GitHub Integration',
    description:
      'Import public and private repositories. Automatic token-based authentication with guided setup for private repos.',
  },
  {
    icon: Brain,
    title: 'Brain Per Project',
    description:
      'Each project gets its own isolated AI brain with dedicated memory. No cross-project data contamination.',
  },
  {
    icon: ToggleLeft,
    title: 'Dual Response Modes',
    description:
      'Switch between Product and Engineering modes instantly. Same question, tailored answer for different audiences.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description:
      'Zero cross-project data leakage. Prompt injection protection. Memory isolation enforced at the architecture level.',
  },
  {
    icon: RefreshCw,
    title: 'Incremental Learning',
    description:
      'Re-sync your brain when the repository updates. Only changed files are re-processed — fast and efficient.',
  },
  {
    icon: WifiOff,
    title: 'Offline Ready',
    description:
      'Once indexed, your brain works without internet. All embeddings and knowledge stored locally on your machine.',
  },
]

export function Features() {
  return (
    <SectionWrapper id="features">
      <SectionHeader
        label="Features"
        title="Everything You Need"
        description="Built for teams that need deep codebase intelligence without the overhead."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card-glow group rounded-2xl border border-border bg-bg-card p-8 sm:p-9 hover:bg-bg-card-hover transition-colors"
          >
            <div className="w-13 h-13 rounded-xl bg-accent-glow flex items-center justify-center mb-6 group-hover:bg-accent-glow-strong transition-colors">
              <feature.icon size={20} className="text-accent" />
            </div>

            <h3 className="text-[17px] font-semibold text-text-primary mb-3">
              {feature.title}
            </h3>

            <p className="text-text-secondary text-[14px] leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
