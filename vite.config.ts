import { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'
import autoprefixer from "autoprefixer"
import pxtoviewport from 'postcss-px-to-viewport'
import { viteMockServe } from 'vite-plugin-mock';

const path = (dir: string): string => resolve(__dirname, dir)
const isBuild = false

export default ({ command }: ConfigEnv): UserConfig => {
  return {
    resolve: {
      alias: [
        {
          find: /^~/,
          replacement: "",
        },
        {
          find: '@',
          replacement: path('./src')
        }
      ]
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
    server: {
      host: '127.0.0.1',
      port: 80
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
      }),
      viteMockServe({
        ignore: /^\_/,
        mockPath: 'mock',
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        injectCode: `
          import { setupProdMockServer } from '../mock/_createProductionServer';
    
          setupProdMockServer();
          `,
      })
    ]
  }
}