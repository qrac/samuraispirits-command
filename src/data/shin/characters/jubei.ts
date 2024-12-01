import type { DataItem } from "../../../types"

export const shinJubei: DataItem = {
  id: "shin-jubei",
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
          name: "二ッ角羅刀・改",
          command: "→↓↘+斬",
        },
        {
          name: "八相発破",
          command: "斬連打",
        },
        {
          name: "柳生 心眼刀",
          command: "↓↙←→+A",
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
        {
          name: "二段骨法脚",
          command: "アースクェイクに対して投げ",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化",
          command: "→↘↓↙←→←+D",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "絶 水月刀",
          command: "→↘↓↙←→+C",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "柳生十兵衛 - 真刃繚乱",
          href: "http://shinjin.starfree.jp/chara_data/jyubei/jyubei_mainframe.htm",
        },
        {
          name: "柳生十兵衛の連続技 - 真刃繚乱",
          href: "http://shinjin.starfree.jp/combo/jyubei/jyubei_comboframe.htm",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "真サムライスピリッツ(SAMURAI SHODOWN 2)初心者講習会 第1回 その4（柳生 十兵衛） - YouTube",
          href: "https://youtu.be/AsCcDOAYAQc",
        },
      ],
    },
  ],
}
