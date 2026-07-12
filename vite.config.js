import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({

  plugins: [
    react(),
    tailwindcss(),
  ],


  server: {

    host: "0.0.0.0",

    port: 5713,

  },


  build: {

    manifest: true,

    sourcemap: false,

    rollupOptions: {

      output: {

        // cria nomes diferentes quando o código muda
        entryFileNames: "assets/[name]-[hash].js",

        chunkFileNames: "assets/[name]-[hash].js",

        assetFileNames: "assets/[name]-[hash][extname]"

      }

    }

  }

})