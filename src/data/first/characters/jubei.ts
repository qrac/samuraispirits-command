import type { DataItem } from "../../../types"

export const firstJubei: DataItem = {
  id: "first-jubei",
  name: "柳生十兵衛",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "喝咄 水月刀",
          command: "↓↘→+斬",
        },
        {
          name: "二ッ角羅刀",
          command: "→↓↘+斬",
        },
        {
          name: "八相発破",
          command: "斬連打",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "背負い投げ",
          command: "近距離で→ or ←+B or AB",
        },
        {
          name: "風車投げ",
          command: "近距離で→ or ←+D or CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "柳生十兵衛 - 初代サムライスピリッツ 攻略Wiki - atwiki（アットウィキ）",
          href: "https://w.atwiki.jp/samurai1/pages/9.html",
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
