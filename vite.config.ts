import { defineConfig } from "vite"
import path from "node:path"
import { fileURLToPath } from "node:url"
import react from "@vitejs/plugin-react"
import mdx from "@mdx-js/rollup"
import remarkGfm from "remark-gfm"
import { VitePWA } from "vite-plugin-pwa"

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
  plugins: [
    react(),
    { enforce: "pre", ...mdx(mdxOptions) },
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      includeAssets: [
        "favicon.svg",
        "apple-touch-icon.png",
        "assets/sprite.svg",
      ],
      manifest: {
        name: "サムライスピリッツシリーズ｜コマンド表",
        short_name: "サムスピ",
        description: "スマホでサムスピのコマンドを素早く確認するためのサイト",
        theme_color: "#eee7d6",
        background_color: "#eee7d6",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: process.env.NODE_ENV === "production" ? preactAlias : [],
  },
})
