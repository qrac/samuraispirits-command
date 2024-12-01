import type { DataItem } from "../../../types"

export const shinGenjuro: DataItem = {
  id: "shin-genjuro",
  name: "牙神幻十郎",
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
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "不動鬼返し",
          command: "近距離で→ or ←+中 or 強攻撃",
        },
        {
          name: "桐覇二段蹴り",
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
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "五光斬",
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
          name: "牙神幻十郎 - 真刃繚乱",
          href: "http://shinjin.starfree.jp/chara_data/genjyu/genjyu_mainframe.htm",
        },
        {
          name: "牙神幻十郎の連続技 - 真刃繚乱",
          href: "http://shinjin.starfree.jp/combo/genjyu/genjyu_comboframe.htm",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "真サムライスピリッツ(SAMURAI SHODOWN 2)初心者講習会 第2回 その1(牙神幻十郎) - YouTube",
          href: "https://youtu.be/1x0HETKDBTg",
        },
      ],
    },
  ],
}
