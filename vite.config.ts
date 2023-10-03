import { defineConfig, UserConfig } from 'vite'
import preact from '@preact/preset-vite'
import {plugin as markdown, Mode} from 'vite-plugin-markdown'
import basicSsl from '@vitejs/plugin-basic-ssl'

const baseConfig: UserConfig = {
  plugins: [
    preact(),
    markdown({
      mode: [Mode.HTML]
    })
  ],
}

const serveConfig: UserConfig = {
  plugins: [
    ...baseConfig.plugins,
    basicSsl()
  ]
}

function chooseConfig({command}) {
  if (command ==='serve')
      return serveConfig;
  return baseConfig;
}

export default defineConfig(chooseConfig)
