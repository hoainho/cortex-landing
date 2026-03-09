import { motion } from 'framer-motion'
import { Briefcase, Code2, BarChart3, FileCode2 } from 'lucide-react'
import { SectionWrapper, SectionHeader } from './SectionWrapper'

export function TwoModes() {
  return (
    <SectionWrapper id="modes" className="bg-bg-secondary/50">
      <SectionHeader
        label="Dual Modes"
        title="One Brain, Two Languages"
        description="Cortex adapts its responses based on who's asking. Product teams get business context. Engineers get technical depth."
      />

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Product Mode */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="card-glow rounded-2xl border border-border bg-bg-card overflow-hidden"
        >
          <div className="p-9 sm:p-10">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Briefcase size={20} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">Product Mode</h3>
                <p className="text-[13px] text-text-tertiary">For PMs & Stakeholders</p>
              </div>
            </div>

            <p className="text-text-secondary text-[15px] leading-relaxed mb-8">
              Get impact analysis, effort estimates, and risk assessments in clear business language.
              No technical jargon — just actionable insights.
            </p>

            {/* Example */}
            <div className="rounded-xl bg-bg-primary/60 border border-border p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <BarChart3 size={14} className="text-blue-400" />
                <span className="text-[12px] font-mono text-text-tertiary">Example conversation</span>
              </div>

              <div className="mb-5">
                <span className="text-[12px] text-text-tertiary uppercase tracking-wider font-semibold">Question</span>
                <p className="text-[14px] text-text-primary mt-2">
                  "How long would it take to add OAuth login with Google?"
                </p>
              </div>

              <div className="space-y-3.5 text-[13px]">
                <div className="flex gap-4">
                  <span className="text-text-tertiary shrink-0 w-22 text-right font-medium">Estimate:</span>
                  <span className="text-text-secondary">3–5 days for a Senior Engineer</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-tertiary shrink-0 w-22 text-right font-medium">Impact:</span>
                  <span className="text-text-secondary">Low risk — isolated auth module</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-text-tertiary shrink-0 w-22 text-right font-medium">Priority:</span>
                  <span className="text-text-secondary">Recommended before payment flow</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Engineering Mode */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="card-glow rounded-2xl border border-border bg-bg-card overflow-hidden"
        >
          <div className="p-9 sm:p-10">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-12 h-12 rounded-xl bg-accent-glow flex items-center justify-center">
                <Code2 size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">Engineering Mode</h3>
                <p className="text-[13px] text-text-tertiary">For Developers & Tech Leads</p>
              </div>
            </div>

            <p className="text-text-secondary text-[15px] leading-relaxed mb-8">
              Deep technical explanations with file paths, function references, architecture diagrams,
              and data flow analysis. Like having a senior tech lead who memorized the entire codebase.
            </p>

            {/* Example */}
            <div className="rounded-xl bg-bg-primary/60 border border-border p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <FileCode2 size={14} className="text-accent" />
                <span className="text-[12px] font-mono text-text-tertiary">Example conversation</span>
              </div>

              <div className="mb-5">
                <span className="text-[12px] text-text-tertiary uppercase tracking-wider font-semibold">Question</span>
                <p className="text-[14px] text-text-primary mt-2">
                  "How does the payment webhook handler work?"
                </p>
              </div>

              <div className="code-mock text-[12px] bg-bg-secondary rounded-lg p-4 border border-border">
                <div><span className="comment">// Entry point</span></div>
                <div>
                  <span className="keyword">POST</span>{' '}
                  <span className="string">/api/webhooks/stripe</span>
                </div>
                <div className="mt-2">
                  <span className="comment">→</span>{' '}
                  <span className="function">src/api/webhooks/stripe.ts</span>
                </div>
                <div>
                  <span className="comment">→</span>{' '}
                  <span className="function">verifySignature()</span>{' '}
                  <span className="comment">// HMAC-SHA256</span>
                </div>
                <div>
                  <span className="comment">→</span>{' '}
                  <span className="function">processEvent()</span>{' '}
                  <span className="comment">// switch by type</span>
                </div>
                <div>
                  <span className="comment">→</span>{' '}
                  <span className="function">updateSubscription()</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
