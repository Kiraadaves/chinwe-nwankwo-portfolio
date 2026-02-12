import LandingPage from '@/components/LandingPage'
import { createFileRoute } from '@tanstack/react-router'

function HomePage() {
  return (
    <main>
      <LandingPage />
    </main>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
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
