import type { DataItem } from "../../../types"

export const shinHanzo: DataItem = {
  id: "shin-hanzo",
  name: "服部半蔵",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "忍法 爆炎龍",
          command: "→↘↓↙+斬",
        },
        {
          name: "烈風手裏剣・改",
          command: "空中で←↙↓↘+斬",
        },
        {
          name: "忍法 うつせみ天舞",
          command: "→↘↓↙←+BCD",
        },
        {
          name: "忍法 うつせみ地斬",
          command: "被ダメージ中にBCD",
        },
        {
          name: "忍法 影分身",
          command: "→←↙↓↘→+A or B",
        },
        {
          name: "モズ落とし",
          command: "近距離で→↓↘+蹴",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "空転投げ",
          command: "近距離で→ or ←+B or AB",
        },
        {
          name: "首投げ斬り",
          command: "近距離で→ or ←+D or CD",
        },
        {
          name: "首投げ",
          command: "素手時に近距離で→ or ←+D or CD",
        },
        {
          name: "空転撃",
          command: "空中近距離で↙ or ↓ or ↘+B or AB",
        },
        {
          name: "烈風空裂脚",
          command: "アースクェイクに対して投げ",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or → or ↘",
        },
        {
          name: "ぬいぐるみ変化",
          command: "→←→←→←↓+A",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "忍法 影舞",
          command: "→←→←→←↓+BCD",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "忍法 天魔覆滅",
          command: "→↘↓↙←→+D",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "服部半蔵 - 真刃繚乱",
          href: "https://ss843087.stars.ne.jp/chara_data/hanzo/hanzo_mainframe.htm",
        },
        {
          name: "服部半蔵の連続技 - 真刃繚乱",
          href: "https://ss843087.stars.ne.jp/combo/hanzo/hanzo_comboframe.htm",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "真サムライスピリッツ(SAMURAI SHODOWN 2)初心者講習会 第2回 その3（服部半蔵） - YouTube",
          href: "https://youtu.be/Sl-s-052Cf4",
        },
      ],
    },
  ],
}
