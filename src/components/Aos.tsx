'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTheme } from 'next-themes' // Or your specific theme hook

export default function AOSProvider() {
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    // Initializing AOS
    AOS.init({
      duration: 500,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
    })
  }, [])

  // Re-run refresh whenever the theme changes
  useEffect(() => {
    AOS.refresh()
  }, [theme, resolvedTheme])

  return null
}
