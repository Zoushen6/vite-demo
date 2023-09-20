import { visualizer } from "rollup-plugin-visualizer";

export function configVisualizerPlugin() {
  return visualizer({ open: true });
}
