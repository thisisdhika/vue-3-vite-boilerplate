// import path from 'path'
import { eslint } from 'rollup-plugin-eslint'

export default {
  enableEsbuild: true,
  proxy: {
    '/api': {
      target: 'https://api.covid19api.com/',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
  plugins: [
    eslint({
      useEslintrc: true,
    }),
  ],
}
