import type { DataItem } from "../../../../types"

export const tenUkyoRasetsu: DataItem = {
  id: "ten-ukyo-rasetsu",
  name: "橘右京（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "秘剣 ツバメ返し",
          command: "空中で↙↓↘→+斬",
        },
        {
          name: "秘剣 ささめゆき・閃",
          command: "↓↙←+斬",
        },
        {
          name: "雲雀",
          command: "↓↙←+D",
        },
        {
          name: "秘剣 陽炎",
          command: "↓↘→+斬",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "夢想残光霞",
          command: "←→↘↓+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "攻略～橘右京～ サムライスピリッツ天草降臨 - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/kouryku/07ukyou.htm",
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
