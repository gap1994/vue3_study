import { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'
import autoprefixer from "autoprefixer"
import pxtoviewport from 'postcss-px-to-viewport'
const path = (dir: string): string => resolve(__dirname, dir)

export default (): UserConfig => {
  return {
    resolve: {
      alias: {
        '@': path('./src')
      }
    },
    css: {
      postcss: {
        // 配置px自动转vw
        plugins: [
          autoprefixer(),
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