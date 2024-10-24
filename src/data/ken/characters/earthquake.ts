import type { DataItem } from "../../../types"

export const kenEarthquake: DataItem = {
  id: "ken-earthquake",
  name: "アースクェイク",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ファットブレス",
          command: "↓↙←+斬",
        },
        {
          name: "ファットチェーンソー",
          command: "↓↘→+斬",
        },
        {
          name: "ファットバウンド",
          command: "空中で↓+斬",
        },
        {
          name: "ファットレプリカアタック",
          command: "→↘↓↙+AD同時押し",
        },
        {
          name: "スカンクバースト",
          command: "近距離で→↓↘+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗",
        },
        {
          name: "三角降り",
          command: "空中画面端で↘",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "→←→←→←↓+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "ファットギロチン【真】",
          command: "→←↙↓↘→+BC同時押し",
        },
        {
          name: "ファットギロチン【剣】",
          command: "↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "アースガッデム",
          command: "↓↘→+AB同時押し（左右で移動）",
        },
      ],
    },
  ],
}
