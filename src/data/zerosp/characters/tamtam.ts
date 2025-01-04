import type { DataItem } from "../../../types"

export const zerospTamtam: DataItem = {
  id: "zerosp-tamtam",
  name: "タムタム",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "パグナ・パグナ",
          command: "→+斬連打",
        },
        {
          name: "ムーラ・ムーラ",
          command: "↓↘→+A or B",
          notes: ["3回まで連続入力可能"],
        },
        {
          name: "アハウ・ガブル",
          command: "→↓↘+斬",
        },
        {
          name: "パグナ・デオス",
          command: "←↓↙+斬",
        },
        {
          name: "ガブル・ガブル",
          command: "近距離で↓↘→+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "マグナス・ディオス・ザール",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "アハウ・カスティーガー",
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
          name: "キャラ別攻略 タムタム | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zerosp/character/09tam.htm",
        },
        {
          name: "変更点～タムタム～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/0%82%86_tamutamu.htm",
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
