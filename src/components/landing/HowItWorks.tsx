import { motion } from 'framer-motion'
import { GitBranch, Brain, Cpu, MessageSquare } from 'lucide-react'
import { SectionWrapper, SectionHeader } from './SectionWrapper'

const steps = [
  {
    icon: GitBranch,
    step: '01',
    title: 'Import & Index',
    description:
      'Connect any GitHub repo or local folder. Cortex parses AST, creates vector embeddings (Voyage AI), and builds dependency graphs.',
    detail: 'SQLite for FTS search, Qdrant for vector similarity. Incremental sync — only changed files re-indexed.',
  },
  {
    icon: Brain,
    step: '02',
    title: 'Understand & Route',
    description:
      'Smart Intent Classifier analyzes your query. Pipeline Router selects the optimal path: multi-agent orchestration, ReAct reasoning, or direct RAG.',
    detail: 'Not keyword matching — LLM-based classification that detects intent, tool needs, and external info requirements.',
  },
  {
    icon: Cpu,
    step: '03',
    title: 'Act & Verify',
    description:
      '12 agents + 25 tools execute in parallel. Code Advisor searches YOUR patterns. Vision analyzes images. Git tools answer team questions.',
    detail: 'Systematic resolution: Investigate → Compare → Hypothesize → Verify. Never says "I don\'t know" without trying all tools first.',
  },
  {
    icon: MessageSquare,
    step: '04',
    title: 'Remember & Learn',
    description:
      '3-tier memory persists across sessions. Self-learning tracks what you find useful and adjusts search weights over time.',
    detail: 'Core memory (preferences), Archival memory (past decisions), Recall memory (conversation history).',
  },
]

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <SectionHeader
        label="How It Works"
        title="From Repo to Intelligence in Minutes"
        description="Three simple steps to give your team a brain that knows every line of your codebase."
      />

      <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
        {steps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="card-glow group rounded-2xl border border-border bg-bg-card p-9 hover:bg-bg-card-hover transition-colors"
          >
            <div className="flex items-center gap-4 mb-7">
              <div className="w-14 h-14 rounded-xl bg-accent-glow flex items-center justify-center group-hover:bg-accent-glow-strong transition-colors">
                <step.icon size={22} className="text-accent" />
              </div>
              <span className="text-[13px] font-mono text-text-tertiary font-medium">
                Step {step.step}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-4 text-text-primary">
              {step.title}
            </h3>

            <p className="text-text-secondary text-[15px] leading-relaxed mb-5">
              {step.description}
            </p>

            <p className="text-text-tertiary text-[13px] leading-relaxed">
              {step.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
