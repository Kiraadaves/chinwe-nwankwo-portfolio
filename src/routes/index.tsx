import LandingPage from '@/components/LandingPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <LandingPage />
    </main>
  )
}
