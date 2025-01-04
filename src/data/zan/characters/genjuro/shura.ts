import type { DataItem } from "../../../../types"

export const zanGenjuroShura: DataItem = {
  id: "zan-genjuro-shura",
  name: "牙神幻十郎（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "桜華斬",
          command: "↓↙←+斬",
        },
        {
          name: "桐覇 光翼刃",
          command: "→↓↘+斬",
        },
        {
          name: "三連殺",
          command: "↓↘→+斬",
          notes: ["3回まで連続入力可能"],
          skills: [
            {
              name: "返し刃",
              command: "斬",
            },
          ],
        },
        {
          name: "紅",
          command: "→↘↓+斬",
        },
        {
          name: "雫刃",
          command: "近距離で←↓↙+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "五光斬",
          command: "→←↙↓↘→+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "牙神幻十郎 - キャラクターとコマンドリスト | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zan/command.htm#kib",
        },
        {
          name: "牙神幻十郎 - ド定番連続技ガイド | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zan/combo.htm#kib",
        },
      ],
    },
    /*{
      title: "もっと詳しい動画",
      links: [
        {
          name: "",
          href: "https://youtu.be/xxx",
        },
      ],
    },*/
  ],
}
