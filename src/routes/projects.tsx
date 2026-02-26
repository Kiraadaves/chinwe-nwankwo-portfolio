import AOSProvider from '@/components/Aos'
import Footer from '@/components/Footer'
import Projects from '@/components/projects/Projects'
import { createFileRoute } from '@tanstack/react-router'

function AllProjects() {
  return (
    <div className="flex flex-col min-h-screen">
      <AOSProvider />
      <main className="grow">
        <Projects />
      </main>

      <Footer />
    </div>
  )
}

export const Route = createFileRoute('/projects')({
  component: AllProjects,
  head: () => ({
    meta: [
      {
        title: 'Chinwe Nwankwo | Projects',
      },
      {
        property: 'og:title',
        content: 'Chinwe Nwankwo | My Projects Portfolio',
      },
      {
        property: 'og:description',
        content:
          'Explore my latest projects and technical expertise in modern web development.',
      },
      {
        property: 'og:image',
        content: 'https://chinwe-nwankwo-portfolio.vercel.app/images/wil.jpg',
      },
      {
        name: 'twitter:title',
        content: 'Chinwe Nwankwo | My Projects Portfolio',
      },
      {
        name: 'twitter:description',
        content:
          'Explore my latest projects and technical expertise in modern web development.',
      },
      {
        name: 'twitter:image',
        content: 'https://chinwe-nwankwo-portfolio.vercel.app/images/wil.jpg',
      },
    ],
  }),
})
