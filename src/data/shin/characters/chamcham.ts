import type { DataItem } from "../../../types"

export const shinChamcham: DataItem = {
  id: "shin-chamcham",
  name: "チャムチャム",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ブーメラン投げ・横",
          command: "↓↘→+斬",
        },
        {
          name: "ブーメラン投げ・上",
          command: "↓↙←+斬",
        },
        {
          name: "とびひっかき",
          command: "↓↘→+蹴",
        },
        {
          name: "パクパク・デオス",
          command: "→↘↓↙←+C",
        },
        {
          name: "ムーラ・パクパク",
          command: "→↘↓↙←+D",
        },
        {
          name: "パクパク・ガブル",
          command: "→↘↓↙←+CD",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "ムルタ・グラディウス・インクルシオー",
          command: "近距離で→ or ←+中 or 強攻撃",
        },
        {
          name: "ドゥオ・フェムル・インベトゥス",
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
          command: "↘↓↙←↓↙+C",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "メタモアニマルアタック",
          command: "→←↙↓↘→+A",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "チャムチャム - 真刃繚乱",
          href: "https://ss843087.stars.ne.jp/chara_data/cham/cham_mainframe.htm",
        },
        {
          name: "チャムチャムの連続技 - 真刃繚乱",
          href: "https://ss843087.stars.ne.jp/combo/cham/cham_comboframe.htm",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "真サムライスピリッツ(SAMURAI SHODOWN 2)初心者講習会 第3回 その4(チャムチャム) - YouTube",
          href: "https://youtu.be/uebOufPoW-M",
        },
      ],
    },
  ],
}
