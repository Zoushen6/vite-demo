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

  //由于开启图片压缩后如果遇到比较大的图片会十分耗时，可以在此处选择性使用  pnpm run build:imgmin
  VITE_USE_IMAGEMIN === 'true' && vitePlugins.push(configImageminPlugin());

  return vitePlugins;
}
