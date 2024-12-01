import type { DataItem } from "../../../../types"

export const tenHaoumaruRasetsu: DataItem = {
  id: "ten-haoumaru-rasetsu",
  name: "覇王丸（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "奥義 旋風裂斬・刹",
          command: "↓↘→+斬",
        },
        {
          name: "奥義 弧月斬",
          command: "→↓↘+斬",
        },
        {
          name: "奥義 疾風弧月斬",
          command: "踏み込み中に→↓↘+斬",
        },
        {
          name: "旋風波",
          command: "↓↘→+D",
        },
        {
          name: "剛破",
          command: "→↓↘+D",
        },
        {
          name: "凪刃",
          command: "←↓↙+斬",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "秘奥義 天覇断空烈斬",
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
          name: "攻略～覇王丸～ サムライスピリッツ天草降臨 - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/kouryku/01haoumaru.htm",
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
