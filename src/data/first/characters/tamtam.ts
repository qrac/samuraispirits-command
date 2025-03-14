import type { DataItem } from "../../../types"

export const firstTamtam: DataItem = {
  id: "first-tamtam",
  name: "タムタム",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ムーラ・ガブル",
          command: "↓↘→+斬",
        },
        {
          name: "アハウ・ガブル",
          command: "→↘↓↙←+斬",
        },
        {
          name: "パグナ・パグナ",
          command: "←タメ→+斬",
        },
        {
          name: "パグナ・デオス",
          command: "↓↙←+蹴",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "ムルタ・カプト・インクルシオー",
          command: "近距離で→ or ←+B or AB",
        },
        {
          name: "ムルタ・グラディウス・インクルシオー",
          command: "近距離で→ or ←+D or CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "タムタム - 初代サムライスピリッツ 攻略Wiki - atwiki",
          href: "https://w.atwiki.jp/samurai1/pages/28.html",
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
