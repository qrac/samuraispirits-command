import type { DataItem } from "../../../types"

export const kenRasetsumaru: DataItem = {
  id: "ken-rasetsumaru",
  name: "羅刹丸",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "旋風裂斬・刹",
          command: "↓↘→+斬",
        },
        {
          name: "旋風波",
          command: "↓↘→+D",
        },
        {
          name: "凪刃",
          command: "→↓↘+斬",
        },
        {
          name: "剛破",
          command: "→↓↘+D",
        },
        {
          name: "死祟",
          command: "↓↙←+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化【真】",
          command: "→←↙↓↘→←+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "剛咆【真】",
          command: "↙→↘↓↙←→↓↘+BC",
        },
        {
          name: "剛咆【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "天覇断空烈斬",
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
          name: "羅刹丸 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%cd%e5%d1%eb%b4%dd",
        },
        {
          name: "羅刹丸 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/kenkaku/waza.htm#zero-rasetsumaru",
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
