import type { DataItem } from "../../../types"

export const firstUkyo: DataItem = {
  id: "first-ukyo",
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
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "橘右京 - 初代サムライスピリッツ 攻略Wiki - atwiki",
          href: "https://w.atwiki.jp/samurai1/pages/17.html",
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
