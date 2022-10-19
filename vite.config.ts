import * as path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginFonts } from 'vite-plugin-fonts'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      custom: {
        families: [{
          name: 'Hellix',
          local: 'Hellix',
          src: './src/assets/fonts/*.ttf'
        }]
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: "@", replacement: path.resolve(__dirname, 'src')
      },
      {
        find: "components", replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: "styles", replacement: path.resolve(__dirname, 'src/styles')
      },
      {
        find: "assets", replacement: path.resolve(__dirname, 'src/assets')
      },
    ]
  }
})
