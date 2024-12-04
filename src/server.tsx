import type { HelmetProps } from "react-helmet-async"
import fs from "fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

import type { Route, Breadcrumb } from "./types"
import { metaData } from "./data/meta"
import { dataNav } from "./data/nav"
import App from "./app"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export function getRoutes() {
  const { url, siteName, subName, description } = metaData
  const { root, source } = dataNav
  const rootBreadcrumb: Breadcrumb = { name: root.name, item: url + "/" }

  const games = Object.entries(dataNav).filter(
    (item) => !["root", "source"].includes(item[0])
  )

  let routes: Route[] = [
    {
      robots: true,
      path: "/",
      url: url + "/",
      fileName: "index.html",
      type: "WebSite",
      name: `${siteName} - ${subName}`,
      description: description.default,
      breadcrumbs: [rootBreadcrumb],
    },
    {
      robots: true,
      path: "/source/",
      url: url + "/source/",
      type: "WebPage",
      fileName: "source/index.html",
      name: source.fullName,
      description: description.source,
      breadcrumbs: [
        rootBreadcrumb,
        { name: source.name, item: url + "/source/" },
      ],
    },
    {
      robots: false,
      path: "/404",
      url: url + "/404",
      type: "WebPage",
      fileName: "404.html",
      name: `404 - ${siteName}`,
      description: description.default,
      breadcrumbs: [],
    },
  ]

  for (const game of games) {
    if (!Object.hasOwn(game[1], "characters")) {
      continue
    }
    const gameName = game[1]?.fullName || game[1].name
    const gamePath = `/${game[0]}/`
    const gameBreadcrumb: Breadcrumb = { name: gameName, item: url + gamePath }
    const characters = Object.entries(game[1].characters)

    if (characters.length === 0) {
      continue
    }
    for (const character of characters) {
      if (!Object.hasOwn(character[1], "types")) {
        const isRoot = character[0] === "root"
        const itemPath = isRoot ? gamePath : `${gamePath}${character[0]}/`
        const itemUrl = url + itemPath
        const itemName = character[1].name
        const itemTitle = `${itemName} コマンド表`

        routes.push({
          robots: true,
          path: itemPath,
          url: itemUrl,
          type: "WebPage",
          fileName: `${itemPath}/index.html`,
          name: `${itemTitle} / ${gameName}`,
          description: `${gameName} - ${itemName}の${description.command}`,
          breadcrumbs: [
            rootBreadcrumb,
            gameBreadcrumb,
            !isRoot && { name: itemTitle, item: itemUrl },
          ],
        })
        continue
      }
      const types = Object.entries(character[1].types)

      if (types.length === 0) {
        continue
      }

      for (const type of types) {
        const itemPath = `${gamePath}${character[0]}/${type[0]}/`
        const itemUrl = url + itemPath
        const itemName = `${character[1].name}（${type[1].name}）`
        const itemTitle = `${itemName} コマンド表`

        routes.push({
          robots: true,
          path: itemPath,
          url: itemUrl,
          type: "WebPage",
          fileName: `${itemPath}/index.html`,
          name: `${itemTitle} / ${gameName}`,
          description: `${gameName} - ${itemName}の${description.command}`,
          breadcrumbs: [
            rootBreadcrumb,
            gameBreadcrumb,
            { name: itemTitle, item: itemUrl },
          ],
        })
        continue
      }
    }
  }
  return routes
}

function getLdJson(route: Route) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": route.type,
        name: route.name,
        url: route.url,
        description: route.description,
      },
      route.breadcrumbs && route.breadcrumbs.length > 0
        ? {
            "@type": "BreadcrumbList",
            itemListElement: route.breadcrumbs
              .filter(Boolean)
              .map((breadcrumb, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: breadcrumb.name,
                item: breadcrumb.item,
              })),
          }
        : null,
    ].filter(Boolean),
  })
}

export async function render(url: string) {
  let html = await fs.readFile(
    path.resolve(__dirname, "../../index.html"),
    "utf-8"
  )
  let helmetString = ""
  let cssLinkString = ""
  let ldScriptString = ""

  const manifest = JSON.parse(
    await fs.readFile(
      path.resolve(__dirname, "../../dist/.vite/manifest.json"),
      "utf-8"
    )
  )
  const entry = manifest["src/client.tsx"]
  const jsFile = entry.file
  const cssFiles = entry.css || []

  const routes = getRoutes()
  const currentRoute = routes.find((route) => route.path === url)

  const helmetContext = {}

  const appString = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )
  const { helmet }: { helmet: HelmetProps } = helmetContext as any

  helmetString = helmetString + helmet.title.toString()
  helmetString = helmetString + helmet.meta.toString()
  helmetString = helmetString + helmet.link.toString()

  for (const cssFile of cssFiles) {
    cssLinkString += `<link rel="stylesheet" href="/${cssFile}">`
  }
  if (currentRoute) {
    const ldJson = getLdJson(currentRoute)
    ldScriptString = `<script type="application/ld+json">${ldJson}</script>`
  }

  html = html.replace(/<!-- HELMET -->/, helmetString)
  html = html.replace(/<!-- CSS -->/, cssLinkString)
  html = html.replace(/<!-- LD -->/, ldScriptString)
  html = html.replace(/<!-- APP -->/, appString)
  html = html.replace(
    /<script type="module" src="\/src\/main\.tsx"><\/script>/,
    `<script type="module" src="/${jsFile}"></script>`
  )

  return html
}
