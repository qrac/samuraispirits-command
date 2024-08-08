import queryString from "query-string"

import type { DataNav, EntryDataNavItem, DataItem } from "./types"

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

export function getCharaId(dataNav: DataNav, gameId: string, charaId: string) {
  const game = dataNav[gameId]
  const hasCharas = Object.hasOwn(game, "charas")
  const hasCharaId = hasCharas && Object.hasOwn(game.charas, charaId)
  const newCharaId = hasCharaId ? charaId : "root"
  return newCharaId
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

export function getUrlWithParams(
  gameId: string,
  charaId: string,
  typeId: string
) {
  const hasGameId = gameId !== "root"
  const hasCharaId = hasGameId && charaId !== "root"
  const hasTypeId = hasCharaId && typeId !== "shura"
  const params = {
    ...(hasGameId && { gameId }),
    ...(hasCharaId && { charaId }),
    ...(hasTypeId && { typeId }),
  }
  const paramString = queryString.stringify(params)
  const separator = paramString ? "?" : ""
  const newUrl = window.location.pathname + separator + paramString
  return newUrl
}

export function getParamStates(paramString: string) {
  const params = queryString.parse(paramString)
  const pGameId = (params?.gameId || "root") as string
  const pCharaId = (params?.charaId || "root") as string
  const pTypeId = (params?.typeId || "shura") as string
  return { pGameId, pCharaId, pTypeId }
}
