import type { DataItem } from "../../../types"

export const kenSuija: DataItem = {
  id: "ken-suija",
  name: "水邪",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "月輪波",
          command: "空中で←↓↙+斬",
        },
        {
          name: "死月",
          command: "空中で↓↙←+D",
        },
        {
          name: "翔月",
          command: "空中で↙↓↘→+斬",
        },
        {
          name: "襲月",
          command: "空中で↓↘→+D",
        },
        {
          name: "円月",
          command: "空中で→↓↘+斬",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗",
        },
        {
          name: "三角降り",
          command: "空中画面端で↘",
        },
        {
          name: "鎌月",
          command: "空中で↓+D",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "→←→←→←↓+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "天翔月【真】",
          command: "空中で↓↙←↓↙←↘+BC",
        },
        {
          name: "天翔月【剣】",
          command: "空中で↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "月天法界",
          command: "空中で↓↘→+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "水邪 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%bf%e5%bc%d9",
        },
        {
          name: "水邪 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/kenkaku/waza.htm#zero-suija",
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
