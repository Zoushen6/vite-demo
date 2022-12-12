import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

import { configSvgIconsPlugin } from './svgIcon';

import { configImageminPlugin } from './imagemin';

export function createVitePlugins(isBuild: boolean, env: any) {
  const { VITE_USE_IMAGEMIN } = env;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ];

  vitePlugins.push(configSvgIconsPlugin());

  VITE_USE_IMAGEMIN === 'true' && vitePlugins.push(configImageminPlugin());

  return vitePlugins;
}
