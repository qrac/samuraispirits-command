import type { DataNav, EntryDataNavItem, DataItem } from "./types"

export function getGames(dataNav: DataNav): EntryDataNavItem[] {
  const newGames = Object.entries(dataNav) || []
  return newGames
}

export function getCharas(
  dataNav: DataNav,
  gameId: string
): EntryDataNavItem[] {
  const game = dataNav[gameId]
  const hasCharas = Object.hasOwn(game, "charas")
  const newCharas = hasCharas ? Object.entries(game.charas) : []
  return newCharas
}

export function getTypes(
  dataNav: DataNav,
  gameId: string,
  charaId: string
): EntryDataNavItem[] {
  const game = dataNav[gameId]
  const hasCharas = Object.hasOwn(game, "charas")
  const hasCharaId = hasCharas && Object.hasOwn(game.charas, charaId)
  const hasTypes = hasCharaId && Object.hasOwn(game.charas[charaId], "types")
  const newTypes = hasTypes ? Object.entries(game.charas[charaId].types) : []
  return newTypes
}

export function getDataId(
  dataNav: DataNav,
  gameId: string,
  charaId: string,
  typeId: string
) {
  const game = dataNav[gameId]
  const hasCharas = Object.hasOwn(game, "charas")
  const hasCharaId = hasCharas && Object.hasOwn(game.charas, charaId)
  const hasTypes = hasCharaId && Object.hasOwn(game.charas[charaId], "types")
  const charaIdStr = hasCharaId ? charaId : ""
  const typeIdStr = hasTypes ? typeId : ""
  const dataIdArray = [gameId, charaIdStr, typeIdStr]
  const newDataId = dataIdArray.filter((str) => str).join("-")
  return newDataId
}

export function getCurrentData(dataList: DataItem[], dataId: string) {
  const currentData = dataList.find((data) => data.id === dataId)
  return currentData
}

export function getNavigatePath(
  dataNav: DataNav,
  gameId: string = "root",
  charaId: string = "root",
  typeId: string = "shura"
) {
  const game = dataNav[gameId]
  const hasCharas = Object.hasOwn(game, "charas")
  const hasCharaId = hasCharas && Object.hasOwn(game.charas, charaId)
  const hasTypes = hasCharaId && Object.hasOwn(game.charas[charaId], "types")
  const gameIdStr = gameId === "root" ? "" : gameId
  const charaIdStr = hasCharaId ? (charaId === "root" ? "" : charaId) : ""
  const typeIdStr = hasTypes ? typeId : ""
  const pathArray = [gameIdStr, charaIdStr, typeIdStr]
  const newPath = pathArray.filter((str) => str).join("/")
  return newPath
}

export function getRoutePath(
  dataNav: DataNav,
  gameId: string,
  charaId: string
) {
  const game = dataNav[gameId]
  const hasCharas = Object.hasOwn(game, "charas")
  const hasCharaId = hasCharas && Object.hasOwn(game.charas, charaId)
  const hasTypes = hasCharaId && Object.hasOwn(game.charas[charaId], "types")
  const gameIdStr = gameId === "root" ? "" : ":gameId"
  const charaIdStr = hasCharaId ? (charaId === "root" ? "" : ":charaId") : ""
  const typeIdStr = hasTypes ? ":typeId" : ""
  const pathArray = ["/", gameIdStr, charaIdStr, typeIdStr]
  const newPath = pathArray.filter((str) => str).join("/")
  return newPath
}
