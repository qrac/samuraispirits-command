import "./index.css"

export function ComponentHeader({ gameId }: { gameId: string }) {
  return (
    <div className="header">
      <h1 className="header-title">Samurai Spirits Series Command List</h1>
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
