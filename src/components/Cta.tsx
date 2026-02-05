import { Github, Mail } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Cta() {
  const { theme } = useTheme()

  return (
    <section
      id="contact"
      className={`relative z-10 max-w-7xl mx-auto px-6 py-32 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}
    >
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className={`text-5xl font-black tracking-tighter mb-6 ${theme === 'dark' ? '' : 'text-slate-950'}`}
          >
            Ready to
            <span
              className={`block text-purple-500`}
            >
              collaborate?
            </span>
          </h2>
          <p
            className={`text-lg mb-8 max-w-md leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
          >
            I'm always interested in interesting projects and creative
            challenges. Let's build something extraordinary together.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="mailto:hello@example.com"
            className={`flex items-center gap-4 p-6 border rounded-lg transition-all group ${
              theme === 'dark'
                ? 'border-slate-800 hover:border-cyan-400 hover:bg-cyan-400/5'
                : 'border-slate-200 hover:border-cyan-600 hover:bg-cyan-100'
            }`}
          >
            <Mail
              className={`w-6 h-6 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
            />
            <div>
              <div
                className={`font-bold transition-colors group-hover:${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
              >
                Email me
              </div>
              <div
                className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}
              >
                hello@example.com
              </div>
            </div>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 p-6 border rounded-lg transition-all group ${
              theme === 'dark'
                ? 'border-slate-800 hover:border-cyan-400 hover:bg-cyan-400/5'
                : 'border-slate-200 hover:border-cyan-600 hover:bg-cyan-100'
            }`}
          >
            <Github
              className={`w-6 h-6 ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
            />
            <div>
              <div
                className={`font-bold transition-colors group-hover:${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}`}
              >
                GitHub
              </div>
              <div
                className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}
              >
                github.com/yourprofile
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
