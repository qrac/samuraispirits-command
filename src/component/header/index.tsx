import { Link } from "react-router-dom"

import "./index.css"
import { metaData } from "../../data/meta"

export function ComponentHeader({
  gameId,
  onClickAction,
}: {
  gameId: string
  onClickAction: () => void
}) {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="header-title">
          {metaData.siteName + " - " + metaData.subName}
        </h1>
        <div className="header-logo">
          <Link to="/" onClick={() => onClickAction()}>
            <img
              src="/assets/logo.svg"
              width={1200}
              height={154}
              alt="Samurai Spirits Series Command List"
            />
          </Link>
        </div>
      </div>
      <Cover gameId={gameId} />
    </div>
  )
}

function Cover({ gameId }: { gameId: string }) {
  const coverList = [
    "first",
    "shin",
    "zan",
    "ten",
    "zero",
    "zerosp",
    "ken",
    "poly",
    "asura",
    "sen",
    "rei",
    "source",
  ]
  const symbolId = coverList.includes(gameId) ? gameId : "home"
  return (
    <svg className="header-cover" role="img">
      <use href={"/assets/covers.svg#" + symbolId}></use>
    </svg>
  )
}
