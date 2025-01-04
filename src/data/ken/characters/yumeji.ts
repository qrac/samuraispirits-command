import type { DataItem } from "../../../types"

export const kenYumeji: DataItem = {
  id: "ken-yumeji",
  name: "黒河内夢路",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "秘剣 草蛍",
          command: "空中で↙↓↘→+斬",
        },
        {
          name: "秘剣 陽炎",
          command: "↓↘→+斬",
        },
        {
          name: "秘剣 ささめゆき・閃",
          command: "↓↙←+斬",
        },
        {
          name: "秘剣 泡影",
          command: "→↓↘+斬",
        },
        {
          name: "口伝 雪風巻－露花－",
          command: "←↓↙+A",
          skills: [
            {
              name: "口伝 雪風巻－霙花－",
              command: "A",
            },
            {
              name: "口伝 雪風巻－霰花－",
              command: "B",
            },
          ],
        },
        {
          name: "口伝 雪風巻－鉤草－",
          command: "←↓↙+B",
          skills: [
            {
              name: "口伝 雪風巻－鋏草－",
              command: "A",
            },
            {
              name: "口伝 雪風巻－鏑草－",
              command: "B",
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
          command: "→+B",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "↘↓↙←→↓↘+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "秘奥義 垣神【真】",
          command: "→←↙↓↘→+BC",
        },
        {
          name: "秘奥義 垣神【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "奥義 御神薙",
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
          name: "黒河内夢路 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%b9%f5%b2%cf%c6%e2%cc%b4%cf%a9",
        },
        {
          name: "黒河内夢路 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/kenkaku/waza.htm#zero-yumeji",
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
