import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative py-28 sm:py-36 ${className}`}>
      <div className="max-w-6xl mx-auto px-8 sm:px-10">
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-accent-glow border border-border-accent text-accent text-[12px] font-semibold uppercase tracking-wider mb-5">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
        {title}
      </h2>
      <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
