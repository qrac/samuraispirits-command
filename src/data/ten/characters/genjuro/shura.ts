import type { DataItem } from "../../../../types"

export const tenGenjuroShura: DataItem = {
  id: "ten-genjuro-shura",
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
          command: "←↓↙+斬",
        },
        {
          name: "雫刃",
          command: "近距離で→↓↘+D",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "五光斬",
          command: "←→↘↓+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "攻略～牙神幻十郎～ サムライスピリッツ天草降臨 - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/kouryku/08gennzyurou.htm",
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
