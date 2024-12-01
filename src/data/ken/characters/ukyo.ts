import type { DataItem } from "../../../types"

export const kenUkyo: DataItem = {
  id: "ken-ukyo",
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
          command: "↓↙←+D",
        },
        {
          name: "秘剣 神送り",
          command: "↓↘→+斬",
        },
        {
          name: "秘剣 天つ風",
          command: "→←↙↓↘+A",
        },
        {
          name: "秘剣 霜風",
          command: "→←↙↓↘+B",
        },
        {
          name: "踏みつけ蹴り",
          command: "素手時←→↙↘+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
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
          name: "秘剣 神荒れ【真】",
          command: "→←↙↓↘→+BC",
        },
        {
          name: "秘剣 神荒れ【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "ツバメ六連",
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
          name: "橘右京 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%b5%cc%b1%a6%b5%fe",
        },
        {
          name: "橘右京 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/kenkaku/waza.htm#syo",
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
