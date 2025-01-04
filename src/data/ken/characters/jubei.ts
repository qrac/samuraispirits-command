import type { DataItem } from "../../../types"

export const kenJubei: DataItem = {
  id: "ken-jubei",
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
          name: "二ッ角羅刀",
          command: "→↓↘+斬",
        },
        {
          name: "八相発破",
          command: "斬連打",
        },
        {
          name: "柳生 心眼刀・水月",
          command: "↓↙←→+A",
        },
        {
          name: "柳生 心眼刀・相破",
          command: "↓↙←→+B",
        },
        {
          name: "柳生 心眼刀・天羅",
          command: "↓↙←→+C",
        },
        {
          name: "柳生 双月陣・壱の太刀",
          command: "←↓↙+A",
          notes: ["ガード崩し性能"],
          skills: [
            {
              name: "柳生 双月陣・弐の太刀",
              command: "←↓↙+B",
            },
          ],
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "特殊技",
          command: "↘+B",
        },
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
          name: "奥義 柳生虎殺剣【真】",
          command: "←→↘↓+BC",
        },
        {
          name: "奥義 柳生虎殺剣【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "絶 水月刀",
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
          name: "柳生十兵衛 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%cc%f8%c0%b8%bd%bd%ca%bc%b1%d2",
        },
        {
          name: "柳生十兵衛 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/kenkaku/waza.htm#syo-jubei",
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
