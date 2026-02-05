import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'

const Ball = ({ className }: { className: string }) => {
  const ballRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ball = ballRef.current
    if (!ball) return

    const parent = ball.parentElement
    if (!parent) return

    let width = parent.clientWidth
    let height = parent.clientHeight

    let x = Math.random() * (width - 20)
    let y = Math.random() * (height - 20)
    let dx = (Math.random() - 0.5) * 1.5
    let dy = (Math.random() - 0.5) * 1.5

    const animate = () => {
      if (!ball || !parent) return

      width = parent.clientWidth
      height = parent.clientHeight

      x += dx
      y += dy

      if (x <= 0 || x >= width - ball.offsetWidth) dx *= -1
      if (y <= 0 || y >= height - ball.offsetHeight) dy *= -1

      x = Math.max(0, Math.min(x, width - ball.offsetWidth))
      y = Math.max(0, Math.min(y, height - ball.offsetHeight))

      ball.style.transform = `translate(${x}px, ${y}px)`
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div
      ref={ballRef}
      className={`absolute top-0 left-0 pointer-events-none ${className}`}
    />
  )
}

export default function Hero() {
  const { theme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative z-10  px-5 lg:px-15 py-32">
      <div className="grid grid-cols-12 gap-8 items-center">
        <div className="col-span-7">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000">
            <div>
              <p
                className={`font-mono text-sm mb-4 animate-pulse ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
              >
                FRONTEND DEVELOPER
              </p>
              <h1 className=" text-7xl font-black leading-tight tracking-tighter">
                <span className="relative whitespace-nowrap ">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-[70%] left-0 h-[0.58em] w-full fill-purple-500"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
                  </svg>
                  <span className="relative">Building the</span>
                </span>{' '}
                <span
                  className={`block bg-linear-to-r ${theme === 'dark' ? 'from-cyan-400 via-blue-400 to-purple-500' : 'from-cyan-600 via-blue-500 to-purple-600'} bg-clip-text text-transparent`}
                >
                  impossible web
                </span>
              </h1>
            </div>
            <p
              className={`text-lg max-w-xl leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}
            >
              I craft high-performance web experiences that push boundaries.
              Specializing in interactive frontends, real-time systems, and
              elegant UX architectures.
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => scrollToSection('work')}
                className={`px-8 py-4 font-bold rounded-lg transition-all hover:scale-105 active:scale-95 ${
                  theme === 'dark'
                    ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                    : 'bg-cyan-600 text-white hover:bg-cyan-500'
                }`}
              >
                See My Work →
              </button>
              <button
                className={`px-8 py-4 border-2 font-bold rounded-lg transition-all ${
                  theme === 'dark'
                    ? 'border-slate-700 hover:border-cyan-400 hover:text-cyan-400'
                    : 'border-slate-300 hover:border-cyan-600 hover:text-cyan-600'
                }`}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <div className="relative">
            <div
              className={`relative aspect-square rounded-2xl border p-8 backdrop-blur-sm animate-in fade-in slide-in-from-right-12 duration-1000 delay-200 ${
                theme === 'dark'
                  ? 'bg-linear-to-br from-cyan-500/20 to-purple-500/20 border-slate-700'
                  : 'bg-linear-to-br from-cyan-300/20 to-purple-300/20 border-slate-300'
              }`}
            >
              <div
                className={`absolute inset-0 rounded-2xl opacity-50 ${theme === 'dark' ? 'bg-linear-to-t from-slate-950 to-transparent' : 'bg-linear-to-t from-white to-transparent'}`}
              />
              <Ball
                className={`z-10 w-2.5 h-2.5 rounded-full opacity-30 md:opacity-100 ${
                  theme === 'dark' ? 'bg-slate-500/30' : 'bg-[#40BBC3]'
                }`}
              />
              <Ball
                className={`z-10 w-8 h-8 rounded-full opacity-30 md:opacity-100 ${
                  theme === 'dark' ? 'bg-slate-500/30' : 'bg-[#A0DDE2]'
                }`}
              />
              <Ball
                className={`z-10 w-14 h-14 rounded-full opacity-30 md:opacity-100 ${
                  theme === 'dark' ? 'bg-slate-500/30' : 'bg-[#A0DDE2]'
                }`}
              />
              <Ball
                className={`z-10 w-14 h-14 rounded-full opacity-30 md:opacity-100 ${
                  theme === 'dark' ? 'bg-slate-500/30' : 'bg-[#A0DDE2]'
                }`}
              />
              <Ball
                className={`z-10 w-8 h-8 rounded-full opacity-30 md:opacity-100 ${
                  theme === 'dark' ? 'bg-slate-500/30' : 'bg-[#A0DDE2]'
                }`}
              />
              <Ball
                className={`z-10 w-14 h-14 rounded-full opacity-30 md:opacity-100 ${
                  theme === 'dark' ? 'bg-slate-500/30' : 'bg-[#A0DDE2]'
                }`}
              />
              <Ball
                className={`z-10 w-8 h-8 rounded-full opacity-30 md:opacity-100 ${
                  theme === 'dark' ? 'bg-slate-500/30' : 'bg-[#A0DDE2]'
                }`}
              />
              <Ball
                className={`z-10 w-14 h-14 rounded-full opacity-30 md:opacity-100 ${
                  theme === 'dark' ? 'bg-slate-500/30' : 'bg-[#A0DDE2]'
                }`}
              />
              <Ball
                className={`z-10 w-14 h-14 rounded-full opacity-30 md:opacity-100 ${
                  theme === 'dark' ? 'bg-slate-500/30' : 'bg-[#A0DDE2]'
                }`}
              />
              <div
                className={`relative z-10 space-y-4 text-sm font-mono ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
              >
                <div>{'<Portfolio />'}</div>
                <div
                  className={`ml-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                >
                  <div>{'skills: ["React", "Vue", "TypeScript"]'}</div>
                  <div>{'experience: 5+ years'}</div>
                  <div>{'impact: 10M+ users shipped'}</div>
                </div>
                <div>{'</Portfolio>'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
