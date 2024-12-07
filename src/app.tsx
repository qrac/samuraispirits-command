import { useRef, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import type { Accordion, AccordionId, NavItem } from "./types"
import "./app.css"
import { dataNav } from "./data/nav"
import { dataList } from "./data/list"
import { ComponentHead } from "./component/head"
import { ComponentHeader } from "./component/header"
import { ComponentNav } from "./component/nav"
import { ComponentLineup } from "./component/lineup"
import {
  ComponentArticleRoot,
  ComponentArticleSource,
} from "./component/article"
import { ComponentContent } from "./component/content"
import { ComponentLinkbox } from "./component/linkbox"
import { ComponentInfo } from "./component/info"
import { ComponentFooter } from "./component/footer"
import {
  getCharacters,
  getTypes,
  getDataId,
  getCurrentDataItem,
  getRootDataItem,
  getNavigatePath,
  getRoutePath,
} from "./utils"

export default function App() {
  const location = useLocation()
  const gameNavRef = useRef<HTMLDivElement>(null)
  const characterNavRef = useRef<HTMLDivElement>(null)
  const [accordion, setAccordion] = useState<Accordion>({
    normal: false,
    combination: false,
    scs: false,
    unique: false,
    mode: false,
  })
  let pathArray = location.pathname.split("/")
  let gameId = pathArray[1] || "root"
  let characterId = pathArray[2] || "root"
  let typeId = pathArray[3] || "shura"
  let dataId = getDataId(dataNav, gameId, characterId, typeId)
  let games = Object.entries(dataNav) as NavItem[]
  let characters = getCharacters(dataNav, gameId)
  let types = getTypes(dataNav, gameId, characterId)
  let lineupItems = games.filter((item) => item[0] !== "root")
  let currentDataItem = getCurrentDataItem(dataList, dataId)
  let rootDataItem = getRootDataItem(dataList, dataId)

  function handleClickHome() {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0 })
    }
    gameNavRef?.current && (gameNavRef.current.scrollLeft = 0)
    characterNavRef?.current && (characterNavRef.current.scrollLeft = 0)
    //gameId = "root"
    //characterId = "root"
    //typeId = "shura"
  }
  function handleClickLineup(id: string) {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0 })
    }
    characterNavRef?.current && (characterNavRef.current.scrollLeft = 0)
    //gameId = id

    if (gameNavRef?.current) {
      const activeButton = gameNavRef.current.querySelector<HTMLButtonElement>(
        `button[data-id="${gameId}"]`
      )
      if (activeButton) {
        activeButton.scrollIntoView({
          block: "nearest",
          inline: "center",
        })
      }
    }
  }
  function handleClickGame(id: string) {
    let routePath = getNavigatePath(dataNav, id, characterId, typeId)
    if (routePath.split("/")[1] !== characterId) {
      characterNavRef?.current && (characterNavRef.current.scrollLeft = 0)
    }
    //gameId = id
  }
  function handleClickCharacter(id: string) {
    //characterId = id
  }
  function handleClickType(id: string) {
    //typeId = id
  }
  function handleClickAccordion(id: AccordionId) {
    const newAccordionState = { [id]: !accordion[id] }
    setAccordion({ ...accordion, ...newAccordionState })
  }
  return (
    <div className="app">
      <ComponentHead
        pathname={location.pathname}
        currentDataItem={currentDataItem}
        games={games}
      />
      <ComponentHeader gameId={gameId} onClickAction={handleClickHome} />
      <ComponentNav
        navGroups={[
          {
            mode: "game",
            navItems: games,
            activeId: gameId,
            onClickAction: handleClickGame,
            scrollRef: gameNavRef,
          },
          {
            mode: "character",
            navItems: characters,
            activeId: characterId,
            onClickAction: handleClickCharacter,
            scrollRef: characterNavRef,
          },
          {
            mode: "type",
            navItems: types,
            activeId: typeId,
            onClickAction: handleClickType,
          },
        ]}
        gameId={gameId}
        characterId={characterId}
        typeId={typeId}
      />
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <div className="page">
                <div className="page-main">
                  <div className="page-links">
                    <ComponentLineup
                      navItems={lineupItems}
                      onClickAction={handleClickLineup}
                    />
                  </div>
                  <ComponentArticleRoot />
                </div>
              </div>
            }
          />
          <Route
            path={getRoutePath(dataNav, gameId, characterId)}
            element={
              currentDataItem ? (
                <div className="page">
                  <div className="page-main">
                    <ComponentContent
                      dataItem={currentDataItem}
                      games={games}
                      accordion={accordion}
                      onClickAccordion={handleClickAccordion}
                    />
                    {rootDataItem && rootDataItem.rootSources && (
                      <ComponentLinkbox sources={rootDataItem.rootSources} />
                    )}
                    <ComponentInfo />
                  </div>
                </div>
              ) : (
                <div className="page">
                  <div className="page-main">
                    <p>No data</p>
                  </div>
                  <div className="page-links">
                    <ComponentLineup
                      navItems={lineupItems}
                      onClickAction={handleClickLineup}
                    />
                  </div>
                </div>
              )
            }
          />
          <Route
            path="source"
            element={
              <div className="page">
                <div className="page-main">
                  <ComponentArticleSource
                    dataNav={dataNav}
                    dataList={dataList}
                  />
                </div>
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div className="page">
                <div className="page-main">
                  <p>Not found</p>
                </div>
                <div className="page-links">
                  <ComponentLineup
                    navItems={lineupItems}
                    onClickAction={handleClickLineup}
                  />
                </div>
              </div>
            }
          />
        </Routes>
      </main>
      <ComponentFooter />
    </div>
  )
}
