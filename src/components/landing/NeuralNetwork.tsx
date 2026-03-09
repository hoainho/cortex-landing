import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  pulse: number
  pulseSpeed: number
}

export function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener('resize', resize)

    // Initialize nodes
    const nodeCount = 40
    const rect = canvas.getBoundingClientRect()
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      radius: Math.random() * 2 + 1.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }))

    const handleMouseMove = (e: MouseEvent) => {
      const bounds = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
        active: true,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const animate = () => {
      const bounds = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, bounds.width, bounds.height)

      const nodes = nodesRef.current
      const maxDist = 150

      // Update & draw connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        a.x += a.vx
        a.y += a.vy
        a.pulse += a.pulseSpeed

        // Bounce off walls
        if (a.x < 0 || a.x > bounds.width) a.vx *= -1
        if (a.y < 0 || a.y > bounds.height) a.vy *= -1

        // Mouse repulsion
        if (mouseRef.current.active) {
          const dx = a.x - mouseRef.current.x
          const dy = a.y - mouseRef.current.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            const force = (120 - dist) / 120 * 0.5
            a.vx += (dx / dist) * force
            a.vy += (dy / dist) * force
          }
        }

        // Speed dampening
        const speed = Math.sqrt(a.vx * a.vx + a.vy * a.vy)
        if (speed > 1) {
          a.vx *= 0.98
          a.vy *= 0.98
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.25
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(224, 138, 94, ${opacity})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const pulseOpacity = 0.4 + Math.sin(node.pulse) * 0.3
        const pulseRadius = node.radius + Math.sin(node.pulse) * 0.5

        // Glow
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseRadius * 3, 0, Math.PI * 2)
        const glow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, pulseRadius * 3
        )
        glow.addColorStop(0, `rgba(224, 138, 94, ${pulseOpacity * 0.3})`)
        glow.addColorStop(1, 'rgba(224, 138, 94, 0)')
        ctx.fillStyle = glow
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(224, 138, 94, ${pulseOpacity})`
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  )
}
