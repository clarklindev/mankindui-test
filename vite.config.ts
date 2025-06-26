import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup';
import rehypeShiki from '@shikijs/rehype'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), mdx({
    rehypePlugins: [
        [rehypeShiki, {
          themes: {
            light: 'github-dark',
            dark: 'github-dark'
          },
          inline: 'tailing-curly-colon',
        }]
      ]
  })],
})
