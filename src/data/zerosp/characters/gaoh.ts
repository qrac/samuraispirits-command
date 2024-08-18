import type { DataItem } from "../../../types"

export const zerospGaoh: DataItem = {
  id: "zerosp-gaoh",
  name: "兇國日輪守我旺",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "忌神楽",
          command: "↓↘→+斬",
        },
        {
          name: "兜独楽",
          command: "→↓↘+斬",
        },
        {
          name: "朧囃子",
          command: "→+斬連打",
        },
        {
          name: "燻雅",
          command: "↓↙←+C",
        },
        {
          name: "鉄砕",
          command: "→↓↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "奈落吼",
          command: "↓↘→+CD同時押し",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "黄泉社",
          command: "↓↙←+CD同時押し",
        },
      ],
    },
  ],
}
