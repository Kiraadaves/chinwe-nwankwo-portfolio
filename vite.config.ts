import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath, URL } from 'url'

import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'
import contentCollections from '@content-collections/vite'

const clientOnlyPackages = [
  '@radix-ui/react-accordion',
  '@radix-ui/react-alert-dialog',
  '@radix-ui/react-avatar',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-dialog',
  '@radix-ui/react-collapsible',
  '@radix-ui/react-context-menu',
  '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-form',
  '@radix-ui/react-label',
  '@radix-ui/react-hover-card',
  '@radix-ui/react-menubar',
  '@radix-ui/react-one-time-password-field',
  '@radix-ui/react-navigation-menu',
  '@radix-ui/react-popover',
  '@radix-ui/react-password-toggle-field',
  '@radix-ui/react-portal',
  '@radix-ui/react-progress',
  '@radix-ui/react-radio-group',
  '@radix-ui/react-scroll-area',
  '@radix-ui/react-select',
  '@radix-ui/react-slider',
  '@radix-ui/react-switch',
  '@radix-ui/react-tabs',
  '@radix-ui/react-toast',
  '@radix-ui/react-toggle',
  '@radix-ui/react-toolbar',
  '@radix-ui/react-toggle-group',
  '@radix-ui/react-tooltip',
  '@radix-ui/react-collection',
  '@radix-ui/react-presence',
  '@radix-ui/react-dismissable-layer',
  '@radix-ui/react-focus-guards',
  '@radix-ui/react-menu',
  '@radix-ui/react-focus-scope',
  '@radix-ui/react-roving-focus',
]

const config = defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssr: {
    noExternal: clientOnlyPackages,
  },
  plugins: [
    devtools(),
    nitro(),
    contentCollections(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: false,
        crawlLinks: true,
      },
    }),
    viteReact(),
  ],
})

export default config
