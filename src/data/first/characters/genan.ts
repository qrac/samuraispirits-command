import type { DataItem } from "../../../types"

export const firstGenan: DataItem = {
  id: "first-genan",
  name: "不知火幻庵",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "毒吹雪",
          command: "↓↘→+斬",
        },
        {
          name: "肉転突き",
          command: "→↓↘+斬",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "幻庵殺爪陣",
          command: "近距離で→ or ←+B or AB",
        },
        {
          name: "ヒザ蹴り",
          command: "近距離で→ or ←+D or CD",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "しゃがみ移動",
          command: "↙ or ↘",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "不知火幻庵 - 初代サムライスピリッツ 攻略Wiki - atwiki（アットウィキ）",
          href: "https://w.atwiki.jp/samurai1/pages/25.html",
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
