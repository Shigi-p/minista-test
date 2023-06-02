import path from "path"
import { defineConfig } from "minista"

export default defineConfig({
  resolve: {
    alias: [{ find: "@/", replacement: path.resolve("src") + "/" }],
  },
  assets: {
    images: {
      // なぜかここの部分を実装のパスと一緒にしないとエラーが出る
      // これにすると書き出しがdist/src/assets/imagesになってしまうので、画像の格納場所をassets/imagesに合わせるように調整
      // outDir: "src/assets/images",
      optimize: {
        breakpoints: [320, 1024, 1920, 2560],
        format: "webp",
      },
    },
  },
})
