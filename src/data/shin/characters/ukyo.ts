import type { DataItem } from "../../../types"

export const shinUkyo: DataItem = {
  id: "shin-ukyo",
  name: "橘右京",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "秘剣 ツバメ返し",
          command: "空中で↙↓↘→+斬",
        },
        {
          name: "秘剣 ささめゆき",
          command: "↓↙←+斬",
        },
        {
          name: "非剣 ささめゆき",
          command: "↓↙←+蹴",
        },
        {
          name: "残像踏み込み斬り",
          command: "↓↘→+蹴",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "砕震牙",
          command: "近距離で→ or ←+B",
        },
        {
          name: "空殺落天斬",
          command: "近距離で→ or ←+AB",
        },
        {
          name: "転倒地獄行き",
          command: "近距離で→ or ←+D or CD",
        },
        {
          name: "つかみ投げ",
          command: "素手時に近距離で→ or ←+中 or 強攻撃",
        },
        {
          name: "空脚二段打ち",
          command: "アースクェイクに対して投げ",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化",
          command: "↘↓↙←→↓↘+B",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "ツバメ六連",
          command: "→←↙↓↘→+AB",
          notes: ["Cを押しながらの入力で演出が変化"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "橘右京 - 真刃繚乱",
          href: "http://shinjin.starfree.jp/chara_data/ukyo/ukyo_mainframe.htm",
        },
        {
          name: "橘右京の連続技 - 真刃繚乱",
          href: "http://shinjin.starfree.jp/combo/ukyo/ukyo_comboframe.htm",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "真サムライスピリッツ(SAMURAI SHODOWN 2)初心者講習会 第4回 その3(橘右京) - YouTube",
          href: "https://youtu.be/_aDFVi7fAV4",
        },
      ],
    },
  ],
}
