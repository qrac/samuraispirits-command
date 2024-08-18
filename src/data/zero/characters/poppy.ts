import type { DataItem } from "../../../types"

export const zeroPoppy: DataItem = {
  id: "zero-poppy",
  name: "パピー",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ラッシュドッグ",
          command: "↓↘→+斬",
        },
        {
          name: "マシンガンドッグ",
          command: "↓↘→+C",
        },
        {
          name: "レプリカドッグ",
          command: "↓↙←+斬",
        },
        {
          name: "ストライクドッグ",
          command: "近距離で→↓↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "メガストライクドッグ",
          command: "近距離で↓↘→+CD同時押し",
        },
      ],
    },
    {
      title: "システム",
      skills: [
        {
          name: "パピーの使用方法",
          command:
            "キャラ選択時にガルフォードにカーソルを合わせ、狂死郎,ガル,火月,ガル,狂死郎,ガル,火月,ガル,狂死郎,ガルと動かし決定（一回対戦するとガルフォードに強制変更）",
        },
      ],
    },
  ],
}
