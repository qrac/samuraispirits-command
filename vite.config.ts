import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import mdx from "@mdx-js/rollup"
import remarkGfm from "remark-gfm"

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
  plugins: [react(), svgr(), { enforce: "pre", ...mdx(mdxOptions) }],
  resolve: {
    alias: process.env.NODE_ENV === "production" ? preactAlias : [],
  },
})