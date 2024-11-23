import type { DataItem } from "../../../types"

export const shinWanfu: DataItem = {
  id: "shin-wanfu",
  name: "王虎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "真気功爆転法",
          command: "↓↙←+斬",
        },
        {
          name: "気功旋風斬",
          command: "→↓↘+斬",
        },
        {
          name: "気功大撲殺",
          command: "↓↘→+斬",
        },
        {
          name: "怒髪柱撃",
          command: "↓↙←+CD",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "殺連撃",
          command: "近距離で→ or ←+B or AB",
        },
        {
          name: "尾骨撃砕",
          command: "近距離で→ or ←+D or CD",
        },
        {
          name: "壁打撃",
          command: "素手時に近距離で→ or ←+B",
        },
        {
          name: "頭蓋落砕",
          command: "素手時に近距離で→ or ←+AB",
        },
        {
          name: "尻潰し",
          command: "素手時に近距離で→ or ←+CD",
        },
        {
          name: "気功二段蹴",
          command: "アースクェイクに対して投げ",
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
        {
          name: "ぬいぐるみ変化",
          command: "→←↙↓↘→←+D",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "気功大爆天",
          command: "→←↙↓↘→+B",
        },
      ],
    },
  ],
}
