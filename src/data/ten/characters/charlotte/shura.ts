import type { DataItem } from "../../../../types"

export const tenCharlotteShura: DataItem = {
  id: "ten-charlotte-shura",
  name: "シャルロット（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "トライスラッシュ",
          command: "↓↘→+斬",
          notes: ["ボタン継続押しでタメ可能"],
        },
        {
          name: "パワーグラデーション",
          command: "→↓↘+斬",
        },
        {
          name: "スプラッシュファーント",
          command: "→+斬連打",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "スプラッシュグラデーション",
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
