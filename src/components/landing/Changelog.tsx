import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Download, ChevronDown, ChevronRight,
  Bot, Brain, Wrench, Shield, Gauge, Blocks,
  Terminal, GitBranch, Search, Database, Cpu, Sparkles,
  type LucideIcon
} from 'lucide-react'
import { SectionWrapper, SectionHeader } from './SectionWrapper'

interface FeatureGroup {
  icon: LucideIcon
  title: string
  items: string[]
}

interface Release {
  version: string
  date: string
  tagline: string
  latest?: boolean
  downloadUrl?: string
  groups: FeatureGroup[]
}

const RELEASES: Release[] = [
  {
    version: '3.0.0',
    date: 'March 2026',
    tagline: 'Agent Mode Overhaul, GitLab-first Routing & V3 Hook Engine',
    latest: true,
    downloadUrl: 'https://github.com/hoainho/cortex/releases/download/v3.0.0/Cortex-3.0.0-arm64.dmg',
    groups: [
      {
        icon: Bot,
        title: 'Agent Mode Overhaul',
        items: [
          'Agent system prompts hidden from chat — only user input visible',
          'OpenCode-style mode directives: analyze-mode, search-mode, todo-continuation',
          'Backend agent injection via AGENT_MODE_CONFIGS',
          'agentModeId passed separately through full IPC pipeline',
        ],
      },
      {
        icon: Cpu,
        title: 'Smart Routing & GitLab Priority',
        items: [
          'GitLab models at T10 (highest) — always preferred when available',
          'Category-based model routing with confidence scoring',
          'Model cache invalidation on proxy config change',
          'Auto-rotation with 10-tier model quality ranking',
        ],
      },
      {
        icon: Wrench,
        title: 'V3 Hook Engine',
        items: [
          'Before/after chat hooks: cost-guard, cache-check, context-window-monitor',
          'Loop engine: Ralph loop, Ultrawork loop with boulder state persistence',
          'Background task manager with priority queue and concurrency control',
          'Agent capabilities system with tool whitelist per role',
        ],
      },
      {
        icon: Sparkles,
        title: 'UX Improvements',
        items: [
          'Settings save feedback — success/error notifications',
          'Dark mode as default theme',
          'macOS dock name fix for dev mode',
          'Landing page V3 with feature highlights grid',
        ],
      },
    ],
  },
  {
    version: '2.0.0',
    date: 'March 2026',
    tagline: 'Multi-Agent AI with Memory, Skills & Self-Learning',
    downloadUrl: 'https://github.com/hoainho/cortex/releases/download/v2.0.0/Cortex-2.0.0-arm64.dmg',
    groups: [
      {
        icon: Bot,
        title: '12 AI Agents',
        items: [
          'Sisyphus — Relentless orchestrator that breaks tasks into atomic steps and delegates to specialists',
          'Hephaestus — Deep agent that researches thoroughly before acting, examines all angles and root causes',
          'Prometheus — Strategic planner producing architecture proposals with execution blueprints',
          'Atlas — Heavy lifter for parallel execution across codebases with systematic precision',
          '8 core & background agents: Implementation, Review, Security, Performance, Writer, Formatter, Feedback, Knowledge Crystallizer',
        ],
      },
      {
        icon: Terminal,
        title: '33 Slash Commands',
        items: [
          '/review — 4-perspective PR code review (security, quality, performance, testing)',
          '/security, /architect, /refactor, /implement — specialized workflow commands',
          '/playwright, /dev-browser — browser automation with persistent state',
          '/git-master — atomic commits, rebase, squash, blame, bisect',
          '/test, /nano-brain-init, /nano-brain-reindex + 20 more workflow commands',
        ],
      },
      {
        icon: Brain,
        title: '3-Tier Memory System',
        items: [
          'Core Memory — user preferences, coding style, project conventions',
          'Archival Memory — long-term knowledge with semantic search',
          'Recall Memory — full conversation history with context replay',
          'Powered by Letta/MemGPT architecture with SQLite + embeddings',
        ],
      },
      {
        icon: Blocks,
        title: 'Skill Plugin System',
        items: [
          'Extensible skill registry with hot-reload and health monitoring',
          'MCP (Model Context Protocol) integration for external tools',
          'Auto-routing queries to the best skill based on confidence scoring',
          'Built-in skills: RAG, code analysis, PR review, test generation, memory',
        ],
      },
      {
        icon: Search,
        title: 'Advanced RAG Pipeline',
        items: [
          'GraphRAG — graph-enhanced retrieval using code dependency graphs',
          'RAG Fusion — multi-query with Reciprocal Rank Fusion',
          'Contextual Chunking — enriches chunks with file-level imports and exports',
          'Self-RAG — self-evaluating retrieval with automatic strategy selection',
        ],
      },
      {
        icon: Sparkles,
        title: 'Self-Learning & Efficiency',
        items: [
          'Learns from your feedback — implicit signals and explicit thumbs up/down',
          'Prompt optimization via DSPy bridge with iterative improvement',
          'Semantic cache with 92% cosine similarity threshold',
          'Model auto-routing based on query complexity, cost tracking dashboard',
        ],
      },
    ],
  },
  {
    version: '1.0.0',
    date: 'March 2026',
    tagline: 'Foundation — Brain Engine, Chat AI & Architecture Analysis',
    groups: [
      {
        icon: Database,
        title: 'Brain Engine',
        items: [
          'Vector search with ChromaDB embeddings and hybrid keyword fallback',
          'Language-aware code chunking with Tree-sitter AST parsing',
          'Per-project isolated brain with dedicated vector stores',
          'Incremental sync — only re-process changed files',
        ],
      },
      {
        icon: Cpu,
        title: 'Architecture Intelligence',
        items: [
          'Module dependency graph with hub file detection',
          'Blast radius analysis — see the impact of any code change',
          'Feature effort estimation based on codebase complexity',
          'Slash commands: /impact, /estimate, /architecture, /sync, /stats',
        ],
      },
      {
        icon: Gauge,
        title: 'Dual Chat Modes',
        items: [
          'PM Mode — business-oriented answers for product managers',
          'Engineering Mode — deep technical answers with code references',
          'Streaming responses with citation engine and confidence scoring',
          'Conversation history with SQLite persistence',
        ],
      },
      {
        icon: GitBranch,
        title: 'GitHub Integration',
        items: [
          'Import public and private repositories with token authentication',
          'Local repository import with file system watcher',
          'Agentic RAG with multi-step query decomposition',
          'Nano-brain auto-initialization on repo import',
        ],
      },
      {
        icon: Shield,
        title: 'Security & Infrastructure',
        items: [
          'Prompt injection detection with 15+ regex patterns',
          'Audit trail for every user action and security event',
          'Memory isolation enforced at the architecture level',
          'Auto-updater, brain export/import (.cbx), onboarding wizard',
        ],
      },
      {
        icon: Wrench,
        title: 'Agent Mode (ReAct)',
        items: [
          'ReAct agent — reasoning + acting loop for multi-step tasks',
          'Plan & Execute — two-phase reasoning with sequential step execution',
          'Reflexion — self-evaluating with iterative improvement (score 8/10 early stop)',
          'Sandboxed code execution for JavaScript, TypeScript, Python, Bash',
        ],
      },
    ],
  },
]

