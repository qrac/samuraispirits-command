import type { DataItem } from "../../../../types"

export const tenSougetsuRasetsu: DataItem = {
  id: "ten-sougetsu-rasetsu",
  name: "風間蒼月（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "月輪波（地）",
          command: "↓↘→+斬",
        },
        {
          name: "月輪波（空）",
          command: "空中で↓↘→+斬",
        },
        {
          name: "死月",
          command: "空中で↓↙←+斬",
        },
        {
          name: "円月",
          command: "空中で→↓↘+斬",
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
      title: "連斬",
      skills: [
        {
          name: "蒼月専用①",
          command: "CD後にC・C",
        },
        {
          name: "蒼月専用②",
          command: "CD後にC・B・B・B",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "月昇・水柱波",
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
          name: "攻略～風間蒼月～ サムライスピリッツ天草降臨 - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/kouryku/17sougetu.htm",
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
