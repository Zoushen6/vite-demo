import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

import { configSvgIconsPlugin } from "./svgIcon";

import { configImageminPlugin } from "./imagemin";

import { configUnoCssPlugin } from "./unoCss";

import { configVisualizerPlugin } from "./visualizer";

export function createVitePlugins(isBuild: boolean, env: any) {
  const { VITE_USE_IMAGEMIN, VITE_USE_VISUALIZER } = env;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ];

  vitePlugins.push(configSvgIconsPlugin());

  vitePlugins.push(configUnoCssPlugin());

  VITE_USE_IMAGEMIN === "true" && vitePlugins.push(configImageminPlugin());

  VITE_USE_VISUALIZER === "true" && vitePlugins.push(configVisualizerPlugin());

  return vitePlugins;
}
