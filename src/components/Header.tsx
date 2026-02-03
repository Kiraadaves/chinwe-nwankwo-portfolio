import { Link, useNavigate } from '@tanstack/react-router'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  FileBraces,
  Globe,
  Handshake,
  Home,
  Mail,
  Menu,
  Moon,
  Network,
  SquareFunction,
  StickyNote,
  Sun,
  X,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const navigate = useNavigate()

  const handleSectionClick = async (sectionId: string) => {
    await navigate({ to: '/' })

    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <>
      <header
        className={`z-20 border-b sticky top-0 flex justify-between items-center px-2 py-6 ${theme === 'dark' ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200 bg-white/80'} backdrop-blur-md`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-2">
          <button className="cursor-pointer ml-4 text-xl font-semibold">
            <img
              src="/chinwe.jpg"
              alt="My avatar"
              className="h-12 w-12 rounded-full object-cover"
            />
          </button>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`cursor-pointer p-2 rounded-lg border transition ${
              theme === 'dark'
                ? 'border-slate-700 hover:border-cyan-400 hover:bg-cyan-400/10'
                : 'border-slate-300 hover:border-cyan-600 hover:bg-cyan-100'
            }`}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 ${theme === 'dark' ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200 bg-white/80'} backdrop-blur-md text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <button
            className={cn(
              'flex items-center gap-3 p-3 rounded-lg bg-purple-500 text-white transition-colors mb-2 w-full',
            )}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </button>{' '}
          <button
            className={cn(
              'flex items-center gap-3 p-3 rounded-lg bg-purple-500 text-white transition-colors mb-2 w-full',
            )}
          >
            <FileBraces size={20} />
            <span className="font-medium">Projects</span>
          </button>{' '}
          <button
            className={cn(
              'flex items-center gap-3 p-3 rounded-lg bg-purple-500 text-white transition-colors mb-2 w-full',
            )}
          >
            <Handshake size={20} />
            <span className="font-medium">Testimonials</span>
          </button>{' '}
          <button
            className={cn(
              'flex items-center gap-3 p-3 rounded-lg bg-purple-500 text-white transition-colors mb-2 w-full',
            )}
          >
            <Mail size={20} />
            <span className="font-medium">Contact</span>
          </button>
          {/* Demo Links Start */}
          {/* Demo Links End */}
        </nav>

        <div className="p-4 border-t border-gray-700 bg-gray-800 flex flex-col gap-2">
          <p>RemyButton</p>
        </div>
      </aside>
    </>
  )
}
