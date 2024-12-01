import type { DataNav, NavItem, DataItem } from "./types"

export function getGames(dataNav: DataNav): NavItem[] {
  const newGames = Object.entries(dataNav) || []
  return newGames
}

export function getCharacters(dataNav: DataNav, gameId: string): NavItem[] {
  if (!dataNav[gameId]) return []
  const game = dataNav[gameId]
  const hasCharacters = Object.hasOwn(game, "characters")
  const newCharacters = hasCharacters ? Object.entries(game.characters) : []
  return newCharacters
}

export function getTypes(
  dataNav: DataNav,
  gameId: string,
  characterId: string
): NavItem[] {
  if (!dataNav[gameId]) return []
  const game = dataNav[gameId]
  const hasCharacters = Object.hasOwn(game, "characters")
  const hasCharacterId =
    hasCharacters && Object.hasOwn(game.characters, characterId)
  const hasTypes =
    hasCharacterId && Object.hasOwn(game.characters[characterId], "types")
  const newTypes = hasTypes
    ? Object.entries(game.characters[characterId].types)
    : []
  return newTypes
}

export function getDataId(
  dataNav: DataNav,
  gameId: string,
  characterId: string,
  typeId: string
) {
  if (!dataNav[gameId]) return ""
  const game = dataNav[gameId]
  const hasCharacters = Object.hasOwn(game, "characters")
  const hasCharacterId =
    hasCharacters && Object.hasOwn(game.characters, characterId)
  const hasTypes =
    hasCharacterId && Object.hasOwn(game.characters[characterId], "types")
  const characterIdStr = hasCharacterId ? characterId : ""
  const typeIdStr = hasTypes ? typeId : ""
  const dataIdArray = [gameId, characterIdStr, typeIdStr]
  const newDataId = dataIdArray.filter((str) => str).join("-")
  return newDataId
}

export function getCurrentDataItem(dataList: DataItem[], dataId: string) {
  return dataList.find((data) => data.id === dataId)
}

export function getRootDataItem(dataList: DataItem[], dataId: string) {
  const splitedDataId = dataId.split("-")
  if (splitedDataId.length === 1) return
  if (splitedDataId[1] === "root") {
    return dataList.find((data) => data.id === dataId)
  }
  const parrentRootId = dataId.split("-")[0] + "-root"
  return dataList.find((data) => data.id === parrentRootId)
}

export function getNavigatePath(
  dataNav: DataNav,
  gameId: string = "root",
  characterId: string = "root",
  typeId: string = "shura"
) {
  const game = dataNav[gameId]
  const hasCharacters = Object.hasOwn(game, "characters")
  const hasCharacterId =
    hasCharacters && Object.hasOwn(game.characters, characterId)
  const hasTypes =
    hasCharacterId && Object.hasOwn(game.characters[characterId], "types")
  const gameIdStr = gameId === "root" ? "" : gameId
  const characterIdStr = hasCharacterId
    ? characterId === "root"
      ? ""
      : characterId
    : ""
  const typeIdStr = hasTypes ? typeId : ""
  const pathArray = [gameIdStr, characterIdStr, typeIdStr]
  const newPath = pathArray.filter((str) => str).join("/")
  return newPath
}

export function getRoutePath(
  dataNav: DataNav,
  gameId: string,
  characterId: string
) {
  if (!dataNav[gameId]) return ""
  const game = dataNav[gameId]
  const hasCharacters = Object.hasOwn(game, "characters")
  const hasCharacterId =
    hasCharacters && Object.hasOwn(game.characters, characterId)
  const hasTypes =
    hasCharacterId && Object.hasOwn(game.characters[characterId], "types")
  const gameIdStr = gameId === "root" ? "" : ":gameId"
  const characterIdStr = hasCharacterId
    ? characterId === "root"
      ? ""
      : ":characterId"
    : ""
  const typeIdStr = hasTypes ? ":typeId" : ""
  const pathArray = ["/", gameIdStr, characterIdStr, typeIdStr]
  const newPath = pathArray.filter((str) => str).join("/")
  return newPath
}
