import { useTheme } from 'next-themes'
import Projects from './Projects'
import Skills from './Skills'
import Testimonials from './Testimonials'
import Cta from './Cta'
import Footer from './Footer'
import Hero from './Hero'

export default function LandingPage() {
  const { theme } = useTheme()

  

  return (
    <div
      className={`relative transition-colors duration-200 ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-950'}`}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
