import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// https://vitejs.dev/config/
import path from "path";

export function configSvgIconsPlugin() {
  const plugin = createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
    // 指定symbolId格式
    symbolId: "icon-[dir]-[name]",

    /**
     * 自定义插入位置
     * @default: body-last
     */
    // inject?: 'body-last' | 'body-first'

    /**
     * custom dom id
     * @default: __svg__icons__dom__
     */
    // customDomId: '__svg__icons__dom__',
  });
  return plugin;
}
