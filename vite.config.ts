import { defineConfig } from "vite"
import path from "node:path"
import { fileURLToPath } from "node:url"
import react from "@vitejs/plugin-react"
import mdx from "@mdx-js/rollup"
import remarkGfm from "remark-gfm"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [],
}

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
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        404: path.resolve(__dirname, "404.html"),
      },
    },
  },
  plugins: [react(), { enforce: "pre", ...mdx(mdxOptions) }],
  resolve: {
    alias: process.env.NODE_ENV === "production" ? preactAlias : [],
  },
})
