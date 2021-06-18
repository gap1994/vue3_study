import { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from 'path'
import pxtoviewport from 'postcss-px-to-viewport'

const resolve = (dir: string): string => path.join(__dirname, dir)

export default (): UserConfigExport => {
  return {
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    },
    css: {
      postcss: {
        // 配置px自动转vw
        plugins: [
          pxtoviewport({
            viewportWidth: 375
          })
        ]
      }
    },
    plugins: [
      vue(),
      styleImport({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name) => `vant/es/${name}/style/index`
          }
        ]
      })
    ]
  }
}