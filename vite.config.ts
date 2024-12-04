import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
//import mdx from "@mdx-js/rollup"
//import remarkGfm from "remark-gfm"

/*const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [],
}*/

export default defineConfig({
  plugins: [
    react(),
    //{ enforce: "pre", ...mdx(mdxOptions) }
  ],
})
