import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import {plugin as markdown, Mode} from 'vite-plugin-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    markdown({
      mode: [Mode.HTML]
    })
  ],
})
