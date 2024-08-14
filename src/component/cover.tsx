import imageUrlQmark from "../assets/images/qmark.svg"
import imageUrlFirst from "../assets/images/first.svg"
import imageUrlShin from "../assets/images/shin.svg"
import imageUrlZan from "../assets/images/zan.svg"
import imageUrlTen from "../assets/images/ten.svg"

export function ComponentCover({ gameId }: { gameId: string }) {
  const imageUrl = () => {
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
      src={imageUrl()}
      width={150}
      height={150}
      className="header-cover"
      alt="Title Icon"
    />
  )
}
