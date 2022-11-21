import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import { createVitePlugins } from './build/plugin'
import type { UserConfig, ConfigEnv } from 'vite';
// commenJS导入path
// const path = require("path") 只适合vite3.0以下版本
import path from 'path'

export default defineConfig(({ command, mode }:ConfigEnv):UserConfig => {
  const isBuild = Boolean!!(command === 'build')
  console.log("command:"+ command)
  console.log("mode:"+ mode)
  return {
    // base: './',

    plugins: createVitePlugins(isBuild),
    server: {
      host: '0.0.0.0',
      port: 3200,
      open: true,
      // proxy: {
      //   '/basic-api': {
      //     target: 'http://172.18.1.92:8085/',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/basic-api/, '')
      //   },
      // }
    },
    resolve: {
      // 配置路径别名
      alias: {
        '@': path.resolve(__dirname, './src')
      },
      dedupe: ['vue']
    },
  }
})
