import AOSProvider from '@/components/Aos'
import LandingPage from '@/components/LandingPage'
import { createFileRoute } from '@tanstack/react-router'

function HomePage() {
  return (
    <main>
      <AOSProvider />
      <LandingPage />
    </main>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})
