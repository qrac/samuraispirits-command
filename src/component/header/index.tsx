import "./index.css"
import imageUrlQmark from "../../assets/images/qmark.svg"
import imageUrlFirst from "../../assets/images/first.svg"
import imageUrlShin from "../../assets/images/shin.svg"
import imageUrlZan from "../../assets/images/zan.svg"
import imageUrlTen from "../../assets/images/ten.svg"

export function ComponentHeader({ gameId }: { gameId: string }) {
  return (
    <div className="header">
      <h1 className="header-title">Samurai Spirits Series Command List</h1>
      <Cover gameId={gameId} />
    </div>
  )
}

function Cover({ gameId }: { gameId: string }) {
  const coverUrl = () => {
    switch (gameId) {
      case "first":
        return imageUrlFirst
      case "shin":
        return imageUrlShin
      case "zan":
        return imageUrlZan
      case "ten":
        return imageUrlTen
      default:
        return imageUrlQmark
    }
  }
  return (
    <img
      src={coverUrl()}
      width={150}
      height={150}
      className="header-cover"
      alt="Header Cover"
    />
  )
}
