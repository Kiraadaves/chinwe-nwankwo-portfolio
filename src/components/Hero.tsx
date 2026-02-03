import { useTheme } from 'next-themes'

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
              <h1 className="text-7xl font-black leading-tight tracking-tighter">
                Building the
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
              className={`aspect-square rounded-2xl border p-8 backdrop-blur-sm animate-in fade-in slide-in-from-right-12 duration-1000 delay-200 ${
                theme === 'dark'
                  ? 'bg-linear-to-br from-cyan-500/20 to-purple-500/20 border-slate-700'
                  : 'bg-linear-to-br from-cyan-300/20 to-purple-300/20 border-slate-300'
              }`}
            >
              <div
                className={`absolute inset-0 rounded-2xl opacity-50 ${theme === 'dark' ? 'bg-linear-to-t from-slate-950 to-transparent' : 'bg-linear-to-t from-white to-transparent'}`}
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
