import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'

import appCss from '../styles.css?url'
import { ThemeProvider } from '@/components/ThemeProvider'
import AOSProvider from '@/components/Aos'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      <h1 className="text-6xl font-bold text-black mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oops! The page you are looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
      >
        Go back home
      </Link>
    </div>
  )
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { title: 'Chinwe Nwankwo | Frontend Developer' },
      {
        name: 'description',
        content: 'Building aesthetic and functional web experiences.',
      },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Chinwe Nwankwo | Frontend Developer' },
      {
        property: 'og:description',
        content: 'Building aesthetic and functional web experiences.',
      },
      {
        property: 'og:image',
        content: 'https://chinwe-nwankwo-portfolio.vercel.app/og-image.jpg',
      },
      {
        property: 'og:url',
        content: 'https://chinwe-nwankwo-portfolio.vercel.app',
      },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Chinwe Nwankwo | Frontend Developer' },
      {
        name: 'twitter:description',
        content: 'Building aesthetic and functional web experiences.',
      },
      {
        name: 'twitter:image',
        content: 'https://chinwe-nwankwo-portfolio.vercel.app/og-image.jpg',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/ms-icon.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  }),
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <AOSProvider />
          <Header />
          {children}
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  )
}
