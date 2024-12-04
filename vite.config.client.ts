import { defineConfig } from "vite"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const preactAlias = [
  {
    find: "react",
    replacement: "preact/compat",
  },
  {
    find: "react-dom",
    replacement: "preact/compat",
  },
]

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        client: path.resolve(__dirname, "src/client.tsx"),
      },
      output: {
        manualChunks: {
          vendor: [
            "preact",
            "react",
            "react-dom",
            "react-router-dom",
            "react-helmet-async",
            "clsx",
          ],
        },
      },
    },
  },
  plugins: [],
  resolve: {
    alias: process.env.NODE_ENV === "production" ? preactAlias : [],
  },
})
