import fs from "fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

import type { GetRoutes, Render } from "../src/types"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function ssg() {
  const { getRoutes, render }: { getRoutes: GetRoutes; render: Render } =
    await import(path.resolve(__dirname, "../node_modules/.ssg/server.js"))

  const routes = getRoutes()

  for (const route of routes) {
    const html = await render(route.path)
    const filePath = path.resolve(
      path.join(__dirname, "../dist", route.fileName)
    )
    await fs.mkdir(path.dirname(filePath), { recursive: true })
    await fs.writeFile(filePath, html, "utf8")
    console.log(`Generated ${filePath}`)
  }

  const sitemapEntries = routes
    .filter((route) => route.robots)
    .map((route) => {
      return `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    })
    .join("")
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">${sitemapEntries}
</urlset>
`
  await fs.writeFile(
    path.resolve(__dirname, "../dist/sitemap.xml"),
    sitemap,
    "utf8"
  )
  console.log("Generated sitemap.xml")
}

await ssg().catch((err) => {
  console.error(err)
  process.exit(1)
})
