import type { DataItem } from "../../../../types"

export const tenRimururuShura: DataItem = {
  id: "ten-rimururu-shura",
  name: "リムルル（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ルプㇱ クアレ（ニㇱ）",
          command: "↓↘→+斬",
        },
        {
          name: "コンル メㇺ",
          command: "↓↙←+斬",
        },
        {
          name: "コンル ノンノ",
          command: "→↓↘+斬",
        },
        {
          name: "カムイ シトゥキ",
          command: "←↓↙+斬",
        },
        {
          name: "コンル シラㇽ",
          command: "空中で↓+斬",
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
          name: "ルプㇱ カムイ エムㇱ（ニㇱ）",
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
