import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Projects from './Projects'
import Skills from './Skills'
import Testimonials from './Testimonials'
import Cta from './Cta'
import Footer from './Footer'
import Hero from './Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { theme } = useTheme()

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out',
      once: true,
      offset: 0,
    })
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className={`relative transition-colors duration-200 ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-950'}`}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl transition-all duration-100 ${
            theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-400/10'
          }`}
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />
        <div
          className={`absolute inset-0 ${theme === 'dark' ? 'bg-linear-to-b from-slate-900/50 to-slate-950' : 'bg-linear-to-b from-slate-100/30 to-white'}`}
        />
      </div>

      <>
        <Hero />

        <Projects />

        <Skills />

        <Testimonials />

        <Cta />

        <Footer />
      </>
    </div>
  )
}
