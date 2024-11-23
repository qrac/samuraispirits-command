import type { DataItem } from "../../../types"

export const firstKyoshiro: DataItem = {
  id: "first-kyoshiro",
  name: "千両狂死郎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "風裂扇",
          command: "↓↙←+斬",
        },
        {
          name: "跳尾獅子",
          command: "↓↙←+蹴",
        },
        {
          name: "火炎曲舞",
          command: "↙↓↘→+斬",
        },
        {
          name: "回天曲舞",
          command: "→↙↓↘+斬",
        },
        {
          name: "血煙曲輪",
          command: "空中で↓+AB",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "槍殺投舞",
          command: "近距離で→ or ←+B or AB",
        },
        {
          name: "髪転投",
          command: "近距離で→ or ←+D（or 素手時に近距離で→ or ←+B）",
        },
        {
          name: "絞髪演舞",
          command: "近距離で→ or ←+CD（or 素手時に近距離で→ or ←+AB）",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "しゃがみ移動",
          command: "↙ or ↘",
        },
      ],
    },
  ],
}
