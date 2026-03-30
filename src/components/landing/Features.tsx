import { motion } from 'framer-motion'
import { Eye, Palette, Code, Users, Search, Shield, Brain, Zap, RefreshCw } from 'lucide-react'
import { SectionWrapper, SectionHeader } from './SectionWrapper'

const features = [
  {
    icon: Brain,
    title: '6-Layer Brain',
    description:
      'Understanding → Thinking → Acting → Remembering → Collaborating → Learning. Not a flat Q&A — a full reasoning pipeline.',
  },
  {
    icon: Users,
    title: '15 Specialized Agents',
    description:
      'Sisyphus (ultraworker), Hephaestus (debugger), Prometheus (planner), Atlas (heavy lifter), Oracle, Explore, Librarian + 8 specialists. Full delegation network with tool whitelists per role.',
  },
  {
    icon: Code,
    title: 'Code Advisor (TabNine-inspired)',
    description:
      'Searches YOUR codebase for patterns, detects YOUR naming conventions, generates code that matches YOUR style.',
  },
  {
    icon: Eye,
    title: 'Vision & Image Analysis',
    description:
      'Upload images → AI analysis, OCR, UI review, diagram understanding. Uses FREE OpenRouter vision models.',
  },
  {
    icon: Palette,
    title: 'AI Image Generation',
    description:
      '8 style presets: realistic, anime, watercolor, pixel-art, sketch, minimalist, oil-painting, cyberpunk.',
  },
  {
    icon: Search,
    title: '25+ Built-in Tools',
    description:
      'Git analysis, config search, grep, web search, code advisor, vision, artist — called automatically by the LLM.',
  },
  {
    icon: Shield,
    title: 'Privacy & Security',
    description:
      'Code stays on your machine. API keys encrypted via macOS Keychain. Prompt injection detection. Sandboxed execution.',
  },
  {
    icon: Zap,
    title: 'Smart Pipeline Routing',
    description:
      'Category-first routing: deep/ultrabrain → orchestrate, visual → skill_chain, quick → RAG. >60% of queries now use multi-agent orchestration automatically.',
  },
  {
    icon: RefreshCw,
    title: 'Loop Auto-Activation',
    description:
      'Say "không dừng" or "until done" → Ralph/Ultrawork loop activates automatically. Completion detection from response content. Training feedback on every interaction.',
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
