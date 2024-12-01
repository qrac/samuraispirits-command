import { useRef, useState } from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"

import type { Accordion, AccordionId, NavItem } from "./types"
import "./app.css"
import { dataNav } from "./data/nav"
import { dataList } from "./data/list"
//import DataRoot from "./data/root.md"
import { ComponentHeader } from "./component/header"
import { ComponentNav } from "./component/nav"
import { ComponentLineup } from "./component/lineup"
//import { ComponentDocs } from "./component/docs"
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
  const navigate = useNavigate()
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

  function handleClickGameWithGoTop(id: string) {
    const routePath = getNavigatePath(dataNav, id, "root", "shura")
    navigate(routePath)
    window.scrollTo({ top: 0 })
    characterNavRef?.current && (characterNavRef.current.scrollLeft = 0)
    gameId = id

    if (gameNavRef.current) {
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

    if (routePath.split("/")[1] === characterId) {
      navigate(routePath)
    } else {
      routePath = getNavigatePath(dataNav, id, "root", "shura")
      navigate(routePath)
      characterNavRef?.current && (characterNavRef.current.scrollLeft = 0)
    }
    gameId = id
  }
  function handleClickChara(id: string) {
    const routePath = getNavigatePath(dataNav, gameId, id, "shura")
    navigate(routePath)
    characterId = id
  }
  function handleClickType(id: string) {
    const routePath = getNavigatePath(dataNav, gameId, characterId, id)
    navigate(routePath)
    typeId = id
  }
  function handleClickAccordion(id: AccordionId) {
    const newAccordionState = { [id]: !accordion[id] }
    setAccordion({ ...accordion, ...newAccordionState })
  }
  return (
    <div className="app">
      <ComponentHeader gameId={gameId} />
      <ComponentNav
        navGroups={[
          {
            navItems: games,
            activeId: gameId,
            onClickAction: handleClickGame,
            scrollRef: gameNavRef,
          },
          {
            navItems: characters,
            activeId: characterId,
            onClickAction: handleClickChara,
            scrollRef: characterNavRef,
          },
          {
            navItems: types,
            activeId: typeId,
            onClickAction: handleClickType,
          },
        ]}
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
                      onClickAction={handleClickGameWithGoTop}
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
                      onClickAction={handleClickGameWithGoTop}
                    />
                  </div>
                </div>
              )
            }
          />
          <Route
            path="/source"
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
                    onClickAction={handleClickGameWithGoTop}
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
