import { defineConfig } from '@farmfe/core'
import path from 'node:path'

export default defineConfig({
  compilation: {
    input: {
      index: './src/index.ts'
    },
    output: {
      path: 'dist',
      filename: 'index.[ext]',
      targetEnv: 'node',
      format: 'cjs'
    },
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    },
    external: ['prettier'],
    minify: false,
    sourcemap: false,
    presetEnv: false
  }
})
