import type { DataItem } from "../../types"
import { polyRoot } from "./root"
import { polyHaoumaruShura } from "./characters/haoumaru/shura"
import { polyHaoumaruRasetsu } from "./characters/haoumaru/rasetsu"
import { polyNakoruruShura } from "./characters/nakoruru/shura"
import { polyNakoruruRasetsu } from "./characters/nakoruru/rasetsu"
import { polyRimururuShura } from "./characters/rimururu/shura"
import { polyRimururuRasetsu } from "./characters/rimururu/rasetsu"
import { polyGenjuroShura } from "./characters/genjuro/shura"
import { polyGenjuroRasetsu } from "./characters/genjuro/rasetsu"
//import { polyUkyoShura } from "./characters/ukyo/shura"
//import { polyUkyoRasetsu } from "./characters/ukyo/rasetsu"
//import { polyGalfordShura } from "./characters/galford/shura"
//import { polyGalfordRasetsu } from "./characters/galford/rasetsu"
//import { polyHanzoShura } from "./characters/hanzo/shura"
//import { polyHanzoRasetsu } from "./characters/hanzo/rasetsu"
//import { polyKazukiShura } from "./characters/kazuki/shura"
//import { polyKazukiRasetsu } from "./characters/kazuki/rasetsu"
//import { polySougetsuShura } from "./characters/sougetsu/shura"
//import { polySougetsuRasetsu } from "./characters/sougetsu/rasetsu"

export const polyList = [
  polyRoot,
  polyHaoumaruShura,
  polyHaoumaruRasetsu,
  polyNakoruruShura,
  polyNakoruruRasetsu,
  polyRimururuShura,
  polyRimururuRasetsu,
  polyGenjuroShura,
  polyGenjuroRasetsu,
  //polyUkyoShura,
  //polyUkyoRasetsu,
  //polyGalfordShura,
  //polyGalfordRasetsu,
  //polyHanzoShura,
  //polyHanzoRasetsu,
  //polyKazukiShura,
  //polyKazukiRasetsu,
  //polySougetsuShura,
  //polySougetsuRasetsu,
] as DataItem[]
