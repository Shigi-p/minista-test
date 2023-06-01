import path from "path"
import { defineConfig } from "minista"

export default defineConfig({
  base: "./",
  resolve: {
    alias: [{ find: "@/", replacement: path.resolve("src") + "/" }],
  },
})