function FeatureCard({ group, index }: { group: FeatureGroup; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = group.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-bg-card hover:bg-bg-card-hover transition-colors text-left group"
      >
        <div className="w-8 h-8 rounded-lg bg-accent-glow flex items-center justify-center shrink-0 group-hover:bg-accent-glow-strong transition-colors">
          <Icon size={15} className="text-accent" />
        </div>
        <span className="flex-1 text-[14px] font-medium text-text-primary">
          {group.title}
        </span>
        <span className="text-[11px] text-text-tertiary mr-1">{group.items.length}</span>
        {expanded
          ? <ChevronDown size={14} className="text-text-tertiary shrink-0" />
          : <ChevronRight size={14} className="text-text-tertiary shrink-0" />
        }
      </button>

      {expanded && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.25 }}
          className="mt-1 ml-4 pl-4 border-l border-border/60 space-y-2 py-2"
        >
          {group.items.map((item, i) => (
            <li key={i} className="text-[13px] text-text-secondary leading-relaxed">
              <span className="text-accent mr-1.5">-</span>
              {item}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.div>
  )
}

function ReleaseNode({ release, index }: { release: Release; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-10 sm:pl-14 pb-16 last:pb-0"
    >
      <div className="absolute left-[13px] sm:left-[21px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

      <div className="absolute left-0 sm:left-2 top-1 w-[28px] h-[28px] rounded-full border-2 border-accent bg-bg-primary flex items-center justify-center z-10">
        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-2">
        <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
          v{release.version}
        </h3>
        {release.latest && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-glow border border-border-accent text-accent text-[11px] font-semibold uppercase tracking-wider">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            Latest
          </span>
        )}
        <span className="text-[13px] text-text-tertiary">{release.date}</span>
      </div>

      <p className="text-[15px] text-text-secondary mb-5 leading-relaxed">
        {release.tagline}
      </p>

      {release.downloadUrl && (
        <a
          href={release.downloadUrl}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-lg bg-accent text-white text-[13px] font-medium hover:bg-accent-dark transition-all active:scale-[0.97] shadow-lg shadow-accent/20"
        >
          <Download size={15} />
          Download .dmg
        </a>
      )}

      <div className="space-y-2">
        {release.groups.map((group, i) => (
          <FeatureCard key={group.title} group={group} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

export function Changelog() {
  return (
    <SectionWrapper id="changelog">
      <SectionHeader
        label="Changelog"
        title="What's New in Cortex"
        description="Every major release, every breakthrough feature. See how Cortex evolved from a brain engine to a full multi-agent AI system."
      />

      <div className="max-w-3xl mx-auto">
        {RELEASES.map((release, i) => (
          <ReleaseNode key={release.version} release={release} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
