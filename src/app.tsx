import { useState, useEffect } from "react"
import { clsx } from "clsx"
import queryString from "query-string"

import Qmark from "./assets/image/qmark.svg?react"
import gameList from "./control/game"
import charactorList from "./control/charactor"
import typeList from "./control/type"
import dataList from "./data/list"
import DataRoot from "./data/root.md"
import { SpriteCommand } from "./component/sprite-command"

function ckeckIsBase(dataId: string) {
  const array = gameList.map((game) => game.id)
  return array.includes(dataId)
}
function checkHasType(gameId: string) {
  const array = ["zan", "ten"]
  return array.includes(gameId)
}

export default function App() {
  const [mounted, setMounted] = useState(false)
  const [gameId, setGameId] = useState("")
  const [charactorId, setCharactorId] = useState("")
  const [typeId, setTypeId] = useState("shura")
  const [dataId, setDataId] = useState("")
  const hasCharactor = gameId !== ""
  const hasType = charactorId !== "" && checkHasType(gameId)
  const currentData = dataList.find((data) => data.id === dataId)
  const isBase = ckeckIsBase(dataId)

  useEffect(() => {
    const newDataId = [
      gameId,
      hasCharactor ? charactorId : "",
      hasType ? typeId : "",
    ]
      .filter((id) => id !== "")
      .join("-")
    setDataId(newDataId)
  }, [gameId, charactorId, typeId])

  useEffect(() => {
    if (mounted) {
      let paramString = window.location.search
      let params = queryString.parse(paramString)
      params = {
        ...(gameId && { gameId }),
        ...(charactorId && hasCharactor && { charactorId }),
        ...(typeId && hasType && { typeId }),
      }
      paramString = queryString.stringify(params)
      const separator = paramString ? "?" : ""
      const newUrl = window.location.pathname + separator + paramString
      window.history.pushState({}, "", newUrl)
    }
  }, [dataId])

  useEffect(() => {
    const paramString = window.location.search
    if (paramString) {
      const params = queryString.parse(paramString)
      params?.gameId && setGameId(params.gameId as string)
      params?.charactorId && setCharactorId(params.charactorId as string)
      params?.typeId && setTypeId(params.typeId as string)
    }
    setMounted(true)
  }, [])
  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">Samurai Spirits Series Command List</h1>
        <Qmark className="header-bg-icon" />
      </header>
      <nav className="nav">
        <div className="nav-group">
          <div className="nav-group-grid">
            {gameList.map((item) => (
              <button
                key={item.id}
                className={clsx(
                  "nav-button",
                  gameId === item.id && "is-active"
                )}
                onClick={() => setGameId(item.id)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        {hasCharactor && (
          <div className="nav-group">
            <div className="nav-group-grid">
              {charactorList.map((item) => (
                <button
                  key={item.id}
                  className={clsx(
                    "nav-button",
                    charactorId === item.id && "is-active"
                  )}
                  onClick={() => setCharactorId(item.id)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
        {hasType && (
          <div className="nav-group">
            <div className="nav-group-grid">
              {typeList.map((item) => (
                <button
                  key={item.id}
                  className={clsx(
                    "nav-button",
                    typeId === item.id && "is-active"
                  )}
                  onClick={() => setTypeId(item.id)}
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
        {dataId === "" && (
          <div className="docs">
            <DataRoot />
          </div>
        )}
        {currentData && (
          <div className={clsx("data", isBase && "is-base")}>
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
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {dataId && !currentData && (
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
