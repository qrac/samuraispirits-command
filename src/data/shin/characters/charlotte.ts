import type { DataItem } from "../../../types"

export const shinCharlotte: DataItem = {
  id: "shin-charlotte",
  name: "シャルロット",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "トライスラッシュ",
          command: "→↓↘+斬",
        },
        {
          name: "パワーグラデーション",
          command: "↙↓↘+斬",
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
        {
          name: "ドゥブル・ピエ・サンクシオン",
          command: "アースクェイクに対して投げ",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化",
          command: "↘↓↙←↓↙+D",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "スプラッシュグラデーション",
          command: "→↘↓↙←→+B",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "シャルロット - 真刃繚乱",
          href: "http://shinjin.starfree.jp/chara_data/char/char_mainframe.htm",
        },
        {
          name: "シャルロットの連続技 - 真刃繚乱",
          href: "http://shinjin.starfree.jp/combo/char/char_comboframe.htm",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "真サムライスピリッツ(SAMURAI SHODOWN 2)初心者講習会 第4回 その2(シャルロット) - YouTube",
          href: "https://youtu.be/zEorSCm42-E",
        },
      ],
    },
  ],
}
