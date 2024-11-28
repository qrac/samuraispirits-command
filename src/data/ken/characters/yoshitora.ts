import type { DataItem } from "../../../types"

export const kenYoshitora: DataItem = {
  id: "ken-yoshitora",
  name: "徳川慶寅",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "壱の太刀 撫子",
          command: "↓↘→+斬",
        },
        {
          name: "弐の太刀 白百合",
          command: "→↓↘+斬",
        },
        {
          name: "参の太刀 牡丹",
          command: "空中で↓↘→+斬",
        },
        {
          name: "四の太刀 椿",
          command: "←↓↙+斬",
        },
        {
          name: "五の太刀 朝顔",
          command: "↓↙←+斬",
        },
        {
          name: "六の太刀 夕顔",
          command: "近距離で→↓↘+D",
        },
        {
          name: "七の太刀 遊蝶華",
          command: "壱〜六をすべて当て終わったラウンドで→↘↓↙←→+BC",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化【真】",
          command: "→↘↓↙←→←+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "百花繚乱【真】",
          command: "↓↘→↘↓↙←+BC",
        },
        {
          name: "百花繚乱【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "葵",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "徳川慶寅 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/kenkaku/waza.htm#zero",
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
