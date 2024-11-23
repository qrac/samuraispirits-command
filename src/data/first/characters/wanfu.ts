import type { DataItem } from "../../../types"

export const firstWanfu: DataItem = {
  id: "first-wanfu",
  name: "王虎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "気功爆転法",
          command: "↓↙←+斬",
        },
        {
          name: "気功旋風斬",
          command: "→↓↘+斬",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "重激斬",
          command: "近距離で→ or ←+B",
        },
        {
          name: "殺連刃",
          command: "近距離で→ or ←+AB",
        },
        {
          name: "尾骨撃砕",
          command: "近距離で→ or ←+D",
        },
        {
          name: "尻潰し",
          command: "近距離で→ or ←+CD",
        },
        {
          name: "壁打投",
          command: "素手時に近距離で→ or ←+B",
        },
        {
          name: "頭蓋落砕",
          command: "素手時に近距離で→ or ←+AB",
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
