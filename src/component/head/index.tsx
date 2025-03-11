import { Helmet } from "react-helmet-async"

import type { DataItem, NavItem } from "../../types"
import { metaData } from "../../data/meta"

export function ComponentHead({
  pathname,
  currentDataItem,
  games,
}: {
  pathname: string
  currentDataItem: DataItem
  games: NavItem[]
}) {
  const { url, siteName, subName, description, twitterCard, twitterCreator } =
    metaData
  const gameId = pathname.split("/").filter((str) => str)[0]
  const game = games.find((item) => item[0] === gameId)

  function getAbb() {
    if (!game[1]?.fullName) {
      return ""
    }
    let abb = game[1].name
    abb = abb.replace("零（無印）", "無印")
    abb = abb.replace("アスラ", "")
    return abb ? `（${abb}）` : ""
  }
  function getTitle(hasSiteName: boolean) {
    const withName = hasSiteName ? ` - ${siteName}` : ""

    if (pathname === "/") {
      return `${siteName} - ${subName}`
    }
    if (gameId === "source") {
      return `${game[1]?.fullName}${withName}`
    }
    if (currentDataItem && game) {
      const { name } = currentDataItem
      const gameName = game[1]?.fullName || game[1].name
      const gameAbb = getAbb()
      return `${name} コマンド表 / ${gameName}${gameAbb}${withName}`
    }
    return `404${withName}`
  }
  function getSiteName() {
    return siteName
  }
  function getDescription() {
    if (gameId === "source") {
      return description.source
    }
    if (currentDataItem && game) {
      const { name } = currentDataItem
      const gameName = game[1]?.fullName || game[1].name
      return `${gameName} - ${name}の${description.command}`
    }
    return description.default
  }
  function getUrl() {
    let newPath = url + pathname
    if (!newPath.endsWith("/")) {
      newPath = newPath + "/"
    }
    return newPath
  }
  function getOgImage() {
    return url + "/apple-touch-icon.png"
  }
  function getOgType() {
    return pathname === "/" ? "website" : "article"
  }
  return (
    <Helmet>
      <title>{getTitle(true)}</title>
      <meta name="description" content={getDescription()} />
      <meta property="og:title" content={getTitle(false)} />
      <meta property="og:site_name" content={getSiteName()} />
      <meta property="og:description" content={getDescription()} />
      <meta property="og:url" content={getUrl()} />
      <meta property="og:image" content={getOgImage()} />
      <meta property="og:type" content={getOgType()} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:creator" content={twitterCreator} />
      {pathname === "/404" && <meta name="robots" content="noindex,follow" />}
      <link rel="canonical" href={getUrl()} />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Helmet>
  )
}
