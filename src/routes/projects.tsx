import Footer from '@/components/Footer'
import Projects from '@/components/projects/Projects'
import { createFileRoute } from '@tanstack/react-router'

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

export const Route = createFileRoute('/projects')({
  component: AllProjects,
  head: () => ({
    meta: [
      {
        title: 'Chinwe Nwankwo | Frontend Developer & UI/UX Enthusiast',
      },
      {
        name: 'description',
        content:
          'Frontend Developer specializing in building high-performance, accessible, and visually stunning web experiences using React and TypeScript.',
      },
      {
        name: 'keywords',
        content:
          'Chinwe Nwankwo, Frontend Developer, React Developer, Web Portfolio, UI/UX Design, TypeScript, JavaScript Engineer',
      },
      {
        property: 'og:title',
        content: 'Chinwe Nwankwo | Frontend Developer Portfolio',
      },
      {
        property: 'og:description',
        content:
          'Explore my latest projects and technical expertise in modern web development.',
      },
      {
        property: 'og:image',
        content: '/images/cc.png',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  }),
})
