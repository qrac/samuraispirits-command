import type { DataItem } from "../../../types"

export const kenMizuki: DataItem = {
  id: "ken-mizuki",
  name: "羅将神ミヅキ",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "呪歌爪弾",
          command: "↓↘→+斬",
        },
        {
          name: "覇気陰滅陣",
          command: "↓↙←+斬",
        },
        {
          name: "邪心共鳴",
          command: "↓↙←+D",
        },
        {
          name: "我神共鳴魂",
          command: "空中で↓↘→+斬",
        },
        {
          name: "神魔滅殺陣",
          command: "近距離で→↓↘+D",
        },
        {
          name: "魔界転生",
          command: "←↓↙+斬",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化【真】",
          command: "↘↓↙←↓↙+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "幻魔怨呪魂【真】",
          command: "↓↘→↘↓↙←+BC",
        },
        {
          name: "幻魔怨呪魂【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "天地魔境陣",
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
          name: "羅将神ミヅキ - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%cd%e5%be%ad%bf%c0%a5%df%a5%c5%a5%ad",
        },
        {
          name: "羅将神ミヅキ - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/kenkaku/waza.htm#sin",
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
