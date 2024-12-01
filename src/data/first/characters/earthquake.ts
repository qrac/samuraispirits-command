import type { DataItem } from "../../../types"

export const firstEarthquake: DataItem = {
  id: "first-earthquake",
  name: "アースクェイク",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ファットバウンド",
          command: "空中で↓+蹴連打",
        },
        {
          name: "ファットチェーンソー",
          command: "斬連打",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "デススルー",
          command: "近距離で→ or ←+B or AB",
        },
        {
          name: "スカンクバースト",
          command: "近距離で→ or ←+D or CD",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ファットトライアングルジャンプ",
          command: "空中画面端で↗ or → or ↘",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "アースクェイク - 初代サムライスピリッツ 攻略Wiki - atwiki",
          href: "https://w.atwiki.jp/samurai1/pages/18.html",
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
