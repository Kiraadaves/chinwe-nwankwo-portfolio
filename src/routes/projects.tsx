import Footer from '@/components/Footer'
import Projects from '@/components/projects/Projects'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: AllProjects,
})

function AllProjects() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        <Projects />
      </main>

      <Footer />
    </div>
  )
}
