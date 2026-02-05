import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer
      className={`relative z-10 border-t py-12 mt-32 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p
          className={`font-mono text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-500'}`}
        >
          Chinwe Nwankwo & coffee. © 2026
        </p>
      </div>
    </footer>
  )
}
