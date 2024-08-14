import { Route, Routes, useLocation, useNavigate } from "react-router-dom"

import type { NavItem } from "./types"
import "./app.css"
import { dataNav } from "./data/nav"
import { dataList } from "./data/list"
import DataHome from "./data/home.md"
import { ComponentHeader } from "./component/header"
import { ComponentNav } from "./component/nav"
import { ComponentDocs } from "./component/docs"
import { ComponentLineup } from "./component/lineup"
import { ComponentContent } from "./component/content"
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

  let pathArray = location.pathname.split("/")
  let gameId = pathArray[1] || "root"
  let characterId = pathArray[2] || "root"
  let typeId = pathArray[3] || "shura"
  let dataId = getDataId(dataNav, gameId, characterId, typeId)
  let games = Object.entries(dataNav) as NavItem[]
  let characters = getCharacters(dataNav, gameId)
  let types = getTypes(dataNav, gameId, characterId)
  let currentDataItem = getCurrentDataItem(dataList, dataId)

  function handleClickGame(id: string) {
    const routePath = getNavigatePath(dataNav, id, "root", "shura")
    navigate(routePath)
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
                  onClickAction={handleClickGame}
                />
                <ComponentDocs>
                  <DataHome />
                </ComponentDocs>
              </div>
            }
          />
          <Route
            path={getRoutePath(dataNav, gameId, characterId)}
            element={
              currentDataItem ? (
                <div className="page">
                  <ComponentContent dataItem={currentDataItem} />
                </div>
              ) : (
                <div className="page">
                  <ComponentDocs>
                    <p>No data</p>
                  </ComponentDocs>
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
                <ComponentDocs>
                  <p>Not found</p>
                </ComponentDocs>
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
