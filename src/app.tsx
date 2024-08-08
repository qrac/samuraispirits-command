import { useState, useEffect } from "react"
import { clsx } from "clsx"
import queryString from "query-string"

import type { EntryDataNavItem, DataItem } from "./types"
import { dataNav } from "./data/nav"
import { dataList } from "./data/list"
import RootData from "./data/root.md"
import { SpriteCommand } from "./component/sprite-command"

export default function App() {
  const games = Object.entries(dataNav) as EntryDataNavItem[]
  const [charas, setCharas] = useState<EntryDataNavItem[]>([])
  const [types, setTypes] = useState<EntryDataNavItem[]>([])

  const [gameId, setGameId] = useState("root")
  const [charaId, setCharaId] = useState("root")
  const [typeId, setTypeId] = useState("shura")
  const [dataId, setDataId] = useState("root")
  const [currentData, setCurrentData] = useState<DataItem>()

  function getDataId(gameId: string, charaId: string, typeId: string) {
    const game = dataNav[gameId]
    const hasCharas = Object.hasOwn(game, "charas")
    const hasCharaId = hasCharas && Object.hasOwn(game.charas, charaId)
    const hasTypes = hasCharaId && Object.hasOwn(game.charas[charaId], "types")
    const charaIdStr = hasCharaId ? charaId : ""
    const typeIdStr = hasTypes ? typeId : ""
    const strs = [gameId, charaIdStr, typeIdStr]
    const newDataId = strs.filter((str) => str).join("-")
    return newDataId
  }

  function updateParams(gameId: string, charaId: string, typeId: string) {
    const pushGameId = gameId !== "root"
    const pushCharaId = pushGameId && charaId !== "root"
    const pushTypeId = pushCharaId && typeId !== "shura"
    const params = {
      ...(pushGameId && { gameId }),
      ...(pushCharaId && { charaId }),
      ...(pushTypeId && { typeId }),
    }
    const paramString = queryString.stringify(params)
    const separator = paramString ? "?" : ""
    const newUrl = window.location.pathname + separator + paramString
    window.history.pushState({}, "", newUrl)
  }

  function updateCurrentData(dataId: string) {
    const newData = dataList.find((data) => data.id === dataId)
    setCurrentData(newData)
  }

  function handleClickGame(id: string) {
    const game = dataNav[id]
    const hasCharas = Object.hasOwn(game, "charas")
    const hasCharaId = hasCharas && Object.hasOwn(game.charas, charaId)
    const hasTypes = hasCharaId && Object.hasOwn(game.charas[charaId], "types")
    const newCharas = hasCharas ? Object.entries(game.charas) : []
    const newTypes = hasTypes ? Object.entries(game.charas[charaId].types) : []
    const newCharaId = hasCharaId ? charaId : "root"
    const newDataId = getDataId(id, newCharaId, typeId)
    setCharas(newCharas)
    setTypes(newTypes)
    setGameId(id)
    setCharaId(newCharaId)
    setTypeId("shura")
    setDataId(newDataId)
    updateParams(id, newCharaId, "shura")
    updateCurrentData(newDataId)
  }

  function handleClickCharactor(id: string) {
    const newDataId = getDataId(gameId, id, typeId)
    setTypes(Object.entries(dataNav[gameId].charas[id]?.types || {}))
    setCharaId(id)
    setTypeId("shura")
    setDataId(newDataId)
    updateParams(gameId, id, "shura")
    updateCurrentData(newDataId)
  }

  function handleClickType(id: string) {
    const newDataId = getDataId(gameId, charaId, id)
    setTypeId(id)
    setDataId(newDataId)
    updateParams(gameId, charaId, id)
    updateCurrentData(newDataId)
  }

  useEffect(() => {
    const paramString = window.location.search
    if (paramString) {
      const params = queryString.parse(paramString)
      const paramGameId = (params?.gameId || "root") as string
      const paramCharaId = (params?.charaId || "root") as string
      const paramTypeId = (params?.typeId || "shura") as string
      params?.gameId && setGameId(paramGameId)
      params?.charaId && setCharaId(paramCharaId)
      params?.typeId && setTypeId(paramTypeId)

      const game = dataNav[paramGameId]
      const hasCharas = Object.hasOwn(game, "charas")
      const hasCharaId = hasCharas && Object.hasOwn(game.charas, paramCharaId)
      const hasTypes =
        hasCharaId && Object.hasOwn(game.charas[paramCharaId], "types")
      const newCharas = hasCharas ? Object.entries(game.charas) : []
      const newTypes = hasTypes
        ? Object.entries(game.charas[paramCharaId].types)
        : []
      setCharas(newCharas)
      setTypes(newTypes)

      const newDataId = getDataId(paramGameId, paramCharaId, paramTypeId)
      setDataId(newDataId)
      updateCurrentData(newDataId)
    }
  }, [])
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
                className={clsx("nav-button", gameId === id && "is-active")}
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
                  onClick={() => handleClickCharactor(id)}
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
        {/*dataId*/}
        {dataId === "root" && (
          <div className="docs">
            <RootData />
          </div>
        )}
        {currentData && (
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
                        <div className="data-item-name">{item.name}</div>
                        <div className="data-item-command">
                          <SpriteCommand command={item.command} />
                          {item.list && (
                            <div className="data-list">
                              {item?.list.map((childItem, childItemIndex) => (
                                <div key={childItemIndex} className="data-item">
                                  <div className="data-item-name">
                                    {childItem.name}
                                  </div>
                                  <div className="data-item-command">
                                    <SpriteCommand
                                      command={childItem.command}
                                    />
                                  </div>
                                </div>
                              ))}
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
        )}
        {dataId !== "root" && !currentData && (
          <div className="docs">
            <p>no data</p>
          </div>
        )}
      </main>
      <footer className="footer">
        <p className="footer-copyright">© 2024 Qrac</p>
      </footer>
    </div>
  )
}
