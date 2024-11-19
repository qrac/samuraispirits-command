import { useRef, useState } from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"

import type { Accordion, AccordionId, NavItem } from "./types"
import "./app.css"
import { dataNav } from "./data/nav"
import { dataList } from "./data/list"
import DataRoot from "./data/root.md"
import { ComponentHeader } from "./component/header"
import { ComponentNav } from "./component/nav"
import { ComponentDocs } from "./component/docs"
import { ComponentLineup } from "./component/lineup"
import { ComponentContent } from "./component/content"
import { ComponentInfo } from "./component/info"
import { ComponentFooter } from "./component/footer"
import {
  getCharacters,
  getTypes,
  getDataId,
  getCurrentDataItem,
  getNavigatePath,
  getRoutePath,
} from "./utils"

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const scrollRef = useRef<HTMLDivElement>(null)
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
  let currentDataItem = getCurrentDataItem(dataList, dataId)

  function handleClickGameWithGoTop(id: string) {
    const routePath = getNavigatePath(dataNav, id, "root", "shura")
    navigate(routePath)
    window.scrollTo({ top: 0 })
    scrollRef?.current && (scrollRef.current.scrollLeft = 0)
    gameId = id
  }
  function handleClickGame(id: string) {
    let routePath = getNavigatePath(dataNav, id, characterId, typeId)

    if (routePath.split("/")[1] === characterId) {
      navigate(routePath)
    } else {
      routePath = getNavigatePath(dataNav, id, "root", "shura")
      navigate(routePath)
      scrollRef?.current && (scrollRef.current.scrollLeft = 0)
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
          },
          {
            navItems: characters,
            activeId: characterId,
            onClickAction: handleClickChara,
            scrollRef: scrollRef,
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
                <ComponentLineup
                  navItems={games}
                  onClickAction={handleClickGameWithGoTop}
                />
                <ComponentDocs MdxData={DataRoot} />
              </div>
            }
          />
          <Route
            path={getRoutePath(dataNav, gameId, characterId)}
            element={
              currentDataItem ? (
                <div className="page">
                  <ComponentContent
                    dataItem={currentDataItem}
                    accordion={accordion}
                    onClickAccordion={handleClickAccordion}
                  />
                  <ComponentInfo />
                </div>
              ) : (
                <div className="page">
                  <div>
                    <p>No data</p>
                  </div>
                  <ComponentLineup
                    navItems={games}
                    onClickAction={handleClickGame}
                  />
                </div>
              )
            }
          />
          <Route
            path="*"
            element={
              <div className="page">
                <div>
                  <p>Not found</p>
                </div>
                <ComponentLineup
                  navItems={games}
                  onClickAction={handleClickGame}
                />
              </div>
            }
          />
        </Routes>
      </main>
      <ComponentFooter />
    </div>
  )
}
