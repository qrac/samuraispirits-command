import { defineConfig } from "vite"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  build: {
    ssr: true,
    outDir: "node_modules/.ssg",
    rollupOptions: {
      input: {
        server: path.resolve(__dirname, "src/server.tsx"),
      },
    },
  },
  plugins: [],
  ssr: {
    noExternal: ["react-helmet-async"],
  },
})
