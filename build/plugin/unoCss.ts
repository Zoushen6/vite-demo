import unoCss from "unocss/vite";

export function configUnoCssPlugin() {
  return unoCss({
    rules: [
      ["flex", { display: "flex" }],
      ["red", { color: "red" }],
    ],
  });
}
