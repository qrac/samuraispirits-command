import type { DataItem } from "../../../types"

export const zerospSuija: DataItem = {
  id: "zerosp-suija",
  name: "水邪",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "月輪波",
          command: "空中で←↓↙+斬",
        },
        {
          name: "死月",
          command: "空中で↓↙←+斬",
        },
        {
          name: "円月",
          command: "空中で→↓↘+斬",
        },
        {
          name: "翔月",
          command: "空中で↙↓↘→+斬",
        },
      ],
    },
    {
      title: "特殊技",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or → or ↘",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "天昇・水柱波",
          command: "↓↘→+CD同時押し",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "平等カツ神聖ナル裁キ",
          command: "↓↙←+CD同時押し",
        },
      ],
    },
  ],
}