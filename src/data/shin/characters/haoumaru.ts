import type { DataItem } from "../../../types"

export const shinHaoumaru: DataItem = {
  id: "shin-haoumaru",
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
          name: "奥偽 旋風裂斬",
          command: "↓↘→+蹴",
        },
        {
          name: "奥義 弧月斬",
          command: "→↙↓↘+斬",
        },
        {
          name: "奥義 烈震斬",
          command: "→↓↘+蹴",
        },
        {
          name: "酒攻撃",
          command: "↓↙←+A",
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
        {
          name: "覇王二連脚",
          command: "アースクェイクに対して投げ",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化",
          command: "→↘↓↙←→←+B",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "天覇封神斬",
          command: "↘←↙↓↘→←↓↙+BC",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "天覇凄煌斬",
          command: "→↘↓↙←→+A",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "覇王丸 - 真刃繚乱",
          href: "http://shinjin.starfree.jp/chara_data/haou/haou_mainframe.htm",
        },
        {
          name: "覇王丸の連続技 - 真刃繚乱",
          href: "http://shinjin.starfree.jp/combo/haou/haou_comboframe.htm",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "真サムライスピリッツ(SAMURAI SHODOWN 2)初心者講習会 第1回 その2（覇王丸） - YouTube",
          href: "https://youtu.be/rGChTzPo__U",
        },
      ],
    },
  ],
}
