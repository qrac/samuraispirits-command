import type { DataItem } from "../../../../types"

export const tenRimururuRasetsu: DataItem = {
  id: "ten-rimururu-rasetsu",
  name: "リムルル（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ルプㇱ クアレ（トィトィ）",
          command: "↓↘→+斬",
        },
        {
          name: "コンル メㇺ",
          command: "↓↙←+斬",
        },
        {
          name: "ルプㇱ トゥム",
          command: "→↓↘+斬",
        },
        {
          name: "ウプン オㇷ゚",
          command: "→+斬連打",
        },
        {
          name: "ルプㇱ カムイ ウェイサンペコル",
          command: "素手時 踏み込み中AC or BD",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or → or ↘",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "ルプㇱ カムイ エムㇱ（トィトィ）",
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
          name: "攻略～リムルル～ サムライスピリッツ天草降臨 - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/kouryku/03rimururu.htm",
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
