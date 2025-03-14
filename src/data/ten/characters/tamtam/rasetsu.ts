import type { DataItem } from "../../../../types"

export const tenTamtamRasetsu: DataItem = {
  id: "ten-tamtam-rasetsu",
  name: "タムタム（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ガブル・ガブル",
          command: "近距離で↓↘→+C",
        },
        {
          name: "ムーラ・ムーラ",
          command: "↓↘→+A or B",
          notes: ["3回まで連続入力可能"],
        },
        {
          name: "パグナ・デオス",
          command: "←↓↙+斬",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "アハウ・ティウワカン",
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
          name: "攻略～タムタム～ サムライスピリッツ天草降臨 - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/kouryku/15tamutamu.htm",
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
