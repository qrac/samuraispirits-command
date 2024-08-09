import { clsx } from "clsx"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"

import type { EntryDataNavItem } from "./types"
import { dataNav } from "./data/nav"
import { dataList } from "./data/list"
import DataRoot from "./data/root.md"
import { SpriteCommand } from "./component/sprite-command"
import {
  getCharas,
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
  let charaId = pathArray[2] || "root"
  let typeId = pathArray[3] || "shura"
  let dataId = getDataId(dataNav, gameId, charaId, typeId)
  let games = Object.entries(dataNav) as EntryDataNavItem[]
  let charas = getCharas(dataNav, gameId)
  let types = getTypes(dataNav, gameId, charaId)
  let currentData = getCurrentData(dataList, dataId)

  function handleClickGame(id: string) {
    const routePath = getNavigatePath(dataNav, id, charaId, "shura")
    navigate(routePath)
    gameId = id
  }
  function handleClickChara(id: string) {
    const routePath = getNavigatePath(dataNav, gameId, id, "shura")
    navigate(routePath)
    charaId = id
  }
  function handleClickType(id: string) {
    const routePath = getNavigatePath(dataNav, gameId, charaId, id)
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
        {charas.length > 0 && (
          <div className="nav-group">
            <div className="nav-group-grid">
              {charas.map(([id, item]) => (
                <button
                  key={id}
                  className={clsx("nav-button", charaId === id && "is-active")}
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
      {
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <div className="docs">
                  <DataRoot />
                </div>
              }
            />
            <Route
              path={getRoutePath(dataNav, gameId, charaId)}
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
                          <div className="data-list">
                            {group.list.map((item, itemIndex) => (
                              <div key={itemIndex} className="data-item">
                                <div className="data-item-name">
                                  {item.name}
                                </div>
                                <div className="data-item-command">
                                  <SpriteCommand command={item.command} />
                                  {item.list && (
                                    <div className="data-list">
                                      {item?.list.map(
                                        (childItem, childItemIndex) => (
                                          <div
                                            key={childItemIndex}
                                            className="data-item"
                                          >
                                            <div className="data-item-name">
                                              {childItem.name}
                                            </div>
                                            <div className="data-item-command">
                                              <SpriteCommand
                                                command={childItem.command}
                                              />
                                            </div>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
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
          </Routes>
        </main>
      }
      <footer className="footer">
        <p className="footer-copyright">© 2024 Qrac</p>
      </footer>
    </div>
  )
}
