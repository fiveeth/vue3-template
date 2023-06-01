import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // 设置`@`指向`src`目录
    }
  },
  base: './', // 设置打包路径
  server: {
    host: '0.0.0.0',
    port: 2023, // 设置服务启动端口
    open: true // 设置服务启动时打开浏览器
    // 设置代理
    // proxy: {
    //   '/api': {
    //     target: 'https://xxx.xxx.xxx:8080',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path)=> path.replace('/api/', '')
    //   }
    // }
  }
})
