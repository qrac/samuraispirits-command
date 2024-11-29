import type { DataItem } from "../../../types"

export const zerospMizuki: DataItem = {
  id: "zerosp-mizuki",
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
          command: "↓↙←+C",
        },
        {
          name: "我神共鳴魂",
          command: "→↓↘+斬",
        },
        {
          name: "神魔滅殺陣",
          command: "近距離で→↓↘+C",
        },
        {
          name: "魔界転生",
          command: "←↓↙+斬",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "天地魔境陣",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "狂魔祀怨獄",
          command: "↓↙←+CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "キャラ別攻略 羅将神ミヅキ | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zerosp/character/28mizuki.htm",
        },
        {
          name: "簡易攻略～羅将神ミヅキ～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/1b_miduki.htm",
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
