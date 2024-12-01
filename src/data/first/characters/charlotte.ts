import type { DataItem } from "../../../types"

export const firstCharlotte: DataItem = {
  id: "first-charlotte",
  name: "シャルロット",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "パワーグラデーション",
          command: "→↓↘+斬",
        },
        {
          name: "スプラッシュファーント",
          command: "斬連打",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "リオン・ランセ",
          command: "近距離で→ or ←+中 or 強攻撃",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "シャルロット - 初代サムライスピリッツ 攻略Wiki - atwiki",
          href: "https://w.atwiki.jp/samurai1/pages/8.html",
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
