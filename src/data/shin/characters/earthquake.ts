import type { DataItem } from "../../../types"

export const shinEarthquake: DataItem = {
  id: "shin-earthquake",
  name: "アースクェイク",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ファットバウンド",
          command: "空中で↓+蹴",
        },
        {
          name: "ファットチェーンソー",
          command: "斬連打",
        },
        {
          name: "ファットブレス",
          command: "↓↙←+斬",
        },
        {
          name: "ファットレプリカアタック",
          command: "→↘↓↙←+BCD",
        },
        {
          name: "ファットコピー",
          command: "→←↙↓↘→+A or B",
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
        {
          name: "ファットダブルボム",
          command: "アースクェイクに対して投げ",
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
        {
          name: "ぬいぐるみ変化",
          command: "→←→←→←↓+B",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "アースガッデム",
          command: "→←↙↓↘→+CD",
          notes: ["レバー左右で移動"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "アースクェイク - 真刃繚乱",
          href: "https://ss843087.stars.ne.jp/chara_data/earth/earth_mainframe.htm",
        },
        {
          name: "アースクェイクの連続技 - 真刃繚乱",
          href: "https://ss843087.stars.ne.jp/combo/earth/earth_comboframe.htm",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "真サムライスピリッツ(SAMURAI SHODOWN 2)初心者講習会 第3回 その3(アースクェイク) - YouTube",
          href: "https://youtu.be/vJmjArF3xJA",
        },
      ],
    },
  ],
}
