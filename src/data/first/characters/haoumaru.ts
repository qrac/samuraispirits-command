import type { DataItem } from "../../../types"

export const firstHaoumaru: DataItem = {
  id: "first-haoumaru",
  name: "覇王丸",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "奥義 旋風裂斬",
          command: "↓↘→+斬",
        },
        {
          name: "奥義 弧月斬",
          command: "→↙↓↘+斬",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "横投げ",
          command: "近距離で→ or ←+B or AB",
        },
        {
          name: "真空巴投げ",
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
          name: "覇王丸 - 初代サムライスピリッツ 攻略Wiki - atwiki（アットウィキ）",
          href: "https://w.atwiki.jp/samurai1/pages/7.html",
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
