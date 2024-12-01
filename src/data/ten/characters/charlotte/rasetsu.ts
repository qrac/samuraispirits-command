import type { DataItem } from "../../../../types"

export const tenCharlotteRasetsu: DataItem = {
  id: "ten-charlotte-rasetsu",
  name: "シャルロット（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "バイオネットラージュ",
          command: "↓↘→+斬",
        },
        {
          name: "パワーグラデーション",
          command: "→↓↘+斬",
        },
        {
          name: "リオンランセ",
          command: "↓↘→+D",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "クリスタルローズ",
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
          name: "攻略～シャルロット～ サムライスピリッツ天草降臨 - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/kouryku/14syaruroltuto.htm",
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
