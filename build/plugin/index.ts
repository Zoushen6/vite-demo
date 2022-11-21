import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

import { configSvgIconsPlugin } from './svgIcon'

export function createVitePlugins( isBuild: boolean) {

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue(),
    Components({
      resolvers: [VantResolver()]
    }),
  ];

  vitePlugins.push(configSvgIconsPlugin())

  return vitePlugins
}
