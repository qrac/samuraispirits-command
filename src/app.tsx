import { clsx } from "clsx"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"

import type { EntryDataNavItem } from "./types"
import { dataNav } from "./data/nav"
import { dataList } from "./data/list"
import DataHome from "./data/home.md"
import { ComponentSkills } from "./component/skills"
import {
  getCharacters,
  getTypes,
  getDataId,
  getCurrentData,
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
  let games = Object.entries(dataNav) as EntryDataNavItem[]
  let characters = getCharacters(dataNav, gameId)
  let types = getTypes(dataNav, gameId, characterId)
  let currentData = getCurrentData(dataList, dataId)

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
      <header className="header">
        <h1 className="header-title">Samurai Spirits Series Command List</h1>
        <svg className="header-bg-icon" role="img">
          <use href="/assets/sprite.svg#qmark"></use>
        </svg>
      </header>
      <nav className="nav">
        <div className="nav-group">
          <div className="nav-group-grid">
            {games.map(([id, item]) => (
              <button
                key={id}
                className={clsx(
                  "nav-button",
                  id === "root" && !gameId && "is-active",
                  gameId === id && "is-active"
                )}
                onClick={() => handleClickGame(id)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        {characters.length > 0 && (
          <div className="nav-group">
            <div className="nav-group-grid">
              {characters.map(([id, item]) => (
                <button
                  key={id}
                  className={clsx(
                    "nav-button",
                    characterId === id && "is-active"
                  )}
                  onClick={() => handleClickChara(id)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
        {types.length > 0 && (
          <div className="nav-group">
            <div className="nav-group-grid">
              {types.map(([id, item]) => (
                <button
                  key={id}
                  className={clsx("nav-button", typeId === id && "is-active")}
                  onClick={() => handleClickType(id)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      <main className="main">
        <Routes>
          <Route
            path="/"
            element={
              <div className="docs">
                <DataHome />
              </div>
            }
          />
          <Route
            path={getRoutePath(dataNav, gameId, characterId)}
            element={
              currentData ? (
                <div
                  className={clsx(
                    "data",
                    currentData?.layout === "slim" && "is-slim"
                  )}
                >
                  <h2 className="data-name">{currentData.name}</h2>
                  <div className="data-groups">
                    {currentData.groups.map((group, groupIndex) => (
                      <div key={groupIndex} className="data-group">
                        {group.title && (
                          <h3
                            className={clsx(
                              "data-group-title",
                              group.titleColor && `is-ac-${group.titleColor}`
                            )}
                          >
                            {group.title}
                          </h3>
                        )}
                        <ComponentSkills skills={group.skills} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="docs">
                  <p>No data</p>
                </div>
              )
            }
          />
          <Route path="*" element={<div className="docs">Not found</div>} />
        </Routes>
      </main>

      <footer className="footer">
        <p className="footer-copyright">© 2024 Qrac</p>
      </footer>
    </div>
  )
}
