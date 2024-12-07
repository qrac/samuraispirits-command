import type { DataItem } from "../../../types"

export const kenSankuro: DataItem = {
  id: "ken-sankuro",
  name: "萬三九六",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "おニ四！",
          command: "↓↙←+A",
        },
        {
          name: "五七！",
          command: "↓↙←+B",
        },
        {
          name: "一八！",
          command: "↓↙←+C",
        },
        {
          name: "俺の生き様を見さらせ！！",
          command: "→+斬連打",
          notes: ["連打で技継続 / 左右移動可"],
        },
        {
          name: "俺の種子島",
          command: "↓↘→+斬",
        },
        {
          name: "自慢の一物",
          command: "↓↘→+D",
        },
        {
          name: "寿司は江戸前！！",
          command: "近距離で→↓↘+D",
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
          name: "寿司は江戸前やで、ほんま！！【真】",
          command: "近距離で↘↗→+BC",
        },
        {
          name: "寿司は江戸前やで、ほんま！！【剣】",
          command: "近距離で↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "暴力はええのぅ",
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
          name: "萬三九六 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%e8%df%bb%b0%b6%e5%cf%bb",
        },
        {
          name: "萬三九六 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/kenkaku/waza.htm#zero-sankuro",
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
