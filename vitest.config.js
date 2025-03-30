import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    alias: {
      '@/components/': new URL('./components/', import.meta.url).pathname,
      '@/hooks/': new URL('./hooks/', import.meta.url).pathname,
      '@/lib/': new URL('./lib/', import.meta.url).pathname,
    },
  },
})
